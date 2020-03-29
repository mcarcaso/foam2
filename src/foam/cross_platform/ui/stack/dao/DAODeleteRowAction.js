foam.CLASS({
  package: 'foam.cross_platform.ui.stack.dao',
  name: 'DAODeleteRowAction',
  implements: [
    'foam.cross_platform.ui.stack.dao.RowAction',
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
  swiftImports: [
    'UIKit'
  ],
  messages: [
    {
      name: 'DELETE',
      message: 'Delete',
      description: `The text shown when swiping to delete a row in the table`
    },
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    }
  ],
  methods: [
    {
      name: 'actionForObj',
      androidCode: `
        return new foam.cross_platform.ui.android.SwipeHelper.UnderlayButton(getAndroidContext(), DELETE, getTheme().getError(), () -> {
          getDao().remove(o);
        });
      `,
      swiftCode: `
        return UIContextualAction(style: .destructive, title: Self.DELETE) { (action, view, handler) in
          _ = self.getDao()?.remove(o);
        }
      `
    }
  ]
});