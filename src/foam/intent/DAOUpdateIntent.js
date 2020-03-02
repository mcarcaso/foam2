foam.CLASS({
  package: 'foam.intent',
  name: 'DAOUpdateIntent',
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
    'foam.cross_platform.ui.stack.DetailView',
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    },
    {
      name: 'id'
    },
  ],
  methods: [
    {
      name: 'launch',
      androidCode: `
        getStack().push(DetailView_create()
          .setControllerMode(foam.u2.ControllerMode.EDIT)
          .setDao(getDao())
          .setId(getId())
          .build());
        return true;
      `,
      swiftCode: `
        getStack()!.push(DetailView_create()
          .setControllerMode(foam_u2_ControllerMode.EDIT)
          .setDao(getDao())
          .setId(getId())
          .build());
        return true;
      `
    }
  ]
});
