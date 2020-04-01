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
      androidExpression: `return data == null ? null : data.getCls_();`,
      swiftFactory: null,
      swiftExpression: `return data?.getCls_();`,
    },
    {
      class: 'FObjectArray',
      of: 'foam.core.Property',
      name: 'props',
      expressionArgs: ['of'],
      androidFactory: null,
      androidExpression: `
        if ( of == null ) return new foam.core.Property[0];
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
        if of == nil { return [] }
        return of!.getAxiomsByClass(foam_core_Property.CLS_())!
          .map({ p -> foam_core_Property in return p as! foam_core_Property })
          .filter({ p -> Bool in
            return !p.getHidden();
          })
          .sorted(by: { (a, b) -> Bool in
            return a.getOrder() < b.getOrder();
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
        if ( of == null ) return new foam.core.Action[0];
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
        if of == nil { return [] }
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
        v.setDividerDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        return v;
      `,
      swiftFactory: `
        let v = View();
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
  ],
  listeners: [
    {
      name: 'setNeedsLayout',
      isFramed: true,
      flags: ['swift'],
      swiftCode: `getView()?.setNeedsLayout()`
    },
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
          dpv.getView().setBackgroundColor(getTheme().getSurface());
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
          foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create().build();
          android.widget.Button b = (android.widget.Button) ab.getView();
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
        let view = getView() as! View;
        view.clearViews();
        if getData() == nil { return; }
        var subs = [] as [foam_core_Detachable?];
        let x = getSubX();
        for i in 0..<getProps()!.count {
          let p = getProps()![i]
          let dpv = DetailPropertyView_create(x)
            .build();
          dpv.getView()!.backgroundColor = getTheme()!.getSurface();
          let visibility = p.createVisibilitySlot(getData());
          let l = <%=listener(\`
            dpv.getView()?.isHidden = foam_cross_platform_Lib.equals(visibility?.slotGet(), foam_u2_Visibility.HIDDEN);
            self?.setNeedsLayout(nil, nil);
          \`)%>
          subs.append(visibility!.slotSub(l));
          subs.append(dpv.bindData(getData(), p));
          subs.append(dpv);
          l.executeListener(nil, nil);
          view.addDpv(dpv.getView()!)
        }

        for i in 0..<getActions()!.count {
          let ab = ActionButton_create().build();
          subs.append(ab.bindData(getData(), getActions()![i])!);
          subs.append(ab);
          view.addAb(ab.getView()!);
        }
        subs.append(getData()!.sub(nil, <%=listener(\`
          self?.setNeedsLayout(nil, nil);
        \`)%>)!);
        setSub_(ArrayDetachable_create().setArray(subs).build());
        onDetach(getSub_());
      `,
    }
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class View: UIView {
          var dpvs: [foam_cross_platform_ui_widget_DetailPropertyView.View] = [];
          var abs: [UIView] = [];
          func clearViews() {
            for v in subviews {
              v.removeFromSuperview();
            }
            dpvs = [];
            abs = [];
          }
          func addDpv(_ v: UIView) {
            dpvs.append(v as! foam_cross_platform_ui_widget_DetailPropertyView.View);
            addSubview(v);
          }
          func addAb(_ v: UIView) {
            abs.append(v);
            addSubview(v);
          }
          override func layoutSubviews() {
            super.layoutSubviews();
            let hp = CGFloat(foam_cross_platform_ui_widget_DetailView.ITEM_HORIZONTAL_PADDING());
            let vp = CGFloat(foam_cross_platform_ui_widget_DetailView.ITEM_VERTICAL_PADDING());
            let padding = UIEdgeInsets(top: vp, left: hp, bottom: vp, right: hp)
            for v in dpvs {
              v.padding = padding;
              v.frame.size.width = frame.width;
              v.layoutSubviews();
            }
            for v in abs {
              v.frame.size = v.sizeThatFits(CGSize(
                width: frame.width - 2 * hp,
                height: CGFloat.greatestFiniteMagnitude
              ))
              v.frame.origin.x = (frame.width - v.frame.width) / 2
            }
            var y: CGFloat = 0;
            for v in dpvs {
              if v.isHidden { continue }
              v.frame.origin.y = y;
              y = v.frame.maxY + 1;
            }
            for v in abs {
              if v.isHidden { continue }
              v.frame.origin.y = y + vp;
              y = v.frame.maxY;
            }
            frame.size.height = y
          }
        }
      `
    }
  ],
});
