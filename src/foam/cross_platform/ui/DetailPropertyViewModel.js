foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'DetailPropertyViewModel',
  requires: [
    'foam.util.ArrayDetachable',
    'foam.cross_platform.ui.widget.AxiomViewContainer',
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
      `
    },
    {
      name: 'propData',
      androidViewFactory: `
        return foam.cross_platform.ui.widget.AxiomViewContainer.AxiomViewContainerBuilder(x)
          .setDelegateAxiom(PROP())
          .build();
      `
    },
    {
      class: 'StringProperty',
      name: 'validation'
    },
  ],
  reactions: [
    ['', 'propertyChange.data', 'bindData'],
    ['', 'propertyChange.prop', 'bindData'],
  ],
  methods: [
    {
      name: 'init',
      androidCode: `bindData(null, null);`
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
                .follow(getData$().dot(getProp().getName())),
              getVisibility$()
                .follow(getProp().createVisibilitySlot(getData())),
              validationSlot == null ? null : getValidation$().follow(validationSlot)
            })
            .filter(d -> d != null)
            .toArray(foam.core.Detachable[]::new))
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
      swiftIsAvailable: `return (prop$help as? String).isEmpty ?? false;`,
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
