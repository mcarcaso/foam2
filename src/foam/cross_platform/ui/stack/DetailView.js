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
          init(_ dv: foam_cross_platform_ui_widget_DetailView) {
            self.dv = dv;
            super.init(nibName: nil, bundle: nil);
            let sv = UIScrollView(frame: view.frame);
            view = sv
            sv.addSubview(dv.getView()!)
            dv.getView()?.frame = CGRect(x: 0, y: 0, width: view.frame.width, height: 0);
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          override func viewWillLayoutSubviews() {
            super.viewWillLayoutSubviews();
            let sv = view as! UIScrollView;
            sv.contentSize = dv.getView()!.frame.size
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
          override func viewWillDisappear(_ animated: Bool) {
            NotificationCenter.default.removeObserver(self)
            super.viewWillAppear(animated)
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
