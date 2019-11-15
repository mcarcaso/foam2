foam.CLASS({
  package: 'demo',
  name: 'Reaction',
  requires: [
    'demo.Person'
  ],
  topics: [
    'objChanged',
    'objFirstNameChanged',
  ],
  properties: [
    {
      name: 'obj'
    },
    {
      class: 'IntProperty',
      name: 'numPubs',
      documentation: `
        Manual setters to ensure changing this property doesn't trigger an
        infinite loop of property change events.
      `,
      androidSetter: `
        numPubs_isSet_ = true;
        numPubs_ = (int) value;
      `,
      swiftSetter: `
        numPubs_isSet_ = true;
        numPubs_ = value as? Int;
      `
    },
  ],
  reactions: [
    ['', '', 'onAnythingPubbed'],
    ['', 'propertyChange.obj', 'onObjChanged'],
    ['obj', 'propertyChange.firstName', 'onObjFirstNameChange'],
  ],
  listeners: [
    {
      name: 'onAnythingPubbed',
      androidCode: 'setNumPubs(getNumPubs() + 1);',
      swiftCode: 'setNumPubs(getNumPubs() + 1);'
    },
    {
      name: 'onObjChanged',
      androidCode: 'objChanged().pub(null);',
      swiftCode: 'objChanged().pub(nil);'
    },
    {
      name: 'onObjFirstNameChange',
      androidCode: 'objFirstNameChanged().pub(null);',
      swiftCode: 'objFirstNameChanged().pub(nil);'
    },
  ],
  tests: [
    {
      name: 'testAnythingChanged',
      androidCode: `
        Reaction r = Reaction_create().build();
        final int[] pubs = { 0, 0 };
        final foam.core.Detachable[] subs = { null, null };
        subs[0] = r.objChanged().sub(null, <%=listener(\`
          pubs[0]++;
        \`)%>);
        subs[1] = r.objFirstNameChanged().sub(null, <%=listener(\`
          pubs[1]++;
        \`)%>);

        demo.Person p = r.Person_create().build();
        assertEquals(0, r.getNumPubs());
        assertEquals("objChanged", 0, pubs[0]);
        assertEquals("objFirstNameChanged", 0, pubs[1]);

        r.setObj(p);
        assertEquals("propertyChange.obj + objChanged pubs", 2, r.getNumPubs());
        assertEquals("objChanged", 1, pubs[0]);
        assertEquals("objFirstNameChanged", 0, pubs[1]);

        p.setFirstName("Mike");
        assertEquals("additional objFirstNameChanged pub", 3, r.getNumPubs());
        assertEquals("objChanged", 1, pubs[0]);
        assertEquals("objFirstNameChanged", 1, pubs[1]);


        for ( foam.core.Detachable sub : subs ) {
          sub.detach();
        }
      `,
      swiftCode: `
        let r = Reaction_create().build();
        var pubs: [Int] = [0, 0];
        var subs: [foam_core_Detachable?] = [nil, nil];
        subs[0] = r.objChanged().sub(nil, <%=listener(\`
          pubs[0]+=1;
        \`)%>);
        subs[1] = r.objFirstNameChanged().sub(nil, <%=listener(\`
          pubs[1]+=1;
        \`)%>);

        let p = r.Person_create().build();
        XCTAssertEqual(0, r.getNumPubs());
        XCTAssertEqual(0, pubs[0], "objChanged");
        XCTAssertEqual(0, pubs[1], "objFirstNameChanged");

        r.setObj(p);
        XCTAssertEqual(2, r.getNumPubs(), "propertyChange.obj + objChanged pubs");
        XCTAssertEqual(1, pubs[0], "objChanged");
        XCTAssertEqual(0, pubs[1], "objFirstNameChanged");

        p.setFirstName("Mike");
        XCTAssertEqual(3, r.getNumPubs(), "additional objFirstNameChanged pub");
        XCTAssertEqual(1, pubs[0], "objChanged");
        XCTAssertEqual(1, pubs[1], "objFirstNameChanged");


        for sub in subs {
          sub?.detach();
        }
      `,
    }
  ]
});
