foam.LIB({
  name: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    function toCrossPlatformClass(flagFilter) {
      return foam.cross_platform.FoamClass.create({
        id: this.id,
        parent: this.model_.crossPlatformParentClass,
        ownAxioms: this.getOwnAxioms()
          .filter(a => a.forClass_ == this.id)
          .filter(flagFilter)
      });
    },
    function getDeps(flagFilter, deps) {
      if ( ! flagFilter(this.model_) ) return;
      if ( deps[this.id] ) return;
      this.model_.getDeps(flagFilter, deps);
      this.getAxioms().forEach(a => {
        if ( flagFilter(a) ) {
          if ( a.name == '__context__' ) return;
          deps[a.cls_.id] = true;
          a.getDeps && a.getDeps(flagFilter, deps);
        }
      });
    },
    function getMessages(flagFilter, dao) {
      if (!flagFilter(this.model_)) return;
      return Promise.all(this.getAxioms()
        .filter(a => flagFilter(a))
        .filter(a => a.getMessages)
        .map(a => a.getMessages(flagFilter, dao)));
    }
  ]
});
