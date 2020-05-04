foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'ScrollingWidgetView',
  topics: [
    'onInvalidate'
  ],
  implements: [
    'foam.cross_platform.ui.Stackable'
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
          public java.lang.ref.WeakReference<ScrollingWidgetView> self;
          public foam.cross_platform.FObject v;
          public Fragment(
              ScrollingWidgetView self) {
            super(self.getX());
            this.self = new java.lang.ref.WeakReference<>(self);
          }
          public android.view.View onCreateView(
              android.view.LayoutInflater inflater,
              android.view.ViewGroup container,
              android.os.Bundle savedInstanceState) {
            android.widget.ScrollView sv = new android.widget.ScrollView(getContext());
            sv.setClipToPadding(false);
            sv.setClipChildren(false);

            final java.lang.ref.WeakReference<ScrollingWidgetView> wrSelf = this.self;
            foam.cross_platform.Listener l = (sub, args) -> {
              if ( v != null ) v.detach();
              v = null;
              sv.removeAllViews();
              ScrollingWidgetView self = wrSelf.get();
              if ( self == null ) return;
              if ( self.getViewBuilder() == null ) return;
              v = self.getViewBuilder().createBuilder(self.getX()).builderBuild();
              self.onDetach(v);
              android.view.View view = (android.view.View) v.getProperty("view");
              sv.addView(view);

              float density = getContext().getResources().getDisplayMetrics().density;
              int vp = (int) (density * self.getVerticalPadding());
              int hp = (int) ( density * self.getHorizontalPadding());
              sv.setPadding(hp, vp, hp, vp);
            };
            sub = self.get().onInvalidate().sub(null, l);
            l.executeListener(null, null);

            android.widget.LinearLayout v = (android.widget.LinearLayout)
              super.onCreateView(inflater, container, savedInstanceState);
            v.addView(sv);
            return v;
          }
          public void onDestroyView() {
            super.onDestroyView();
            if ( sub != null ) sub.detach();
          }
        }
      `,
      swiftCode: `
        class ViewController: UIViewController {
          var sub: foam_core_Detachable? = nil;
          weak var this: foam_cross_platform_ui_stack_ScrollingWidgetView?;
          var v: foam_cross_platform_FObject? = nil;
          var child: UIView? = nil;
          init(_ this: foam_cross_platform_ui_stack_ScrollingWidgetView) {
            self.this = this;
            super.init(nibName: nil, bundle: nil);
            let sv = UIScrollView(frame: view.frame);
            sv.keyboardDismissMode = .onDrag
            view = sv

            let l = <%=listener(\`
              if ( self?.this == nil ) { return }
              let this = self!.this!;
              self!.v?.detach();
              self!.v = nil;
              self!.child?.removeFromSuperview();
              self!.child = nil;
              if ( this.getViewBuilder() == nil ) { return }
              self!.v = this.getViewBuilder()!.createBuilder(this.getX())?.builderBuild();
              this.onDetach(self!.v);
              self!.child = self!.v!.getProperty("view") as? UIView;
              sv.addSubview(self!.child!);
              let vp = CGFloat(this.getVerticalPadding());
              let hp = CGFloat(this.getHorizontalPadding());
              self!.child!.translatesAutoresizingMaskIntoConstraints = false;
              self!.child!.topAnchor.constraint(equalTo: sv.topAnchor, constant: vp).isActive = true
              self!.child!.leadingAnchor.constraint(equalTo: sv.leadingAnchor, constant: hp).isActive = true
              self!.child!.trailingAnchor.constraint(equalTo: sv.trailingAnchor, constant: 0).isActive = true
              self!.child!.bottomAnchor.constraint(equalTo: sv.bottomAnchor, constant: -vp).isActive = true
              self!.child!.widthAnchor.constraint(equalTo: sv.widthAnchor, constant: -2*hp).isActive = true
            \`)%>
            sub = this.onInvalidate().sub(nil, l);
            l.executeListener(nil, nil);
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          deinit {
            sub?.detach();
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
          override func viewWillDisappear(_ animated: Bool) {
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
      name: 'title'
    },
    {
      class: 'IntProperty',
      name: 'horizontalPadding'
    },
    {
      class: 'IntProperty',
      name: 'verticalPadding'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.BuilderFactory',
      name: 'viewBuilder',
    },
  ],
  methods: [
    {
      name: 'toStackableView',
      androidCode: `
        Fragment f = new Fragment(this);
        onDetach(f.getToolbar().getTitle$().follow(getTitle$()));
        f.backgroundColor = getTheme().getBackground();
        return f;
      `,
      swiftCode: `
        let vc = ViewController(self);
        let l = <%=listener(\`
          vc.title = self?.getTitle() as? String ?? "";
          // TODO: If title is view, do something diff
        \`)%>;
        onDetach(getTitle$().slotSub(l));
        l.executeListener(nil, nil);
        vc.view.backgroundColor = getTheme()!.getBackground();
        return vc;
      `
    },
    {
      name: 'backRequested',
      androidCode: `return true;`,
      swiftCode: 'return true;',
    }
  ],
  reactions: [
    ['', 'propertyChange.horizontalPadding', 'invalidate'],
    ['', 'propertyChange.verticalPadding', 'invalidate'],
    ['', 'propertyChange.viewBuilder', 'invalidate'],
  ],
  listeners: [
    {
      name: 'invalidate',
      androidCode: `
        onInvalidate().pub(null);
      `,
      swiftCode: `
        _ = onInvalidate().pub(nil);
      `
    }
  ]
});