foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'TopicRefine',
  refines: 'foam.core.Topic',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var fieldName = this.name + '_var';
      cls.field({
        visibility: 'private',
        type: foam.core.Topic.model_.swiftName + '?',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: foam.core.Topic.model_.swiftName,
        name: this.name,
        body: `
          if ${fieldName} == nil {
            ${fieldName} = ${foam.swift.asSwiftValue(this)};
            foam_core_Topic.initSubTopic(${fieldName}, self);
          }
          return ${fieldName}!;
        `
      });
    }
  ]
});
