foam.CLASS({
  package: 'foam.cross_platform.ui.widget.array',
  name: 'FObjectArrayViewItemWrapper',
  requires: [
    'foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapperDetailView',
    'foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapperCitationView',
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
        foam.cross_platform.FoamClass cls = getFobjArrayViewOf();
        Object[] axioms = cls.getAxiomsByClass(foam.cross_platform.ui.stack.dao.CustomCreateAxiom.CLS_());
        foam.cross_platform.BuilderFactory b = axioms.length == 0 ? cls :
          (foam.cross_platform.BuilderFactory) axioms[0];
        return b.createBuilder(getX()).builderBuild();
      `,
      swiftFactory: `
        let cls = getFobjArrayViewOf()!;
        let axioms = cls.getAxiomsByClass(foam_cross_platform_ui_stack_dao_CustomCreateAxiom.CLS_())!;
        let b: foam_cross_platform_BuilderFactory = axioms.count == 0 ? cls :
          axioms[0] as! foam_cross_platform_BuilderFactory;
        return b.createBuilder(getX())?.builderBuild();
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