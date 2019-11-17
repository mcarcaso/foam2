foam.CLASS({
  package: 'foam.cross_platform',
  name: 'SubTopic',
  implements: [
    'foam.cross_platform.Topic',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Topic',
      weak: true,
      name: 'parent'
    },
    {
      class: 'StringArrayProperty',
      name: 'topics'
    },
  ],
  methods: [
    {
      name: 'pub',
      androidCode: `
        if ( getParent() == null ) return 0;
        if ( args == null ) {
          Object[] args2 = new Object[getTopics().length];
          for ( int i = 0 ; i < getTopics().length ; i++ ) {
            args2[i] = getTopics()[i];
          }
          return getParent().pub(args2);
        }
        Object[] args2 = new Object[getTopics().length + args.length];
        for ( int i = 0 ; i < getTopics().length ; i++ ) {
          args2[i] = getTopics()[i];
        }
        for ( int i = getTopics().length ; i < getTopics().length + args.length ; i++ ) {
          args2[i] = args[i];
        }
        return getParent().pub(args2);
      `,
      swiftCode: `
        if getParent() == nil { return 0; }
        if args == nil {
          return getParent()!.pub(getTopics());
        }
        let args2 = getTopics()! + args!;
        return getParent()!.pub(args2);
      `
    },
    {
      name: 'sub',
      type: 'foam.core.Detachable',
      androidCode: `
        if ( topics == null ) {
          return getParent().sub(getTopics(), listener);
        }
        String[] topics2 = new String[getTopics().length + topics.length];
        for ( int i = 0 ; i < getTopics().length ; i++ ) {
          topics2[i] = getTopics()[i];
        }
        for ( int i = getTopics().length ; i < getTopics().length + topics.length ; i++ ) {
          topics2[i] = topics[i];
        }
        return getParent().sub(topics2, listener);
      `,
      swiftCode: `
        if topics == nil {
          return getParent()!.sub(getTopics(), listener);
        }
        let topics2 = getTopics()! + topics!;
        return getParent()!.sub(topics2, listener);
      `
    },
  ]
});
