foam.INTERFACE({
  package: 'foam.cross_platform.ui.stack.dao',
  name: 'RowAction',
  swiftImports: [
    'UIKit'
  ],
  methods: [
    {
      androidType: 'foam.cross_platform.ui.android.SwipeHelper.UnderlayButton',
      swiftType: 'UIContextualAction?',
      name: 'actionForObj',
      args: [
        { type: 'FObject', name: 'o' }
      ]
    }
  ],
});