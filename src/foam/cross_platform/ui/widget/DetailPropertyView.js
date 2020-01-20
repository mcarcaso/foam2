foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DetailPropertyView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  swiftImports: [
    'UIKit'
  ],
  constants: [
    {
      type: 'String',
      name: 'helpResource',
      value: 'dpv_help'
    },
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
  requires: [
    'foam.cross_platform.ui.widget.ActionButton',
    'foam.cross_platform.ui.widget.Label',
    'foam.util.ArrayDetachable',
    {
      path: 'foam.cross_platform.ui.layout.DetailPropertyView',
      flags: ['swift'],
    },
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'labelView',
      androidFactory: `
        foam.cross_platform.ui.widget.Label v = Label_create().build();

        v.getView().setTextColor(getTheme().getOnSurface());

        v.getView().setAlpha(0.8f);
        v.getView().setTextAppearance(getTheme().getSubtitle1());

        v.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

        return v;
      `,
      swiftFactory: `
        let v = Label_create().build();
/*
        v.getView().setTextColor(getTheme().getOnSurface());

        v.getView().setAlpha(0.8f);
        v.getView().setTextAppearance(getTheme().getSubtitle1());
*/
        return v;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'validationView',
      androidFactory: `
        foam.cross_platform.ui.widget.Label v = Label_create().build();

        v.getView().setVisibility(android.view.View.GONE);

        v.getView().setTextColor(getTheme().getError());

        v.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

        return v;
      `,
      swiftFactory: `
        let v = Label_create().build();
/*
        v.getView().setVisibility(android.view.View.GONE);

        v.getView().setTextColor(getTheme().getError());

        v.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
*/

        return v;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.ActionButton',
      name: 'helpView',
      androidFactory: `
        android.widget.ImageButton b = new android.widget.ImageButton(getAndroidContext());
        b.setBackground(null);
        b.setImageResource(getAndroidContext().getResources().getIdentifier(
          HELP_RESOURCE(),
          "drawable",
          getAndroidContext().getPackageName()));

        b.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

        return ActionButton_create()
          .setView(b)
          .build();
      `,
      swiftFactory: `
        let b = UIButton(type: .infoLight);
        b.tintColor = .black
        return ActionButton_create()
          .setView(b)
          .build();
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.AxiomView',
      name: 'dataView',
      androidPostSet: `
        newValue.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
      `
    },
    {
      name: 'data'
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setOrientation(android.widget.LinearLayout.HORIZONTAL);
        v.setGravity(android.view.Gravity.CENTER);
        return v;
      `,
      swiftFactory: `
        let v = foam_cross_platform_ui_layout_DetailPropertyView.View();
        v.o = DetailPropertyView_create().build();
        return v;
      `
    },
  ],
  reactions: [
    ['validationView', 'propertyChange.data', 'updateValidationView'],
    ['', 'propertyChange.validationView', 'updateValidationView'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        java.util.List<foam.core.Detachable> subs = new java.util.ArrayList();
        foam.core.Property prop = (foam.core.Property) axiom;

        // Data
        setDataView(prop.createView(getSubX()));
        subs.add(getDataView().bindData(data, prop));
        subs.add(getData$().follow(getDataView().getData$()));

        // Label
        if ( ! foam.cross_platform.ui.LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          getLabelView().getView().setVisibility(android.view.View.VISIBLE);
          subs.add(getLabelView().getData$().follow(prop.getLabel$()));
        } else {
          getLabelView().getView().setVisibility(android.view.View.GONE);
        }

        // Help
        if ( ! foam.cross_platform.type.StringType.INSTANCE().isEmpty(prop.getHelp()) ) {
          getHelpView().getView().setVisibility(android.view.View.VISIBLE);
          getHelpView().setData(<%=fn(\`
            foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
            com.google.android.material.snackbar.Snackbar.make(
              (android.view.View) x.getXProp("onClickView"),
              prop.getHelp(),
              com.google.android.material.snackbar.Snackbar.LENGTH_LONG).show();
            return null;
          \`)%>);
        } else {
          getHelpView().getView().setVisibility(android.view.View.INVISIBLE);
        }

        // Validation
        foam.core.SlotInterface validationSlot = prop.createValidationSlot(data);
        if ( validationSlot != null ) {
          subs.add(getValidationView().getData$().follow(validationSlot));
        }

        layoutViews(null, null);

        return ArrayDetachable_create()
          .setArray(subs
            .stream()
            .toArray(foam.core.Detachable[]::new))
          .build();
      `,
      swiftCode: `
        var subs: [foam_core_Detachable?] = [];
        let prop = axiom as! foam_core_Property;

        // Data
        setDataView(prop.createView(getSubX()));
        subs.append(getDataView()!.bindData(data, prop));
        subs.append(getData$().follow((getDataView() as? foam_cross_platform_FObject)?.getSlot("data")));

        // Label
        if ( !foam_cross_platform_ui_LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          //getLabelView()?.getView()?.setVisibility(android.view.View.VISIBLE);
          subs.append(getLabelView()?.getData$().follow(prop.getLabel$()));
        } else {
          //getLabelView().getView().setVisibility(android.view.View.GONE);
        }

        // Help
        if ( !foam_cross_platform_type_StringType.INSTANCE().isEmpty(prop.getHelp()) ) {
          //getHelpView().getView().setVisibility(android.view.View.VISIBLE);
          getHelpView()!.setData(<%=fn(\`
            let x = args![0] as! foam_cross_platform_Context;
            print(prop.getHelp()!);
            /*
            com.google.android.material.snackbar.Snackbar.make(
              (android.view.View) x.getXProp("onClickView"),
              prop.getHelp(),
              com.google.android.material.snackbar.Snackbar.LENGTH_LONG).show();
            */
            return nil;
          \`)%>);
        } else {
          // getHelpView().getView().setVisibility(android.view.View.INVISIBLE);
        }

        // Validation
        let validationSlot = prop.createValidationSlot(data);
        if ( validationSlot != nil ) {
          subs.append(getValidationView()?.getData$().follow(validationSlot));
        }

        layoutViews(nil, nil);

        return ArrayDetachable_create()
          .setArray(subs)
          .build();
      `,
    }
  ],
  listeners: [
    {
      name: 'updateValidationView',
      isFramed: true,
      androidCode: `
        boolean isEmpty = foam.cross_platform.type.StringType.INSTANCE()
          .isEmpty((String) getValidationView().getData());
        getValidationView().getView().setVisibility(
          isEmpty ? android.view.View.GONE : android.view.View.VISIBLE);
      `,
      swiftCode: `
        let isEmpty = foam_cross_platform_type_StringType.INSTANCE()
          .isEmpty(getValidationView()?.getData() as? String);
//        getValidationView().getView().setVisibility(
//          isEmpty ? android.view.View.GONE : android.view.View.VISIBLE);
      `,
    },
    {
      name: 'layoutViews',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;

        for ( int i = 0; i < getView().getChildCount(); i++ ) {
          android.view.View child = getView().getChildAt(i);
          if ( child instanceof android.view.ViewGroup == false ) continue;
          ((android.view.ViewGroup) child).removeAllViews();
        }
        getView().removeAllViews();

        android.widget.LinearLayout left = new android.widget.LinearLayout(getAndroidContext());
        left.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            1 /* weight */));
        left.setOrientation(android.widget.LinearLayout.VERTICAL);
        getView().addView(left);

        left.addView(getLabelView().getView());
        left.addView(getDataView().getView());
        left.addView(getValidationView().getView());

        android.widget.LinearLayout right = new android.widget.LinearLayout(getAndroidContext());
        android.widget.LinearLayout.LayoutParams rParams = new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            0 /* weight */);
        rParams.gravity = android.view.Gravity.TOP;
        right.setLayoutParams(rParams);
        right.setOrientation(android.widget.LinearLayout.VERTICAL);
        getView().addView(right);

        right.addView(getHelpView().getView());
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        for v in getView()!.subviews {
          v.removeFromSuperview()
        }

        let v = getView() as! foam_cross_platform_ui_layout_DetailPropertyView.View
        v.addSubview(getLabelView()!.getView()!);
        v.addSubview(getHelpView()!.getView()!);
        v.addSubview(getDataView()!.getView()!);
        v.addSubview(getValidationView()!.getView()!);

        v.o?.setLabel(getLabelView()!.getView());
        v.o?.setHelp(getHelpView()!.getView());
        v.o?.setValidation(getValidationView()!.getView());
        v.o?.setPropData(getDataView()!.getView());
        v.o?.setParent(getView());

        v.setNeedsLayout();
      `,
    }
  ]
});
