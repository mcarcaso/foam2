foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'TextField',
  implements: [
    'foam.cross_platform.ui.AxiomView'
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
      key: 'androidContext',
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
      class: 'StringProperty',
      name: 'placeholder'
    },
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
        return new com.google.android.material.textfield.TextInputEditText(
          getAndroidContext());
      `,
      swiftFactory: `
        let v = UITextView();
        v.backgroundColor = getTheme()!.getSurface();
        v.textColor = getTheme()!.getOnSurface();
        return v;
      `,
      androidPostSet: `
        if ( oldValue != null ) {
          ((com.google.android.material.textfield.TextInputEditText) oldValue)
            .removeTextChangedListener(getTextWatcher());
        }
        newValue.addTextChangedListener(getTextWatcher());
      `,
      swiftPostSet: `
        (oldValue as? UITextView)?.delegate = nil;
        (newValue as? UITextView)?.delegate = getTextWatcher();
      `
    },
    {
      class: 'Enum',
      of: 'foam.u2.Visibility',
      name: 'visibility'
    },
    {
      class: 'BooleanProperty',
      name: 'feedback_'
    },
  ],
  reactions: [
    ['', 'propertyChange.view', 'dataToView'],
    ['', 'propertyChange.data', 'dataToView'],

    ['', 'propertyChange.visibility', 'updateView'],
    ['', 'propertyChange.placeholder', 'updateView'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property prop = (foam.core.Property) axiom;
        return ArrayDetachable_create()
          .setArray(java.util.Arrays.stream(new foam.core.Detachable[] {
              getData$().linkFrom(data.getSlot(prop.getName())),
              getVisibility$().follow(prop.createVisibilitySlot(data)),
              getPlaceholder$().follow(prop.getPlaceholder$())
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
    }
  ],
  listeners: [
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;

        getView().setHint(getPlaceholder());

        getView().setFocusable(getVisibility() == foam.u2.Visibility.RW);
        getView().setEnabled(getVisibility() != foam.u2.Visibility.DISABLED);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        let tf = (getView() as! UITextView);
        //getView().setHint(getPlaceholder());
        tf.isEditable = foam_cross_platform_Lib.equals(
          getVisibility(), foam_u2_Visibility.RW)
        tf.isUserInteractionEnabled = !foam_cross_platform_Lib.equals(
        getVisibility(), foam_u2_Visibility.DISABLED)
      `,
    },
    {
      name: 'viewToData',
      androidCode: `
        if ( getView() == null ) return;
        if ( getFeedback_() ) return;
        setFeedback_(true);
        setData(getView().getText().toString());
        setFeedback_(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback_() ) { return; }
        setFeedback_(true);
        setData((getView() as! UITextView).text!);
        setFeedback_(false);
      `,
    },
    {
      name: 'dataToView',
      androidCode: `
        if ( getView() == null ) return;
        if ( getFeedback_() ) return;
        setFeedback_(true);
        getView().setText(getData() == null ? "" : getData().toString());
        setFeedback_(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback_() ) { return; }
        setFeedback_(true);
        (getView() as! UITextView).text = getData() == nil ? "" :
          getData() is String ? getData() as! String :
          String(describing: getData());
        setFeedback_(false);
      `
    }
  ]
});
