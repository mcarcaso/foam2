foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'DetailPropertyViewModel',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop'
    },
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'StringProperty',
      name: 'label',
      expressionArgs: ['prop$label'],
      androidExpression: `
        return prop$label instanceof String ? (String) prop$label : "";
      `,
      swiftExpression: `
        return prop$label as? String ?? "";
      `
    },
  ],
  actions: [
    {
      name: 'help',
      isAvailableArgs: ['prop$help'],
      swiftIsAvailable: `return (prop$help as? String).isEmpty ?? false;`,
      swiftCode: `
        print(getProp()!.getHelp()!);
      `
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.CustomDetailView'
    }
  ]
});
