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
        type: 'foam.cross_platform.Topic',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.cross_platform.Topic',
        name: this.name,
        body: `
          if ( ${fieldName} == null ) {
            ${fieldName} = SubTopic_create()
              .setParent(this)
              .setTopics(new String[] { ${[this.name].concat(this.topics).map(t => `"${t}"`).join(', ')} })
              .build();
          }
          return ${fieldName};
        `
      });
    }
  ]
});
