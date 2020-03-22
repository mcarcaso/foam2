foam.CLASS({
  package: 'foam.dao.journal',
  name: 'RemoveJournalEntry',
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
      androidCode: `dao.remove(getData());`,
      swiftCode: `_ = dao?.remove(getData());`,
    },
  ],
});