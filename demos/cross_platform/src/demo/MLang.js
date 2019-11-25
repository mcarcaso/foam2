foam.CLASS({
  package: 'demo',
  name: 'MLang',
  requires: [
    'demo.Person',
    'foam.dao.ArraySink',
    'foam.mlang.sink.Count',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.sink.Count',
      required: true,
      name: 'countSink',
      crossPlatformFactory: `return Count_create().build();`,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.dao.ArraySink',
      required: true,
      name: 'arraySink',
      crossPlatformFactory: `return ArraySink_create().build();`,
    },
  ],
  tests: [
    {
      name: 'testCount',
      crossPlatformCode: `
        <%=vr('demo.MLang', 'o', 'MLang_create().build()')%>
        o.getCountSink().put(o, <%=nul()%>);
        <%=assertEqual(1, 'o.getCountSink().getValue()')%>
        o.getCountSink().remove(o, <%=nul()%>);
        <%=assertEqual(0, 'o.getCountSink().getValue()')%>

        o.getCountSink().put(o, <%=nul()%>);
        o.getCountSink().put(o, <%=nul()%>);
        o.getCountSink().put(o, <%=nul()%>);
        <%=assertEqual(3, 'o.getCountSink().getValue()')%>
        o.getCountSink().reset(<%=nul()%>);
        <%=assertEqual(0, 'o.getCountSink().getValue()')%>
      `
    },
    {
      name: 'testArraySink',
      androidCode: `
        demo.MLang o = MLang_create().build();

        demo.Person p1 = o.Person_create()
          .setFirstName("A")
          .build();
        demo.Person p2 = o.Person_create()
          .setFirstName("B")
          .build();

        o.getArraySink().put(p1, null);
        assertEquals(1, o.getArraySink().getArray().size());

        o.getArraySink().put(p2, null);
        assertEquals(2, o.getArraySink().getArray().size());

        o.getArraySink().remove(p1, null);
        assertEquals(1, o.getArraySink().getArray().size());

        o.getArraySink().reset(null);
        assertEquals(0, o.getArraySink().getArray().size());
      `,
      swiftCode: `
        let o = MLang_create().build();

        let p1 = o.Person_create()
          .setFirstName("A")
          .build();
        let p2 = o.Person_create()
          .setFirstName("B")
          .build();

        o.getArraySink().put(p1, nil);
        XCTAssertEqual(1, o.getArraySink().getArray().count);

        o.getArraySink().put(p2, nil);
        XCTAssertEqual(2, o.getArraySink().getArray().count);

        o.getArraySink().remove(p1, nil);
        XCTAssertEqual(1, o.getArraySink().getArray().count);

        o.getArraySink().reset(nil);
        XCTAssertEqual(0, o.getArraySink().getArray().count);
      `
    },
  ]
});
