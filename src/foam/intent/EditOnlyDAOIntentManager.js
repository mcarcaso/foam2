foam.CLASS({
  package: 'foam.intent',
  name: 'EditOnlyDAOIntentManager',
  implements: [
    'foam.intent.IntentManager'
  ],
  requires: [
    'foam.intent.DAOUpdateIntent'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.intent.IntentManager',
      name: 'delegate'
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'editOnlyDao'
    }
  ],
  methods: [
    {
      name: 'launchIntent',
      androidCode: `
        if ( foam.intent.DAOBrowseIntent.CLS_().isInstance(intent) ) {
          foam.intent.DAOBrowseIntent i = (foam.intent.DAOBrowseIntent) intent;
          if ( i.getDao() == getEditOnlyDao() ) {
            i.setIsCreateEnabled(true);
            i.setIsDeleteEnabled(true);
          }
        } else if ( foam.intent.DAOReadIntent.CLS_().isInstance(intent) ) {
          if ( getEditOnlyDao() == ((foam.intent.DAOReadIntent) intent).getDao() ) {
            foam.intent.DAOUpdateIntent i = DAOUpdateIntent_create().build();
            i.copyFrom(intent);
            intent = i;
          }
        }
        return getDelegate().launchIntent(intent);
      `,
      swiftCode: `
        var intent = intent;
        if ( foam_intent_DAOBrowseIntent.CLS_().isInstance(intent) ) {
          let i = intent as! foam_intent_DAOBrowseIntent;
          if ( i.getDao() === getEditOnlyDao() ) {
            i.setIsCreateEnabled(true);
            i.setIsDeleteEnabled(true);
          }
        } else if ( foam_intent_DAOReadIntent.CLS_().isInstance(intent) ) {
          if ( getEditOnlyDao() === (intent as! foam_intent_DAOReadIntent).getDao() ) {
            let i = DAOUpdateIntent_create().build();
            i.copyFrom(intent);
            intent = i;
          }
        }
        return getDelegate()!.launchIntent(intent);
      `,
    }
  ]
});