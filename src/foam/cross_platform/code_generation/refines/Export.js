foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ExportRefine',
  refines: 'foam.core.Export',
  methods: [
    {
      name: 'init',
      documentation: `
        TODO: Look into why this is necessary. Without it, unimplemented methods
        are generated.
      `,
      code: function() {},
      androidCode: '',
      swiftCode: ''
    }
  ]
});
