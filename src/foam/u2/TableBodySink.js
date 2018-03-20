/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2",
  name: "TableBodySink",
  extends: "foam.dao.AbstractSink",
  requires: [
    "foam.u2.TableBody"
  ],
  properties: [
    "columns_",
    {
      name: "body",
      factory: function () { return this.TableBody.create({ columns_: this.columns_ }); }
    }
  ],
  methods: [
    function put(obj) {
      this.body.addObj(obj);
    }
  ]
});