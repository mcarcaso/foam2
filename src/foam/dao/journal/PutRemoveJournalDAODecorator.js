foam.CLASS({
  package: 'foam.dao.journal',
  name: 'PutRemoveJournalDAODecorator',
  extends: 'foam.dao.ProxyDAO',
  requires: [
    'foam.dao.journal.PutJournalEntry',
    'foam.dao.journal.RemoveJournalEntry',
  ],
  methods: [
    {
      name: 'put_',
      androidCode: `
        x = x.createSubContext(new java.util.HashMap() {{
          put("journalEntry", PutJournalEntry_create().setData(obj).build());
        }});
        return getDelegate().put_(x, obj);
      `,
      swiftCode: `
        let x = x?.createSubContext([
          "journalEntry": PutJournalEntry_create().setData(obj).build()
        ]);
        return getDelegate()?.put_(x, obj);
      `,
    },
    {
      name: 'remove_',
      androidCode: `
        x = x.createSubContext(new java.util.HashMap() {{
          put("journalEntry", RemoveJournalEntry_create().setData(obj).build());
        }});
        return getDelegate().remove_(x, obj);
      `,
      swiftCode: `
        let x = x?.createSubContext([
          "journalEntry": RemoveJournalEntry_create().setData(obj).build()
        ]);
        return getDelegate()?.remove_(x, obj);
      `,
    },
  ],
});