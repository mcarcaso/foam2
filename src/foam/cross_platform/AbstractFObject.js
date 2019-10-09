foam.CLASS({
  package: 'foam.cross_platform',
  name: 'AbstractFObject',
  androidExtends: '',
  implements: [
    'foam.cross_platform.FObject'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Context',
      name: 'x'
    }
  ],
  methods: [
    {
      name: 'setProperty',
      javaCode: `
/*
        this.getCls_().getAxiomByName(name).set(this, value);
 */
      `
    }
  ]
});
