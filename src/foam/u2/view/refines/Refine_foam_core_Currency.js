/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  refines: "foam.core.Currency",
  properties: [
    {
      class: "foam.u2.view.TableCellFormatter",
      name: "tableCellFormatter",
      value: function (value) {
        this.start()
          .style({'text-align': 'left', 'padding-right': '20px'})
          .add('$' + (value/100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'))
        .end();
      }
    }
  ],
  name: "Refine_foam_core_Currency",
  package: "foam.u2.view.refines"
});