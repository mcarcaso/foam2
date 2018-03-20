/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2",
  name: "TableCellActionRefinement",
  refines: "foam.core.Action",
  properties: [
    {
      class: "String",
      name: "columnLabel"
    },
    {
      name: "tableCellView",
      value: function (obj, e) {
        //       return foam.u2.ActionView.create({action: this, data: obj});

        return this.toE(null, e.__subContext__.createSubContext({data: obj}));
      }
    }
  ]
});