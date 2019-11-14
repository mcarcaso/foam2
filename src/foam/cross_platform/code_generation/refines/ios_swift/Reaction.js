foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ReactionRefines',
  refines: 'foam.core.Reaction',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls) {
      if ( this.target !== '' && this.topic.length ) {
        cls.field({
          visibility: 'private',
          type: foam.core.Detachable.model_.swiftName + '?',
          name: this.name + '_sub',
          defaultValue: 'nil'
        });
      }
      cls.method({
        visibility: 'private',
        name: 'init_' + this.name,
        body: `
          ${this.target == '' ? `
          onDetach(sub([${this.topic.map(foam.swift.asSwiftValue).join(', ')}],
            ${this.listener}_listener()));
          ` : `
          let slot = getSlot("${this.target.replace(/\./g, '$')}");

          ${this.topic.length ? `
          let listener = AnonymousListener_create()
            .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
              self.${this.name}_sub?.detach();
              let target = slot!.slotGet() as? foam_cross_platform_FObject;
              if target != nil {
                self.${this.name}_sub = target!
                  .sub([${this.topic.map(foam.swift.asSwiftValue).join(', ')}], self.${this.listener}_listener());
                self.onDetach(self.${this.name}_sub);
              }
            })
            .build();
          listener.executeListener(nil, nil);
          ` : `
          let listener = ${this.listener}_listener();
          `}
          onDetach(slot!.slotSub(listener));
          `}
        `
      });

      var b = cls.classes.find(c => foam.cross_platform.code_generation.ios_swift.Builder.isInstance(c));
      b.postBuild.push(`o.init_${this.name}();`);
    }
  ]
});
