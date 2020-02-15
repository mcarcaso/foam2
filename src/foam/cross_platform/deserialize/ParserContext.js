foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'ParserContext',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.deserialize.ParserContext',
      name: 'parent_'
    },
    {
      class: 'MapProperty',
      name: 'map_'
    }
  ],
  methods: [
    {
      name: 'pxGet',
      type: 'Any',
      args: [
        {
          type: 'String',
          name: 'key',
        }
      ],
      androidCode: `
        return getMap_().containsKey(key) ? getMap_().get(key) :
          getParent_() != null ? getParent_().pxGet(key) : null;
      `
    },
    {
      name: 'pxSet',
      args: [
        {
          type: 'String',
          name: 'key',
        },
        {
          type: 'Any',
          name: 'value',
        }
      ],
      androidCode: `
        getMap_().put(key, value);
      `
    },
    {
      type: 'foam.cross_platform.deserialize.ParserContext',
      name: 'pxSubContext',
      androidCode: `
        return ParserContextBuilder(getSubX())
          .setParent_(this)
          .build();
      `
    }
  ]
});
