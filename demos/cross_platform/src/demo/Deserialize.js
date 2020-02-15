foam.CLASS({
  package: 'demo',
  name: 'Deserialize',
  requires: [
    'foam.cross_platform.deserialize.json.FObjectParser',

    'foam.cross_platform.deserialize.StringPStream',
    'foam.cross_platform.deserialize.AnyChar',
    'foam.cross_platform.deserialize.Chars',
    'foam.cross_platform.deserialize.ParserContext',
    'foam.cross_platform.deserialize.Repeat',
  ],
  tests: [
    {
      name: 'testStringPStream',
      androidCode: `
        Deserialize o = Deserialize_create().build();
        
        foam.cross_platform.deserialize.ParserContext px = o.ParserContext_create().build();
        foam.cross_platform.deserialize.Parser p;
        
        foam.cross_platform.deserialize.PStream ps = o.StringPStream_create()
          .setStr("a,a,a")
          .build();
        
        p = o.Repeat_create()
          .setDelegate(o.AnyChar_create().build())
          .setDelim(o.Chars_create().setChars(",").build())
          .build();
        assertNotNull(p.parse(ps, px));

        p = o.Repeat_create()
          .setDelegate(o.AnyChar_create().build())
          .setDelim(o.Chars_create().setChars(",").build())
          .setMin(4)
          .build();
        assertNull(p.parse(ps, px));
      `
    },
  ]
});
