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
    'foam.cross_platform.ui.stack.DetailView',
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
        getStack().push(DetailView_create()
          .setControllerMode(foam.u2.ControllerMode.CREATE)
          .setDao(getDao())
          .build());
        return true;
      `
    }
  ]
});
