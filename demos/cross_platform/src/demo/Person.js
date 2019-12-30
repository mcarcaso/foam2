foam.CLASS({
  package: 'demo',
  name: 'Person',
  ids: ['fullName'],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'isMale'
    },
    {
      class: 'StringProperty',
      name: 'firstName',
      help: 'The Person\'s first name'
    },
    {
      class: 'StringProperty',
      name: 'lastName',
      validationExpressionArgs: ['lastName'],
      androidValidationExpression: `
        return foam.cross_platform.type.StringType.INSTANCE().isEmpty(lastName) ?
          "Last name cannot be empty" : null;
      `,
      swiftValidationExpression: `
        return foam_cross_platform_type_StringType.INSTANCE().isEmpty(lastName) ?
          "Last name cannot be empty" : nil;
      `
    },
    {
      class: 'StringProperty',
      name: 'fullName',
      expressionArgs: ['lastName', 'firstName'],
      visibilityExpressionArgs: ['errors_'],
      androidVisibilityExpression: `
        return errors_.length > 0 ? foam.u2.Visibility.HIDDEN : foam.u2.Visibility.RO;
      `,
      swiftVisibilityExpression: `
        return errors_!.count > 0 ? foam_u2_Visibility.HIDDEN : foam_u2_Visibility.RO;
      `,
      androidExpression: `
        return (firstName + " " + lastName).trim();
      `,
      swiftExpression: `
        return (firstName! + " " + lastName!)
          .trimmingCharacters(in: .whitespacesAndNewlines);
      `
    },
  ],
  actions: [
    {
      name: 'appendToFirstName',
      androidCode: `
        setFirstName(getFirstName() + "0");
      `,
      swiftCode: `
        setFirstName(getFirstName()! + "0");
      `
    },
    {
      name: 'clear',
      isEnabledExpressionArgs: ['firstName', 'lastName'],
      androidIsEnabled: `
        return !foam.cross_platform.type.StringType.INSTANCE().isEmpty(lastName) ||
          !foam.cross_platform.type.StringType.INSTANCE().isEmpty(firstName);
      `,
      swiftIsEnabled: `
        return !foam_cross_platform_type_StringType.INSTANCE().isEmpty(lastName) ||
          !foam_cross_platform_type_StringType.INSTANCE().isEmpty(firstName);
      `,
      crossPlatformCode: `
        clearProperty("firstName");
        clearProperty("lastName");
      `
    },
    {
      name: 'giveLastName',
      isAvailableExpressionArgs: ['lastName'],
      androidIsAvailable: `
        return foam.cross_platform.type.StringType.INSTANCE().isEmpty(lastName);
      `,
      swiftIsAvailable: `
        return foam_cross_platform_type_StringType.INSTANCE().isEmpty(lastName);
      `,
      crossPlatformCode: `setLastName("Smith");`
    },
  ],
  tests: [
    {
      name: 'testValidation',
      androidCode: `
        Person p = Person_create()
          .setFirstName("Mike")
          .setLastName("Car")
          .build();
        assertEquals(0, p.getErrors_().length);

        p.setLastName("");
        assertEquals(1, p.getErrors_().length);
      `,
      swiftCode: `
        Person p = Person_create()
          .setFirstName("Mike")
          .setLastName("Car")
          .build();
        XCTAssertEqual(0, p.getErrors_().count);

        p.setLastName("");
        XCTAssertEqual(1, p.getErrors_().count);
      `,
    },
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
      `
    }
  ],
});
