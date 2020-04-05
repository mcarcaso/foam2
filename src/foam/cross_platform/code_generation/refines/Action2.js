foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ActionRefine2',
  refines: 'foam.core.Action',
  properties: [
    {
      class: 'MapProperty',
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.ActionButton'
      }
    },
  ],
  methods: [
    {
      name: 'createView',
      type: 'foam.cross_platform.ui.AxiomView',
      args: [
        { type: 'Context', name: 'x' },
      ],
      androidCode: `
        return (foam.cross_platform.ui.AxiomView) foam.cross_platform.deserialize.JSON.parse(getCpView(), null, x);
      `,
      swiftCode: `
        return foam_cross_platform_deserialize_JSON.parse(getCpView(), nil, x) as? foam_cross_platform_ui_AxiomView;
      `,
    },
  ],
});