foam.CLASS({
  package: 'foam.core',
  name: 'Trait',
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      getter: function() {
        return 'trait_' + this.path
      }
    },
    {
      class: 'StringProperty',
      name: 'path'
    },
  ],
  methods: [
    function installInClass(cls) {
      var m = this.__context__.lookup(this.path);
      if ( ! m ) throw 'No such trait: ' + this.path;
      m.getAxioms().forEach(a => {
        if ( ! a.clone ) return;
        if ( a.name == 'init' ) return;
        a = a.clone();
        a.sourceCls_ = undefined;
        cls.installAxiom(a);
      });
    }
  ],
});

foam.CLASS({
  refines: 'foam.core.Model',
  package: 'foam.core',
  name: 'TraitModelRefine',
  properties: [
    {
      class: 'AxiomArray',
      of: 'Trait',
      name: 'traits',
      adaptArrayElement: function(o) {
        return typeof o === 'string' ?
          foam.core.Trait.create({path: o}) :
          foam.core.Trait.create(o);
      }
    }
  ]
});
