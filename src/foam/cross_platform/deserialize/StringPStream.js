foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'StringPStream',
  implements: [
    'foam.cross_platform.deserialize.PStream',
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'str',
    },
    {
      name: 'value_',
    },
    {
      class: 'IntProperty',
      name: 'pos',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.deserialize.StringPStream',
      name: 'tail_',
    },
  ],
  methods: [
    {
      name: 'head',
      androidCode: `
        return getStr().charAt(getPos());
      `,
      swiftCode: `
        let s = foam_cross_platform_type_StringType.INSTANCE();
        return s.charAt(getStr(), getPos());
      `
    },
    {
      name: 'valid',
      androidCode: `
        return getPos() < getStr().length();
      `,
      swiftCode: `
        return getPos() < getStr()!.count;
      `
    },
    {
      name: 'tail',
      androidCode: `
        if ( getTail_() == null ) {
          setTail_(StringPStreamBuilder(getSubX())
            .setStr(getStr())
            .setPos(getPos() + 1)
            .build());
        }
        return getTail_();
      `,
      swiftCode: `
        if ( getTail_() == nil ) {
          setTail_(foam_cross_platform_deserialize_StringPStream
            .foam_cross_platform_deserialize_StringPStreamBuilder(getSubX())
            .setStr(getStr())
            .setPos(getPos() + 1)
            .build());
        }
        return getTail_();
      `,
    },
    {
      name: 'substring',
      androidCode: `
        return getStr().substring(getPos(), ((StringPStream) end).getPos());
      `,
      swiftCode: `
        let s = foam_cross_platform_type_StringType.INSTANCE();
        let end = end as! foam_cross_platform_deserialize_StringPStream;
        return s.substring(getStr(), getPos(), end.getPos());
      `
    },
    {
      name: 'value',
      androidCode: `
        return getValue_();
      `,
      swiftCode: `
        return getValue_();
      `
    },
    {
      name: 'setValue',
      androidCode: `
        return StringPStreamBuilder(getSubX())
          .setStr(getStr())
          .setPos(getPos())
          .setValue_(value)
          .build();
      `,
      swiftCode: `
        return foam_cross_platform_deserialize_StringPStream
          .foam_cross_platform_deserialize_StringPStreamBuilder(getSubX())
          .setStr(getStr())
          .setPos(getPos())
          .setValue_(value)
          .build();
      `
    },
  ]
});
