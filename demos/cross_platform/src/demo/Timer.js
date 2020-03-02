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
      `,
      swiftPostSet: `
        if ( newValue ) {
          setLastTime_(Date());
          tick(nil, nil);
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
      `,
      swiftCode: `
        if ( !getIsStarted() ) { return; }
        let now = Date();
        setMsPassed(getMsPassed() + Int(1000 * (
          now.timeIntervalSince1970 -
          getLastTime_()!.timeIntervalSince1970)));
        setLastTime_(now);
        tick(nil, nil);
      `,
    }
  ],
  actions: [
    {
      name: 'reset',
      isAvailableExpressionArgs: ['msPassed'],
      androidIsAvailable: `return msPassed > 0;`,
      swiftIsAvailable: `return msPassed > 0;`,
      androidCode: `setMsPassed(0);`,
      swiftCode: `setMsPassed(0);`
    }
  ]
});
