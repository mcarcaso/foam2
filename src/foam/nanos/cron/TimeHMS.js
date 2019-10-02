/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.cron',
  name: 'TimeHMS',

  documentation: `
    Models a a time or duration in 24-hour notation.
    Does not model a date.
  `,

  properties: [
    { name: 'hour',   class: 'IntProperty' },
    { name: 'minute', class: 'IntProperty' },
    { name: 'second', class: 'IntProperty' }
  ]
});
