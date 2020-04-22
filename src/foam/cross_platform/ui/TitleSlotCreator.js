foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'TitleSlotCreator',
  methods: [
    {
      type: 'foam.core.SlotInterface',
      name: 'createTitleSlot',
      args: [
        { type: 'Context', name: 'x' }
      ]
    },
  ]
});
