foam.CLASS({
  package: 'foam.dao.journal',
  name: 'EasyJournalEntryDAO',
  extends: 'foam.dao.ProxyDAO',
  requires: [
    'foam.dao.SequenceNumberDAO',
    'foam.dao.journal.FileAppendDAO',
    'foam.dao.journal.JournalEntryDAO',
    'foam.dao.journal.PutRemoveJournalDAODecorator',
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'journalFile',
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'journalEntryDAO',
      androidFactory: `
        return FileAppendDAO_create()
          .setOf(foam.dao.journal.JournalEntry.CLS_())
          .setFileName(getJournalFile())
          .build();
      `,
      swiftFactory: `
        return FileAppendDAO_create()
          .setOf(foam_dao_journal_JournalEntry.CLS_())
          .setFileName(getJournalFile())
          .build();
      `,
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'destinationDAO',
    },
    {
      name: 'delegate',
      androidFactory: `
        foam.dao.DAO j = getJournalEntryDAO();
        j = SequenceNumberDAO_create()
          .setDelegate(j)
          .setOf(j.getOf())
          .build();

        foam.dao.DAO d =  JournalEntryDAO_create()
          .setDestinationDAO(getDestinationDAO())
          .setJournalEntryDAO(j)
          .build();
        d = PutRemoveJournalDAODecorator_create()
          .setDelegate(d)
          .build();

        return d;
      `,
      swiftFactory: `
        var j = getJournalEntryDAO();
        j = SequenceNumberDAO_create()
          .setDelegate(j)
          .setOf(j?.getOf())
          .build();

        var d: foam_dao_DAO =  JournalEntryDAO_create()
          .setDestinationDAO(getDestinationDAO())
          .setJournalEntryDAO(j)
          .build();
        d = PutRemoveJournalDAODecorator_create()
          .setDelegate(d)
          .build();

        return d;
      `,
    },
  ],
});
