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
          .setData(getDao().find(getId()))
          .build());
        return true;
      `
    }
  ]
});
