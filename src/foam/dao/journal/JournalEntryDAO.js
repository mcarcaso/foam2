foam.CLASS({
  package: 'foam.dao.journal',
  name: 'JournalEntryDAO',
  extends: 'foam.dao.ProxyDAO',
  requires: [
    'foam.dao.QuickSink',
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'journalEntryDAO',
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'destinationDAO',
    },
    {
      name: 'delegate',
      androidFactory: `
        getJournalEntryDAO().select(QuickSink_create()
          .setPutFn(<%=fn(\`
            ((foam.dao.journal.JournalEntry)(args[0])).replay(getDestinationDAO());
            return null;
          \`)%>)
          .build());
        return getDestinationDAO();
      `,
      swiftFactory: `
        _ = getJournalEntryDAO()?.select(QuickSink_create()
          .setPutFn(<%=fn(\`
            (args?[0] as? foam_dao_journal_JournalEntry)?.replay(self?.getDestinationDAO());
            return nil;
          \`)%>)
          .build());
        return getDestinationDAO();
      `,
    },
  ],
  methods: [
    {
      name: 'put_',
      androidCode: `
        getJournalEntryDAO().put_(x, (foam.cross_platform.FObject) x.getXProp("journalEntry"));
        return getDelegate().put_(x, obj);
      `,
      swiftCode: `
        _ = getJournalEntryDAO()?.put_(x, x?.getXProp("journalEntry") as? foam_cross_platform_FObject);
        return getDelegate()?.put_(x, obj);
      `,
    },
    {
      name: 'remove_',
      androidCode: `
        getJournalEntryDAO().put_(x, (foam.cross_platform.FObject) x.getXProp("journalEntry"));
        return getDelegate().remove_(x, obj);
      `,
      swiftCode: `
        _ = getJournalEntryDAO()?.put_(x, x?.getXProp("journalEntry") as? foam_cross_platform_FObject);
        return getDelegate()?.remove_(x, obj);
      `,
    },
  ],
});