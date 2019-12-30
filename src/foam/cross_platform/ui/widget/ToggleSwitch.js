foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'ToggleSwitch',
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
    }
  ],
  listeners: [
    {
      name: 'updateVisibility',
      androidCode: `
        getView().setFocusable(getVisibility() == foam.u2.Visibility.RW);
        getView().setEnabled(getVisibility() != foam.u2.Visibility.DISABLED);
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
      `
    },
  ]
});

