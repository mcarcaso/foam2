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
      name: 'testPersonCompare',
      androidCode: `
        Compare c = Compare_create().build();
        
        assertEquals(0, c.getCompare());
        
        demo.Person p1 = c.Person_create().build();
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
        
        XCTAssertEqual(0, c.getCompare());
        
        let p1 = c.Person_create().build();
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
    }
  ]
});
