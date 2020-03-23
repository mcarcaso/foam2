foam.CLASS({
  package: 'demo',
  name: 'Json',
  constants: [
    {
      type: 'Map',
      name: 'TEST_JSON',
      value: {
        class: "demo.AllTypes",
        longProperty: 123456789,
        stringProperty: "String!",
        booleanProperty: true,
        stringArrayProperty: [
          'Hi',
          'there'
        ],
        arrayProperty: [
          1,
          "Sup",
          true
        ],
        listProperty: [
          2,
          "Not much",
          false
        ],
        mapProperty: {
          one: `
            one
            two
          `,
          b: false,
          n: 123
        },
        fobjectProperty: {
          class: 'demo.Person',
          firstName: 'Mike'
        },
        fobjectArrayProperty: [
          {
            class: 'demo.Person',
            firstName: 'Mike1'
          },
          {
            class: 'demo.Person',
            firstName: 'Mike2'
          },
        ],
        dateProperty: 12345
      }
    },
    {
      type: 'demo.AllTypes',
      name: 'TEST_FOBJ',
      factory: function() {
        return demo.AllTypes.create(demo.Json.TEST_JSON);
      }
    },
  ],
  requires: [
    'demo.AllTypes',
    'demo.Person',
    'foam.cross_platform.deserialize.json.FObjectParser',
    'foam.cross_platform.serialize.json.Outputter',
    'foam.cross_platform.deserialize.JSON',
  ],
  tests: [
    {
      name: 'testAllTypesMap',
      androidCode: `
        Json j = Json_create().build();
        foam.cross_platform.deserialize.json.FObjectParser p = j.FObjectParser_create().build();
        foam.cross_platform.serialize.json.Outputter o = j.Outputter_create().build();

        foam.cross_platform.FObject parsed = (foam.cross_platform.FObject) foam.cross_platform.deserialize.JSON.parse(Json.TEST_JSON(), null, null);
        demo.AllTypes expected = Json.TEST_FOBJ();

        assertTrue(parsed.equals(expected));
        assertNotNull(o.stringify(parsed));
        assertTrue(expected.equals(p.parseString(o.stringify(expected), null)));
      `,
      swiftCode: `
        let j = Json_create().build();
        let p = j.FObjectParser_create().build();
        let o = j.Outputter_create().build();

        let parsed = foam_cross_platform_deserialize_JSON.parse(demo_Json.TEST_JSON(), nil, nil) as! foam_cross_platform_FObject
        let expected = demo_Json.TEST_FOBJ();

        XCTAssertTrue(parsed.equals(expected));
        XCTAssertNotNil(o.stringify(parsed));
        XCTAssertTrue(expected.equals(p.parseString(o.stringify(expected), nil)));
      `,
    },
    {
      name: 'testAllTypesString',
      androidCode: `
        Json j = Json_create().build();
        foam.cross_platform.deserialize.json.FObjectParser p = j.FObjectParser_create().build();
        foam.cross_platform.serialize.json.Outputter o = j.Outputter_create().build();

        String s = <%=v(JSON.stringify(demo.Json.TEST_JSON))%>;
        demo.AllTypes parsed = (demo.AllTypes) p.parseString(s, null);
        demo.AllTypes expected = Json.TEST_FOBJ();

        assertTrue(parsed.equals(expected));
        assertNotNull(o.stringify(parsed));
        assertTrue(expected.equals(p.parseString(o.stringify(expected), null)));
      `,
      swiftCode: `
        let j = Json_create().build();
        let p = j.FObjectParser_create().build();
        let o = j.Outputter_create().build();

        let s = <%=v(JSON.stringify(demo.Json.TEST_JSON))%>;
        let parsed = p.parseString(s, nil) as! demo_AllTypes;
        let expected = demo_Json.TEST_FOBJ();

        XCTAssertTrue(parsed.equals(expected));
        XCTAssertNotNil(o.stringify(parsed));
        XCTAssertTrue(expected.equals(p.parseString(o.stringify(expected), nil)));
      `
    }
  ]
});