foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'IntPropertyJavaRefinement',
  refines: 'foam.core.IntProperty',
  requires: [
    'foam.cross_platform.ui.widget.IntField'
  ],
  properties: [
    {
      name: 'viewClass',
      value: 'foam.cross_platform.ui.widget.IntField'
    },
  ]
});