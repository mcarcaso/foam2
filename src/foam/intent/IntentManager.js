foam.INTERFACE({
  package: 'foam.intent',
  name: 'IntentManager',
  methods: [
    {
      type: 'Boolean',
      name: 'launchIntent',
      args: [
        { type: 'foam.intent.Intent', name: 'intent' }
      ]
    }
  ]
});
