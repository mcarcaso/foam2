foam.CLASS({
  package: 'foam.cross_platform.ui.widget.array',
  name: 'FObjectArrayViewItemWrapper',
  requires: [
    'foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapperDetailView',
    'foam.core.ConstantSlot',
  ],
  implements: [
    'foam.cross_platform.ui.TitleSlotCreator'
  ],
  imports: [
    {
      name: 'fobjArrayViewOf',
      type: 'foam.cross_platform.FoamClass'
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.ui.stack.dao.CustomBrowseTitleAxiom',
      androidCode: `
        foam.cross_platform.FoamClass cls = (foam.cross_platform.FoamClass) x.getXProp("fobjArrayViewOf");
        return foam.cross_platform.ui.stack.DAOBrowseView.BROWSE + " " + cls.getI18nPlural();
      `,
      swiftCode: `
        let cls = x.getXProp("fobjArrayViewOf") as! foam_cross_platform_FoamClass;
        return foam_cross_platform_ui_stack_DAOBrowseView.BROWSE + " " + cls.getI18nPlural()!;
        `
    }
  ],
  properties: [
    {
      class: 'IntProperty',
      name: 'id',
      hidden: true
    },
    {
      class: 'FObjectProperty',
      name: 'value',
      androidFactory: `
        return getFobjArrayViewOf().createBuilder(getX()).builderBuild();
      `,
      swiftFactory: `
        return getFobjArrayViewOf()?.createBuilder(getX())?.builderBuild();
      `,
    },
  ],
  methods: [
    {
      name: 'createTitleSlot',
      androidCode: `
        if ( getValue() instanceof foam.cross_platform.ui.TitleSlotCreator ) {
          return ((foam.cross_platform.ui.TitleSlotCreator) getValue()).createTitleSlot(x);
        }
        foam.u2.ControllerMode cm = x.hasXProp("controllerMode") ?
          (foam.u2.ControllerMode) x.getXProp("controllerMode") :
          foam.u2.ControllerMode.VIEW;
        return ConstantSlot_create()
          .setValue(cm.getI18nLabel() + " " + getValue().getCls_().getI18nLabel())
          .build();
      `,
      swiftCode: `
        if ( getValue() is foam_cross_platform_ui_TitleSlotCreator ) {
          return (getValue() as! foam_cross_platform_ui_TitleSlotCreator).createTitleSlot(x);
        }
        let cm = x!.hasXProp("controllerMode") ?
          x!.getXProp("controllerMode") as! foam_u2_ControllerMode :
          foam_u2_ControllerMode.VIEW;
        return ConstantSlot_create()
          .setValue(cm.getI18nLabel()! + " " + getValue()!.getCls_()!.getI18nLabel()!)
          .build();
      `,
    }
  ]
});