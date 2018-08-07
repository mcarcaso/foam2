foam.CLASS({
  package: 'foam.time',
  name: 'UTCTimeZone',
  implements: [
    'foam.time.TimeZone'
  ],
  methods: [
    {
      name: 'getYear',
      code: function(timestamp) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        return d.getUTCFullYear()
      },
    },
    {
      name: 'getMonth',
      code: function(timestamp) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        return d.getUTCMonth() + 1;
      },
    },
    {
      name: 'getDay',
      code: function(timestamp) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        return d.getUTCDate();
      },
    },
    {
      name: 'getHour',
      code: function(timestamp) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        return d.getUTCHours();
      },
    },
    {
      name: 'getMinute',
      code: function(timestamp) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        return d.getUTCMinutes();
      },
    },
    {
      name: 'getSecond',
      code: function(timestamp) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        return d.getUTCSeconds();
      },
    },
  ],
});
