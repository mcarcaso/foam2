foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  requires: [
    'foam.util.ArrayDetachable',
    'foam.cross_platform.ui.widget.DetailPropertyView',
    'foam.cross_platform.ui.widget.ActionButton',
  ],
  swiftImports: [
    'UIKit'
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
    {
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  constants: [
    {
      type: 'Integer',
      name: 'itemVerticalPadding',
      value: 16
    },
    {
      type: 'Integer',
      name: 'itemHorizontalPadding',
      value: 16
    },
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
      `,
      swiftFactory: null,
      swiftExpression: `
        return of!.getAxiomsByClass(foam_core_Property.CLS_())!
          .map({ p -> foam_core_Property in return p as! foam_core_Property })
          .filter({ p -> Bool in
            return !p.getHidden();
          })
          .sorted(by: { (a, b) -> Bool in
            return a.getOrder() > b.getOrder();
          });
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
      `,
      swiftFactory: null,
      swiftExpression: `
        return of!.getAxiomsByClass(foam_core_Action.CLS_())!
          .map({ p -> foam_core_Action in return p as! foam_core_Action })
          .sorted(by: { (a, b) -> Bool in
            return a.getOrder() > b.getOrder();
          });
      `
    },
    {
      class: 'ArrayProperty',
      name: 'views_'
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
        v.setShowDividers(android.widget.LinearLayout.SHOW_DIVIDER_MIDDLE);
        v.setDividerDrawable(new android.graphics.drawable.ColorDrawable(getTheme().getOnSurface()));
        return v;
      `
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
        foam.core.Detachable[] subs = new foam.core.Detachable[getProps().length + getActions().length];
        Object[] views = new Object[getProps().length + getActions().length];
        foam.cross_platform.Context x = getSubX().createSubContext(new java.util.HashMap() {{
          put("parentView", getView());
          put("androidContext", getView().getContext());
        }});
        for ( int i = 0 ; i < getProps().length ; i++ ) {
          foam.core.Property p = (foam.core.Property) getProps()[i];
          final foam.cross_platform.ui.widget.DetailPropertyView dpv = DetailPropertyView_create(x)
            .build();
          final foam.core.SlotInterface visibility = p.createVisibilitySlot(getData());
          foam.cross_platform.Listener l = (s, a) -> {
            dpv.getView().setVisibility(visibility.slotGet() == foam.u2.Visibility.HIDDEN ?
              android.view.View.GONE : android.view.View.VISIBLE);
          };
          subs[i] = ArrayDetachable_create()
            .setArray(new foam.core.Detachable[] {
              visibility.slotSub(l),
              dpv.bindData(getData(), p)
            })
            .build();
          l.executeListener(null, null);
          dpv.getView().setPadding(
            ITEM_HORIZONTAL_PADDING(), 
            ITEM_VERTICAL_PADDING(), 
            ITEM_HORIZONTAL_PADDING(),
            ITEM_VERTICAL_PADDING());
          getView().addView(dpv.getView());
          views[i] = dpv;
        }
        
        for ( int i = 0 ; i < getActions().length ; i++ ) {
          android.widget.Button b = new android.widget.Button(getView().getContext());
          android.widget.LinearLayout.LayoutParams params = new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
          params.setMargins(
            ITEM_HORIZONTAL_PADDING(),
            ITEM_HORIZONTAL_PADDING(),
            ITEM_HORIZONTAL_PADDING(),
            ITEM_HORIZONTAL_PADDING());
          params.gravity = android.view.Gravity.CENTER;
          b.setLayoutParams(params);

          foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create()
            .setView(b)
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
        let x = getSubX();
        var views = [] as [Any];
        for i in 0..<getProps()!.count {
          let p = getProps()![i]
          let dpv = DetailPropertyView_create(x)
            .build();
          let visibility = p.createVisibilitySlot(getData());
          let l = <%=listener(\`
            dpv.getView()?.isHidden = foam_cross_platform_Lib.equals(visibility?.slotGet(), foam_u2_Visibility.HIDDEN);
            self?.getView()?.setNeedsLayout();
          \`)%>
          subs.append(ArrayDetachable_create()
            .setArray([
              visibility!.slotSub(l)!,
              dpv.bindData(getData(), p),
              dpv.getData$().slotSub(<%=listener(\`
                let layout = (dpv.getView() as! foam_cross_platform_ui_layout_DetailPropertyView.View).o;
                let propData = layout?.getPropData();
                layout?.clearProperty("propData");
                layout?.setPropData(propData);
                if ( dpv.getView()!.frame.height != CGFloat(layout!.getParentH()) ) {
                  self?.getView()?.setNeedsLayout();
                }
              \`)%>),
            ])
            .build());
          l.executeListener(nil, nil);
          dpv.getView()?.frame = f;
          view.addSubview(dpv.getView()!)
          views.append(dpv);
        }

        for i in 0..<getActions()!.count {
          let b = UIButton()
          b.backgroundColor = .systemBackground
          b.setTitleColor(.label, for: .normal);
          let ab = ActionButton_create()
            .setView(b)
            .build();
          subs.append(ab.bindData(getData(), getActions()![i])!);
          view.addSubview(b);
          views.append(ab);
        }
        setViews_(views);
        setSub_(ArrayDetachable_create().setArray(subs).build());
      `,
    }
  ]
});
