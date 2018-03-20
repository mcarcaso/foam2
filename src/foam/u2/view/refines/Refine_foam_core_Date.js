/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  refines: "foam.core.Date",
  properties: [
    {
      class: "foam.u2.view.TableCellFormatter",
      name: "tableCellFormatter",
      value: function (date) {
        if ( date ) this.add(date.toLocaleDateString());
      }
    }
  ],
  name: "Refine_foam_core_Date",
  package: "foam.u2.view.refines"
});