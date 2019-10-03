/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.theme',
  name: 'Theme',

  documentation: `
    An object that specifies how the web app should look and feel. Anything that
    relates to appearance or behaviour that can be configured should be stored
    here.
  `,

  tableColumns: [
    'id',
    'priority',
    'description',
    'preview'
  ],

  sections: [
    {
      name: 'colours',
      title: 'Colour Scheme'
    },
    {
      name: 'inputs',
      title: 'Inputs'
    }
  ],

  properties: [
    {
      class: 'LongProperty',
      name: 'id',
      tableWidth: 70
    },
    {
      class: 'StringProperty',
      name: 'description'
    },
    {
      class: 'StringProperty',
      name: 'appName'
    },
    {
      class: 'StringProperty',
      name: 'spid'
    },
    {
      class: 'LongProperty',
      name: 'priority',
      documentation: `
        When multiple Theme objects could be applied to a given situation,
        this property is used to determine which one will be used.

        For example, if an application has a default Theme but a user
        copies it and modifies it to create their own Theme object, then
        when that user logs in, we could either give them their own Theme
        or the app's default Theme. Whichever Theme has the higher
        priority will be used, which in this case should be the user's custom
        Theme (assuming its priority was set to be greater than the
        default Theme's priority).
      `,
      tableWidth: 100
    },
    {
      class: 'Reference',
      targetDAOKey: 'menuDAO',
      name: 'defaultMenu',
      documentation: 'Menu user redirects to after login.',
      of: 'foam.nanos.menu.Menu'
    },
    {
      class: 'ImageProperty',
      name: 'logo',
      documentation: 'The logo to display in the application.',
      displayWidth: 60
    },
    {
      class: 'StringProperty',
      name: 'topNavigation',
      documentation: 'A custom top nav view to use.',
      value: 'foam.nanos.u2.navigation.TopNavigation',
      displayWidth: 45
    },
    {
      class: 'StringProperty',
      name: 'footerView',
      documentation: 'A custom footer view to use.',
      value: 'foam.nanos.u2.navigation.FooterView',
      displayWidth: 45
    },
    {
      class: 'StringProperty',
      name: 'customCSS',
      view: { class: 'foam.u2.tag.TextArea', rows: 16, cols: 60 },
    },
    {
      class: 'ColorProperty',
      name: 'primary1',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'primary2',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'primary3',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'primary4',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'primary5',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'approval1',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'approval2',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'approval3',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'approval4',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'approval5',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'warning1',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'warning2',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'warning3',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'warning4',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'warning5',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'destructive1',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'destructive2',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'destructive3',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'destructive4',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'destructive5',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'grey1',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'grey2',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'grey3',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'grey4',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'grey5',
      section: 'colours'
    },
    {
      class: 'ColorProperty',
      name: 'black',
      section: 'colours'
    },
    {
      class: 'StringProperty',
      name: 'inputHeight',
      documentation: 'Used to enforce consistent height across text-based inputs.',
      section: 'inputs'
    },
    {
      class: 'StringProperty',
      name: 'inputVerticalPadding',
      section: 'inputs'
    },
    {
      class: 'StringProperty',
      name: 'inputHorizontalPadding',
      section: 'inputs'
    }
  ],

  actions: [
    {
      name: 'preview',
      tableWidth: 100,
      code: function(X) {
        X.ctrl.theme = this;
      }
    }
  ]
});
