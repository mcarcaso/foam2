foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'FObjectArrayView',
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  swiftImports: [
    'UIKit',
  ],
  requires: [
    'foam.cross_platform.ui.stack.ScrollingWidgetView',
    'foam.cross_platform.ui.stack.DAOBrowseView',
    'foam.intent.DAOBrowseIntent',
    'foam.cross_platform.ui.widget.ActionButton',
    'foam.cross_platform.ui.widget.Label',
    'foam.dao.ArrayDAO',
    'foam.dao.ArraySink',
    'foam.dao.SequenceNumberDAO',
    'foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapper',
    'foam.dao.ListenerSink',
    'foam.intent.ReadOnlyDAOIntentManager',
  ],
  imports: [
    {
      name: 'intentManager',
      type: 'foam.intent.IntentManager',
    },
    {
      name: 'controllerMode',
      type: 'foam.u2.ControllerMode'
    },
    {
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    },
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  exports: [
    'of as fobjArrayViewOf'
  ],
  properties: [
    {
      class: 'ArrayProperty',
      name: 'data'
    },
    {
      class: 'ClassProperty',
      name: 'of'
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      androidFactory: `
        foam.dao.DAO d = SequenceNumberDAO_create()
          .setDelegate(ArrayDAO_create()
            .setOf(foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapper.CLS_())
            .build())
          .build()
          .orderBy(foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapper.ID());
        onDetach(d.listen(ListenerSink_create()
          .setListener(daoToData_listener())
          .build()));
        return d;
      `,
      swiftOptional: false,
      swiftFactory: `
        let d = SequenceNumberDAO_create()
          .setDelegate(ArrayDAO_create()
            .setOf(foam_cross_platform_ui_widget_array_FObjectArrayViewItemWrapper.CLS_())
            .build())
          .build()
          .orderBy(foam_cross_platform_ui_widget_array_FObjectArrayViewItemWrapper.ID())!;
        onDetach(d.listen(ListenerSink_create()
          .setListener(daoToData_listener())
          .build()));
        return d;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'label',
      androidFactory: `
        foam.cross_platform.ui.widget.Label tf = Label_create().build();
        onDetach(tf.getData$().follow(getData$().map(<%=fn(\`
          return foam.cross_platform.type.ArrayType.INSTANCE()
            .toObjectArray(args[0]).length + " items";
        \`)%>)));
        return tf;
      `,
      swiftFactory: `
        let tf = Label_create().build();
        onDetach(tf.getData$().follow(getData$().map(<%=fn(\`
          return String(foam_cross_platform_type_ArrayType.INSTANCE()
            .toObjectArray(args![0])!.count) + " items";
        \`)%>)));
        return tf;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.ActionButton',
      name: 'actionButton',
      androidFactory: `
        foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create().build();
        onDetach(ab.bindData(this, SELECT()));
        android.widget.ImageButton v = new android.widget.ImageButton(getAndroidContext());
        ab.styleButton(v);
        v.setImageResource(getAndroidContext().getResources().getIdentifier(
            getControllerMode() == foam.u2.ControllerMode.VIEW ? "dv_view" : "dv_edit",
            "drawable",
            getAndroidContext().getPackageName()));
        v.setColorFilter(getTheme().getOnSecondary());
        ab.setView(v);
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.SELECT()));
        ab.setLabel("")
        let b = ab.getView() as! UIButton;
        let i = UIImage(named: getControllerMode() === foam_u2_ControllerMode.VIEW ? "dv_view" : "dv_edit")!
        b.setImage(i, for: .normal)
        b.imageView?.contentMode = .center
        b.tintColor = getTheme()!.getOnSecondary();
        b.widthAnchor.constraint(equalToConstant: 36).isActive = true;
        b.heightAnchor.constraint(equalToConstant: 36).isActive = true;
        return ab;
      `,
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.setOrientation(android.widget.LinearLayout.HORIZONTAL);
        v.setGravity(android.view.Gravity.BOTTOM);
        v.addView(getLabel().getView());
        getLabel().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
        v.addView(getActionButton().getView());
        getActionButton().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 0));
        return v;
      `,
      swiftFactory: `
        let lv = getLabel()!.getView()!;
        let bv = getActionButton()!.getView()!
        let v = UIStackView(arrangedSubviews: [lv, bv])
        v.axis = .horizontal
        v.alignment = .bottom
        v.distribution = .equalSpacing
        v.spacing = 8;
        lv.translatesAutoresizingMaskIntoConstraints = false;
        bv.translatesAutoresizingMaskIntoConstraints = false;
        return v;
      `,
    },
    {
      class: 'BooleanProperty',
      name: 'feedback_'
    }
  ],
  reactions: [
    ['', 'propertyChange.data', 'dataToDao'],
  ],
  actions: [
    {
      name: 'select',
      androidCode: `
        foam.intent.IntentManager im = getIntentManager();
        if ( getControllerMode() == foam.u2.ControllerMode.VIEW ) {
          im = ReadOnlyDAOIntentManager_create()
            .setReadOnlyDao(getDao())
            .setDelegate(im)
            .build();
          java.util.Map m = new java.util.HashMap();
          m.put("intentManager", im);
          x = x.createSubContext(m);
        }
        im.launchIntent(DAOBrowseIntent_create(x)
          .setDao(getDao())
          .build());
      `,
      swiftCode: `
        var x = x;
        var im = getIntentManager();
        if ( getControllerMode() === foam_u2_ControllerMode.VIEW ) {
          im = ReadOnlyDAOIntentManager_create()
            .setReadOnlyDao(getDao())
            .setDelegate(im)
            .build();
          x = x!.createSubContext([
            "intentManager": im!
          ]);
        }
        _ = im!.launchIntent(DAOBrowseIntent_create(x)
          .setDao(getDao())
          .build());
      `,
    }
  ],
  listeners: [
    {
      name: 'daoToData',
      androidCode: `
        if ( getFeedback_() ) return;
        setFeedback_(true);

        foam.dao.ArraySink a = ArraySink_create().build();
        getDao().select(a);
        foam.cross_platform.FObject[] data = new foam.cross_platform.FObject[a.getArray().size()];
        for ( int i = 0 ; i < a.getArray().size() ; i++ ) {
          Object o = a.getArray().get(i);
          data[i] = ((foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapper) o).getValue();
        }
        setData(data);

        setFeedback_(false);
      `,
      swiftCode: `
        if ( getFeedback_() ) { return; }
        setFeedback_(true);

        let a = ArraySink_create().build();
        _ = getDao().select(a);
        var data: [foam_cross_platform_FObject] = []
        for o in a.getArray() {
          data.append((o as! foam_cross_platform_ui_widget_array_FObjectArrayViewItemWrapper).getValue()!);
        }
        setData(data);

        setFeedback_(false);
      `
    },
    {
      name: 'dataToDao',
      androidCode: `
        if ( getFeedback_() ) return;
        setFeedback_(true);

        foam.dao.ArraySink sink = ArraySink_create().build();
        getDao().select(sink);
        for ( Object o : sink.getArray() ) {
          getDao().remove((foam.cross_platform.FObject) o);
        }
        for ( Object o : getData() ) {
          getDao().put(FObjectArrayViewItemWrapper_create()
            .setValue(o)
            .build());
        }

        setFeedback_(false);
      `,
      swiftCode: `
        if ( getFeedback_() ) { return; }
        setFeedback_(true);

        let sink = ArraySink_create().build();
        _ = getDao().select(sink);
        for o in sink.getArray() {
          _ = getDao().remove(o as? foam_cross_platform_FObject);
        }
        for o in getData() ?? [] {
          _ = getDao().put(FObjectArrayViewItemWrapper_create()
            .setValue(o)
            .build());
        }

        setFeedback_(false);
      `,
    }
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property p = (foam.core.Property) axiom;
        setOf(p.getProperty("of"));
        return getData$().linkFrom(data.getSlot(p.getName()));
      `,
      swiftCode: `
        let p = axiom as! foam_core_Property;
        setOf(p.getProperty("of"));
        return getData$().linkFrom(data!.getSlot(p.getName()));
      `,
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_view.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M12,4.5C7,4.5 2.73,7.61 1,12c1.73,4.39 6,7.5 11,7.5s9.27,-3.11 11,-7.5c-1.73,-4.39 -6,-7.5 -11,-7.5zM12,17c-2.76,0 -5,-2.24 -5,-5s2.24,-5 5,-5 5,2.24 5,5 -2.24,5 -5,5zM12,9c-1.66,0 -3,1.34 -3,3s1.34,3 3,3 3,-1.34 3,-3 -1.34,-3 -3,-3z"/>
</vector>
      `
    },
  ]
});