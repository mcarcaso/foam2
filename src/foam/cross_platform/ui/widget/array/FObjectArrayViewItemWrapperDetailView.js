foam.CLASS({
  package: 'foam.cross_platform.ui.widget.array',
  name: 'FObjectArrayViewItemWrapperDetailView',
  requires: [
    'foam.cross_platform.ui.widget.DynamicDetailView'
  ],
  implements: [
    'foam.cross_platform.ui.widget.DetailView',
  ],
  swiftImports: [
    'UIKit',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapper',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.DynamicDetailView',
      name: 'dv',
      androidFactory: `
        foam.cross_platform.ui.widget.DynamicDetailView dv = DynamicDetailView_create()
          .setData$(getData$().dot("value"))
          .build();
        onDetach(dv);
        return dv;
      `,
      swiftFactory: `
        let dv = DynamicDetailView_create()
          .setData$(getData$().dot("value"))
          .build();
        onDetach(dv);
        return dv;
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