foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'TextField',
  properties: [
    {
      name: 'data'
    },
    {
      androidType: 'android.ui.View',
      swiftType: 'UILabel?',
      name: 'view'
    },
  ],
  reactions: [
    ['', 'propertyChange', 'updateView']
  ],
  listeners: [
    {
      name: 'updateView',
      swiftCode: `
        if getView() == nil { return }
        getView()!.setText(
          getData() as? String ?? String(describing: getData()));
      `
    }
  ]
});
