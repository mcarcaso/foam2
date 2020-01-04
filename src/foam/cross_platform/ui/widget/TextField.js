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
      class: 'StringProperty',
      name: 'label'
    },
    {
      class: 'StringProperty',
      name: 'placeholder'
    },
    {
      class: 'StringProperty',
      name: 'validation'
    },
    {
      class: 'StringProperty',
      name: 'help'
    },
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
      androidType: 'com.google.android.material.textfield.TextInputLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        com.google.android.material.textfield.TextInputEditText v = new com.google.android.material.textfield.TextInputEditText(getAndroidContext());
        android.widget.LinearLayout.LayoutParams vParams = new android.widget.LinearLayout.LayoutParams(
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT,
                android.widget.LinearLayout.LayoutParams.MATCH_PARENT);
        com.google.android.material.textfield.TextInputLayout lo = new com.google.android.material.textfield.TextInputLayout(getAndroidContext());
        lo.addView(v, vParams);
        return lo;
      `,
      swiftFactory: `
        return UITextView();
      `,
      androidPostSet: `
        if ( oldValue != null ) {
          com.google.android.material.textfield.TextInputEditText ov = 
            getTextField((android.view.ViewGroup) oldValue);
          ov.removeTextChangedListener(getTextWatcher());
          ov.setOnFocusChangeListener(null);
        }
        final com.google.android.material.textfield.TextInputEditText v = 
          getTextField(newValue);
        v.addTextChangedListener(getTextWatcher());
        final TextField self = this;
        v.setOnFocusChangeListener(new android.view.View.OnFocusChangeListener() {
          public void onFocusChange(android.view.View view, boolean hasFocus) {
            v.setHint(hasFocus ? getPlaceholder() : "");
          }
        });
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
    ['', 'propertyChange.label', 'updateLabel'],
    ['', 'propertyChange.validation', 'updateValidation'],
    ['', 'propertyChange.help', 'updateHelp'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property prop = (foam.core.Property) axiom;
        foam.core.SlotInterface validationSlot = prop.createValidationSlot(data);
        return ArrayDetachable_create()
          .setArray(java.util.Arrays.stream(new foam.core.Detachable[] {
              getData$().linkFrom(data.getSlot(prop.getName())),
              getVisibility$().follow(prop.createVisibilitySlot(data)),
              getHelp$().follow(prop.getHelp$()),
              getPlaceholder$().follow(prop.getPlaceholder$()),
              validationSlot == null ? null : getValidation$().follow(validationSlot),
              getLabel$().follow(prop.getLabel$())
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
      flags: ['android'],
      androidType: 'com.google.android.material.textfield.TextInputEditText',
      name: 'getTextField',
      args: [
        { androidType: 'android.view.ViewGroup', name: 'parent' }
      ],
      androidCode: `
        if ( parent == null ) return null;
        return (com.google.android.material.textfield.TextInputEditText)
          ((android.widget.ViewGroup) parent.getChildAt(0)).getChildAt(0);
      `
    }
  ],
  listeners: [
    {
      name: 'updateVisibility',
      androidCode: `
        com.google.android.material.textfield.TextInputEditText v = getTextField(getView());
        if ( v == null ) return;
        v.setFocusable(getVisibility() == foam.u2.Visibility.RW);
        v.setEnabled(getVisibility() != foam.u2.Visibility.DISABLED);
      `,
      swiftCode: `
        let tf = (getView() as! UITextView);
        tf.isEditable = foam_cross_platform_Lib.equals(
          getVisibility(), foam_u2_Visibility.RW)
      `
    },
    {
      name: 'updateLabel',
      androidCode: `
        if ( getView() == null ) return;
        getView().setHint(getLabel());
      `
    },
    {
      name: 'updateHelp',
      androidCode: `
        if ( getView() == null ) return;
        getView().setHelperText(getHelp());
      `
    },
    {
      name: 'updateValidation',
      androidCode: `
        com.google.android.material.textfield.TextInputEditText v = getTextField(getView());
        if ( v == null ) return;
        v.setError(getValidation());
      `
    },
    {
      name: 'viewToData',
      androidCode: `
        com.google.android.material.textfield.TextInputEditText v = getTextField(getView());
        if ( v == null ) return;
        if ( getFeedback() ) return;
        setFeedback(true);
        setData(v.getText().toString());
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
        com.google.android.material.textfield.TextInputEditText v = getTextField(getView());
        if ( v == null ) return;
        if ( getFeedback() ) return;
        setFeedback(true);
        v.setText(getData() == null ? "" : getData().toString());
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
    }
  ]
});
