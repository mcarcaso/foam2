foam.CLASS({
  package: 'foam.cross_platform',
  name: 'AbstractFObject',
  androidExtends: '',
  androidParentClass: null,
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
      name: 'detach',
      androidCode: `
        // TODO
      `
    },
    {
      name: 'toString',
      androidCode: `
        // TODO: JSONify
        return super.toString();
      `
    },
  ]
});
