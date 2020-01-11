foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'Theme',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Color',
      name: 'primary'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Color',
      name: 'secondary'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Color',
      name: 'error'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Color',
      name: 'background'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Color',
      name: 'surface'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Text',
      name: 'h1'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Text',
      name: 'subtitle1'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Text',
      name: 'body1'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Text',
      name: 'button'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.theme.Text',
      name: 'caption'
    },
  ]
});
