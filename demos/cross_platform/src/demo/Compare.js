foam.CLASS({
  package: 'demo',
  name: 'Compare',
  requires: [
    'demo.Person',
    'foam.cross_platform.type.Util',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Util',
      name: 'util',
      hidden: true,
      androidFactory: `return Util_create().build();`,
      swiftFactory: `return Util_create().build();`,
    },
    {
      name: 'a'
    },
    {
      name: 'b'
    },
    {
      class: 'IntProperty',
      name: 'compare',
      expressionArgs: ['util', 'a', 'b'],
      androidExpression: `return util.compare(a, b);`,
      swiftExpression: `return util!.compare(a, b);`,
    }
  ],
  reactions: [
    ['a', '', 'clearCompare'],
    ['b', '', 'clearCompare'],
  ],
  listeners: [
    {
      name: 'clearCompare',
      androidCode: `
        clearProperty("compare");
      `,
      swiftCode: `
        clearProperty("compare");
      `,
    }
  ],
  tests: [
    {
      name: 'testFObjectCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(0, c.getCompare());
        
        demo.Person p1 = c.Person_create().build();
        assertEquals(u.compare(u.typeOf(p1), u.getFObjectType()), 0);
        c.setA(p1);
        assertEquals(-1, c.getCompare());
        
        demo.Person p2 = c.Person_create().build();
        c.setB(p2);
        assertEquals(0, c.getCompare());

        p1.setFirstName("A");
        assertEquals(1, c.getCompare());

        p2.setFirstName("A");
        assertEquals(0, c.getCompare());

        p1.clearProperty("firstName");
        assertEquals(-1, c.getCompare());
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;
        
        XCTAssertEqual(0, c.getCompare());
        
        let p1 = c.Person_create().build();
        XCTAssertEqual(u.compare(u.typeOf(p1), u.getFObjectType()), 0);
        c.setA(p1);
        XCTAssertEqual(-1, c.getCompare());
        
        let p2 = c.Person_create().build();
        c.setB(p2);
        XCTAssertEqual(0, c.getCompare());

        p1.setFirstName("A");
        XCTAssertEqual(1, c.getCompare());

        p2.setFirstName("A");
        XCTAssertEqual(0, c.getCompare());

        p1.clearProperty("firstName");
        XCTAssertEqual(-1, c.getCompare());
      `,
    },
    {
      name: 'testArrayCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(<%=v([1])%>), u.getArrayType()), 0);
        assertEquals(u.compare(<%=v([1])%>, <%=v([1])%>), 0);
        assertEquals(u.compare(<%=v([1, 2])%>, <%=v([1])%>), 1);
        assertEquals(u.compare(<%=v([1])%>, <%=v([1, 2])%>), -1);
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(<%=v([1])%>), u.getArrayType()), 0);
        XCTAssertEqual(u.compare(<%=v([1])%>, <%=v([1])%>), 0);
        XCTAssertEqual(u.compare(<%=v([1, 2])%>, <%=v([1])%>), 1);
        XCTAssertEqual(u.compare(<%=v([1])%>, <%=v([1, 2])%>), -1);
      `,
    },
    {
      name: 'testMapCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(<%=v({yo:'yo'})%>), u.getMapType()), 0);
        assertEquals(u.compare(<%=v({yo:1, sup:2})%>, <%=v({yo:1})%>), -1);
        assertEquals(u.compare(<%=v({yo:1})%>, <%=v({yo:1, sup:2})%>), 1);
        assertEquals(u.compare(<%=v({yo:1, sup:2})%>, <%=v({yo:1, sup:3})%>), -1);
        assertEquals(u.compare(<%=v({yo:1, sup:3})%>, <%=v({yo:1, sup:2})%>), 1);
        assertEquals(u.compare(<%=v({yo:1, sup:2})%>, <%=v({hi:3, yo:1})%>), 1);
        assertEquals(u.compare(<%=v({hi:3, yo:1})%>, <%=v({yo:1, sup:2})%>), -1);
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(<%=v({yo:'yo'})%>), u.getMapType()), 0);
        XCTAssertEqual(u.compare(<%=v({yo:1, sup:2})%>, <%=v({yo:1})%>), -1);
        XCTAssertEqual(u.compare(<%=v({yo:1})%>, <%=v({yo:1, sup:2})%>), 1);
        XCTAssertEqual(u.compare(<%=v({yo:1, sup:2})%>, <%=v({yo:1, sup:3})%>), -1);
        XCTAssertEqual(u.compare(<%=v({yo:1, sup:3})%>, <%=v({yo:1, sup:2})%>), 1);
        XCTAssertEqual(u.compare(<%=v({yo:1, sup:2})%>, <%=v({hi:3, yo:1})%>), 1);
        XCTAssertEqual(u.compare(<%=v({hi:3, yo:1})%>, <%=v({yo:1, sup:2})%>), -1);
      `,
    },
    {
      name: 'testNumberCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(12345), u.getNumberType()), 0);
        assertEquals(u.compare(1, 1), 0);
        assertEquals(u.compare(2, 1), 1);
        assertEquals(u.compare(1, 2), -1);
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(12345), u.getNumberType()), 0);
        XCTAssertEqual(u.compare(1, 1), 0);
        XCTAssertEqual(u.compare(2, 1), 1);
        XCTAssertEqual(u.compare(1, 2), -1);
      `,
    },
    {
      name: 'testStringCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf("true"), u.getStringType()), 0);
        assertEquals(u.compare("string1", 1), -1);
        assertEquals(u.compare(1, "string1"), 1);
        assertEquals(u.compare("string2", "string1"), 1);
        assertEquals(u.compare("string1", "string2"), -1);
        assertEquals(u.compare("string", "string"), 0);
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf("true"), u.getStringType()), 0);
        XCTAssertEqual(u.compare("string1", 1), -1);
        XCTAssertEqual(u.compare(1, "string1"), 1);
        XCTAssertEqual(u.compare("string2", "string1"), 1);
        XCTAssertEqual(u.compare("string1", "string2"), -1);
        XCTAssertEqual(u.compare("string", "string"), 0);
      `,
    },
    {
      name: 'testNullCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(<%=v(null)%>), u.getNullType()), 0);
        assertEquals(u.compare(<%=v(null)%>, <%=v(null)%>), 0);
        assertEquals(u.compare(<%=v(null)%>, 1234), 1);
        assertEquals(u.compare(1234, <%=v(null)%>), -1);
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(<%=v(null)%>), u.getNullType()), 0);
        XCTAssertEqual(u.compare(<%=v(null)%>, <%=v(null)%>), 0);
        XCTAssertEqual(u.compare(<%=v(null)%>, 1234), 1);
        XCTAssertEqual(u.compare(1234, <%=v(null)%>), -1);
      `,
    },
    {
      name: 'testBooleanCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(true), u.getBooleanType()), 0);
        assertEquals(u.compare(true, true), 0);
        assertEquals(u.compare(false, false), 0);
        assertEquals(u.compare(false, true), -1);
        assertEquals(u.compare(true, false), 1);
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(true), u.getBooleanType()), 0);
        XCTAssertEqual(u.compare(true, true), 0);
        XCTAssertEqual(u.compare(false, false), 0);
        XCTAssertEqual(u.compare(false, true), -1);
        XCTAssertEqual(u.compare(true, false), 1);
      `,
    },
    {
      name: 'testDateCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(new java.util.Date()), u.getDateType()), 0);
        // TODO: Do more.
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(Date()), u.getDateType()), 0);
        // TODO: Do more.
      `,
    },
    {
      name: 'testUnknownCompare',
      androidCode: `
        Compare c = Compare_create().build();
        foam.cross_platform.type.Util u = c.getUtil();

        assertEquals(u.compare(u.typeOf(new java.util.concurrent.Semaphore(1)), u.getUnknownType()), 0);
        // TODO: Do more.
      `,
      swiftCode: `
        let c = Compare_create().build();
        let u = c.getUtil()!;

        XCTAssertEqual(u.compare(u.typeOf(DispatchSemaphore(value: 1)), u.getUnknownType()), 0);
        // TODO: Do more.
      `,
    },
  ]
});
