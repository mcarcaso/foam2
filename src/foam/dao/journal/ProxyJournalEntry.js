foam.CLASS({
  package: 'foam.dao.journal',
  name: 'ProxyJournalEntry',
  extends: 'foam.dao.journal.JournalEntry',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.dao.journal.JournalEntry',
      name: 'delegate',
    },
  ],
  methods: [
    {
      name: 'replay',
      androidCode: `getDelegate().replay(dao);`,
      swiftCode: `getDelegate().replay(dao);`,
    },
  ],
});