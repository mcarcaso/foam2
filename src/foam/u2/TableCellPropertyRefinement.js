/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2",
  name: "TableCellPropertyRefinement",
  refines: "foam.core.Property",
  properties: [
    {
      name: "columnLabel",
      factory: function () {
        return this.label;
      }
    },
    {
      name: "tableCellView",
      value: function (obj) {
        return obj[this.name];
      }
    }
  ]
});