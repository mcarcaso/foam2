foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'Stack',
  exports: [
    'as stack'
  ],
  properties: [
    {
      class: 'ListProperty',
      name: 'stack'
    },
    {
      class: 'IntProperty',
      flags: ['android'],
      name: 'contentId'
    },
    {
      androidType: 'androidx.fragment.app.FragmentManager',
      flags: ['android'],
      name: 'fragmentManager'
    },
  ],
  methods: [
    {
      name: 'push',
      args: [
        {
          type: 'foam.cross_platform.ui.Stackable',
          name: 'v'
        }
      ],
      androidCode: `
        getStack().add(v);
        androidx.fragment.app.FragmentTransaction ft = getFragmentManager()
          .beginTransaction()
          .replace(getContentId(), v.toStackableView());
        if ( getStack().size() > 1 ) {
          ft.addToBackStack(null);
        }
        ft.commit();
      `
    }
  ]
});
