foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'Extras',
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      value: 'code_extras'
    },
    {
      class: 'StringProperty',
      name: 'swiftCode'
    },
    {
      class: 'StringProperty',
      name: 'androidCode'
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! this.swiftCode ) return;
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.extras = cls.extras.concat(this.swiftCode);
    },
    function buildAndroidClass(cls, parentCls) {
      if ( ! this.androidCode ) return;
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.extras = cls.extras.concat(this.androidCode);
    }
  ]
});
