foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'ToggleSwitch',
  implements: [
    'foam.cross_platform.ui.AxiomView',
    'foam.cross_platform.ui.LabelledView',
  ],
  swiftImports: [
    'UIKit'
  ],
  traits: [
    'foam.cross_platform.ui.DisplayModeTrait',
  ],
  imports: [
    {
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    },
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  requires: [
    'foam.util.ArrayDetachable'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class LabelledUISwitch: UIView {
          let l = UILabel();
          let s = UISwitch();
          override init(frame: CGRect) {
            super.init(frame: frame)
            addSubview(l);
            addSubview(s);
          }
          required init?(coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          override func layoutSubviews() {
            super.layoutSubviews();
            let sSize = s.sizeThatFits(frame.size)
            let lSize = l.sizeThatFits(frame.size)
            let height = max(sSize.height, lSize.height)
            l.frame = CGRect(
              x: 0,
              y: 0,
              width: frame.width - sSize.width,
              height: height
            )
            s.frame = CGRect(
              x: l.frame.maxX,
              y: 0,
              width: sSize.width,
              height: height
            )
          }
          override func sizeThatFits(_ size: CGSize) -> CGSize {
            let sSize = s.sizeThatFits(size)
            let lSize = l.sizeThatFits(CGSize(
              width: size.width - sSize.width,
              height: size.height
            ))
            return CGSize(
              width: lSize.width + sSize.width,
              height: max(sSize.height, lSize.height)
            )
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'feedback'
    },
    {
      name: 'checkedValue',
      value: true
    },
    {
      name: 'uncheckedValue',
      value: false
    },
    {
      name: 'data'
    },
    {
      class: 'StringProperty',
      name: 'label',
    },
    {
      androidType: 'android.widget.Switch',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        return new android.widget.Switch(getAndroidContext());
      `,
      androidPostSet: `
        if ( oldValue != null ) {
          ((android.widget.Switch) oldValue).setOnCheckedChangeListener(null);
        }
        newValue.setOnCheckedChangeListener((buttonView, isChecked) -> {
          viewToData(null, null);
        });
      `,
      swiftFactory: `
        return LabelledUISwitch();
      `,
      swiftPostSet: `
        (oldValue as? LabelledUISwitch)?.s.removeTarget(
          self, action: #selector(onChanged), for: .valueChanged)
        (newValue as? LabelledUISwitch)?.s.addTarget(
          self, action: #selector(onChanged), for: .valueChanged)
      `
    },
  ],
  reactions: [
    ['', 'propertyChange.view', 'dataToView'],
    ['', 'propertyChange.data', 'dataToView'],

    ['', 'propertyChange.view', 'updateVisibility'],
    ['', 'propertyChange.mode', 'updateVisibility'],

    ['', 'propertyChange.view', 'updateLabel'],
    ['', 'propertyChange.label', 'updateLabel'],
    ['theme', 'propertyChange', 'updateLabel'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property prop = (foam.core.Property) axiom;
        return ArrayDetachable_create()
          .setArray(new foam.core.Detachable[] {
            getData$().linkFrom(data.getSlot(prop.getName())),
            getVisibility$().follow(prop.createVisibilitySlot(data)),
            getLabel$().follow(prop.getLabel$())
          })
          .build();
      `,
      swiftCode: `
        let prop = axiom as! foam_core_Property;
        return ArrayDetachable_create()
          .setArray([
            getData$().linkFrom(data!.getSlot(prop.getName())),
            getVisibility$().follow(prop.createVisibilitySlot(data)),
            getLabel$().follow(prop.getLabel$())
          ])
          .build();
      `,
    },
    {
      name: 'onChanged',
      flags: ['swift'],
      swiftAnnotations: ['@objc'],
      swiftCode: `viewToData(nil, nil)`
    }
  ],
  listeners: [
    {
      name: 'updateLabel',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;
        getView().setText(getLabel());
        getView().setAlpha(0.8f);
        getTheme().getSubtitle1().applyTextStyle(getView());
        getView().setTextColor(getTheme().getOnSurface());
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        let v = getView() as! LabelledUISwitch;
        v.l.text = getLabel();
        v.l.alpha = 0.8;
        v.l.font = getTheme()?.getSubtitle1();
        v.l.textColor = getTheme()?.getOnSurface();
      `
    },
    {
      name: 'updateVisibility',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;
        getView().setEnabled(getMode() == foam.u2.DisplayMode.RW);
      `,
      swiftCode: `
        let tf = (getView() as! LabelledUISwitch).s;
        tf.isUserInteractionEnabled = foam_cross_platform_Lib.equals(
          getVisibility(), foam_u2_Visibility.RW);
        tf.isEnabled = !foam_cross_platform_Lib.equals(
          getVisibility(), foam_u2_Visibility.DISABLED)
      `
    },
    {
      name: 'viewToData',
      androidCode: `
        if ( getView() == null ) return;
        if ( getFeedback() ) return;
        setFeedback(true);
        setData(getView().isChecked() ? getCheckedValue() : getUncheckedValue());
        setFeedback(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback() ) { return; }
        setFeedback(true);
        setData((getView() as! LabelledUISwitch).s.isOn);
        setFeedback(false);
      `
    },
    {
      name: 'dataToView',
      androidCode: `
        if ( getView() == null ) return;
        if ( getFeedback() ) return;
        setFeedback(true);
        getView().setChecked(
          foam.cross_platform.Lib.equals(getCheckedValue(), getData()));
        setFeedback(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback() ) { return; }
        setFeedback(true);
        (getView() as! LabelledUISwitch).s.isOn =
          foam_cross_platform_Lib.equals(getCheckedValue(), getData());
        setFeedback(false);
      `
    },
  ]
});
