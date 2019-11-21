foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'PropertyJavaRefinement2',
  refines: 'foam.core.Property',
  properties: [
    {
      class: 'StringProperty',
      name: 'label',
      expressionArgs: ['name'],
      androidExpression: `
        return name.substring(0, 1).toUpperCase() + name.substring(1);
      `,
      swiftExpression: `
        return name;
      `,
    },
  ]
});
