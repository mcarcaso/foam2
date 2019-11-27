foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'TopicRefine',
  refines: 'foam.core.Topic',
  flags: ['android'],
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
      `
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var fieldName = this.name + '_var';
      cls.field({
        visibility: 'private',
        type: 'foam.core.Topic',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.core.Topic',
        name: this.name,
        body: `
          if ( ${fieldName} == null ) {
            ${fieldName} = ${foam.android.tools.asAndroidValue(this)};
            foam.core.Topic.initSubTopic(${fieldName}, this);
          }
          return ${fieldName};
        `
      });
    },
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
      `
    }
  ]
});
