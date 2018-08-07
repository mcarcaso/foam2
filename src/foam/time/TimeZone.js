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
  ],
});
