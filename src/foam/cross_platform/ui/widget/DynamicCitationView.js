foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DynamicCitationView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  imports: [
    {
      androidType: 'android.content.Context',
      name: 'androidContext',
      flags: ['android'],
    }
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
      name: 'citationView'
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        return v;
      `,
      swiftFactory: `
        return UIView();
      `
    },
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        setData(data);
        return null;
      `,
      swiftCode: `
        setData(data);
        return nil;
      `
    }
  ],
  reactions: [
    ['', 'propertyChange.data', 'onDataUpdate'],
  ],
  listeners: [
    {
      name: 'onDataUpdate',
      androidCode: `
        getView().removeAllViews();
        if ( getCitationView() != null ) {
          getCitationView().detach();
          clearProperty("citationView");
        }
        if ( getData() == null ) return;
        setCitationView(foam.cross_platform.ui.widget.CitationViewClass.CLS_()
          .createBuilder(getX())
          .setBuilderProperty("of", getData().getCls_())
          .builderBuild());
        getCitationView().onDetach(((foam.cross_platform.ui.AxiomView) getCitationView()).bindData(getData(), null));
        getView().addView((android.view.View) getCitationView().getProperty("view"));
      `,
      swiftCode: `
        for sv in getView()!.subviews {
          sv.removeFromSuperview();
        }
        if ( getCitationView() != nil ) {
          getCitationView()!.detach();
          clearProperty("citationView");
        }
        if ( getData() == nil ) { return; }
        setCitationView(foam_cross_platform_ui_widget_CitationViewClass.CLS_()
          .createBuilder(getX())!
          .setBuilderProperty("of", getData()!.getCls_())!
          .builderBuild());
        getCitationView()!.onDetach((getCitationView() as! foam_cross_platform_ui_AxiomView).bindData(getData(), nil));
        let v = getCitationView()!.getProperty("view") as! UIView
        getView()!.addSubview(v);
        v.translatesAutoresizingMaskIntoConstraints = false;
        v.topAnchor.constraint(equalTo: getView()!.topAnchor).isActive = true;
        v.leadingAnchor.constraint(equalTo: getView()!.leadingAnchor).isActive = true;
        v.trailingAnchor.constraint(equalTo: getView()!.trailingAnchor).isActive = true;
        v.bottomAnchor.constraint(equalTo: getView()!.bottomAnchor).isActive = true;
      `
    }
  ]
});