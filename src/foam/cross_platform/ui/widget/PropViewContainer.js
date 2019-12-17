foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'PropViewContainer',
  requires: [
    'foam.core.ExpressionSlot',
  ],
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop'
    },
    {
      androidType: 'android.widget.FrameLayout',
      name: 'view'
    },
  ],
  reactions: [
    ['', 'propertyChange.data', 'updateView'],
    ['', 'propertyChange.prop', 'updateView'],
    ['', 'propertyChange.view', 'updateView'],
  ],
  methods: [
    {
      name: 'init',
      androidCode: `updateView(null, null);`
    },
    {
      name: 'bindData',
      androidCode: `
        setProp(axiom);
        setData(data);
      `,
    }
  ],
  listeners: [
    {
      name: 'updateView',
      androidCode: `
        if ( getView() == null ) return;
        if ( getData() == null ) return;
        if ( getProp() == null ) return;

      `,
    }
  ]
});



