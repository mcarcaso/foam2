foam.CLASS({
  package: 'foam.dao',
  name: 'ListenerSink',
  implements: ['foam.dao.Sink'],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Listener',
      name: 'listener',
    },
  ],
  methods: [
    {
      name: 'put',
      androidCode: `
        getListener().executeListener(sub, new Object[] { "put", obj });
      `,
      swiftCode: `
        getListener()?.executeListener(sub, ["put", obj]);
      `,
    },
    {
      name: 'remove',
      androidCode: `
        getListener().executeListener(sub, new Object[] { "remove", obj });
      `,
      swiftCode: `
        getListener()?.executeListener(sub, ["remove", obj]);
      `,
    },
    {
      name: 'reset',
      androidCode: `
        getListener().executeListener(sub, new Object[] { "reset" });
      `,
      swiftCode: `
        getListener()?.executeListener(sub, ["reset"]);
      `,
    },
    {
      name: 'eof',
      androidCode: `
        getListener().executeListener(null, new Object[] { "eof" });
      `,
      swiftCode: `
        getListener()?.executeListener(nil, ["eof"]);
      `,
    },
  ]
});