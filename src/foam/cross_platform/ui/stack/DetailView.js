foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.cross_platform.ui.widget.DetailView'
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        public static class Fragment extends androidx.fragment.app.Fragment {
          public foam.cross_platform.ui.widget.DetailView dv = null;
          public android.view.View onCreateView(
                  android.view.LayoutInflater inflater, 
                  android.view.ViewGroup container, 
                  android.os.Bundle savedInstanceState) {
            android.widget.ScrollView sv = new android.widget.ScrollView(dv.getAndroidContext());
            dv.clearProperty("view");
            sv.addView(dv.getView());
            return sv;
          }
        }
      `,
      swiftCode: `
        class ViewController: UIViewController {
          var dv: foam_cross_platform_ui_widget_DetailView;
          var sub: foam_core_Detachable?;
          init(_ dv: foam_cross_platform_ui_widget_DetailView) {
            self.dv = dv;
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
      name: 'title',
      expressionArgs: ['data'],
      androidExpression: `
        return data.getCls_().getId();
      `
    }
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment();
        f.dv = DetailView_create()
          .build();
        f.dv.onDetach(f.dv.getData$().follow(getData$()));
        return f;
      `,
      swiftCode: `
        let dv = DetailView_create().build();
        dv.onDetach(dv.getData$().follow(getData$()));

        let vc = ViewController(dv);
        vc.view.backgroundColor = getTheme()!.getBackground();
        return vc;
      `
    }
  ]
});
