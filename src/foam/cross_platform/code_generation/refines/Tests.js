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
    function buildAndroidResources(resources, parentCls) {
      var name = parentCls.model_.name;
      var testName = parentCls.model_.name + 'Tests';
      var testCls = resources.tests.find(t => t.name == testName);
      if ( ! testCls ) {
        testCls = foam.java.Class.create({
          package: 'tests.' + parentCls.model_.package,
          name: testName,
          imports: [
            parentCls.id,
            'static org.junit.Assert.*',
            'org.junit.Test',
          ]
        });
        testCls.method({
          name: 'getSubX',
          type: 'foam.cross_platform.Context',
          body: 'return foam.cross_platform.Context.GLOBAL();'
        });
        testCls.method({
          type: name + '.' + name + 'Builder_',
          name: name + '_create',
          body: `return ${name}.${name}Builder(getSubX());`
        });
        resources.tests.push(testCls);
      };

      testCls.method({
        annotations: ['Test'],
        visibility: 'public',
        type: 'void',
        name: this.name,
        body: foam.cpTemplate(this.androidCode, 'android')
      });

      return resources;
    },
    function buildSwiftResources(resources, parentCls) {
      var name = parentCls.model_.swiftName;
      var testName = 'test_' + name + 'Tests';
      var testCls = resources.tests.find(t => t.name == testName);
      if ( ! testCls ) {
        var testCls = foam.swift.SwiftClass.create({
          name: testName,
          extends: 'XCTestCase',
          imports: [
            'XCTest',
          ]
        });
        /*
        testCls.method({
          name: 'testMemLeaks',
          body: tests.map(t => `
            for _ in 0..<1000 {
              ${t.name}();
            }
          `).join('\n')
        });
        */
        testCls.method({
          name: 'getSubX',
          type: foam.cross_platform.Context.model_.swiftName + '?',
          body: 'return foam_cross_platform_Context.GLOBAL();'
        });
        testCls.method({
          type: name + '.' + name + 'Builder_',
          name: parentCls.name + '_create',
          body: `return ${name}.${name}Builder(getSubX());`
        });
        resources.tests.push(testCls);
      }
      testCls.method({
        name: this.name,
        body: foam.cpTemplate(this.swiftCode, 'swift')
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.refines',
  name: 'TestAxiomModelRefine',
  refines: 'foam.core.Model',
  properties: [
    {
      class: 'AxiomArray',
      name: 'tests',
      of: 'foam.cross_platform.code_generation.refines.TestAxiom'
    }
  ],
});
