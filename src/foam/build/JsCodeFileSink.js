/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'JsCodeFileSink',
  extends: 'foam.dao.AbstractSink',

  requires: [
    'foam.build.JsCodeOutputter',
  ],

  properties: [
    {
      name: 'o',
      factory: function() { return this.JsCodeOutputter.create() }
    },
    {
      class: 'String',
      name: 'output',
    },
  ],

  methods: [
    {
      name: 'put',
      code: function(o) {
        this.output += (`
if ( ! foam.lookup('${o.id}', true) ) {
  console.log('Using stripped ${o.id}');
  ${this.o.stringify(this.__context__, o)}
}
        `);
      },
    },
  ]
});
