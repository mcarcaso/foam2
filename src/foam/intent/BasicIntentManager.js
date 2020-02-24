foam.CLASS({
  package: 'foam.intent',
  name: 'BasicIntentManager',
  implements: [
    'foam.intent.IntentManager'
  ],
  methods: [
    {
      name: 'launchIntent',
      crossPlatformCode: `return intent.launch();`
    }
  ]
});
