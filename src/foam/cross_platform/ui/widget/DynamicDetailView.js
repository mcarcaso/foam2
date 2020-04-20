foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DynamicDetailView',
  implements: [
    'foam.cross_platform.ui.View'
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
      name: 'detailView'
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
  reactions: [
    ['', 'propertyChange.data', 'onDataUpdate'],
  ],
  listeners: [
    {
      name: 'onDataUpdate',
      androidCode: `
        getView().removeAllViews();
        if ( getDetailView() != null ) {
          getDetailView().detach();
          clearProperty("detailView");
        }
        if ( getData() == null ) return;
        setDetailView(foam.cross_platform.ui.widget.DetailViewClass.CLS_()
          .createBuilder(getX())
          .setBuilderProperty("of", getData().getCls_())
          .setBuilderProperty("data$", getData$())
          .builderBuild());
        getView().addView((android.view.View) getDetailView().getProperty("view"));
      `,
      swiftCode: `
        for sv in getView()!.subviews {
          sv.removeFromSuperview();
        }
        if ( getDetailView() != nil ) {
          getDetailView()!.detach();
          clearProperty("detailView");
        }
        if ( getData() == nil ) { return; }
        setDetailView(foam_cross_platform_ui_widget_DetailViewClass.CLS_()
          .createBuilder(getX())!
          .setBuilderProperty("of", getData()!.getCls_())!
          .setBuilderProperty("data$", getData$())!
          .builderBuild());
        let v = getDetailView()!.getProperty("view") as! UIView
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