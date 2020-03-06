foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DetailPropertyView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
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
        onDetach(v);
        v.getView().setTextColor(getTheme().getOnSurface());
        v.getView().setAlpha(0.8f);
        getTheme().getSubtitle1().applyTextStyle(v.getView());
        v.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

        return v;
      `,
      swiftFactory: `
        let v = Label_create().build();
        onDetach(v);
        let lv = v.getView() as? UILabel;
        lv?.textColor = getTheme()!.getOnSurface().withAlphaComponent(0.8);
        getTheme()!.getSubtitle1()!.applyTextStyle(lv!);
        return v;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'validationView',
      androidFactory: `
        foam.cross_platform.ui.widget.Label v = Label_create().build();
        onDetach(v);
        v.getView().setVisibility(android.view.View.GONE);
        v.getView().setTextColor(getTheme().getError());
        v.getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        return v;
      `,
      swiftFactory: `
        let v = Label_create().build();
        onDetach(v);
        let lv = v.getView() as! UILabel;
        lv.isHidden = true;
        lv.textColor = getTheme()!.getError();
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
          "dpv_help",
          "drawable",
          getAndroidContext().getPackageName()));
        b.setColorFilter(getTheme().getOnSurface());
        b.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        foam.cross_platform.ui.widget.ActionButton v = ActionButton_create()
          .setView(b)
          .build();
        onDetach(v);
        return v;
      `,
      swiftFactory: `
        let b = UIButton(type: .infoLight);
        b.tintColor = getTheme()!.getOnSurface()
        let v = ActionButton_create()
          .setView(b)
          .build();
        onDetach(v);
        return v;
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
      `,
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
        let v = View();
        v.dpv = self;
        return v;
      `
    },
  ],
  reactions: [
    ['validationView', 'propertyChange.data', 'updateValidationView'],
    ['', 'propertyChange.data', 'setNeedsLayout', ['swift']],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        java.util.List<foam.core.Detachable> subs = new java.util.ArrayList();
        foam.core.Property prop = (foam.core.Property) axiom;

        // Data
        setDataView(prop.createView(getSubX()));
        onDetach((foam.core.Detachable) getDataView());
        subs.add(getDataView().bindData(data, prop));
        subs.add(getData$().follow(((foam.cross_platform.FObject) getDataView()).getSlot("data")));

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

        addViews();

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
        onDetach(getDataView() as? foam_core_Detachable);
        subs.append(getDataView()!.bindData(data, prop));
        subs.append(getData$().follow((getDataView() as? foam_cross_platform_FObject)?.getSlot("data")));

        // Label
        if ( !foam_cross_platform_ui_LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          getLabelView()!.getView()?.isHidden = false;
          subs.append(getLabelView()?.getData$().follow(prop.getLabel$()));
        } else {
          getLabelView()!.getView()?.isHidden = true;
        }

        // Help
        if ( !foam_cross_platform_type_StringType.INSTANCE().isEmpty(prop.getHelp()) ) {
          getHelpView()!.getView()?.isHidden = false;
          getHelpView()!.setData(<%=fn(\`
            let x = args![0] as! foam_cross_platform_Context;
            let alertController = UIAlertController(
              title: "", message: prop.getHelp(), preferredStyle: .alert)
            alertController.addAction(UIAlertAction(title: "Ok", style: .default, handler: nil))
            (x.getXProp("stack") as? foam_cross_platform_ui_stack_Stack)?.getNavController()
              .present(alertController, animated: true, completion: nil)
            return nil;
          \`)%>);
        } else {
          getHelpView()!.getView()?.isHidden = true;
        }

        // Validation
        let validationSlot = prop.createValidationSlot(data);
        if ( validationSlot != nil ) {
          subs.append(getValidationView()?.getData$().follow(validationSlot));
        }

        addViews();

        return ArrayDetachable_create()
          .setArray(subs)
          .build();
      `,
    },
    {
      name: 'addViews',
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
        let v = getView()!
        v.subviews.forEach { sv in
          sv.removeFromSuperview();
        }
        v.addSubview(getLabelView()!.getView()!);
        v.addSubview(getDataView()!.getView()!);
        v.addSubview(getValidationView()!.getView()!);
        v.addSubview(getHelpView()!.getView()!);
      `,
    }
  ],
  listeners: [
    {
      name: 'setNeedsLayout',
      isFramed: true,
      flags: ['swift'],
      swiftCode: `getView()?.setNeedsLayout()`
    },
    {
      name: 'updateValidationView',
      androidCode: `
        boolean isEmpty = foam.cross_platform.type.StringType.INSTANCE()
          .isEmpty((String) getValidationView().getData());
        getValidationView().getView().setVisibility(
          isEmpty ? android.view.View.GONE : android.view.View.VISIBLE);
      `,
      swiftCode: `
        let isEmpty = foam_cross_platform_type_StringType.INSTANCE()
          .isEmpty(getValidationView()?.getData() as? String);
        let v = getValidationView()!.getView()!
        v.isHidden = isEmpty;
      `,
    }
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dpv_help.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M11,17h2v-6h-2v6zM12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8 8,3.59 8,8 -3.59,8 -8,8zM11,9h2L13,7h-2v2z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
       class View: UIView {
          weak var dpv: foam_cross_platform_ui_widget_DetailPropertyView! = nil;
          var padding: UIEdgeInsets = UIEdgeInsets.zero;
          override func layoutSubviews() {
            super.layoutSubviews();
            let p: CGFloat = 12;
            let w = frame.width - padding.left - padding.right;
            let helpView = dpv.getHelpView()!.getView()!
            helpView.frame.size = helpView.sizeThatFits(CGSize(
              width: w,
              height: CGFloat.greatestFiniteMagnitude
            ));
            helpView.frame.origin.x = frame.maxX - padding.left - helpView.frame.width
            helpView.frame.origin.y = padding.top
            let leftWidth = helpView.frame.origin.x - padding.right - p

            let labelView = dpv.getLabelView()!.getView()!;
            labelView.frame.size = !labelView.isHidden ? labelView.sizeThatFits(CGSize(
              width: leftWidth,
              height: CGFloat.greatestFiniteMagnitude
            )) : CGSize.zero;
            labelView.frame.origin.x = padding.left
            labelView.frame.origin.y = padding.top

            let dataView = dpv.getDataView()!.getView()!;
            dataView.frame.size.height = dataView.sizeThatFits(CGSize(
              width: leftWidth,
              height: CGFloat.greatestFiniteMagnitude
              )).height;
            dataView.frame.size.width = leftWidth;
            dataView.frame.origin.y = labelView.isHidden ? padding.top : labelView.frame.maxY + p;
            dataView.frame.origin.x = padding.left

            let validationView = dpv.getValidationView()!.getView()!;
            validationView.frame.size = !validationView.isHidden ? validationView.sizeThatFits(CGSize(
              width: leftWidth,
              height: CGFloat.greatestFiniteMagnitude
            )) : CGSize.zero;
            validationView.frame.origin.y = dataView.frame.maxY + (validationView.isHidden ? 0 : p);
            validationView.frame.origin.x = padding.left

            frame.size.height = validationView.frame.maxY + padding.bottom;
          }
        }
      `
    }
  ],
});
