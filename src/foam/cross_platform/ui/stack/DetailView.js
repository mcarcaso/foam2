foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.cross_platform.ui.widget.DetailView',
    'foam.intent.DAOUpdateIntent',
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
    {
      name: 'intentManager',
      type: 'foam.intent.IntentManager',
    },
    {
      name: 'stack',
      type: 'foam.cross_platform.ui.stack.Stack',
    },
  ],
  exports: [
    'controllerMode',
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_edit.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_save.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M17,3L5,3c-1.11,0 -2,0.9 -2,2v14c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2L21,7l-4,-4zM12,19c-1.66,0 -3,-1.34 -3,-3s1.34,-3 3,-3 3,1.34 3,3 -1.34,3 -3,3zM15,9L5,9L5,5h10v4z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends foam.cross_platform.ui.stack.Stack.ToolbarFragment {
          public DetailView self;
          public foam.cross_platform.ui.widget.DetailView dv;
          public Fragment(
              DetailView self,
              foam.cross_platform.ui.widget.DetailView dv,
              foam.cross_platform.Context x) {
            super(x);
            this.self = self;
            this.dv = dv;
          }
          public android.view.View onCreateView(
              android.view.LayoutInflater inflater, 
              android.view.ViewGroup container, 
              android.os.Bundle savedInstanceState) {
            android.widget.ScrollView sv = new android.widget.ScrollView(dv.getAndroidContext());
            dv.clearProperty("view");
            sv.addView(dv.getView());
            android.widget.LinearLayout v = (android.widget.LinearLayout)
              super.onCreateView(inflater, container, savedInstanceState);
            v.addView(sv);
            return v;
          }
          public void onResume() {
            super.onResume();
            self.refreshData(dv);
          }
        }
      `,
      swiftCode: `
        class ViewController: UIViewController {
          var dv: foam_cross_platform_ui_widget_DetailView;
          var this: foam_cross_platform_ui_stack_DetailView;
          var sub: foam_core_Detachable?;
          init(_ dv: foam_cross_platform_ui_widget_DetailView,
               _ this: foam_cross_platform_ui_stack_DetailView) {
            self.dv = dv;
            self.this = this;
            super.init(nibName: nil, bundle: nil);
            let sv = UIScrollView(frame: view.frame);
            sv.keyboardDismissMode = .onDrag
            view = sv
            sv.addSubview(dv.getView()!)
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          override func viewDidLayoutSubviews() {
            updateSize();
            super.viewDidLayoutSubviews();
          }
          func updateSize() {
            let dvv = dv.getView()!
            dvv.frame.size.width = view.frame.width;
            dvv.layoutSubviews();
            let sv = view as! UIScrollView;
            sv.contentSize = dvv.frame.size
          }
          override func viewWillAppear(_ animated: Bool) {
            this.refreshData(dv);
            super.viewWillAppear(animated)
            NotificationCenter.default.addObserver(
              self,
              selector: #selector(keyboardDidDisappear),
              name: UIResponder.keyboardDidHideNotification,
              object: nil)
            NotificationCenter.default.addObserver(
              self,
              selector: #selector(keyboardDidAppear),
              name: UIResponder.keyboardDidShowNotification,
              object: nil)
            sub?.detach();
            sub = dv.getData()?.sub(nil, dv.AnonymousListener_create()
              .setFn({ [weak self] (_: foam_core_Detachable?, args: [Any?]?) -> Void in
                self?.updateSize();
              })
              .build());
          }
          override func viewWillDisappear(_ animated: Bool) {
            sub?.detach();
            NotificationCenter.default.removeObserver(self)
            super.viewWillAppear(animated)
          }
          @objc
          func keyboardDidAppear(_ notification: NSNotification) {
            let key = UIResponder.keyboardFrameBeginUserInfoKey
            guard let frameValue = notification.userInfo?[key] as? NSValue else {
              return
            }
            let frame = frameValue.cgRectValue
            let sv = view as! UIScrollView
            sv.contentInset.bottom = frame.size.height
            sv.verticalScrollIndicatorInsets.bottom = frame.size.height
          }
          @objc
          func keyboardDidDisappear(_ notification: NSNotification) {
            let sv = view as! UIScrollView
            sv.contentInset.bottom = 0
            sv.verticalScrollIndicatorInsets.bottom = 0
          }
        }
        public class BarButtonItem: UIBarButtonItem {
          public var dv: foam_cross_platform_ui_widget_DetailView? = nil;
        }
        @objc
        public func onBarButtonItemPressed(sender: UIBarButtonItem) {
          onSavePressed((sender as! BarButtonItem).dv!.getData());
        }
      `
    }
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    },
    {
      name: 'id'
    },
    {
      class: 'Enum',
      of: 'foam.u2.ControllerMode',
      name: 'controllerMode',
      value: 'VIEW'
    },
  ],
  methods: [
    {
      name: 'onSavePressed',
      args: [
        { name: 'o', type: 'FObject' },
      ],
      androidCode: `
        getDao().put(o);
        getStack().pop();
      `,
      swiftCode: `
        _ = getDao()!.put(o);
        getStack()!.pop();
      `,
    },
    {
      name: 'refreshData',
      args: [
        { name: 'dv', type: 'foam.cross_platform.ui.widget.DetailView' },
      ],
      androidCode: `
        dv.setData(getId() == null ?
          getDao().getOf().createBuilder(getSubX()).builderBuild() :
          getDao().find(getId()).clone(getSubX()));
      `,
      swiftCode: `
        dv!.setData(getId() == nil ?
          getDao()!.getOf().createBuilder(getSubX())!.builderBuild() :
          getDao()!.find(getId())!.clone(getSubX()));
      `,
    },
    {
      name: 'onUpdatePressed',
      androidCode: `
        getIntentManager().launchIntent(DAOUpdateIntent_create()
          .setDao(getDao())
          .setId(getId())
          .build());
      `,
      swiftAnnotations: ['@objc'],
      swiftCode: `
        _ = getIntentManager()!.launchIntent(DAOUpdateIntent_create()
          .setDao(getDao())
          .setId(getId())
          .build());
      `,
    },
    {
      name: 'getTitle',
      type: 'String',
      androidCode: `
        return getControllerMode().getLabel() + " " + getDao().getOf().getId();
      `,
      swiftCode: `
        return getControllerMode()!.getLabel()! + " " + getDao()!.getOf().getId()!;
      `,
    },
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment(this, DetailView_create().build(), getSubX());
        android.content.Context x = f.dv.getAndroidContext();
        f.getToolbar().setTitle(getTitle());
        if ( getControllerMode() == foam.u2.ControllerMode.VIEW ) {
          f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
            onUpdatePressed();
            return null;
          });
          f.getToolbar().setActionButtonIcon(x.getResources().getIdentifier(
            "dv_edit",
            "drawable",
            x.getPackageName()));
        } else {
          f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
            onSavePressed(f.dv.getData());
            return null;
          });
          f.getToolbar().setActionButtonIcon(x.getResources().getIdentifier(
            "dv_save",
            "drawable",
            x.getPackageName()));
        }
        f.backgroundColor = getTheme().getBackground();
        return f;
      `,
      swiftCode: `
        let vc = ViewController(DetailView_create().build(), self);
        vc.title = getTitle();
        if foam_cross_platform_Lib.equals(getControllerMode(), foam_u2_ControllerMode.VIEW) {
          vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .edit,
            target: self,
            action: #selector(onUpdatePressed))
        } else {
          let b = BarButtonItem(
            barButtonSystemItem: .save,
            target: self,
            action: #selector(onBarButtonItemPressed))
          b.dv = vc.dv;
          vc.navigationItem.rightBarButtonItem = b;
        }
        vc.view.backgroundColor = getTheme()!.getBackground();
        return vc;
      `
    }
  ]
});
