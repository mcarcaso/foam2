foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'Stack',
  swiftImports: ['UIKit'],
  exports: [
    'as stack'
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  requires: [
    {
      path: 'foam.cross_platform.ui.android.Toolbar',
      flags: ['android']
    }
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
      name: 'navController',
      swiftFactory: `
        let navVc = UINavigationController();
        navVc.navigationBar.barTintColor = getTheme()!.getPrimary();
        navVc.navigationBar.tintColor = getTheme()!.getOnPrimary();
        navVc.navigationBar.isTranslucent = false;
        return navVc;
      `
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class ToolbarFragment extends androidx.fragment.app.Fragment {
          private foam.cross_platform.ui.android.Toolbar toolbar = null;
          public int backgroundColor;
          public ToolbarFragment(foam.cross_platform.Context x) {
            this.toolbar = foam.cross_platform.ui.android.Toolbar
              .ToolbarBuilder(x)
              .build();
          }
          public foam.cross_platform.ui.android.Toolbar getToolbar() {
            return toolbar;
          }
          public android.view.View onCreateView(
              android.view.LayoutInflater inflater,
              android.view.ViewGroup container,
              android.os.Bundle savedInstanceState) {
            android.widget.LinearLayout v =
              new android.widget.LinearLayout(getContext());
            v.setOrientation(android.widget.LinearLayout.VERTICAL);

            android.widget.Toolbar toolbar =
              new android.widget.Toolbar(getContext());
            toolbar.setElevation(8);
            getToolbar().setView(toolbar);
            v.addView(toolbar);

            v.setBackgroundColor(backgroundColor);

            return v;
          }
        }
      `
    }
  ],
  methods: [
    {
      name: 'onBackPressed',
      flags: ['android'],
      androidCode: `
        getStack().remove(getStack().size() - 1);
      `,
    },
    {
      name: 'pop',
      androidCode: `
        getFragmentManager().popBackStack();
        getStack().remove(getStack().size() - 1);
      `,
      swiftCode: `
        getStack()!.removeLastObject();
        getNavController().popViewController(animated: true);
      `
    },
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
        androidx.fragment.app.Fragment f = v.toStackableView();
        androidx.fragment.app.FragmentTransaction ft = getFragmentManager()
          .beginTransaction()
          .setTransition(androidx.fragment.app.FragmentTransaction.TRANSIT_FRAGMENT_OPEN)
          .replace(getContentId(), f);
        if ( getStack().size() > 1 ) {
          ft.addToBackStack(null);
          if ( f instanceof ToolbarFragment ) {
            foam.cross_platform.ui.android.Toolbar toolbar = ((ToolbarFragment) f).getToolbar();
            toolbar.setBackButtonFn((foam.cross_platform.GenericFunction) args -> {
              getFragmentManager().popBackStack();
              return null;
            });
          }
        }
        ft.commit();
      `,
      swiftCode: `
        getStack()?.add(v!);
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
