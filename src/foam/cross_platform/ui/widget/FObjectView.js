foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'FObjectView',
  implements: [
    'foam.cross_platform.ui.View'
  ],
  requires: [
    'foam.cross_platform.ui.widget.DefaultDetailView',
    'foam.cross_platform.ui.widget.DetailPropertyView',
    'foam.cross_platform.ui.widget.DAOChoiceView',
    'foam.dao.ArrayDAO',
    'foam.cross_platform.ui.widget.CardView',
  ],
  imports: [
    {
      androidType: 'android.content.Context',
      name: 'androidContext',
      flags: ['android'],
    }
  ],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.cross_platform.FoamClass',
      name: 'classes',
      androidAdapt: `
        if ( newValue instanceof foam.cross_platform.FoamClass[] ) {
          return (foam.cross_platform.FoamClass[]) newValue;
        }
        foam.cross_platform.type.ArrayType at = foam.cross_platform.type.ArrayType.INSTANCE();
        if ( at.isInstance(newValue) ) {
          Object[] newValueArray = at.toObjectArray(newValue);
          foam.cross_platform.FoamClass[] adapted = new foam.cross_platform.FoamClass[newValueArray.length];
          for ( int i = 0 ; i < newValueArray.length ; i++ ) {
            if ( newValueArray[i] instanceof String ) {
              adapted[i] = getX().lookup((String) newValueArray[i]);
            } else {
              adapted[i] = (foam.cross_platform.FoamClass) newValueArray[i];
            }
          }
          return adapted;
        }
        if ( newValue != null ) {
          throw new RuntimeException();
        }
        return null;

      `,
      swiftAdapt: `
        if newValue is [foam_cross_platform_FoamClass] {
          return newValue as? [foam_cross_platform_FoamClass]
        }
        if newValue is [Any] {
          var adapted: [foam_cross_platform_FoamClass] = [];
          for o in newValue as! [Any] {
            if o is String {
              adapted.append(getX().lookup(o as? String)!);
            } else {
              adapted.append(o as! foam_cross_platform_FoamClass);
            }
          }
          return adapted;
        }
        if newValue != nil {
          fatalError();
        }
        return nil
      `
    },
    {
      class: 'ClassProperty',
      name: 'of',
      label: 'Type',
      cpView: {
        class: 'foam.cross_platform.ui.widget.DAOChoiceView'
      },
    },
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.DefaultDetailView',
      name: 'detailView',
      androidFactory: `
        foam.cross_platform.ui.widget.DefaultDetailView dv = DefaultDetailView_create()
          .build();
        onDetach(dv);
        onDetach(dv.getData$().follow(getData$()));
        return dv;
      `,
      swiftFactory: `
        let dv = DefaultDetailView_create()
          .build();
        onDetach(dv);
        onDetach(dv.getData$().follow(getData$()));
        return dv;
      `
    },
    {
      type: 'foam.cross_platform.ui.View',
      name: 'picker',
      expressionArgs: ['classes'],
      androidExpression: `
        foam.cross_platform.ui.widget.DetailPropertyView dpv = DetailPropertyView_create()
          .build();
        onDetach(dpv);
        onDetach(dpv.bindData(this, OF()));
        foam.cross_platform.ui.widget.DAOChoiceView v = (foam.cross_platform.ui.widget.DAOChoiceView) dpv.getDataView();
        v.setDao(ArrayDAO_create()
          .setOf(foam.cross_platform.FoamClass.CLS_())
          .setArray(classes)
          .build());

        foam.cross_platform.ui.widget.CardView cv = CardView_create().build();
        cv.wrapView(
          dpv.getView(),
          foam.cross_platform.ui.widget.DefaultDetailView.ITEM_VERTICAL_PADDING());
        return cv;
      `,
      swiftExpression: `
        let dpv = DetailPropertyView_create()
          .build();
        onDetach(dpv);
        onDetach(dpv.bindData(self, Self.OF()))
        let v = dpv.getDataView() as? foam_cross_platform_ui_widget_DAOChoiceView;
        v?.setDao(ArrayDAO_create()
          .setOf(foam_cross_platform_FoamClass.CLS_())
          .setArray(classes)
          .build());

        let cv = CardView_create().build();
        cv.wrapView(
          dpv.getView()!,
          foam_cross_platform_ui_widget_DefaultDetailView.ITEM_VERTICAL_PADDING());
        return cv;
      `
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        float density = getAndroidContext().getResources().getDisplayMetrics().density;
        int spacing = (int) (density * foam.cross_platform.ui.widget.DefaultDetailView.ITEM_VERTICAL_PADDING());

        android.view.View pv = getPicker().getView();
        android.widget.Space space = new android.widget.Space(getAndroidContext());
        android.view.View dv = getDetailView().getView();

        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setClipChildren(false);
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.addView(pv);
        v.addView(space);
        v.addView(dv);

        pv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        space.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
            spacing));
        dv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));

        return v;
      `,
      swiftFactory: `
        let pv = getPicker()!.getView()!
        let dv = getDetailView()!.getView()!

        let stack = UIStackView(arrangedSubviews: [pv, dv]);
        stack.axis = .vertical
        stack.spacing = CGFloat(foam_cross_platform_ui_widget_DefaultDetailView.ITEM_VERTICAL_PADDING())

        pv.translatesAutoresizingMaskIntoConstraints = false;
        dv.translatesAutoresizingMaskIntoConstraints = false;
        pv.widthAnchor.constraint(equalTo: stack.widthAnchor).isActive = true;
        dv.widthAnchor.constraint(equalTo: stack.widthAnchor).isActive = true;

        return stack;
      `
    },
  ],
  reactions: [
    ['', 'propertyChange.of', 'onOfUpdate'],
    ['', 'propertyChange.data', 'onDataUpdate'],
  ],
  listeners: [
    {
      name: 'onOfUpdate',
      androidCode: `
        foam.cross_platform.FoamClass cls = getOf();
        if ( cls == null ) return;
        if ( foam.cross_platform.Lib.equals(cls, getData() == null ? null : getData().getCls_()) ) return;
        foam.cross_platform.FObject data = cls.createBuilder(getSubX()).builderBuild();
        if ( getData() != null ) {
          data.copyFrom(getData());
          if ( ! getData().hasPropertySet("id") ) {
            data.clearProperty("id");
          }
        }
        setData(data);
      `,
      swiftCode: `
        let cls = getOf();
        if cls == nil { return }
        if foam_cross_platform_Lib.equals(cls, getData()?.getCls_()) { return }
        let data = cls?.createBuilder(getSubX())?.builderBuild();
        if getData() != nil {
          data?.copyFrom(getData());
          if ( !getData()!.hasPropertySet("id") ) {
            data?.clearProperty("id");
          }
        }
        setData(data);
      `
    },
    {
      name: 'onDataUpdate',
      androidCode: `
        setOf(getData() == null ? null : getData().getCls_());
      `,
      swiftCode: `
        setOf(getData()?.getCls_());
      `
    }
  ]
});