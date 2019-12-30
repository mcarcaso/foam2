foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'DetailPropertyViewModel',
  requires: [
    'foam.cross_platform.ui.widget.PropertyViewContainer',
    'foam.util.ArrayDetachable',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop'
    },
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'Enum',
      of: 'foam.u2.Visibility',
      name: 'visibility'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'dataSub_'
    },
    {
      class: 'StringProperty',
      name: 'label',
      expressionArgs: ['prop$label'],
      androidExpression: `
        return prop$label == null ? "" : (String) prop$label;
      `,
      swiftExpression: `
        return prop$label as? String ?? "";
      `,
      androidViewFactory: `
        return foam.cross_platform.ui.widget.Label.LabelBuilder(x).build();
      `,
      swiftViewFactory: `
        return foam_cross_platform_ui_widget_Label.foam_cross_platform_ui_widget_LabelBuilder(x).build();
      `
    },
    {
      name: 'propData',
      androidViewFactory: `
        return foam.cross_platform.ui.widget.PropertyViewContainer.PropertyViewContainerBuilder(x)
          .setDataExpr(DATA())
          .setPropExpr(PROP())
          .build();
      `,
      swiftViewFactory: `
        return foam_cross_platform_ui_widget_PropertyViewContainer.foam_cross_platform_ui_widget_PropertyViewContainerBuilder(x)
          .setDataExpr(DATA())
          .setPropExpr(PROP())
          .build();
      `
    },
    {
      class: 'StringProperty',
      name: 'validation',
      androidViewFactory: `
        return foam.cross_platform.ui.widget.Label.LabelBuilder(x).build();
      `,
      swiftViewFactory: `
        return foam_cross_platform_ui_widget_Label.foam_cross_platform_ui_widget_LabelBuilder(x).build();
      `
    },
  ],
  reactions: [
    ['', 'propertyChange.data', 'bindData'],
    ['', 'propertyChange.prop', 'bindData'],
  ],
  methods: [
    {
      name: 'init',
      androidCode: `bindData(null, null);`,
      swiftCode: `bindData(nil, nil);`,
    }
  ],
  listeners: [
    {
      name: 'bindData',
      androidCode: `
        if ( getDataSub_() != null ) getDataSub_().detach();
        if ( getData() == null || getProp() == null ) return;

        foam.core.SlotInterface validationSlot =
          getProp().createValidationSlot(getData());
        setDataSub_(ArrayDetachable_create()
          .setArray(java.util.Arrays.stream(new foam.core.Detachable[] {
              getPropData$()
                .linkFrom(getData$().dot(getProp().getName())),
              getVisibility$()
                .follow(getProp().createVisibilitySlot(getData())),
              validationSlot == null ? null : getValidation$().follow(validationSlot)
            })
            .filter(d -> d != null)
            .toArray(foam.core.Detachable[]::new))
          .build());
      `,
      swiftCode: `
        getDataSub_()?.detach(); 
        if getData() == nil || getProp() == nil { return; }

        let validationSlot = getProp()!.createValidationSlot(getData());
        setDataSub_(ArrayDetachable_create()
          .setArray([
              getPropData$()
                .linkFrom(getData$().dot(getProp()!.getName())),
              getVisibility$()
                .follow(getProp()!.createVisibilitySlot(getData())),
              validationSlot == nil ? nil : getValidation$().follow(validationSlot)
            ]
            .filter({ (d) -> Bool in return d != nil })
          )
          .build());
      `
    }
  ],
  actions: [
    {
      name: 'help',
      isAvailableExpressionArgs: ['prop$help'],
      androidIsAvailable: `
        return ! foam.cross_platform.type.StringType.INSTANCE()
          .isEmpty((String) prop$help);
      `,
      swiftIsAvailable: `
        return !foam_cross_platform_type_StringType.INSTANCE()
          .isEmpty(prop$help as? String);
      `,
      androidCode: `
        com.google.android.material.snackbar.Snackbar.make(
          (android.view.View) x.getXProp("onClickView"),
          getProp().getHelp(),
          com.google.android.material.snackbar.Snackbar.LENGTH_LONG).show();
      `,
      swiftCode: `
        print(getProp()!.getHelp()!);
      `
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.CustomDetailView',
      name: 'DetailPropertyView',
    }
  ]
});
