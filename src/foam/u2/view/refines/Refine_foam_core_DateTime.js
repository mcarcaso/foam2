/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  refines: "foam.core.DateTime",
  properties: [
    {
      class: "foam.u2.view.TableCellFormatter",
      name: "tableCellFormatter",
      value: function (date) {
        if ( date ) this.add(date.toLocaleString());
      }
    }
  ],
  name: "Refine_foam_core_DateTime",
  package: "foam.u2.view.refines"
});
