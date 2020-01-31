foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'Stack',
  swiftImports: ['UIKit'],
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
    {
      swiftType: 'UINavigationController',
      flags: ['swift'],
      name: 'navController'
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
      `,
      swiftCode: `
        setStack(getStack()! + [v]);
        let nc = getNavController();
        if getStack()!.count == 1 {
          nc.viewControllers = [v!.toStackableView()];
        } else {
          nc.pushViewController(v!.toStackableView(), animated: true);
        }
      `
    }
  ]
});
