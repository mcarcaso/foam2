foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  requires: [
    'foam.util.ArrayDetachable'
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
      class: 'ClassProperty',
      name: 'of',
      expressionArgs: ['data'],
      androidFactory: null,
      androidExpression: `return data.getCls_();`
    },
    {
      class: 'FObjectArray',
      of: 'foam.core.Property',
      name: 'props',
      expressionArgs: ['of'],
      androidFactory: null,
      androidExpression: `
        return java.util.Arrays.stream(of.getAxiomsByClass(foam.core.Property.CLS_()))
          .filter(p -> ! ((foam.core.Property) p).getHidden())
          .sorted((a, b) -> {
            foam.core.Property pa = (foam.core.Property) a;
            foam.core.Property pb = (foam.core.Property) b;
            return Math.toIntExact(pa.getOrder() - pb.getOrder());
          })
          .toArray(foam.core.Property[]::new);
      `
    },
    {
      class: 'FObjectArray',
      of: 'foam.core.Action',
      name: 'actions',
      expressionArgs: ['of'],
      androidFactory: null,
      androidExpression: `
        return java.util.Arrays.stream(of.getAxiomsByClass(foam.core.Action.CLS_()))
          .sorted((a, b) -> {
            foam.core.Action pa = (foam.core.Action) a;
            foam.core.Action pb = (foam.core.Action) b;
            return Math.toIntExact(pa.getOrder() - pb.getOrder());
          })
          .toArray(foam.core.Action[]::new);
      `
    },
    {
      class: 'ArrayProperty',
      name: 'views_'
    },
    {
      androidType: 'android.widget.LinearLayout',
      name: 'view'
    },
    {
      class: 'StringProperty',
      name: 'resourceFile',
      androidValue: '"detail_property_view"'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'sub_'
    },
  ],
  reactions: [
    ['', 'propertyChange.data', 'updateView'],
    ['', 'propertyChange.props', 'updateView'],
    ['', 'propertyChange.actions', 'updateView'],
    ['', 'propertyChange.view', 'updateView'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        // TODO: For FObjectPropertyView?
        return null;
      `
    },
    {
      name: 'init',
      androidCode: `updateView(null, null);`
    }
  ],
  listeners: [
    {
      name: 'updateView',
      androidCode: `
        if ( getSub_() != null ) {
          getSub_().detach();
          setSub_(null);
        }
        if ( getView() == null ) return;
        getView().removeAllViews();
        if ( getData() == null ) return;
        int dpvid = getView().getResources().getIdentifier(
          getResourceFile(),
          "layout",
          getView().getContext().getPackageName());
        foam.core.Detachable[] subs = new foam.core.Detachable[getProps().length + getActions().length];
        Object[] views = new Object[getProps().length + getActions().length];
        for ( int i = 0 ; i < getProps().length ; i++ ) {
          foam.core.Property p = (foam.core.Property) getProps()[i];
          getView().inflate(
                  getView().getContext(),
                  dpvid,
                  getView());
          final foam.cross_platform.ui.DetailPropertyView dpv =
                  (foam.cross_platform.ui.DetailPropertyView) getView().getChildAt(i);
          final foam.cross_platform.ui.DetailPropertyViewModel dpvm =
            foam.cross_platform.ui.DetailPropertyViewModel.DetailPropertyViewModelBuilder(null)
              .setData(getData())
              .setProp(p)
              .build();
          foam.cross_platform.Listener l = (s, a) -> {
            dpv.setVisibility(dpvm.getVisibility() == foam.u2.Visibility.HIDDEN ? 
              android.view.View.GONE : android.view.View.VISIBLE);
          };
          subs[i] = dpvm.getVisibility$().slotSub(l);
          l.executeListener(null, new Object[] { dpvm.getVisibility() });
          dpv.setData(dpvm);
          views[i] = dpv;
        }

        for ( int i = 0 ; i < getActions().length ; i++ ) {
          foam.cross_platform.ui.widget.ActionButton ab = foam.cross_platform.ui.widget.ActionButton.ActionButtonBuilder(null)
            .setView(new android.widget.Button(getView().getContext()))
            .build();
          subs[getProps().length + i] = ab.bindData(getData(), getActions()[i]);
          getView().addView(ab.getView());
          views[getProps().length + i] = ab;
        }
        setViews_(views);
        setSub_(ArrayDetachable_create().setArray(subs).build());
      `,
    }
  ]
});
