foam.CLASS({
  package: 'foam.util',
  name: 'SimpleDetachable',
  implements: [
    'foam.core.Detachable'
  ],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'isDetached'
    }
  ],
  methods: [
    {
      name: 'detach',
      code: function() { this.isDetached = true; },
      crossPlatformCode: `setIsDetached(true);`
    }
  ]
});
