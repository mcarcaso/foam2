foam.CLASS({
  package: 'foam.cross_platform.serialize.json.internal',
  name: 'SimpleOutputBuilder',
  implements: [
    'foam.cross_platform.serialize.json.internal.OutputBuilder'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'str',
    },
  ],
  methods: [
    {
      name: 'startObj',
      crossPlatformCode: `out("{");`,
    },
    {
      name: 'endObj',
      crossPlatformCode: `out("}");`,
    },
    {
      name: 'startArray',
      crossPlatformCode: `out("[");`,
    },
    {
      name: 'endArray',
      crossPlatformCode: `out("]");`,
    },
    {
      name: 'keySep',
      crossPlatformCode: `out(":");`,
    },
    {
      name: 'out',
      androidCode: `setStr(getStr() + s);`,
      swiftCode: `setStr(getStr()! + s!);`,
    },
    {
      name: 'comma',
      crossPlatformCode: `out(",");`,
    },
    {
      name: 'output',
      crossPlatformCode: `return getStr();`,
    },
    {
      name: 'reset',
      crossPlatformCode: `clearProperty("str");`,
    },
  ],
})
