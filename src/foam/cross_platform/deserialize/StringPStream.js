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
        return str[pos]
      `
    },
    {
      name: 'valid',
      androidCode: `
        return getPos() < getStr().length();
      `,
      swiftCode: `
        return pos < str.count
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
        if tail_ == nil {
          tail_ = foam_swift_parse_StringPStream([
            "str": str,
            "pos": pos + 1,
          ])
        }
        return tail_!
      `,
    },
    {
      name: 'substring',
      androidCode: `
        return getStr().substring(getPos(), ((StringPStream) end).getPos());
      `,
      swiftCode: `
        let startIndex = pos
        let endIndex = (end as! foam_swift_parse_StringPStream).pos
        return String(str[startIndex..<endIndex])
      `
    },
    {
      name: 'value',
      androidCode: `
        return getValue_();
      `,
      swiftCode: `
        return value_
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
        let ps = foam_swift_parse_StringPStream([
          "str": str,
          "pos": pos,
          "value_": value,
        ])
        return ps
      `
    },
  ]
});
