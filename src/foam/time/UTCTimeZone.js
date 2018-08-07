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
    {
      name: 'setYear',
      code: function(timestamp, value) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        d.setUTCFullYear(value)
        timestamp.epoch = d.getTime() / 1000;
      },
    },
    {
      name: 'setMonth',
      code: function(timestamp, value) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        d.setUTCMonth(value - 1);
        timestamp.epoch = d.getTime() / 1000;
      },
    },
    {
      name: 'setDay',
      code: function(timestamp, value) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        d.setUTCDate(value);
        timestamp.epoch = d.getTime() / 1000;
      },
    },
    {
      name: 'setHour',
      code: function(timestamp, value) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        d.setUTCHours(value);
        timestamp.epoch = d.getTime() / 1000;
      },
    },
    {
      name: 'setMinute',
      code: function(timestamp, value) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        d.setUTCMinutes(value);
        timestamp.epoch = d.getTime() / 1000;
      },
    },
    {
      name: 'setSecond',
      code: function(timestamp, value) {
        var d = new Date(0);
        d.setUTCSeconds(timestamp.epoch);
        d.setUTCSeconds(value);
        timestamp.epoch = d.getTime() / 1000;
      },
    },
  ],
});
