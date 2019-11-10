foam.CLASS({
  package: 'foam.cross_platform',
  name: 'Lib',
  requires: [
    'foam.cross_platform.type.Util'
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  static: [
    {
      type: 'Boolean',
      name: 'equals',
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' }
      ],
      androidCode: `
        return compare(o1, o2) == 0;
      `,
      swiftCode: `
        return compare(o1, o2) == 0;
      `
    },
    {
      type: 'Integer',
      name: 'compare',
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' }
      ],
      androidCode: `
        return foam.cross_platform.type.Util
          .UtilBuilder(null)
          .build()
          .compare(o1, o2);
      `,
      swiftCode: `
        return foam_cross_platform_type_Util
          .foam_cross_platform_type_UtilBuilder(nil)
          .build()
          .compare(o1, o2)
      `
    }
  ]
});
