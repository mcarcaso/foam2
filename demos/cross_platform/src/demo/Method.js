foam.CLASS({
  package: 'demo',
  name: 'Method',
  methods: [
    {
      type: 'String',
      name: 'concatStrings',
      args: [
        { type: 'String', name: 'a' },
        { type: 'String', name: 'b' },
      ],
      androidCode: `
        return a + b;
      `,
      swiftCode: `
        return a! + b!;
      `
    }
  ],
  tests: [
    {
      name: 'testConcatStrings',
      androidCode: `
        Method m = Method_create().build();
        assertEquals("ab", m.concatStrings("a", "b"));
        assertTrue(foam.cross_platform.Lib.equals(
          "ab", m.concatStrings_fn().executeFunction(new Object[] {"a", "b"})));
        foam.cross_platform.GenericFunction fn = (foam.cross_platform.GenericFunction) m.getProperty("concatStrings");
        assertTrue(foam.cross_platform.Lib.equals(
          "ab", fn.executeFunction(new Object[] {"a", "b"})));

        foam.core.Method methodAxiom = (foam.core.Method) Method.CLS_().getAxiomByName("concatStrings");
        assertTrue(foam.cross_platform.Lib.equals(
          "ab", methodAxiom.call(m, new Object[] {"a", "b"})));
      `,
      swiftCode: `
        let m = Method_create().build();
        XCTAssertEqual("ab", m.concatStrings("a", "b"));
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "ab", m.concatStrings_fn()!.executeFunction(["a", "b"])));
        let fn = m.getProperty("concatStrings") as! foam_cross_platform_GenericFunction;
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "ab", fn.executeFunction(["a", "b"])));

        let methodAxiom = demo_Method.CLS_().getAxiomByName("concatStrings") as! foam_core_Method;
        XCTAssertTrue(foam_cross_platform_Lib.equals(
          "ab", methodAxiom.call(m, ["a", "b"])));
      `,
    },
  ]
});
