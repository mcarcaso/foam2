foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  requires: [
    'foam.util.ArrayDetachable',
    'foam.cross_platform.ui.DetailPropertyViewModel',
    'foam.cross_platform.ui.widget.ActionButton',
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
      androidExpression: `return data.getCls_();`,
      swiftFactory: null,
      swiftExpression: `return data!.getCls_();`,
    },
    {
      class: 'FObjectArray',
      of: 'foam.cross_platform.FObject',
      name: 'props',
      expressionArgs: ['of'],
      androidFactory: null,
      androidExpression: `
        return java.util.Arrays.stream(of.getAxiomsByClass(foam.core.Property.CLS_()))
          .filter(p -> ! ((foam.core.Property) p).getHidden())
          .toArray(foam.cross_platform.FObject[]::new);
      `,
      swiftFactory: null,
      swiftExpression: `
        return of!.getAxiomsByClass(foam_core_Property.CLS_())!
          .filter({ p -> Bool in
            return !(p as! foam_core_Property).getHidden()
          });
      `
    },
    {
      class: 'FObjectArray',
      of: 'foam.cross_platform.FObject',
      name: 'actions',
      expressionArgs: ['of'],
      androidFactory: null,
      androidExpression: `
        return of.getAxiomsByClass(foam.core.Action.CLS_());
      `,
      swiftFactory: null,
      swiftExpression: `
        return of!.getAxiomsByClass(foam_core_Action.CLS_());
      `
    },
    {
      class: 'ArrayProperty',
      name: 'views_'
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view'
    },
    {
      class: 'StringProperty',
      name: 'resourceFile',
      androidValue: '"detail_property_view"',
      swiftValue: '"BasicDetailPropertyView"'
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
      `,
      swiftCode: `
        // TODO: For FObjectPropertyView?
        return nil;
      `,
    },
    {
      name: 'init',
      androidCode: `updateView(null, null);`,
      swiftCode: `updateView(nil, nil);`
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
          final foam.cross_platform.ui.DetailPropertyViewModel dpvm = DetailPropertyViewModel_create()
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
      swiftCode: `
        if getSub_() != nil {
          getSub_()!.detach();
          setSub_(nil);
        }
        if ( getView() == nil ) { return; }
        let view = getView()!
        let f = CGRect(x: 0, y: 0, width: view.frame.width, height: 0);
        for v in view.subviews {
          v.removeFromSuperview();
        }
        if getData() == nil { return; }
        var subs = [] as [foam_core_Detachable];
        var views = [] as [Any];
        for i in 0..<getProps()!.count {
          let p = getProps()![i] as! foam_core_Property;
          let dpv = BasicDetailPropertyView(frame: f)
          view.addSubview(dpv)
          let dpvm = DetailPropertyViewModel_create()
              .setData(getData())
              .setProp(p)
              .build();
          let l = <%=listener(\`
            dpv.isHidden = foam_cross_platform_Lib.equals(dpvm.getVisibility(), foam_u2_Visibility.HIDDEN);
          \`)%>
          subs.append(dpvm.getVisibility$().slotSub(l)!);
          l.executeListener(nil, [dpvm.getVisibility()]);
          dpv.setData(dpvm);
          views.append(dpv);
        }

        for i in 0..<getActions()!.count {
          let ab = ActionButton_create()
            .setView(UIButton())
            .build();
          subs.append(ab.bindData(getData(), getActions()![i])!);
          view.addSubview(ab.getView()!);
          views.append(ab);
        }
        setViews_(views);
        setSub_(ArrayDetachable_create().setArray(subs).build());
      `,
    }
  ]
});
