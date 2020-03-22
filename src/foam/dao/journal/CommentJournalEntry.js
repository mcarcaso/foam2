foam.CLASS({
  package: 'foam.dao.journal',
  name: 'CommentJournalEntry',
  extends: 'foam.dao.journal.ProxyJournalEntry',
  properties: [
    {
      class: 'StringProperty',
      name: 'comment',
    },
  ],
});
