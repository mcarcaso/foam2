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
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  requires: [
    'foam.util.ArrayDetachable'
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
    }
  ],
  properties: [
    {
      androidType: 'android.text.TextWatcher',
      swiftType: 'UITextViewDelegate',
      name: 'textWatcher',
      androidFactory: `
        return new android.text.TextWatcher() {
          public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            // NOOP
          }
          public void onTextChanged(CharSequence s, int start, int before, int count) {
            viewToData(null, null);
          }
          public void afterTextChanged(android.text.Editable s) {
            // NOOP
          }
        };
      `,
      swiftFactory: `
        let o = TextViewDelegate();
        o.o = self;
        return o;
      `
    },
    {
      class: 'BooleanProperty',
      name: 'feedback'
    },
    {
      name: 'data'
    },
    {
      androidType: 'com.google.android.material.textfield.TextInputEditText',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        return new com.google.android.material.textfield.TextInputEditText(getAndroidContext());
      `,
      swiftFactory: `
        return UITextView();
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
  ],
  reactions: [
    ['', 'propertyChange.view', 'dataToView'],
    ['', 'propertyChange.data', 'dataToView'],
    ['', 'propertyChange.visibility', 'updateVisibility'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property prop = (foam.core.Property) axiom;
        return ArrayDetachable_create()
          .setArray(new foam.core.Detachable[] {
            getData$().linkFrom(data.getSlot(prop.getName())),
            getVisibility$().follow(prop.createVisibilitySlot(data))
          })
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
      name: 'updateVisibility',
      androidCode: `
        getView().setFocusable(getVisibility() == foam.u2.Visibility.RW);
        getView().setEnabled(getVisibility() != foam.u2.Visibility.DISABLED);
      `,
      swiftCode: `
        let tf = (getView() as! UITextView);
        tf.isEditable = foam_cross_platform_Lib.equals(
          getVisibility(), foam_u2_Visibility.RW)
      `
    },
    {
      name: 'viewToData',
      androidCode: `
        if ( getView() == null ) return;
        if ( getFeedback() ) return;
        setFeedback(true);
        setData(getView().getText().toString());
        setFeedback(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback() ) { return; }
        setFeedback(true);
        setData((getView() as! UITextView).text!);
        setFeedback(false);
      `
    },
    {
      name: 'dataToView',
      androidCode: `
        if ( getView() == null ) return;
        if ( getFeedback() ) return;
        setFeedback(true);
        getView().setText(getData() == null ? "" : getData().toString());
        setFeedback(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback() ) { return; }
        setFeedback(true);
        (getView() as! UITextView).text = getData() == nil ? "" :
          getData() is String ? getData() as! String :
          String(describing: getData());
        setFeedback(false);
      `
    },
  ]
});
