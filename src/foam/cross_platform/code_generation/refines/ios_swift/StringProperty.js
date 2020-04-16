foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'StringPropertyJavaRefinement',
  refines: 'foam.core.StringProperty',
  flags: ['swift'],
  requires: [
    'foam.cross_platform.ui.widget.TextField'
  ],
  properties: [
    {
      name: 'swiftAdapt',
      expression: function(swiftOptional) {
        return `
          if newValue is String? { return newValue as${swiftOptional ? '?' : '!'} String }
          return String(describing: newValue!);
        `
      }
    }
  ]
});
