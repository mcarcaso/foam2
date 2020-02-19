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
        assertEquals(o.stringify(parsed), o.stringify(expected));
      `
    },
    {
      name: 'testOutAndParsePerson',
      androidCode: `
        Json j = Json_create().build();
        foam.cross_platform.deserialize.json.FObjectParser p = j.FObjectParser_create().build();
        foam.cross_platform.serialize.json.Outputter o = j.Outputter_create().build();

        String s1 = "{\\\\"class\\\\":\\\\"demo.Person\\\\",\\\\"isMale\\\\":true,\\\\"firstName\\\\":\\\\"Mike\\\\"}";
        demo.Person parsedP1 = (demo.Person) p.parseString(s1, null);
        demo.Person expectedP1 = j.Person_create()
          .setFirstName("Mike")
          .setIsMale(true)
          .build();
        assertTrue(parsedP1.equals(expectedP1));
        assertEquals(s1, o.stringify(expectedP1));

        String s2 = "{\\\\"class\\\\":\\\\"demo.Person\\\\",\\\\"firstName\\\\":\\\\"Mike\\\\"}";
        demo.Person parsedP2 = (demo.Person) p.parseString(s2, null);
        demo.Person expectedP2 = j.Person_create()
          .setFirstName("Mike")
          .build();
        assertTrue(parsedP2.equals(expectedP2));
        assertEquals(s2, o.stringify(expectedP2));

        assertFalse(parsedP2.equals(parsedP1));
        parsedP1.setIsMale(false);
        assertTrue(parsedP2.equals(parsedP1));
      `
    },
  ]
});
