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
        type: foam.cross_platform.Topic.model_.swiftName + '?',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: foam.cross_platform.Topic.model_.swiftName,
        name: this.name,
        body: `
          if ${fieldName} == nil {
            ${fieldName} = SubTopic_create()
              .setParent(self)
              .setTopics([${[this.name].concat(this.topics).map(t => `"${t}"`).join(', ')}])
              .build();
          }
          return ${fieldName}!;
        `
      });
    }
  ]
});
