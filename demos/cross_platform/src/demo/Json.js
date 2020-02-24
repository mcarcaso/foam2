foam.CLASS({
  package: 'demo',
  name: 'Json',
  requires: [
    'demo.AllTypes',
    'demo.Person',
    'foam.cross_platform.deserialize.json.FObjectParser',
    'foam.cross_platform.serialize.json.Outputter',
  ],
  tests: [
    {
      name: 'testAllTypes',
      androidCode: `
        Json j = Json_create().build();
        foam.cross_platform.deserialize.json.FObjectParser p = j.FObjectParser_create().build();
        foam.cross_platform.serialize.json.Outputter o = j.Outputter_create().build();

        String s = <%=v(\`{
          class: "demo.AllTypes",
          long: 9223372036854775807,
          string: "String!",
          boolean: true,
          stringArray: [
            'Hi',
            'there'
          ],
          array: [
            1,
            "Sup",
            true
          ],
          list: [
            2,
            "Not much",
            false
          ],
          map: {
            one: "two",
            b: false,
            n: 123
          },
          fobject: {
            class: 'demo.Person',
            firstName: 'Mike'
          },
          fobjectArray: [
            {
              class: 'demo.Person',
              firstName: 'Mike1'
            },
            {
              class: 'demo.Person',
              firstName: 'Mike2'
            },
          ],
          date: 12345
        }\`)%>;
        demo.AllTypes parsed = (demo.AllTypes) p.parseString(s, null);
        demo.AllTypes expected = j.AllTypes_create()
          .setLong(Long.MAX_VALUE)
          .setString("String!")
          .setBoolean(true)
          .setStringArray(new String[] {
            "Hi",
            "there"
          })
          .setArray(new Object[] {
            1,
            "Sup",
            true
          })
          .setList(new java.util.ArrayList() {{
            add(2);
            add("Not much");
            add(false);
          }})
          .setMap(new java.util.HashMap() {{
            put("one", "two");
            put("b", false);
            put("n", 123);
          }})
          .setFobject(j.Person_create()
            .setFirstName("Mike")
            .build()
          )
          .setFobjectArray(new Object[] {
            j.Person_create().setFirstName("Mike1").build(),
            j.Person_create().setFirstName("Mike2").build(),
          })
          .setDate(new java.util.Date(12345))
          .build();

        assertTrue(parsed.equals(expected));
        assertNotNull(o.stringify(parsed));
        assertTrue(expected.equals(p.parseString(o.stringify(expected), null)));
      `,
      swiftCode: `
        let j = Json_create().build();
        let p = j.FObjectParser_create().build();
        let o = j.Outputter_create().build();

        let s = <%=v(\`{
          class: "demo.AllTypes",
          long: 9223372036854775807,
          string: "String!",
          boolean: true,
          stringArray: [
            'Hi',
            'there'
          ],
          array: [
            1,
            "Sup",
            true
          ],
          list: [
            2,
            "Not much",
            false
          ],
          map: {
            one: "two",
            b: false,
            n: 123
          },
          fobject: {
            class: 'demo.Person',
            firstName: 'Mike'
          },
          fobjectArray: [
            {
              class: 'demo.Person',
              firstName: 'Mike1'
            },
            {
              class: 'demo.Person',
              firstName: 'Mike2'
            },
          ],
          date: 12345
        }\`)%>;
        let parsed = p.parseString(s, nil) as! demo_AllTypes;
        let expected = j.AllTypes_create()
          .setLong(Int.max)
          .setString("String!")
          .setBoolean(true)
          .setStringArray([
            "Hi",
            "there"
          ])
          .setArray([
            1,
            "Sup",
            true
          ])
          .setList([
            2,
            "Not much",
            false
          ])
          .setMap([
            "one": "two",
            "b": false,
            "n": 123
          ])
          .setFobject(j.Person_create()
            .setFirstName("Mike")
            .build()
          )
          .setFobjectArray([
            j.Person_create().setFirstName("Mike1").build(),
            j.Person_create().setFirstName("Mike2").build(),
          ])
          .setDate(Date(timeIntervalSince1970: 12345))
          .build();

        XCTAssertTrue(parsed.equals(expected));
        XCTAssertNotNil(o.stringify(parsed));
        XCTAssertTrue(expected.equals(p.parseString(o.stringify(expected), nil)));
      `
    }
  ]
});
