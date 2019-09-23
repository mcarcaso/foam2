foam.CLASS({
  package: 'foam.ide',
  name: 'AxiomDAO',
  extends: 'foam.dao.PromisedDAO',
  requires: [
    'foam.ide.AxiomWrapper',
    'foam.dao.MDAO',
    'foam.core.Model',
    'foam.core.InnerClass',
  ],
  properties: [
    {
      name: 'of',
      factory: function() { return this.AxiomWrapper }
    },
    {
      name: 'promise',
      factory: function() {
        var dao = this.MDAO.create({ of: this.AxiomWrapper });
        var puts = Object.values(foam.USED).concat(Object.values(foam.UNUSED))
          .map(json => (json.class ? foam.lookup(json.class) : this.Model).create(json))
          .map(model => this.toAxiomWrapperArray(model, null))
          .flat()
          .map(a => dao.put(a));
        return Promise.all(puts).then(() => dao);
      }
    }
  ],
  methods: [
    function toAxiomWrapperArray(o, p) {
      if ( this.Model.isInstance(o) ) {
        var parent = this.AxiomWrapper.create({
          parent: p,
          type: o.cls_,
          name: o.id,
          data: o
        });
        return [parent]
          .concat(o.axioms_.map(a => this.toAxiomWrapperArray(a, parent)))
          .flat();
      } else if ( this.InnerClass.isInstance(o) ) {
        // TODO
      }
      return [
        this.AxiomWrapper.create({
          parent: p,
          type: o.cls_,
          name: o.name,
          data: o
        })
      ];
    }
  ]
});