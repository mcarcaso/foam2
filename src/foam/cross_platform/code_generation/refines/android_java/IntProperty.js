foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'IntPropertyJavaRefinement',
  refines: 'foam.core.IntProperty',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidNumberObjType',
      value: 'Integer'
    },
    {
      class: 'StringProperty',
      name: 'androidNumberToValueMethod',
      value: 'intValue'
    },
    {
      class: 'StringProperty',
      name: 'androidAdapt',
      expression: function(androidType, androidNumberObjType, androidNumberToValueMethod) {
        return `
          if ( newValue instanceof ${androidNumberObjType} ) {
            return (${androidType}) newValue;
          }
          if ( newValue instanceof Number ) {
            return ((Number) newValue).${androidNumberToValueMethod}();
          }
          // Will throw runtime exception.
          return (${androidType}) newValue;
        `
      }
    }
  ]
});
