foam.CLASS({
  package: 'foam.cross_platform.ui.widget.array',
  name: 'FObjectArrayViewItemWrapper',
  requires: [
    'foam.cross_platform.ui.widget.array.FObjectArrayViewItemWrapperDetailView'
  ],
  imports: [
    {
      name: 'fobjArrayViewOf',
      type: 'foam.cross_platform.FoamClass'
    }
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
});