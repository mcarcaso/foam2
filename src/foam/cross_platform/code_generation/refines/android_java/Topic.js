foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'TopicRefine',
  refines: 'foam.core.Topic',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var fieldName = this.name + '_var';
      cls.field({
        visibility: 'private',
        type: 'foam.core.Topic',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.core.Topic',
        name: this.name,
        body: `
          if ( ${fieldName} == null ) {
            ${fieldName} = ${foam.android.tools.asAndroidValue(this)};
            foam.core.Topic.initSubTopic(${fieldName}, this);
          }
          return ${fieldName};
        `
      });
    },
  ]
});
