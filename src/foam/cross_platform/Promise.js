foam.CLASS({
  package: 'foam.cross_platform',
  name: 'Promise',
  properties: [
    {
      name: 'error'
    },
    {
      name: 'value'
    },
    {
      androidType: 'java.util.concurrent.Semaphore',
      name: 'semaphore_'
    },
    {
      class: 'IntProperty',
      name: 'numWaiting_'
    }
  ],
  methods: [
    {
      type: 'Any',
      name: 'get',
      androidCode: `
        return null;
      `
    },
    {
      name: 'set',
      args: [
        { type: 'Any', name: 'value' }
      ],
      androidCode: `
      `
    },
    {
      name: 'error',
      args: [
        { type: 'Any', name: 'value' }
      ],
      androidCode: `
      `
    },
  ]
});
