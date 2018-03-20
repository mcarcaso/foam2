/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  refines: "foam.core.Action",
  properties: [
    {
      class: "foam.u2.view.TableCellFormatter",
      name: "tableCellFormatter",
      value: function (_, obj, axiom) {
        this.
          startContext({ data: obj }).
          add(axiom).
          endContext();
      }
    },
    {
      name: "tableHeaderFormatter",
      value: function (axiom) {
        this.add(axiom.label);
      }
    }
  ],
  name: "Refine_foam_core_Action",
  package: "foam.u2.view.refines"
});
