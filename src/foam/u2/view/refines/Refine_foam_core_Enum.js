/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  refines: "foam.core.Enum",
  properties: [
    {
      class: "foam.u2.view.TableCellFormatter",
      name: "tableCellFormatter",
      value: function (value) {
        this.add(value.label)
      }
    }
  ],
  name: "Refine_foam_core_Enum",
  package: "foam.u2.view.refines"
});