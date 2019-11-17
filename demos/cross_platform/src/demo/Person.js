foam.CLASS({
  package: 'demo',
  name: 'Person',
  properties: [
    {
      class: 'StringProperty',
      name: 'firstName'
    },
    {
      class: 'StringProperty',
      name: 'lastName'
    },
    {
      class: 'StringProperty',
      name: 'fullName',
      expressionArgs: ['lastName', 'firstName'],
      androidExpression: `
        return (firstName + " " + lastName).trim();
      `,
      swiftExpression: `
        return (firstName! + " " + lastName!)
          .trimmingCharacters(in: .whitespacesAndNewlines);
      `
    },
  ],
  tests: [
    {
      name: 'testFullName',
      androidCode: `
        Person p = Person_create()
          .setFirstName("Mike")
          .setLastName("Car")
          .build();
        assertEquals("Mike Car", p.getFullName());
      `,
      swiftCode: `
        let p = Person_create()
          .setFirstName("Mike")
          .setLastName("Car")
          .build();
        XCTAssertEqual("Mike Car", p.getFullName());
      `,
    },
    {
      name: 'testListen',
      androidCode: `
        Person p = Person_create().build();

        final int[] numPubs = new int[] { 0, 0, 0, 0 };
        foam.core.Detachable[] subs =
          new foam.core.Detachable[] { null, null, null, null };
        subs[0] = p.sub(null, <%=listener(\`
            numPubs[0]++;
            sub.detach();
        \`)%>);

        subs[1] = p.sub(null, <%=listener(\`
            numPubs[1]++;
        \`)%>);

        subs[2] = p.getFirstName$().slotSub(<%=listener(\`
            numPubs[2]++;
        \`)%>);

        subs[3] = p.getFullName$().slotSub(<%=listener(\`
            numPubs[3]++;
        \`)%>);
        // Must touch the fullName to initialize its value and have it react to
        // changes in the args it subscribes to.
        p.getFullName();

        p.setFirstName("1");
        p.setLastName("2");

        assertEquals("Self-detaching listener", numPubs[0], 1);
        assertEquals("All events: firstName -> fullName + lastName -> fullName",
          numPubs[1], 4);
        assertEquals("firstName listener only fired once", numPubs[2], 1);
        assertEquals("fullName listener fired twice", numPubs[3], 2);

        for ( foam.core.Detachable sub : subs ) {
          sub.detach();
        }
      `,
      swiftCode: `
        let p = Person_create().build();

        var numPubs = [0, 0, 0, 0];
        var subs: [foam_core_Detachable?] = [nil, nil, nil, nil];
        subs[0] = p.sub(nil, <%=listener(\`
            numPubs[0]+=1;
            sub?.detach();
        \`)%>);

        subs[1] = p.sub(nil, <%=listener(\`
            numPubs[1]+=1;
        \`)%>);

        subs[2] = p.getFirstName$().slotSub(<%=listener(\`
            numPubs[2]+=1;
        \`)%>);

        subs[3] = p.getFullName$().slotSub(<%=listener(\`
            numPubs[3]+=1;
        \`)%>);
        // Must touch the fullName to initialize its value and have it react to
        // changes in the args it subscribes to.
        _ = p.getFullName();

        p.setFirstName("1");
        p.setLastName("2");

        XCTAssertEqual(numPubs[0], 1, "Self-detaching listener");
        XCTAssertEqual(numPubs[1], 4, "All events: firstName -> fullName + lastName -> fullName");
        XCTAssertEqual(numPubs[2], 1, "firstName listener only fired once");
        XCTAssertEqual(numPubs[3], 2, "fullName listener fired twice");

        for sub in subs {
          sub?.detach();
        }
      `
    },
    {
      name: 'testExpression',
      androidCode: `
        Person t = Person_create().build();
        t.setFirstName("Mike");
        t.setLastName("C");
        assertEquals(t.getFullName(), "Mike C");
        t.setLastName("D");
        assertEquals(t.getFullName(), "Mike D");
        t.setFullName("OVERRIDE");
        assertEquals(t.getFullName(), "OVERRIDE");
        t.setFirstName("Nope");
        assertEquals(t.getFullName(), "OVERRIDE");
        t.clearProperty("fullName");
        assertEquals(t.getFullName(), "Nope D");
      `,
      swiftCode: `
        let t = Person_create().build();
        t.setFirstName("Mike");
        t.setLastName("C");
        XCTAssertEqual(t.getFullName(), "Mike C");
        t.setLastName("D");
        XCTAssertEqual(t.getFullName(), "Mike D");
        t.setFullName("OVERRIDE");
        XCTAssertEqual(t.getFullName(), "OVERRIDE");
        t.setFirstName("Nope");
        XCTAssertEqual(t.getFullName(), "OVERRIDE");
        t.clearProperty("fullName");
        XCTAssertEqual(t.getFullName(), "Nope D");
      `
    },
    {
      name: 'testExpressionSlot',
      androidCode: `
        Person o = Person_create().build();
        foam.core.ExpressionSlot slot =
          foam.core.ExpressionSlot.ExpressionSlotBuilder(null).build();
        slot.setArgs(new foam.core.SlotInterface[] {
          o.getFirstName$(),
          o.getLastName$()
        });
        slot.setCode(<%=fn(\`
            return args[1] + ", " + args[0];
        \`)%>);
        
        o.setFirstName("Mike");
        o.setLastName("C");
        assertEquals(slot.slotGet(), "C, Mike");

        o.setLastName("D");
        assertEquals(slot.slotGet(), "D, Mike");
        
        o.detach();
      `,
      swiftCode: `
        let o = Person_create().build();
        let slot = foam_core_ExpressionSlot
          .foam_core_ExpressionSlotBuilder(nil).build();
        slot.setArgs([
          o.getFirstName$(),
          o.getLastName$()
        ]);
        slot.setCode(<%=fn(\`
            return String(describing: args![1]!) + ", " + String(describing: args![0]!);
        \`)%>);


        o.setFirstName("Mike");
        o.setLastName("C");
        XCTAssertEqual(slot.slotGet() as? String, "C, Mike");

        o.setLastName("D");
        XCTAssertEqual(slot.slotGet() as? String, "D, Mike");

        o.detach();
      `
    },
    {
      name: 'testHasOwnProperty',
      androidCode: `
        Person o = Person_create().build();

        assertEquals(o.hasPropertySet("firstName"), false);
        o.setFirstName("Mike");
        assertEquals(o.hasPropertySet("firstName"), true);
        assertEquals(o.getFirstName(), "Mike");

        o.setLastName("C");
        assertEquals(o.getFullName(), "Mike C");
        assertEquals(o.hasPropertySet("fullName"), false);

        o.clearProperty("firstName");
        assertEquals(o.hasPropertySet("firstName"), false);
        assertEquals(o.getFullName(), "C");

        o.detach();
      `,
      swiftCode: `
        let o = Person_create().build();

        XCTAssertEqual(o.hasPropertySet("firstName"), false);
        o.setFirstName("Mike");
        XCTAssertEqual(o.hasPropertySet("firstName"), true);
        XCTAssertEqual(o.getFirstName(), "Mike");

        o.setLastName("C");
        XCTAssertEqual(o.getFullName(), "Mike C");
        XCTAssertEqual(o.hasPropertySet("fullName"), false);

        o.clearProperty("firstName");
        XCTAssertEqual(o.hasPropertySet("firstName"), false);
        XCTAssertEqual(o.getFullName(), "C");

        o.detach();
      `
    },
    {
      name: 'testMemLeaks',
      androidCode: `
        for ( int i = 0 ; i < 30000 ; i++ ) {
          testListen();
          testExpression();
        }
      `,
      swiftCode: `
        for _ in 0..<30000 {
          testListen();
          testExpression();
        }
      `
    },
  ]
});
