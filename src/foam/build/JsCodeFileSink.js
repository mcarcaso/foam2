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
    'foam.dao.Relationship',
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
        var f = this.Relationship.isInstance(o) ? 'RELATIONSHIP' : 'CLASS';
        this.output += (`
if ( ! foam.lookup('${o.id}', true) ) {
  foam.${f}(${this.o.stringify(this.__context__, o)});
}
        `);
      },
    },
  ]
});
