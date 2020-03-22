foam.CLASS({
  package: 'foam.dao.journal',
  name: 'PutJournalEntry',
  extends: 'foam.dao.journal.JournalEntry',
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data',
    },
  ],
  methods: [
    {
      name: 'replay',
      androidCode: `dao.put(getData());`,
      swiftCode: `_ = dao?.put(getData());`,
    },
  ],
});