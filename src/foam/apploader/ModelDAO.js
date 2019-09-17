foam.CLASS({
  package: 'foam.apploader',
  name: 'ModelDAO',
  extends: 'foam.dao.PromisedDAO',
  requires: [
    'foam.core.Model',
    'foam.dao.MDAO',
  ],
  properties: [
    {
      name: 'of',
      factory: function() { return this.Model }
    },
    {
      name: 'promise',
      factory: function() {
        var dao = this.MDAO.create({ of: this.Model });
        var puts = Object.values(foam.USED).concat(Object.values(foam.UNUSED))
          .map(json => this.Model.create(json))
          .map(m => dao.put(m));
        return Promise.all(puts).then(() => dao);
      }
    }
  ]
});