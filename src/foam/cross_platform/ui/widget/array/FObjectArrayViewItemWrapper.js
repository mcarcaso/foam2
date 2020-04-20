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