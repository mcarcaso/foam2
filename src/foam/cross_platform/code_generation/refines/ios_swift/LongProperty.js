foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.LongProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftAdapt',
      value: `
        // Required because this class extends IntProperty and IntProperty
        // ensures the value is in the 32bit range.
        return newValue as! Int;
      `
    }
  ]
});