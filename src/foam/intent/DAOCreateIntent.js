foam.CLASS({
  package: 'foam.intent',
  name: 'DAOCreateIntent',
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
  ],
  methods: [
    {
      name: 'launch',
      androidCode: `
        getStack().push(DAOCRUView_create()
          .setControllerMode(foam.u2.ControllerMode.CREATE)
          .setDao(getDao())
          .build());
        return true;
      `,
      swiftCode: `
        getStack()!.push(DAOCRUView_create()
          .setControllerMode(foam_u2_ControllerMode.CREATE)
          .setDao(getDao())
          .build());
        return true;
      `
    }
  ]
});
