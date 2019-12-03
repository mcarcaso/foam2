foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'TopicRefine',
  refines: 'foam.core.Topic',
  properties: [
    {
      class: 'FObjectProperty',
      name: 'parent',
    }
  ],
  static: [
    {
      name: 'initSubTopic',
      args: [
        { type: 'foam.core.Topic', name: 'topic' },
        { type: 'foam.cross_platform.FObject', name: 'parent' }
      ],
      androidCode: `
        topic.setParent(parent);
        for ( foam.core.Topic t : topic.getTopics() ) {
          initSubTopic(t, topic);
        }
      `,
      swiftCode: `
        topic!.setParent(parent);
        for t in topic!.getTopics()! {
          initSubTopic(t, topic);
        }
      `
    },
  ],
  methods: [
    {
      name: 'getSubTopic',
      type: 'foam.core.Topic',
      args: [
        {
          type: 'String',
          name: 's'
        }
      ],
      androidCode: `
        for ( foam.core.Topic t : getTopics() ) {
          if ( s.equals(t.getName()) ) return t;
        }
        return null;
      `,
      swiftCode: `
        for t in getTopics()! {
          if s == t.getName() { return t; }
        }
        return nil;
      `
    },
    {
      name: 'pub',
      type: 'Integer',
      args: [
        {
          type: 'Any[]',
          name: 'args'
        }
      ],
      androidCode: `
        Object[] args2;
        if ( args != null ) {
          args2 = new Object[args.length + 1];
          args2[0] = getName();
          for ( int i = 0 ; i < args.length ; i++ ) {
            args2[i+1] = args[i];
          }
        } else {
          args2 = new Object[] { getName() };
        }
        return getParent().pub(args2);
      `,
      swiftCode: `
        var args2: [Any?]? = nil;
        if args != nil {
          args2 = [Any?](repeating: nil, count: args!.count + 1);
          args2![0] = getName();
          for i in 0..<args!.count {
            args2![i+1] = args![i];
          }
        } else {
          args2 = [getName()];
        }
        return getParent()!.pub(args2);
      `
    },
    {
      name: 'sub',
      type: 'foam.core.Detachable',
      args: [
        {
          type: 'String[]',
          name: 'topics'
        },
        {
          type: 'foam.cross_platform.Listener',
          name: 'listener'
        }
      ],
      androidCode: `
        String[] args2;
        if ( topics != null ) {
          args2 = new String[topics.length + 1];
          args2[0] = getName();
          for ( int i = 0 ; i < topics.length ; i++ ) {
            args2[i+1] = topics[i];
          }
        } else {
          args2 = new String[] { getName() };
        }
        return getParent().sub(args2, listener);
      `,
      swiftCode: `
        var args2: [String]? = nil;
        if topics != nil {
          args2 = [String](repeating: "", count: topics!.count + 1);
          args2![0] = getName()!;
          for i in 0..<topics!.count {
            args2![i+1] = topics![i];
          }
        } else {
          args2 = [getName()!];
        }
        return getParent()!.sub(args2, listener);
      `
    }
  ]
});

