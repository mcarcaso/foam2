/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  name: 'AllViews',

  properties: [
    {
      class: 'IntProperty',
      name: 'defaultInt'
    },
    {
      class: 'IntProperty',
      name: 'intWithMinAndMax',
      min: 1,
      max: 5,
      value: 3,
      units: ' rating (1-5)'
    },
    {
      class: 'IntProperty',
      name: 'intWithRangeView',
      view: {
        class: 'foam.u2.RangeView'
      }
    },
    /*
    {
      class: 'IntProperty',
      name: 'intWithTemperatureView',
      view: {
        class: 'foam.nanos.pm.TemperatureCView'
      }
    },
    */
    {
      class: 'IntProperty',
      name: 'intWithProgressView',
      view: {
        class: 'foam.u2.ProgressView'
      },
      value: 42
    },
    {
      class: 'IntProperty',
      name: 'intWithDualView',
      view: {
        class: 'foam.u2.view.DualView',
        viewa: 'foam.u2.RangeView',
        viewb: 'foam.u2.IntView'
      }
    },
    {
      class: 'StringProperty',
      name: 'defaultString'
    },
    {
      class: 'StringProperty',
      name: 'emptyRequiredString',
      validateObj: function(emptyRequiredString) { return emptyRequiredString ? '' : 'value required'; }
//      required: true
    },
    {
      class: 'StringProperty',
      name: 'requiredString',
      value: 'someValue',
      validateObj: function(requiredString) { return requiredString ? '' : 'value required'; }
//      required: true
    },
    {
      class: 'StringProperty',
      name: 'textFieldWithPlaceholder',
      view: {
        class: 'foam.u2.TextField',
        placeholder: 'placeholder'
      }
    },
    {
      class: 'StringProperty',
      name: 'textFieldWithPlaceholder2',
      placeholder: 'placeholder'
    },
    {
      class: 'StringProperty',
      name: 'textFieldWithChoices',
      view: {
        class: 'foam.u2.TextField',
        choices: ['Yes', 'No', 'Maybe']
      }
    },
    {
      class: 'StringProperty',
      name: 'choiceView',
      view: {
        class: 'foam.u2.view.ChoiceView',
        choices: ['Yes', 'No', 'Maybe']
      }
    },
    {
      class: 'StringProperty',
      name: 'radioView',
      view: {
        class: 'foam.u2.view.RadioView',
        choices: ['Yes', 'No', 'Maybe']
      }
    },
    {
      class: 'StringProperty',
      name: 'stringWithDisplayWidth',
      displayWidth: 4
    },
    {
      class: 'StringProperty',
      name: 'stringWithTextFieldWithSize',
      displayWidth: 4,
      view: {
        class: 'foam.u2.TextField',
        maxLength: 4
      }
    },
    {
      class: 'StringProperty',
      name: 'stringWithTextArea',
      view: {
        class: 'foam.u2.tag.TextArea',
        rows: 8, cols: 80,
      }
    },
    {
      class: 'DateProperty',
      name: 'defaultDate'
    },
    {
      class: 'DateTimeProperty',
      name: 'defaultDateTime'
    },
    {
      class: 'TimeProperty',
      name: 'defaultTime'
    },
    {
      class: 'ByteProperty',
      name: 'defaultByte'
    },
    {
      class: 'ShortProperty',
      name: 'defaultShort'
    },
    {
      class: 'LongProperty',
      name: 'defaultLong'
    },
    {
      class: 'FloatProperty',
      name: 'defaultFloat'
    },
    {
      class: 'FloatProperty',
      name: 'floatWithPrecision',
      precision: 2
    },
    {
      class: 'DoubleProperty',
      name: 'defaultDouble'
    },
    {
      class: 'StringArrayProperty',
      name: 'defaultStringArray'
    },
    {
      class: 'StringArrayProperty',
      name: 'stringArrayRowView',
      view: 'foam.u2.view.StringArrayRowView',
      factory: function() { return ['row1', 'row2', 'row3']; }
    },
    {
      class: 'EMailProperty',
      name: 'defaultEMail',
      value: 'someone@somewhere.com'
    },
    {
      class: 'ImageProperty',
      name: 'defaultImage',
      value: 'Dragon.png'
    },
    {
      class: 'ImageProperty',
      name: 'imageView',
      view: 'foam.u2.view.ImageView',
      value: 'Dragon.png'
    },
    {
      class: 'URLProperty',
      name: 'defaultURL'
    },
    {
      class: 'ColorProperty',
      name: 'defaultColor'
    },
    {
      class: 'PasswordProperty',
      name: 'defaultPassword',
      value: 'secret'
    },
    {
      class: 'PasswordProperty',
      name: 'passwordView',
      view: 'foam.u2.view.PasswordView',
      value: 'secret'
    },
    {
      class: 'PhoneNumberProperty',
      name: 'defaultPhoneNumber'
    },
    {
      class: 'CurrencyProperty',
      name: 'defaultCurrency'
    },
    {
      class: 'BooleanProperty',
      name: 'defaultBoolean',
      label: 'CheckBox',
      view: { class: 'foam.u2.CheckBox' }// default
    },
    {
      class: 'BooleanProperty',
      name: 'mdCheckboxBoolean',
      label: 'md.CheckBox',
      view: { class: 'foam.u2.md.CheckBox' }
    },
    {
      class: 'StringProperty',
      name: 'htmlView',
      value: '<b>bold</b><br/><i>italic</i>',
      view: 'foam.u2.HTMLView'
    },
    {
      class: 'FObjectProperty',
      name: 'defaultFObjectProperty',
      value: foam.util.Timer.create()
    },
    {
      class: 'FObjectProperty',
      name: 'fObjectView',
      label: 'FObjectView',
      view: { class: 'foam.u2.view.FObjectView' },
      value: foam.util.Timer.create()
    },
    {
      class: 'FObjectProperty',
      name: 'fObjectViewWithChoices',
      label: 'FObjectView With Choices',
      view: {
        class: 'foam.u2.view.FObjectView',
        choices: [
          [ 'foam.nanos.menu.DAOMenu',  'DAO'     ],
          [ 'foam.nanos.menu.SubMenu',  'SubMenu' ],
          [ 'foam.nanos.menu.TabsMenu', 'Tabs'    ]
        ]
      }
    }
  ]
})
