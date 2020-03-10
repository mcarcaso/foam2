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
    'foam.cross_platform.ui.stack.DAOBrowseView'
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
        getStack().push(DAOBrowseView_create()
          .setData(getDao())
          .build());
        return true;
      `,
      swiftCode: `
        getStack()!.push(DAOBrowseView_create()
          .setData(getDao())
          .build());
        return true;
      `
    }
  ]
});
