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
    }
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
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.SELECT()));
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
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.addView(getLabel().getView());
        v.addView(getActionButton().getView());
        return v;
      `,
      swiftFactory: `
        let lv = getLabel()!.getView()!;
        let bv = getActionButton()!.getView()!
        let v = UIStackView(arrangedSubviews: [lv, bv])
        v.axis = .vertical
        lv.translatesAutoresizingMaskIntoConstraints = false;
        bv.translatesAutoresizingMaskIntoConstraints = false;
        lv.widthAnchor.constraint(equalTo: v.widthAnchor, multiplier: 1).isActive = true;
        bv.widthAnchor.constraint(equalTo: v.widthAnchor, multiplier: 1).isActive = true;
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
  ]
});