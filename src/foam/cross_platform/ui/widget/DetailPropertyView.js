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
    {
      type: 'Integer',
      name: 'helpPadding',
      value: 12
    },
    {
      type: 'Integer',
      name: 'helpSize',
      value: 24
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
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'labelView',
      androidFactory: `
        foam.cross_platform.ui.widget.Label v = Label_create().build();
        android.widget.LinearLayout.LayoutParams params = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        params.weight = 1;
        v.getView().setLayoutParams(params);
        return v;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'validationView',
      androidFactory: `
        foam.cross_platform.ui.widget.Label v = Label_create().build();
        v.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        return v;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.ActionButton',
      name: 'helpView',
      androidFactory: `
        float f = getAndroidContext().getResources().getDisplayMetrics().density;
        int s = (int)(HELP_SIZE() * f);
        int p = (int)(HELP_PADDING() * f);
        android.widget.ImageButton b = new android.widget.ImageButton(getAndroidContext());
        b.setBackground(null);
        b.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          s + 2 * p,
          s + 2 * p,
          0 /* weight */));
        b.setPadding(p, p, p, p);
        b.setImageResource(getAndroidContext().getResources().getIdentifier(
          HELP_RESOURCE(),
          "drawable",
          getAndroidContext().getPackageName()));
        return ActionButton_create()
          .setView(b)
          .build();
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.AxiomView',
      name: 'dataView'
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
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        return v;
      `,
    },
  ],
  reactions: [
    ['validationView', 'propertyChange.data', 'updateValidationView'],
    ['dataView', 'propertyChange.view', 'updateDataView'],
    ['', 'propertyChange.labelView', 'updateView'],
    ['', 'propertyChange.validationView', 'updateView'],
    ['', 'propertyChange.helpView', 'updateView'],
    ['', 'propertyChange.dataView', 'updateView'],
    ['theme$error', 'propertyChange.color', 'updateView'],
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
        getDataView().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

        // Label
        if ( ! foam.cross_platform.ui.LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          subs.add(getLabelView().getData$().follow(prop.getLabel$()));
        } else {
          clearProperty("labelView");
        }

        // Help
        if ( ! foam.cross_platform.type.StringType.INSTANCE().isEmpty(prop.getHelp()) ) {
          getHelpView().setData(new foam.cross_platform.GenericFunction() {
            public Object executeFunction(Object[] args) {
              foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
              com.google.android.material.snackbar.Snackbar.make(
                (android.view.View) x.getXProp("onClickView"),
                prop.getHelp(),
                com.google.android.material.snackbar.Snackbar.LENGTH_LONG).show();
              return null;
            }
          });
        } else {
          clearProperty("helpView");
        }

        // Validation
        foam.core.SlotInterface validationSlot = prop.createValidationSlot(data);
        if ( validationSlot != null ) {
          subs.add(getValidationView().getData$().follow(validationSlot));
        } else {
          clearProperty("validationView");
        }

        return ArrayDetachable_create()
          .setArray(subs
            .stream()
            .toArray(foam.core.Detachable[]::new))
          .build();
      `,
    }
  ],
  listeners: [
    {
      name: 'updateValidationView',
      isFramed: true,
      androidCode: `
        if ( hasPropertySet("validationView") ) {
          boolean isEmpty = foam.cross_platform.type.StringType.INSTANCE()
            .isEmpty((String) getValidationView().getData());
          getValidationView().getView().setVisibility(
            isEmpty ? android.view.View.GONE : android.view.View.VISIBLE);
        }
      `,
    },
    {
      name: 'updateDataView',
      isFramed: true,
      androidCode: `
        if ( getDataView() == null ) return;
        android.widget.LinearLayout.LayoutParams params = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        params.weight = 1;
        getDataView().getView().setLayoutParams(params);
      `,
    },
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;
        for ( int i = 0; i < getView().getChildCount(); i++ ) {
          android.view.View child = getView().getChildAt(i);
          if ( child instanceof android.view.ViewGroup == false ) continue;
          ((android.view.ViewGroup) child).removeAllViews();
        }
        getView().removeAllViews();
        if ( getDataView() == null ) return;

        if ( hasPropertySet("labelView") ) {
          getLabelView().getView().setAlpha(0.8f);
          getLabelView().getView().setTextAppearance(getTheme().getSubtitle1());
          getLabelView().getView().setTextColor(getTheme().getOnSurface());
          if ( hasPropertySet("helpView") ) {
            android.widget.LinearLayout top = new android.widget.LinearLayout(getAndroidContext());
            android.widget.LinearLayout.LayoutParams params = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
            top.setLayoutParams(params);
            top.setGravity(android.widget.LinearLayout.HORIZONTAL);
            top.addView(getLabelView().getView());
            top.addView(getHelpView().getView());
            getView().addView(top);
          } else {
            getView().addView(getLabelView().getView());
          }
          getView().addView(getDataView().getView());
        } else {
          if ( hasPropertySet("helpView") ) {
            android.widget.LinearLayout top = new android.widget.LinearLayout(getAndroidContext());
            android.widget.LinearLayout.LayoutParams params = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
            top.setLayoutParams(params);
            top.setGravity(android.widget.LinearLayout.HORIZONTAL);
            top.addView(getDataView().getView());
            top.addView(getHelpView().getView());
            getView().addView(top);
          } else {
            getView().addView(getDataView().getView());
          }
        }
        updateDataView(null, null);
        if ( hasPropertySet("validationView") ) {
          getValidationView().getView().setTextAppearance(getTheme().getCaption());
          getValidationView().getView().setTextColor(getTheme().getError());
          getView().addView(getValidationView().getView());
          updateValidationView(null, null);
        }
      `,
    }
  ]
});
