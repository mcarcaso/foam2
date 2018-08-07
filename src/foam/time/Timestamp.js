foam.CLASS({
  package: 'foam.time',
  name: 'Timestamp',
  properties: [
    {
      class: 'Long',
      name: 'epoch',
      documentation: 'Time in seconds since Jan 1 1970 (UTC)',
    },
    // TODO: epochNS (nanoseconds) for extra precision.
  ],
});
