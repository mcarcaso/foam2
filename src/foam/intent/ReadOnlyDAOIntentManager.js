foam.CLASS({
  package: 'foam.intent',
  name: 'ReadOnlyDAOIntentManager',
  implements: [
    'foam.intent.IntentManager'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.intent.IntentManager',
      name: 'delegate'
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'readOnlyDao'
    }
  ],
  methods: [
    {
      name: 'launchIntent',
      androidCode: `
        if ( foam.intent.DAOBrowseIntent.CLS_().isInstance(intent) ) {
          foam.intent.DAOBrowseIntent i = (foam.intent.DAOBrowseIntent) intent;
          if ( i.getDao() == getReadOnlyDao() ) {
            i.setIsCreateEnabled(false);
            i.setIsDeleteEnabled(false);
          }
        } else if ( foam.intent.DAOReadIntent.CLS_().isInstance(intent) ) {
          foam.intent.DAOReadIntent i = (foam.intent.DAOReadIntent) intent;
          if ( i.getDao() == getReadOnlyDao() ) {
            i.setIsUpdateEnabled(false);
          }
        }
        return getDelegate().launchIntent(intent);
      `,
      swiftCode: `
        if ( foam_intent_DAOBrowseIntent.CLS_().isInstance(intent) ) {
          let i = intent as! foam_intent_DAOBrowseIntent;
          if ( i.getDao() === getReadOnlyDao() ) {
            i.setIsCreateEnabled(false);
            i.setIsDeleteEnabled(false);
          }
        } else if ( foam_intent_DAOReadIntent.CLS_().isInstance(intent) ) {
          let i = intent as! foam_intent_DAOReadIntent;
          if ( i.getDao() === getReadOnlyDao() ) {
            i.setIsUpdateEnabled(false);
          }
        }
        return getDelegate()!.launchIntent(intent);
      `,
    }
  ]
});