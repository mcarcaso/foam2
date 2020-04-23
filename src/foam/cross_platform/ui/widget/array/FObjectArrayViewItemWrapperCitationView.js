foam.CLASS({
  package: 'foam.cross_platform.ui.widget.array',
  name: 'FObjectArrayViewItemWrapperCitationView',
  implements: [
    'foam.cross_platform.ui.widget.CitationView',
  ],
  swiftImports: [
    'UIKit',
  ],
  imports: [
    {
      name: 'fobjArrayViewOf',
      type: 'foam.cross_platform.FoamClass'
    },
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.CitationView',
      name: 'dv',
      androidFactory: `
        foam.cross_platform.FObject dv = foam.cross_platform.ui.widget.CitationViewClass.CLS_()
          .createBuilder(getSubX())
          .setBuilderProperty("of", getFobjArrayViewOf())
          .builderBuild();
        onDetach(dv);
        return (foam.cross_platform.ui.widget.CitationView) dv;
      `,
      swiftFactory: `
        let dv = foam_cross_platform_ui_widget_CitationViewClass.CLS_()
          .createBuilder(getSubX())?
          .setBuilderProperty("of", getFobjArrayViewOf())?
          .builderBuild();
        onDetach(dv);
        return dv as? foam_cross_platform_ui_widget_CitationView;
      `,
    },
    {
      androidType: 'android.view.View',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        return getDv().getView();
      `,
      swiftFactory: `
        return getDv()?.getView();
      `,
    },
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        return getDv().bindData((foam.cross_platform.FObject) data.getProperty("value"), null);
      `,
      swiftCode: `
        return getDv()?.bindData(data?.getProperty("value") as? foam_cross_platform_FObject, nil);
      `,
    },
    {
      name: 'getOf',
      androidCode: `
        return foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapper.CLS_();
      `,
      swiftCode: `
        return foam_cross_platform_ui_widget_array_FObjectArrayViewItemWrapper.CLS_();
      `,
    },
  ]
});