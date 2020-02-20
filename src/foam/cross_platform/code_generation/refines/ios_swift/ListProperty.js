foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ListPropertyRefine',
  refines: 'foam.core.ListProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftAdapt',
      expression: function(swiftOptional) {
        return `
          if newValue is [Any] { return NSMutableArray(array: newValue as! [Any]) }
          return newValue as${swiftOptional ? '?' : '!'} NSMutableArray;
        `
      }
    },
    {
      name: 'swiftFactory',
      value: 'return []'
    }
  ]
});
