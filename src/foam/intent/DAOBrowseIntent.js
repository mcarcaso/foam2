foam.CLASS({
  package: 'foam.intent',
  name: 'DAOBrowseIntent',
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
    'foam.cross_platform.ui.stack.DAOView'
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    },
    {
      name: 'citationView'
    },
  ],
  methods: [
    {
      name: 'launch',
      androidCode: `
        getStack().push(DAOView_create()
          .setData(getDao())
          .setCitationView(getCitationView())
          .build());
        return true;
      `
    }
  ]
});
