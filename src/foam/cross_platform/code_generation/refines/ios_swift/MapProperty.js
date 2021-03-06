foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'MapRefinement',
  refines: 'foam.core.MapProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftAdapt',
      expression: function(swiftOptional) {
       return `
          if let newValue = newValue as? [AnyHashable:Any] {
            return NSMutableDictionary(dictionary: newValue);
          }
          return newValue as${swiftOptional ? '?' : '!'} NSMutableDictionary;
        `
      }
    }
  ]
});