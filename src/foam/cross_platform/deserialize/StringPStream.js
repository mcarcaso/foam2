foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'StringPStream',
  implements: [
    'foam.cross_platform.deserialize.PStream',
  ],
  requires: [
    'foam.cross_platform.deserialize.ProxyPStream',
  ],
  properties: [
    {
      androidType: 'String',
      swiftType: '[Character]',
      name: 'str',
      swiftAdapt: `
        if newValue is String {
          return Array(newValue as! String)
        }
        return newValue as! [Character]
      `
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
        return getStr()[getPos()];
      `
    },
    {
      name: 'valid',
      androidCode: `
        return getPos() < getStr().length();
      `,
      swiftCode: `
        return getPos() < getStr().count;
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
        while ( end instanceof foam.cross_platform.deserialize.ProxyPStream ) {
          end = ((foam.cross_platform.deserialize.ProxyPStream) end).getDelegate();
        }
        return getStr().substring(getPos(), ((StringPStream) end).getPos());
      `,
      swiftCode: `
        var end = end
        while end is foam_cross_platform_deserialize_ProxyPStream {
          end = (end as! foam_cross_platform_deserialize_ProxyPStream).getDelegate()
        }
        let endStr = end as! foam_cross_platform_deserialize_StringPStream;
        let chars = (end as! foam_cross_platform_deserialize_StringPStream).getStr();
        return String(chars.dropFirst(getPos()).dropLast(chars.count - endStr.getPos()))
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
