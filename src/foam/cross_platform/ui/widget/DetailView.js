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
    'foam.u2.layout.GridLayout',
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
            return Long.compare(pa.getOrder(), pb.getOrder());
          })
          .toArray(foam.core.Property[]::new);
      `,
      swiftOptional: false,
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
      swiftOptional: false,
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
      class: 'FObjectProperty',
      of: 'foam.u2.layout.GridLayout',
      name: 'layout_',
      swiftOptional: false,
      crossPlatformFactoryValue: { class: 'foam.u2.layout.GridLayout' }
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        return getLayout_().getView();
      `,
      swiftFactory: `
        return getLayout_().getView();
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
        getLayout_().removeAllViews();
        if ( getData() == null ) return;
        foam.core.Detachable[] subs = new foam.core.Detachable[getProps().length + getActions().length];
        foam.cross_platform.Context x = getSubX();
        for ( int i = 0 ; i < getProps().length ; i++ ) {
          foam.core.Property p = getProps()[i];
          final foam.cross_platform.ui.widget.DetailPropertyView dpv = DetailPropertyView_create(x)
            .build();
          subs[i] = ArrayDetachable_create()
            .setArray(new foam.core.Detachable[] {
              dpv,
              dpv.bindData(getData(), p)
            })
            .build();
          dpv.getView().setPadding(
            ITEM_HORIZONTAL_PADDING(),
            ITEM_VERTICAL_PADDING(),
            ITEM_HORIZONTAL_PADDING(),
            ITEM_VERTICAL_PADDING());
          getLayout_().addView(dpv, p.getGridColumns());
        }

        for ( int i = 0 ; i < getActions().length ; i++ ) {
          foam.core.Action a = getActions()[i];
          final foam.cross_platform.ui.widget.DetailPropertyView dpv = DetailPropertyView_create(x)
            .build();
          subs[getProps().length + i] = ArrayDetachable_create()
            .setArray(new foam.core.Detachable[] {
              dpv.bindData(getData(), a),
              dpv,
            })
            .build();
          dpv.getView().setPadding(
            ITEM_HORIZONTAL_PADDING(),
            ITEM_VERTICAL_PADDING(),
            ITEM_HORIZONTAL_PADDING(),
            ITEM_VERTICAL_PADDING());
          getLayout_().addView(dpv, a.getGridColumns());
        }
        setSub_(ArrayDetachable_create().setArray(subs).build());
        onDetach(getSub_());
      `,
      swiftCode: `
        if getSub_() != nil {
          getSub_()!.detach();
          setSub_(nil);
        }
        getLayout_().removeAllViews();
        if getData() == nil { return; }
        var subs = [] as [foam_core_Detachable?];
        let x = getSubX();
        let padding = UIEdgeInsets(
          top: CGFloat(Self.ITEM_VERTICAL_PADDING()),
          left: CGFloat(Self.ITEM_HORIZONTAL_PADDING()),
          bottom: CGFloat(Self.ITEM_VERTICAL_PADDING()),
          right: CGFloat(Self.ITEM_HORIZONTAL_PADDING()));
        for i in 0..<getProps().count {
          let p = getProps()[i]
          let dpv = DetailPropertyView_create(x)
            .build();
          (dpv.getView() as! foam_cross_platform_ui_widget_DetailPropertyView.View).padding = padding;
          subs.append(dpv.bindData(getData(), p));
          subs.append(dpv);
          getLayout_().addView(dpv, p.getGridColumns());
        }

        for i in 0..<getActions().count {
          let a = getActions()[i];
          let dpv = DetailPropertyView_create()
            .build();
          (dpv.getView() as! foam_cross_platform_ui_widget_DetailPropertyView.View).padding = padding;
          subs.append(dpv.bindData(getData(), a)!);
          subs.append(dpv);
          getLayout_().addView(dpv, a.getGridColumns());
        }
        subs.append(getData()!.sub(nil, <%=listener(\`
          self?.setNeedsLayout(nil, nil);
        \`)%>)!);
        setSub_(ArrayDetachable_create().setArray(subs).build());
        onDetach(getSub_());
      `,
    }
  ]
});
