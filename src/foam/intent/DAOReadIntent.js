foam.CLASS({
  package: 'foam.intent',
  name: 'DAOReadIntent',
  implements: [
    'foam.intent.Intent'
  ],
  imports: [
    {
      type: 'foam.cross_platform.ui.stack.Stack',
      name: 'stack',
    }
  ],
  requires: [
    'foam.cross_platform.ui.stack.DAOCRUView',
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    },
    {
      name: 'id'
    },
    {
      class: 'BooleanProperty',
      name: 'isUpdateEnabled',
      value: true
    }
  ],
  methods: [
    {
      name: 'launch',
      androidCode: `
        getStack().push(DAOCRUView_create()
          .setControllerMode(foam.u2.ControllerMode.VIEW)
          .setDao(getDao())
          .setId(getId())
          .setIsUpdateEnabled(getIsUpdateEnabled())
          .build());
        return true;
      `,
      swiftCode: `
        getStack()!.push(DAOCRUView_create()
          .setControllerMode(foam_u2_ControllerMode.VIEW)
          .setDao(getDao())
          .setId(getId())
          .setIsUpdateEnabled(getIsUpdateEnabled())
          .build());
        return true;
      `,
    }
  ]
});
