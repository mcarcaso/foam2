foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractMethodJavaRefinement2',
  refines: 'foam.core.AbstractMethod',
  methods: [
    {
      name: 'call',
      type: 'Any',
      args: [
        { type: 'FObject', name: 'obj' },
        { type: 'Any[]', name: 'args' }
      ],
      androidCode: `
        return ((foam.cross_platform.GenericFunction) obj.getProperty(getName()))
          .executeFunction(args);
      `,
      swiftCode: `
        return (obj!.getProperty(getName()) as! foam_cross_platform_GenericFunction)
          .executeFunction(args);
      `,
    }
  ],
});
