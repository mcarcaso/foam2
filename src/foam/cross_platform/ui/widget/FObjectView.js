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
        onDetach(dv.getData$().follow(getData$()));
        return dv;
      `,
      swiftFactory: `
        let dv = DefaultDetailView_create()
          .build();
        onDetach(dv.getData$().follow(getData$()));
        return dv;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.DetailPropertyView',
      name: 'picker',
      expressionArgs: ['classes'],
      androidExpression: `
        foam.cross_platform.ui.widget.DetailPropertyView dpv = DetailPropertyView_create()
          .build();
        onDetach(dpv.bindData(this, OF()));
        foam.cross_platform.ui.widget.DAOChoiceView v = (foam.cross_platform.ui.widget.DAOChoiceView) dpv.getDataView();
        v.setDao(ArrayDAO_create()
          .setOf(foam.cross_platform.FoamClass.CLS_())
          .setArray(classes)
          .build());
        return dpv;
      `,
      swiftExpression: `
        let dpv = DetailPropertyView_create()
          .build();
        onDetach(dpv.bindData(self, Self.OF()))
        let v = dpv.getDataView() as? foam_cross_platform_ui_widget_DAOChoiceView;
        v?.setDao(ArrayDAO_create()
          .setOf(foam_cross_platform_FoamClass.CLS_())
          .setArray(classes)
          .build());
        return dpv;
      `
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.view.View pv = getPicker().getView();
        android.view.View dv = getDetailView().getView();

        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.addView(pv);
        v.addView(dv);

        pv.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
          android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
          android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
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
        data.copyFrom(getData());
        setData(data);
      `,
      swiftCode: `
        let cls = getOf();
        if cls == nil { return }
        if foam_cross_platform_Lib.equals(cls, getData()?.getCls_()) { return }
        let data = cls?.createBuilder(getSubX())?.builderBuild();
        data?.copyFrom(getData());
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