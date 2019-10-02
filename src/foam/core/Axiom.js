/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.INTERFACE({
  package: 'foam.core',
  name: 'Axiom',

  documentation: 'Represents an axiom',

  methods: [
    {
      name: 'getName',
      type: 'String',
    }
  ]
});

foam.CLASS({
  package: 'foam.core',
  name: 'AnonymousAxiom',
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      value: 'anonymousAxiom'
    },
    {
      class: 'Function',
      name: 'installInClass'
    },
    {
      class: 'Function',
      name: 'installInProto'
    },
    {
      class: 'Function',
      name: 'buildJavaClass'
    }
  ]
});