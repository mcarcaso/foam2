foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'Label',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      name: 'data'
    },
    {
      androidType: 'android.ui.View',
      swiftType: 'UILabel?',
      name: 'view'
    },
  ],
  reactions: [
    ['', 'propertyChange', 'updateView']
  ],
  methods: [
    {
      name: 'bindData',
      swiftCode: `
        let prop = axiom as! foam_core_Property;
        return getData$().linkFrom(data!.getSlot(prop.getName()));
      `
    }
  ],
  listeners: [
    {
      name: 'updateView',
      swiftCode: `
        if getView() == nil { return }
        getView()!.text = getData() as? String ?? String(describing: getData());
      `
    }
  ]
});
