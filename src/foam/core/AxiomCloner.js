/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.core',
  name: 'AxiomCloner',
  documentation: 'An axiom that clones an axiom from another model.',
  properties: [
    {
      class: 'ClassProperty',
      name: 'from'
    },
    {
      class: 'StringProperty',
      name: 'axiom'
    },
    {
      class: 'StringProperty',
      name: 'name',
      transient: true,
      expression: function(axiom) {
        return axiom + '_cloner';
      }
    },
    {
      class: 'MapProperty',
      name: 'config'
    }
  ],
  methods: [
    function installInClass(cls) {
      var axiom = this.from.getAxiomByName(this.axiom);
      if ( ! axiom ) {
        throw `Cannot find ${this.axiom} on ${this.from.id}`;
      }
      axiom = axiom.clone().copyFrom(this.config);
      cls.installAxiom(axiom);
    }
  ]
});

foam.LIB({
  name: 'foam',
  methods: [
    function axiomCloner(from, axiom, config) {
      return {
        class: 'foam.core.AxiomCloner',
        from: from,
        axiom: axiom,
        config: config
      };
    }
  ]
});