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

        // Label
        if ( ! foam.cross_platform.ui.LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          getLabelView().getView().setVisibility(android.view.View.VISIBLE);
          subs.add(getLabelView().getData$().follow(prop.getLabel$()));
        } else {
          getLabelView().getView().setVisibility(android.view.View.GONE);
        }

        // Help
        if ( ! foam.cross_platform.type.StringType.INSTANCE().isEmpty(prop.getHelp()) ) {
          getHelpView().setAndroidVisibility(android.view.View.VISIBLE);
          getHelpView().setData(<%=fn(\`
            foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
            com.google.android.material.snackbar.Snackbar.make(
              (android.view.View) x.getXProp("onClickView"),
              prop.getHelp(),
              com.google.android.material.snackbar.Snackbar.LENGTH_LONG).show();
            return null;
          \`)%>);
        } else {
          getHelpView().setAndroidVisibility(android.view.View.INVISIBLE);
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
    }
  ]
});
