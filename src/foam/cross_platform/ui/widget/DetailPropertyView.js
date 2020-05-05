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
      class: 'StringProperty',
      name: 'label'
    },
    {
      class: 'StringProperty',
      name: 'help'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.SlotInterface',
      name: 'validationSlot'
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
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        return v;
      `,
      swiftFactory: `
        let v = UIStackView();
        v.spacing = 8;
        v.axis = .vertical
        v.alignment = .center
        return v;
      `
    },
    {
      class: 'BooleanProperty',
      name: 'isHidden'
    }
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        java.util.List<foam.core.Detachable> subs = new java.util.ArrayList();

        // Data
        if ( axiom instanceof foam.core.Property ) {
          foam.core.Property prop = (foam.core.Property) axiom;
          setDataView(prop.createView(getSubX()));

          setValidationSlot(prop.createValidationSlot(data));
          if ( getValidationSlot() != null ) {
            subs.add(getValidationSlot().slotSub(updateValidationView_listener()));
          }

          subs.add(getIsHidden$().follow(prop.createVisibilitySlot(data).map((o) -> {
            return o[0] == foam.u2.Visibility.HIDDEN;
          })));
        } else if ( axiom instanceof foam.core.Action ) {
          foam.core.Action a = (foam.core.Action) axiom;
          setDataView(a.createView(getSubX()));

          subs.add(getIsHidden$().follow(a.createIsAvailableSlot(getSubX(), data).map((o) -> {
            return !((boolean) o[0]);
          })));
        }
        onDetach((foam.core.Detachable) getDataView());
        subs.add(getDataView().bindData(data, axiom));
        subs.add(getData$().follow(((foam.cross_platform.FObject) getDataView()).getSlot("data")));

        setLabel(axiom.getProperty("i18nLabel"));
        setHelp(axiom.getProperty("i18nHelp"));

        addViews();

        return ArrayDetachable_create()
          .setArray(subs
            .stream()
            .toArray(foam.core.Detachable[]::new))
          .build();
      `,
      swiftCode: `
        var subs: [foam_core_Detachable?] = [];

        // Data
        if let prop = axiom as? foam_core_Property {
          setDataView(prop.createView(getSubX()));

          setValidationSlot(prop.createValidationSlot(data));
          if ( getValidationSlot() != nil ) {
            subs.append(getValidationSlot()?.slotSub(updateValidationView_listener()));
          }

          subs.append(getIsHidden$().follow(prop.createVisibilitySlot(data)!.map(<%=fn(\`
            return foam_cross_platform_Lib.equals(args![0], foam_u2_Visibility.HIDDEN)
          \`)%>)))
        } else if let action = axiom as? foam_core_Action {
          setDataView(action.createView(getSubX()));

          subs.append(getIsHidden$().follow(action.createIsAvailableSlot(getSubX(), data)!.map(<%=fn(\`
            return !(args![0] as! Bool);
          \`)%>)))
        }
        onDetach(getDataView() as? foam_core_Detachable);
        subs.append(getDataView()!.bindData(data, axiom));
        subs.append(getData$().follow((getDataView() as? foam_cross_platform_FObject)?.getSlot("data")));

        setLabel(axiom?.getProperty("i18nLabel"));
        setHelp(axiom?.getProperty("i18nHelp"));

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
        getView().removeAllViews();

        if ( ! foam.cross_platform.ui.LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          android.widget.TextView lv = new android.widget.TextView(getAndroidContext());
          lv.setTextColor(getTheme().getOnSurface());
          lv.setText(getLabel());
          lv.setAlpha(0.8f);
          getTheme().getSubtitle1().applyTextStyle(lv);
          lv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
          getView().addView(lv);
          lv.setOnClickListener((v) -> showHelp(v));
        }

        getDataView().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        getView().addView(getDataView().getView());

        updateValidationView(null, null);
      `,
      swiftCode: `
        let v = getView() as! UIStackView;
        v.arrangedSubviews.forEach { sv in
          v.removeArrangedSubview(sv);
          sv.removeFromSuperview();
        }

        if ( !foam_cross_platform_ui_LabelledViewClass.CLS_().isInstance(getDataView()) ) {
          let lv = UILabel();
          lv.textColor = getTheme()!.getOnSurface().withAlphaComponent(0.8);
          lv.text = getLabel()!;
          getTheme()!.getSubtitle1()!.applyTextStyle(lv);
          lv.isUserInteractionEnabled = true;
          lv.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(showHelp)))
          v.addArrangedSubview(lv);
          lv.translatesAutoresizingMaskIntoConstraints = false;
          lv.widthAnchor.constraint(equalTo: v.widthAnchor).isActive = true;
        }

        let d = getDataView()!.getView()!;
        v.addArrangedSubview(d);
        d.translatesAutoresizingMaskIntoConstraints = false;
        d.widthAnchor.constraint(equalTo: v.widthAnchor).isActive = true;

        updateValidationView(nil, nil);
      `,
    },
    {
      swiftAnnotations: ['@objc'],
      name: 'showHelp',
      args: [
        { androidType: 'android.view.View', swiftType: 'UITapGestureRecognizer', name: 'v' }
      ],
      androidCode: `
        String help = getHelp();
        if ( help.isEmpty() ) return;
        com.google.android.material.snackbar.Snackbar.make(
          v, help, com.google.android.material.snackbar.Snackbar.LENGTH_LONG).show();
      `,
      swiftCode: `
        let help = getHelp() ?? ""
        if help.isEmpty { return }
        let alertController = UIAlertController(title: "", message: help, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "Ok", style: .default, handler: nil))
        (getX().getXProp("stack") as? foam_cross_platform_ui_stack_Stack)?.getNavController()
          .present(alertController, animated: true, completion: nil)
      `
    }
  ],
  listeners: [
    {
      name: 'updateValidationView',
      androidCode: `
        android.view.ViewGroup v = getView();
        if ( v.getChildCount() == 0 ) return;
        android.view.View lastChild = v.getChildAt(v.getChildCount() - 1);
        android.widget.TextView validationView = lastChild == getDataView().getView() ?
            null : (android.widget.TextView) lastChild;
        String validation = getValidationSlot() == null ? "" : (String) getValidationSlot().slotGet();
        if ( validation.isEmpty() && validationView != null ) {
          v.removeViewAt(v.getChildCount() - 1);
        } else if ( ! validation.isEmpty() ) {
          if ( validationView == null ) {
            validationView = new android.widget.TextView(getAndroidContext());
            validationView.setTextColor(getTheme().getError());
            v.addView(validationView);
          }
          validationView.setText(validation);
        }
      `,
      swiftCode: `
        let v = getView() as! UIStackView;
        if v.arrangedSubviews.count == 0 { return }
        var validationView: UILabel? = v.arrangedSubviews.last == getDataView()?.getView()
          ? nil : v.arrangedSubviews.last as? UILabel;
        let validation = getValidationSlot()?.slotGet() as? String ?? "";
        if validation.isEmpty && validationView != nil {
          v.removeArrangedSubview(validationView!);
        } else if !validation.isEmpty {
          if validationView == nil {
            validationView = UILabel();
            validationView?.textColor = getTheme()!.getError();
            v.addArrangedSubview(validationView!);
          }
          validationView!.text = validation;
        }
      `,
    }
  ]
});
