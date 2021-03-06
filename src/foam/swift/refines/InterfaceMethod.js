/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.refines',
  name: 'InterfaceMethodSwiftRefinement',
  refines: 'foam.core.internal.InterfaceMethod',
  flags: ['swift'],
  requires: [
    'foam.swift.ProtocolMethod',
  ],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'swiftSupport',
      value: true,
    },
    {
      class: 'StringProperty',
      name: 'swiftCode_DELETE',
      value: 'fatalError()',
    }
  ],
  methods: [
    function writeToSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      if ( ! this.swiftSupport ) return;
      cls.method(this.ProtocolMethod.create({
        name: this.swiftName,
        returnType: this.swiftType,
        args: this.swiftArgs,
        throws: this.swiftThrows,
      }));
    },
  ]
});
