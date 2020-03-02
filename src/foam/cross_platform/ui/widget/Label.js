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
    },
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
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
        android.widget.TextView v = new android.widget.TextView(getAndroidContext());
        getTheme().getWidgetTextStyle().applyTextStyle(v);
        v.setTextColor(getTheme().getOnSurface());
        return v;
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
      androidCode: `
        if ( getView() == null ) return;
        getView().setText(getData() == null ? "" : getData().toString());
      `,
      swiftCode: `
        if getView() == nil { return }
        let s = foam_cross_platform_type_StringType.INSTANCE();
        (getView() as! UILabel).text = s.toStringValue(getData())
      `
    }
  ]
});
