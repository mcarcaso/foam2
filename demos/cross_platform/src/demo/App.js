foam.CLASS({
  package: 'demo',
  name: 'App',
  requires: [
    'demo.AllTypes',
    'foam.dao.ArrayDAO',
    'foam.dao.GUIDDAO',
    'foam.cross_platform.Application',
    'foam.cross_platform.ui.Theme',
    'foam.intent.DAOBrowseIntent',
    'foam.dao.journal.EasyJournalEntryDAO',
  ],
  messages: [
    {
      name: 'APP_TITLE',
      message: 'FOAM Demo App',
      description: 'The title for the app.'
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Application',
      name: 'app',
      swiftOptional: false,
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.Application',
        theme: {
          class: 'foam.cross_platform.ui.Theme',
          primary: '#F27931',
          onPrimary: '#000000',
          secondary: '#253080',
          onSecondary: '#FFFFFF',
          background: '#FAFAFA',
          onBackground: '#000000',
          surface: '#FFFFFF',
          onSurface: '#000000',
          error: '#D50000',
          onError: '#FFFFFF',
          widgetTextStyle: {
            size: 18
          },
          subtitle1: {
            size: 16,
            bold: true
          },
        }
      }
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      crossPlatformFactoryValue: {
        class: 'foam.dao.GUIDDAO',
        delegate: {
          class: 'foam.dao.journal.EasyJournalEntryDAO',
          journalFile: 'allTypesDAO',
          destinationDAO: {
            class: 'foam.dao.ArrayDAO',
            of: 'demo.AllTypes'
          }
        }
      }
    }
  ],
  methods: [
    {
      name: 'startApp',
      androidCode: `
        getApp().getIntentManager().launchIntent(
          DAOBrowseIntent_create(getApp().getSubX()).setDao(getDao()).build());
      `,
      swiftCode: `
        _ = getApp().getIntentManager()!.launchIntent(
          DAOBrowseIntent_create(getApp().getSubX()).setDao(getDao()).build());
      `
    }
  ]
});