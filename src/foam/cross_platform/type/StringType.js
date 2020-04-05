foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'StringType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [
    { class: 'foam.pattern.Singleton' },
  ],
  constants: [
    {
      type: 'foam.cross_platform.type.StringType',
      name: 'INSTANCE',
      factory: function() {
        return foam.cross_platform.type.StringType.create();
      }
    }
  ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 5 },
  ],
  methods: [
    {
      type: 'String',
      name: 'toStringValue',
      args: [
        { type: 'Any', name: 's' }
      ],
      swiftCode: `
        return s == nil ? "" : s as? String ?? String(describing: s!);
      `
    },
    {
      type: 'Boolean',
      name: 'isEmpty',
      args: [
        { type: 'String', name: 's' }
      ],
      androidCode: `
        return s == null || s.trim().isEmpty();
      `,
      swiftCode: `
        return s?.isEmpty ?? true;
      `
    },
    {
      name: 'isInstance',
      androidCode: `
        return o instanceof String;
      `,
      swiftCode: `
        return o is String
      `,
    },
    {
      name: 'compare',
      androidCode: `
        String a = (String) o1;
        if ( o2 instanceof String == false ) return 1;
        String b = (String) o2;
        return Math.max(-1, Math.min(1, a.compareTo(b)));
      `,
      swiftCode: `
        let a = o1 as! String
        guard let b = o2 as? String else { return 1 }
        return a.compare(b).rawValue
      `,
    },
    {
      name: 'isDigit',
      type: 'Boolean',
      args: [
        { type: 'Char', name: 'c' },
      ],
      swiftCode: `
        return "0"..."9" ~= c;
      `
    },
    {
      name: 'charAt',
      type: 'Char',
      args: [
        { type: 'String', name: 's' },
        { type: 'Integer', name: 'at' },
      ],
      swiftCode: `
        let s = s!;
        let charIndex = s.index(s.startIndex, offsetBy: at);
        return s[charIndex];
      `
    },
    {
      name: 'substring',
      type: 'String',
      args: [
        { type: 'String', name: 's' },
        { type: 'Integer', name: 'start' },
        { type: 'Integer', name: 'end' },
      ],
      swiftCode: `
        guard let s = s else { return nil }
        let startIndex = s.index(s.startIndex, offsetBy: start);
        let endIndex = s.index(s.startIndex, offsetBy: end);
        return String(s[startIndex..<endIndex]);
      `
    }
  ],
});
