foam.INTERFACE({
  package: 'foam.time',
  name: 'TimeZone',
  methods: [
    {
      name: 'getYear',
      args: [ { name: 'timestamp', of: 'foam.time.Timestamp' } ],
    },
    {
      name: 'getMonth',
      args: [ { name: 'timestamp', of: 'foam.time.Timestamp' } ],
    },
    {
      name: 'getDay',
      args: [ { name: 'timestamp', of: 'foam.time.Timestamp' } ],
    },
    {
      name: 'getHour',
      args: [ { name: 'timestamp', of: 'foam.time.Timestamp' } ],
    },
    {
      name: 'getMinute',
      args: [ { name: 'timestamp', of: 'foam.time.Timestamp' } ],
    },
    {
      name: 'getSecond',
      args: [ { name: 'timestamp', of: 'foam.time.Timestamp' } ],
    },
    {
      name: 'setYear',
      args: [
        { name: 'timestamp', of: 'foam.time.Timestamp' },
        { name: 'value' }
      ],
    },
    {
      name: 'setMonth',
      args: [
        { name: 'timestamp', of: 'foam.time.Timestamp' },
        { name: 'value' }
      ],
    },
    {
      name: 'setDay',
      args: [
        { name: 'timestamp', of: 'foam.time.Timestamp' },
        { name: 'value' }
      ],
    },
    {
      name: 'setHour',
      args: [
        { name: 'timestamp', of: 'foam.time.Timestamp' },
        { name: 'value' }
      ],
    },
    {
      name: 'setMinute',
      args: [
        { name: 'timestamp', of: 'foam.time.Timestamp' },
        { name: 'value' }
      ],
    },
    {
      name: 'setSecond',
      args: [
        { name: 'timestamp', of: 'foam.time.Timestamp' },
        { name: 'value' }
      ],
    },
  ],
});
