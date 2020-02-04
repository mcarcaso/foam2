foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'EmailCitationView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  requires: [
    'foam.util.ArrayDetachable',
    'foam.cross_platform.ui.stack.DetailView',
    {
      flags: ['swift'],
      path: 'foam.cross_platform.ui.layout.EmailCitationView',
    }
  ],
  swiftImports: [
    'UIKit'
  ],
  constants: [
    {
      type: 'Integer',
      name: 'height',
      value: 88
    },
    {
      type: 'foam.mlang.Constant',
      name: 'defaultExp',
      androidValue: `foam.mlang.Constant.ConstantBuilder(null).setValue("").build()`,
      swiftValue: `foam_mlang_Constant.foam_mlang_ConstantBuilder(nil).setValue("").build()`,
    },
  ],
  imports: [
    {
      name: 'stack',
      type: 'foam.cross_platform.ui.stack.Stack',
    },
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
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'foam.mlang.ExprProperty',
      name: 'fromExpr',
      androidValue: `DEFAULT_EXP()`,
      swiftValue: `Self.DEFAULT_EXP()`,
    },
    {
      class: 'foam.mlang.ExprProperty',
      name: 'subjectExpr',
      androidValue: `DEFAULT_EXP()`,
      swiftValue: `Self.DEFAULT_EXP()`,
    },
    {
      class: 'foam.mlang.ExprProperty',
      name: 'bodyExpr',
      androidValue: `DEFAULT_EXP()`,
      swiftValue: `Self.DEFAULT_EXP()`,
    },
    {
      class: 'foam.mlang.ExprProperty',
      name: 'timeExpr',
      androidValue: `DEFAULT_EXP()`,
      swiftValue: `Self.DEFAULT_EXP()`,
    },
    {
      class: 'foam.mlang.ExprProperty',
      name: 'avatarTextExpr',
      androidValue: `DEFAULT_EXP()`,
      swiftValue: `Self.DEFAULT_EXP()`,
    },

    {
      androidType: 'android.widget.TextView',
      swiftType: 'UILabel',
      name: 'fromView',
      androidFactory: `
        android.widget.TextView v = new android.widget.TextView(getAndroidContext());
        return v;
      `,
      swiftFactory: `
        let v = UILabel();
        return v;
      `
    },
    {
      androidType: 'android.widget.TextView',
      swiftType: 'UILabel',
      name: 'subjectView',
      androidFactory: `
        android.widget.TextView v = new android.widget.TextView(getAndroidContext());
        return v;
      `,
      swiftFactory: `
        let v = UILabel();
        return v;
      `
    },
    {
      androidType: 'android.widget.TextView',
      swiftType: 'UILabel',
      name: 'bodyView',
      androidFactory: `
        android.widget.TextView v = new android.widget.TextView(getAndroidContext());
        return v;
      `,
      swiftFactory: `
        let v = UILabel();
        return v;
      `
    },
    {
      androidType: 'android.widget.TextView',
      swiftType: 'UILabel',
      name: 'timeView',
      androidFactory: `
        android.widget.TextView v = new android.widget.TextView(getAndroidContext());
        return v;
      `,
      swiftFactory: `
        let v = UILabel();
        return v;
      `
    },
    {
      androidType: 'android.widget.TextView',
      swiftType: 'UILabel',
      name: 'avatarTextView',
      androidFactory: `
        android.widget.TextView v = new android.widget.TextView(getAndroidContext());
        return v;
      `,
      swiftFactory: `
        let v = UILabel();
        return v;
      `
    },

    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setOrientation(android.widget.LinearLayout.HORIZONTAL);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          (int) (getAndroidContext().getResources().getDisplayMetrics().density * HEIGHT())));
        v.setOnClickListener(view -> {
          getStack().push(DetailView_create()
            .setData(getData())
            .build());
        });
        return v;
      `,
      swiftFactory: `
        let v = foam_cross_platform_ui_layout_EmailCitationView.View();
        v.o = EmailCitationView_create().build();
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
    ['', 'propertyChange.avatarTextExpr', 'updateViewData'],
    ['', 'propertyChange.bodyExpr', 'updateViewData'],
    ['', 'propertyChange.data', 'updateViewData'],
    ['', 'propertyChange.fromExpr', 'updateViewData'],
    ['', 'propertyChange.subjectExpr', 'updateViewData'],
    ['', 'propertyChange.timeExpr', 'updateViewData'],

    ['', 'propertyChange.avatarTextView', 'updateViewLayout'],
    ['', 'propertyChange.bodyView', 'updateViewLayout'],
    ['', 'propertyChange.fromView', 'updateViewLayout'],
    ['', 'propertyChange.subjectView', 'updateViewLayout'],
    ['', 'propertyChange.timeView', 'updateViewLayout'],
    ['', 'propertyChange.view', 'updateViewLayout'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        setData(data);
        return null;
      `,
      swiftCode: `
        setData(data);
        return nil;
      `,
    },
  ],
  listeners: [
    {
      name: 'updateViewData',
      isFramed: true,
      androidCode: `
        getAvatarTextView().setText(getAvatarTextExpr().f(getData()).toString());
        getFromView().setText(getFromExpr().f(getData()).toString());
        getSubjectView().setText(getSubjectExpr().f(getData()).toString());
        getBodyView().setText(getBodyExpr().f(getData()).toString());
        getTimeView().setText(getTimeExpr().f(getData()).toString());
      `,
      swiftCode: `
        var text: Any? = nil;

        text = getAvatarTextExpr()!.f(getData());
        getAvatarTextView().text = text as? String ?? String(describing: text);

        text = getFromExpr()!.f(getData());
        getFromView().text = text as? String ?? String(describing: text);

        text = getSubjectExpr()!.f(getData());
        getSubjectView().text = text as? String ?? String(describing: text);

        text = getBodyExpr()!.f(getData());
        getBodyView().text = text as? String ?? String(describing: text);

        text = getTimeExpr()!.f(getData());
        getTimeView().text = text as? String ?? String(describing: text);
      `,
    },
    {
      name: 'updateViewLayout',
      isFramed: true,
      androidCode: `
        android.widget.LinearLayout v = getView();
        if ( v.getChildCount() > 0 ) {
          ((android.view.ViewGroup) v.getChildAt(1)).removeAllViews();
          v.removeAllViews();
        }

        v.addView(getAvatarTextView());

        android.widget.LinearLayout mid = new android.widget.LinearLayout(getAndroidContext());
        mid.setOrientation(android.widget.LinearLayout.VERTICAL);
        mid.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT));
        mid.addView(getFromView());
        mid.addView(getSubjectView());
        mid.addView(getBodyView());
        v.addView(mid);

        v.addView(getTimeView());
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        for v in getView()!.subviews {
          v.removeFromSuperview()
        }

        let v = getView() as! foam_cross_platform_ui_layout_EmailCitationView.View
        v.addSubview(getAvatarTextView());
        v.addSubview(getFromView());
        v.addSubview(getSubjectView());
        v.addSubview(getBodyView());
        v.addSubview(getTimeView());

        v.o?.setAvatarText(getAvatarTextView());
        v.o?.setFrom(getFromView());
        v.o?.setSubject(getSubjectView());
        v.o?.setBody(getBodyView());
        v.o?.setTime(getTimeView());
        v.o?.setParent(getView());

        v.setNeedsLayout();
      `,
    },
  ]
});
