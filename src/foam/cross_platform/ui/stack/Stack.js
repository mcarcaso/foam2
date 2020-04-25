foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'Stack',
  swiftImports: ['UIKit'],
  exports: [
    'as stack'
  ],
  topics: [
    'onPop'
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
      name: 'fragmentManager',
      androidPostSet: `
        newValue.popBackStack(null, androidx.fragment.app.FragmentManager.POP_BACK_STACK_INCLUSIVE);
        for ( Object o : getStack() ) {
          pushFragment((foam.cross_platform.ui.Stackable) o);
        }
        newValue.executePendingTransactions();
      `
    },
    {
      swiftType: 'NavigationControllerDelegate',
      flags: ['swift'],
      name: 'navControllerDelegate',
      swiftFactory: `
        let d = NavigationControllerDelegate();
        d.this = self;
        return d;
      `
    },
    {
      swiftType: 'UINavigationController',
      flags: ['swift'],
      name: 'navController',
      swiftFactory: `
        let navVc = UINavigationController();
        navVc.delegate = getNavControllerDelegate();
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
      `,
      swiftCode: `
        public class NavigationControllerDelegate: NSObject, UINavigationControllerDelegate, UIGestureRecognizerDelegate {
          weak var this: foam_cross_platform_ui_stack_Stack? = nil;
          public func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
            return (this?.getStack()?.lastObject as? foam_cross_platform_ui_Stackable)?.backRequested() ?? true;
          }
          public func navigationController(
              _ navigationController: UINavigationController,
              didShow viewController: UIViewController,
              animated: Bool) {
            navigationController.interactivePopGestureRecognizer?.delegate = self;
            navigationController.interactivePopGestureRecognizer?.isEnabled = true;
            let s = this!.getStack()!
            while s.count > navigationController.viewControllers.count {
              // This is to get the ViewController's stack in sync with the
              // stack's stack. This can happen when the user swipes to go back.
               s.removeLastObject();
               _ = this!.onPop().pub(nil);
            }
          }
        }
      `
    }
  ],
  methods: [
    {
      name: 'onBackPressed',
      swiftAnnotations: ['@objc'],
      androidCode: `
        foam.cross_platform.ui.Stackable o = (foam.cross_platform.ui.Stackable)
          getStack().get(getStack().size() - 1);
        if ( o.backRequested() ) pop();
      `,
      swiftCode: `
        if ( (getStack()?.lastObject as? foam_cross_platform_ui_Stackable)?.backRequested() ?? true) {
          pop();
        }
      `
    },
    {
      name: 'pushFragment',
      args: [{ type: 'foam.cross_platform.ui.Stackable', name: 's' }],
      flags: ['android'],
      androidCode: `
        androidx.fragment.app.Fragment f = s.toStackableView();
        androidx.fragment.app.FragmentTransaction ft = getFragmentManager()
          .beginTransaction()
          .setTransition(androidx.fragment.app.FragmentTransaction.TRANSIT_FRAGMENT_OPEN)
          .replace(getContentId(), f);
        if ( getStack().size() > 1 ) {
          ft.addToBackStack(null);
          if ( f instanceof ToolbarFragment ) {
            foam.cross_platform.ui.android.Toolbar toolbar = ((ToolbarFragment) f).getToolbar();
            toolbar.setBackButtonFn((foam.cross_platform.GenericFunction) args -> {
              if ( s.backRequested() ) pop();
              return null;
            });
          }
        }
        ft.commit();
      `,
    },
    {
      name: 'pop',
      androidCode: `
        foam.cross_platform.FObject o = (foam.cross_platform.FObject) getStack().remove(getStack().size() - 1);
        getFragmentManager().popBackStack();
        onPop().pub(new Object[] {o});
      `,
      swiftCode: `
        let o = getStack()?.lastObject as? foam_cross_platform_FObject;
        getStack()!.removeLastObject();
        getNavController().popViewController(animated: true);
        _ = onPop().pub([o]);
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
        pushFragment(v);
      `,
      swiftCode: `
        getStack()?.add(v!);
        let nc = getNavController();
        if getStack()!.count == 1 {
          nc.viewControllers = [v!.toStackableView()];
        } else {
          let vc = v!.toStackableView();
          vc.navigationItem.setLeftBarButton(
            UIBarButtonItem(
              image: UIImage(named: "toolbar_back")!,
              style: .plain,
              target: self,
              action: #selector(Self.onBackPressed)),
            animated: true)
          nc.pushViewController(vc, animated: true);
        }
      `
    }
  ]
});
