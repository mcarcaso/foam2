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
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends foam.cross_platform.ui.stack.Stack.ToolbarFragment {
          public foam.core.Detachable sub;
          public foam.core.SlotInterface data$;
          public foam.cross_platform.ui.View dv;
          public Fragment(
              foam.core.SlotInterface data$,
              foam.cross_platform.ui.View dv,
              foam.cross_platform.Context x) {
            super(x);
            this.data$ = data$;
            this.dv = dv;
          }
          public void finalize() {
            ((foam.cross_platform.FObject) dv).detach();
          }
          public android.view.View onCreateView(
              android.view.LayoutInflater inflater,
              android.view.ViewGroup container,
              android.os.Bundle savedInstanceState) {
            android.widget.ScrollView sv = new android.widget.ScrollView(getContext());
            if ( dv.getView().getParent() != null ) {
              ((android.widget.ScrollView) dv.getView().getParent()).removeAllViews();
            }
            sv.addView(dv.getView());
            android.widget.LinearLayout v = (android.widget.LinearLayout)
              super.onCreateView(inflater, container, savedInstanceState);
            v.addView(sv);
            return v;
          }
          public void onResume() {
            super.onResume();
            sub = ((foam.cross_platform.FObject) dv).getSlot("data").follow(data$);
          }
          public void onPause() {
            super.onPause();
            sub.detach();
          }
        }
      `,
      swiftCode: `
        class ViewController: UIViewController {
          let dv: foam_cross_platform_ui_View;
          let data$: foam_core_SlotInterface;
          var sub: foam_core_Detachable?;
          init(_ dv: foam_cross_platform_ui_View,
               _ data$: foam_core_SlotInterface) {
            self.dv = dv;
            self.data$ = data$;
            super.init(nibName: nil, bundle: nil);
            let sv = UIScrollView(frame: view.frame);
            sv.keyboardDismissMode = .onDrag
            view = sv
            let v = dv.getView()!;
            sv.addSubview(v)

            v.translatesAutoresizingMaskIntoConstraints = false;
            v.topAnchor.constraint(equalTo: sv.topAnchor, constant: 0).isActive = true
            v.leadingAnchor.constraint(equalTo: sv.leadingAnchor, constant: 0).isActive = true
            v.trailingAnchor.constraint(equalTo: sv.trailingAnchor, constant: 0).isActive = true
            v.bottomAnchor.constraint(equalTo: sv.bottomAnchor, constant: 0).isActive = true
            v.widthAnchor.constraint(equalTo: sv.widthAnchor, constant: 0).isActive = true
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          deinit {
            (dv as? foam_cross_platform_FObject)?.detach();
            sub?.detach();
          }
          override func viewWillAppear(_ animated: Bool) {
            sub?.detach();
            sub = (dv as? foam_cross_platform_FObject)?.getSlot("data")?.follow(data$);
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
      `
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'StringProperty',
      name: 'title'
    }
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment(getData$(), DetailView_create().build(), getSubX());
        f.getToolbar().setTitle(getTitle());
        f.backgroundColor = getTheme().getBackground();
        return f;
      `,
      swiftCode: `
        let vc = ViewController(DetailView_create().build(), getData$());
        vc.title = getTitle();
        vc.view.backgroundColor = getTheme()!.getBackground();
        return vc;
      `
    }
  ]
});
