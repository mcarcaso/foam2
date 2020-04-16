foam.CLASS({
  package: 'foam.cross_platform',
  name: 'FObjectBuilder',
  implements: [
    'foam.cross_platform.BuilderFactory'
  ],
  properties: [
    {
      class: 'ClassProperty',
      name: 'cls'
    },
    {
      class: 'MapProperty',
      name: 'args'
    }
  ],
  methods: [
    {
      name: 'createBuilder',
      androidCode: `
        foam.cross_platform.Builder builder = getCls().createBuilder(x);
        for (Object k : getArgs().keySet() ) {
          builder.setBuilderProperty(k.toString(), getArgs().get(k));
        }
        return builder;
      `,
      swiftCode: `
        let builder = getCls()?.createBuilder(x);
        for k in getArgs()?.allKeys ?? [] {
          _ = builder?.setBuilderProperty(k as! String, getArgs()![k])
        }
        return builder;
      `
    },
  ]
});