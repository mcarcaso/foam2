foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'Label',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  swiftImports: [
    'UIKit'
  ],
  imports: [
    {
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  properties: [
    {
      name: 'data'
    },
    {
      androidType: 'android.widget.TextView',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        return new android.widget.TextView(getAndroidContext());
      `,
      swiftFactory: `
        return UILabel();
      `,
    },
  ],
  reactions: [
    ['', 'propertyChange', 'updateView']
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property prop = (foam.core.Property) axiom;
        return getData$().linkFrom(data.getSlot(prop.getName()));
      `,
      swiftCode: `
        let prop = axiom as! foam_core_Property;
        return getData$().linkFrom(data!.getSlot(prop.getName()));
      `
    }
  ],
  listeners: [
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;
        getView().setText(getData() == null ? "" : getData().toString());
      `,
      swiftCode: `
        if getView() == nil { return }
        (getView() as! UILabel).text = getData() == nil ? "" :
          getData() as? String ?? String(describing: getData())
      `
    }
  ]
});
