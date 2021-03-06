foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ReactionRefines',
  refines: 'foam.core.Reaction',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      if ( this.target !== '' ) {
        cls.field({
          visibility: 'private',
          type: 'foam.core.Detachable',
          name: this.name + '_sub',
        });
      }
      cls.method({
        visibility: 'private',
        type: 'void',
        name: 'init_' + this.name,
        body: `
          ${this.target == '' ? `
          onDetach(sub(new String[] {${this.topic.map(foam.android.tools.asAndroidValue).join(', ')}},
            ${this.listener}_listener()));
          ` : `
          final foam.core.SlotInterface slot = getSlot("${this.target.replace(/\./g, '$')}");

          final ${cls.name} self = this;
          foam.cross_platform.Listener listener = new foam.cross_platform.Listener() {
            public void executeListener(foam.core.Detachable sub, Object[] args) {
              if ( self.${this.name}_sub != null ) self.${this.name}_sub.detach();
              Object target = slot.slotGet();
              if ( target instanceof foam.cross_platform.FObject ) {
                self.${this.name}_sub = ((foam.cross_platform.FObject) target)
                  .sub(new String[] {${this.topic.map(foam.android.tools.asAndroidValue).join(', ')}}, self.${this.listener}_listener());
                self.onDetach(self.${this.name}_sub);
              }
            }
          };
          listener.executeListener(null, null);
          onDetach(slot.slotSub(listener));
          `}
        `
      });

      var b = cls.classes.find(c => foam.cross_platform.code_generation.android_java.BuilderClass.isInstance(c));
      b.builder = foam.cross_platform.code_generation.android_java.PreObjInitBuilder.create({
        delegate: b.builder,
        body: `o.init_${this.name}();`
      });
    }
  ]
});
