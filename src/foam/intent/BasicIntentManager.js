foam.CLASS({
  package: 'foam.intent',
  name: 'BasicIntentManager',
  implements: [
    'foam.intent.IntentManager'
  ],
  methods: [
    {
      name: 'launchIntent',
      androidCode: `return intent.launch();`,
      swiftCode: `return intent!.launch();`,
    }
  ]
});
