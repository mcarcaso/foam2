/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.app',
  name: 'AppConfig',

  properties: [
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringProperty',
      name: 'version'
    },
    {
      class: 'StringProperty',
      name: 'privacy',
      value: 'Privacy Policy'
    },
    {
      class: 'StringProperty',
      name: 'privacyUrl'
    },
    {
      class: 'StringProperty',
      name: 'copyright'
    },
    {
      class: 'StringProperty',
      name: 'url',
      value: 'http://localhost:8080/'
    },
    {
      class: 'StringProperty',
      name: 'urlLabel',
      value: 'FOAM Powered'
    },
    {
      class: 'StringProperty',
      name: 'termsAndCondLabel',
      value: 'Terms and Conditions'
    },
    {
      class: 'StringProperty',
      name: 'termsAndCondLink'
    },
    {
      class: 'Enum',
      of: 'foam.nanos.app.Mode',
      name: 'mode'
    },
    {
      class: 'StringProperty',
      name: 'appLink',
      value: 'https://www.apple.com/lae/ios/app-store/'
    },
    {
      class: 'StringProperty',
      name: 'playLink',
      value: 'https://play.google.com/store?hl=en'
    },
    {
      class: 'BooleanProperty',
      name: 'forceHttps',
      value: false
    },
    {
      class: 'StringProperty',
      name: 'supportEmail'
    }
  ]
});
