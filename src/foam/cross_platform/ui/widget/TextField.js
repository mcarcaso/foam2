foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'TextField',
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  traits: [
    'foam.cross_platform.ui.DisplayModeTrait',
  ],
  swiftImports: [
    'UIKit'
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  requires: [
    'foam.util.ArrayDetachable',
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class TextViewDelegate: NSObject, UITextViewDelegate {
          weak var o: foam_cross_platform_ui_widget_TextField? = nil;
          public func textViewDidChange(_ textView: UITextView) {
            o?.viewToData(nil, nil)
          }
        }
      `,
      androidCode: `
        class TextWatcher implements android.text.TextWatcher {
          public foam.cross_platform.ui.widget.TextField o = null;
          public void beforeTextChanged(CharSequence s, int start, int count, int after) { }
          public void afterTextChanged(android.text.Editable s) { }
          public void onTextChanged(CharSequence s, int start, int before, int count) {
            o.viewToData(null, null);
          }
        }
      `,
    }
  ],
  properties: [
    {
      androidType: 'android.text.TextWatcher',
      swiftType: 'UITextViewDelegate',
      name: 'textWatcher',
      androidFactory: `
        TextWatcher o = new TextWatcher();
        o.o = this;
        return o;
      `,
      swiftFactory: `
        let o = TextViewDelegate();
        o.o = self;
        return o;
      `
    },
    {
      name: 'data'
    },
    {
      androidType: 'com.google.android.material.textfield.TextInputEditText',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        com.google.android.material.textfield.TextInputEditText v =
          new com.google.android.material.textfield.TextInputEditText(getAndroidContext());
        getTheme().getWidgetTextStyle().applyTextStyle(v);
        v.setTextColor(getTheme().getOnSurface());
        return v;
      `,
      swiftFactory: `
        let v = UITextView();
        v.isScrollEnabled = false;
        v.textColor = getTheme()!.getOnSurface();
        v.font = UIFont.systemFont(ofSize: 18)
        v.layer.borderWidth = 1;
        v.layer.cornerRadius = 4
        return v;
      `,
      androidPostSet: `
        if ( oldValue instanceof com.google.android.material.textfield.TextInputEditText ) {
          ((com.google.android.material.textfield.TextInputEditText) oldValue)
            .removeTextChangedListener(getTextWatcher());
        }
        ((com.google.android.material.textfield.TextInputEditText) newValue)
          .addTextChangedListener(getTextWatcher());
        updateView(null, null);
      `,
      swiftPostSet: `
        (oldValue as? UITextView)?.delegate = nil;
        (newValue as? UITextView)?.delegate = getTextWatcher();
        updateView(nil, nil);
      `
    },
    {
      class: 'StringProperty',
      name: 'lastDataSet'
    }
  ],
  reactions: [
    ['', 'propertyChange.view', 'dataToView'],
    ['', 'propertyChange.data', 'dataToView'],

    ['', 'propertyChange.mode', 'updateView'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property prop = (foam.core.Property) axiom;
        return ArrayDetachable_create()
          .setArray(java.util.Arrays.stream(new foam.core.Detachable[] {
              getData$().linkFrom(data.getSlot(prop.getName())),
              getVisibility$().follow(prop.createVisibilitySlot(data))
            })
            .filter(d -> d!= null)
            .toArray(foam.core.Detachable[]::new))
          .build();
      `,
      swiftCode: `
        let prop = axiom as! foam_core_Property;
        return ArrayDetachable_create()
          .setArray([
            getData$().linkFrom(data!.getSlot(prop.getName())),
            getVisibility$().follow(prop.createVisibilitySlot(data))
          ])
          .build();
      `,
    },
    {
      type: 'String',
      name: 'dataToString',
      args: [{ type: 'Any', name: 'data' }],
      androidCode: `
        return data == null ? "" : data.toString();
      `,
      swiftCode: `
        return data == nil ? "" :
          data is String ? data as! String :
          String(describing: data!);
      `
    },
  ],
  listeners: [
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;
        getView().setFocusable(
          getMode() == foam.u2.DisplayMode.RW);
        getView().setFocusableInTouchMode(
          getMode() == foam.u2.DisplayMode.RW);
        getView().setEnabled(
          getMode() != foam.u2.DisplayMode.DISABLED);
        getView().getBackground().setColorFilter(
          getMode() == foam.u2.DisplayMode.RO ?
            android.graphics.Color.parseColor("#00000000") :
            getTheme().getSecondary(),
          android.graphics.PorterDuff.Mode.SRC_IN);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        let tf = (getView() as! UITextView);
        tf.isEditable = foam_cross_platform_Lib.equals(
          getMode(), foam_u2_DisplayMode.RW)
        tf.isUserInteractionEnabled = !foam_cross_platform_Lib.equals(
          getMode(), foam_u2_DisplayMode.DISABLED)
        tf.layer.borderColor = tf.isEditable ? getTheme()!.getSecondary().cgColor : UIColor.clear.cgColor;
        tf.backgroundColor = tf.isEditable ? getTheme()!.getSurface() : UIColor.clear
      `,
    },
    {
      name: 'viewToData',
      androidCode: `
        String str = getView().getText().toString();
        if ( str.equals(getLastDataSet()) ) setLastDataSet(null);
        else setData(str);
      `,
      swiftCode: `
        setData((getView() as! UITextView).text!);
      `,
    },
    {
      name: 'dataToView',
      androidCode: `
        String str = dataToString(getData());
        if (str.equals(getView().getText().toString())) return;
        setLastDataSet(str);
        getView().setText(str);
        getView().setSelection(str.length());
      `,
      swiftCode: `
        let str = dataToString(getData())!;
        if str == (getView() as! UITextView).text! { return }
        setLastDataSet(str);
        (getView() as! UITextView).text = str;
      `
    }
  ]
});
