foam.CLASS({
  package: 'demo',
  name: 'Timer',
  properties: [
    {
      name: 'id',
      hidden: true
    },
    {
      class: 'StringProperty',
      name: 'name',
      value: 'My Timer'
    },
    {
      class: 'DateTimeProperty',
      name: 'lastTime_',
      hidden: true
    },
    {
      class: 'LongProperty',
      name: 'msPassed',
    },
    {
      class: 'BooleanProperty',
      name: 'isStarted',
      transient: true,
      androidPostSet: `
        if ( newValue ) {
          setLastTime_(new java.util.Date());
          tick(null, null);
        }
      `
    },
  ],
  listeners: [
    {
      name: 'tick',
      isFramed: true,
      androidCode: `
        if ( ! getIsStarted() ) return;
        java.util.Date now = new java.util.Date();
        setMsPassed(getMsPassed() + now.getTime() - getLastTime_().getTime());
        setLastTime_(now);
        tick(null, null);
      `
    }
  ],
  actions: [
    {
      name: 'reset',
      isAvailableExpressionArgs: ['msPassed'],
      androidIsAvailable: `return msPassed > 0;`,
      androidCode: `setMsPassed(0);`
    }
  ]
});
