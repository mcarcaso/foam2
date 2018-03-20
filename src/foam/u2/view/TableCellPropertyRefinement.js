/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2.view",
  name: "TableCellPropertyRefinement",
  refines: "foam.core.Property",
  properties: [
    {
      name: "tableHeaderFormatter",
      value: function (axiom) {
        this.add(axiom.label);
      }
    },
    {
      class: "foam.u2.view.TableCellFormatter",
      name: "tableCellFormatter",
      adapt: function (o, f, prop) {
        if ( foam.Function.isInstance(f) ) {
          return foam.u2.view.FnFormatter.create({
            f: f
          });
        }
        return foam.core.FObjectProperty.ADAPT.value.call(this, o, f, prop);
      },
      factory: function () {
        return foam.u2.view.FnFormatter.create({
          class: 'foam.u2.view.FnFormatter',
          f: function(value, obj, axiom) {
            this.add(value);
          }
        })
      }
    },
    {
      class: "Int",
      name: "tableWidth"
    }
  ]
});