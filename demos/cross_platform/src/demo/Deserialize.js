foam.CLASS({
  package: 'demo',
  name: 'Deserialize',
  requires: [
    'demo.Person',
    'foam.cross_platform.deserialize.json.FObjectParser',
  ],
  tests: [
    {
      name: 'testStringPStream',
      androidCode: `
        Deserialize o = Deserialize_create().build();
        foam.cross_platform.deserialize.json.FObjectParser p = o.FObjectParser_create().build();

        foam.cross_platform.FObject parsed = p.parseString("{class: 'demo.Person', firstName: 'Mike'}", null);
        foam.cross_platform.FObject expected = o.Person_create().build();
        assertFalse(parsed.equals(expected));

        expected.setProperty("firstName", "Mike");
        assertTrue(parsed.equals(expected));
      `
    },
  ]
});
