foam.CLASS({
  package: 'foam.dao.journal',
  name: 'JournalEntry',
  properties: [
    {
      class: 'LongProperty',
      name: 'id',
    },
  ],
  methods: [
    {
      name: 'replay',
      args: [
        {
          type: 'foam.dao.DAO',
          name: 'dao',
        },
      ],
      androidCode: '// NOOP',
      swiftCode: '// NOOP',
    },
  ],
});
