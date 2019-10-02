/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.refines',
  name: 'ModelSwiftRefinement',
  refines: 'foam.core.Model',
  flags: ['swift'],
  requires: [
    'foam.swift.SwiftClass',
  ],
  axioms: [
    {
      class: 'foam.layout.SectionAxiom',
      name: 'swiftProperties'
    }
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'swiftName',
      section: 'swiftProperties',
      expression: function(id) {
        // TODO: remove this property.
        return foam.swift.toSwiftName(id);
      },
    },
    {
      class: 'BooleanProperty',
      name: 'generateSwift',
      section: 'swiftProperties',
      value: true,
    },
    {
      class: 'StringArrayProperty',
      name: 'swiftImports',
      section: 'swiftProperties',
    },
    {
      class: 'StringProperty',
      name: 'swiftExtends',
      section: 'swiftProperties',
      expression: function(extends$) {
        if ( extends$ == 'FObject' ) return 'AbstractFObject';
        return foam.swift.toSwiftType(extends$)
      },
    },
    {
      class: 'StringArrayProperty',
      name: 'swiftImplements',
      section: 'swiftProperties',
    },
    {
      class: 'StringProperty',
      name: 'swiftCode',
      section: 'swiftProperties',
    },
  ],
  methods: [
    function swiftAllImplements() {
      // Return a list of everything the model implements including swift
      // specific protocols and models that are implemented.
      return this.swiftImplements.concat(
        ( this.implements || [] )
        .filter(foam.util.flagFilter(['swift']))
        // Remove anything that's not actually an interface to avoid multiple inheritence.
        .filter(i => foam.core.InterfaceModel.isInstance(foam.lookup(i.path).model_))
        .map(function(i) {
          return foam.swift.toSwiftName(i.path)
        })
      );
    },
  ],
});
