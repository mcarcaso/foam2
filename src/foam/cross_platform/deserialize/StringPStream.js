foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'StringPStream',
  implements: [
    'foam.cross_platform.deserialize.PStream',
  ],
  requires: [
    'foam.cross_platform.deserialize.ProxyPStream',
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
public class Instance: foam_cross_platform_deserialize_PStream {
  public func head() -> Character {
    return str[pos];
  }

  public func valid() -> Bool {
    return pos < str.count;
  }

  public func tail() -> foam_cross_platform_deserialize_PStream? {
    if tail_ == nil {
      tail_ = Instance(str: str, pos: pos+1);
    }
    return tail_;
  }

  public func substring(_ end: foam_cross_platform_deserialize_PStream?) -> String? {
    var end = end
    while end is foam_cross_platform_deserialize_ProxyPStream {
      end = (end as! foam_cross_platform_deserialize_ProxyPStream).getDelegate()
    }
    let endStr = end as! Instance;
    let chars = endStr.str;
    return String(chars.dropFirst(pos).dropLast(chars.count - endStr.pos))
  }

  public func value() -> Any? {
    return value_;
  }

  public func setValue(_ value: Any?) -> foam_cross_platform_deserialize_PStream? {
    return Instance(str: str, pos: pos, value: value);
  }

  let str: [Character];
  let pos: Int;
  let value_: Any?;
  var tail_: Instance? = nil;
  init(str: [Character], pos: Int, value: Any?) {
    self.str = str;
    self.pos = pos;
    self.value_ = value
  }
  convenience init(str: [Character], pos: Int) {
    self.init(str: str, pos: pos, value: nil);
  }
  convenience init(str: String) {
    self.init(str: Array(str), pos: 0);
  }
}
      `
    }
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
      name: 'init',
      androidCode: '// NOOP',
      swiftCode: `
        print("Warning! StringPStream is far slower than StringPStream.Instance")
      `
    },
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
