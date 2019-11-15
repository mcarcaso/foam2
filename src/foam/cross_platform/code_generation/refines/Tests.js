foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'TestAxiom',
  properties: [
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringProperty',
      name: 'androidCode'
    },
    {
      class: 'StringProperty',
      name: 'swiftCode'
    }
  ],
  methods: [
    function addToAndroidTestClass(cls, parentCls) {
      cls.method({
        annotations: ['Test'],
        visibility: 'public',
        type: 'void',
        name: this.name,
        body: this.androidCode
      });
    },
    function addToSwiftTestClass(cls, parentCls) {
      cls.method({
        name: this.name,
        body: this.swiftCode
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.refines',
  name: 'TestAxiom',
  refines: 'foam.core.Model',
  properties: [
    {
      class: 'AxiomArray',
      name: 'tests',
      of: 'foam.cross_platform.code_generation.refines.TestAxiom'
    }
  ]
});
