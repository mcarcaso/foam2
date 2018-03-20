/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2.view",
  name: "TableCellFormatter",
  extends: "FObjectProperty",
  requires: [
    'foam.u2.view.FnFormatter',
    'foam.core.FObjectProperty',
  ],
  properties: [
    {
      name: "of",
      value: "foam.u2.view.Formatter"
    },
    {
      name: "adapt",
      value: function (o, f, prop) {
        if ( foam.Function.isInstance(f) ) {
          return this.FnFormatter.create({f: f});
        }
        return this.FObjectProperty.ADAPT.value.call(this, o, f, prop);
      }
    },
    {
      name: "value",
      adapt: function (_, v) {
        return this.adapt.call(this, _, v, this);
      }
    }
  ]
});
