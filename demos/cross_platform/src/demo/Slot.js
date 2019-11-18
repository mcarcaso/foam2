foam.CLASS({
  package: 'demo',
  name: 'Slot',
  requires: [
    'demo.Person'
  ],
  properties: [
    {
      name: 'a'
    },
    {
      class: 'StringProperty',
      name: 'b',
      expressionArgs: ['a$a'],
      androidExpression: `return a$a != null ? a$a.toString() : "";`,
      swiftExpression: `return a$a as? String ?? "";`,
    }
  ],
  tests: [
    {
      name: 'testFollow',
      androidCode: `
        Slot o1 = Slot_create()
          .setA("A")
          .build();
        Slot o2 = Slot_create()
          .build();

        o1.onDetach(o2.getA$().linkFrom(o1.getA$()));
        assertEquals(o2.getA(), "A");

        o2.setA("B");
        assertEquals(o1.getA(), "B");
      `,
      swiftCode: `
        let o1 = Slot_create()
          .setA("A")
          .build();
        let o2 = Slot_create()
          .build();

        o1.onDetach(o2.getA$().linkFrom(o1.getA$()));
        XCTAssertEqual(o2.getA() as? String, "A");

        o2.setA("B");
        XCTAssertEqual(o1.getA() as? String, "B");
      `
    },
    {
      name: 'testSubSlot',
      androidCode: `
        Slot t = Slot_create().build();
        Slot t2 = Slot_create().build();
        t2.setA("A");
        t.setA(t2);
        
        final foam.core.SlotInterface s = t.getA$().dot("a");
        assertEquals(s.slotGet(), "A");
        
        final int[] i = {0};
        s.slotSub(<%=listener(\`
          i[0] += 1;
          assertEquals(s.slotGet(), "A2");
        \`)%>);
        t2.setA("A2");
        assertEquals(i[0], 1);
      `,
      swiftCode: `
        let t = Slot_create().build();
        let t2 = Slot_create().build();
        t2.setA("A");
        t.setA(t2);
        
        let s = t.getA$().dot("a")!;
        XCTAssertEqual(s.slotGet() as? String, "A");
        
        var i = 0;
        weak var weakS = s;
        _ = s.slotSub(<%=listener(\`
          i += 1;
          XCTAssertEqual(weakS!.slotGet() as? String, "A2");
        \`)%>);
        t2.setA("A2");
        XCTAssertEqual(i, 1);
      `
    },
    {
      name: 'testSubSlot2',
      androidCode: `
        Slot t = Slot_create()
          .setA("A")
          .build();
        Slot t2 = Slot_create()
          .setA(t)
          .build();

        final int[] slotCount = new int[2];

        foam.core.SlotInterface s1 = t.getA$();
        foam.core.SlotInterface s2 = t2.getSlot("a$a");

        s1.slotSub(<%=listener(\`
            slotCount[0] += 1;
        \`)%>);

        s2.slotSub(<%=listener(\`
            slotCount[1] += 1;
        \`)%>);

        assertEquals(s2.slotGet(), "A");
        assertEquals("s1 pubs", slotCount[0], 0);
        assertEquals("s2 pubs", slotCount[1], 0);

        t.setA("B");

        assertEquals(s2.slotGet(), "B");
        assertEquals("s1 pubs", slotCount[0], 1);
        assertEquals("s2 pubs", slotCount[1], 1);
      `,
      swiftCode: `
        let t = Slot_create()
          .setA("A")
          .build();
        let t2 = Slot_create()
          .setA(t)
          .build();

        var slotCount = [0, 0];

        let s1 = t.getA$();
        let s2 = t2.getSlot("a$a")!;

        _ = s1.slotSub(<%=listener(\`
            slotCount[0] += 1;
        \`)%>);

        _ = s2.slotSub(<%=listener(\`
            slotCount[1] += 1;
        \`)%>);

        XCTAssertEqual(s2.slotGet() as? String, "A");
        XCTAssertEqual(slotCount[0], 0, "s1 pubs");
        XCTAssertEqual(slotCount[1], 0, "s2 pubs");

        t.setA("B");

        XCTAssertEqual(s2.slotGet() as? String, "B");
        XCTAssertEqual(slotCount[0], 1, "s1 pubs");
        XCTAssertEqual(slotCount[1], 1, "s2 pubs");
      `
    },
    {
      name: 'testNestedExpression',
      androidCode: `
        Slot p = Slot_create().build();
        assertEquals(p.getB(), "");

        p.setA(true);
        assertEquals(p.getB(), "");

        p.setA(Slot_create()
          .setA("A")
          .build());
        assertEquals(p.getB(), "A");
      `,
      swiftCode: `
        let p = Slot_create().build();
        XCTAssertEqual(p.getB(), "");

        p.setA(true);
        XCTAssertEqual(p.getB(), "");

        p.setA(Slot_create()
          .setA("A")
          .build());
        XCTAssertEqual(p.getB(), "A");
      `
    }
  ]
});
