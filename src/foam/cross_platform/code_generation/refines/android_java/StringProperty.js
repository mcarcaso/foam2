foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'StringPropertyJavaRefinement',
  refines: 'foam.core.StringProperty',
  flags: ['android'],
  requires: [
    'foam.cross_platform.deserialize.json.StringParser',
    'foam.cross_platform.ui.widget.TextField',
  ],
  properties: [
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof String ) return (String) newValue;
        return newValue != null ? newValue.toString() : null;
      `
    },
    {
      name: 'crossPlatformJsonParser',
      androidValue: `StringParser_create().build()`
    },
  ]
});
