/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'EmptyParameterException',
  extends: 'foam.nanos.dig.exception.DigErrorMessage',

  properties: [
    {
      class: 'StringProperty',
      name: 'status',
      value: '400'
    },
    {
      class: 'IntProperty',
      name: 'code',
      value: 1007
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'Empty Parameter'
    },
    {
      class: 'StringProperty',
      name: 'message',
      value: 'Empty Parameter Exception'
    }
  ]
});
