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
  properties: [
    {
      androidType: 'android.text.TextWatcher',
      flags: ['android'],
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
        return UITextField();
      `,
      androidPostSet: `
        if ( oldValue != null ) {
          ((com.google.android.material.textfield.TextInputEditText) oldValue)
            .removeTextChangedListener(getTextWatcher());
        }
        newValue.addTextChangedListener(getTextWatcher());
      `,
      swiftPostSet: `
        if ( oldValue != nil ) {
          (oldValue as? UITextField)?.removeTarget(
            self, action: #selector(onTextFieldChange), for: .editingChanged)
        }
        (newValue as? UITextField)?.addTarget(
          self, action: #selector(onTextFieldChange), for: .editingChanged)
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
    },
    {
      name: 'onTextFieldChange',
      flags: ['swift'],
      swiftAnnotations: ['@objc'],
      swiftCode: `viewToData(nil, nil)`
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
        let tf = (getView() as! UITextField);
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
        setData(getView().getText().toString());
        setFeedback(false);
      `,
      swiftCode: `
        if ( getView() == nil ) { return; }
        if ( getFeedback() ) { return; }
        setFeedback(true);
        setData((getView() as! UITextField).text!);
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
        (getView() as! UITextField).text = getData() == nil ? "" :
          getData() is String ? getData() as! String :
          String(describing: getData());
        setFeedback(false);
      `
    },
  ]
});
