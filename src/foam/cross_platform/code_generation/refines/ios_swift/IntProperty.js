foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'IntPropertyJavaRefinement',
  refines: 'foam.core.IntProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftAdapt',
      value: `
        // Technically, Int in swift is really a Long. We'll adapt the value to
        // ensure it doesn't overflow on other platforms.
        let num = newValue as! Int;
        return min(Int(Int32.max), max(num, Int(Int32.min)))
      `
    }
  ]
});