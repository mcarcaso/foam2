/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.INTERFACE({
  package: 'foam.nanos.auth',
  name: 'HumanNameTrait',

  properties: [
    {
      class: 'StringProperty',
      name: 'firstName',
      tableWidth: 160,
      documentation: 'First name of user.'
    },
    {
      class: 'StringProperty',
      name: 'middleName',
      documentation: 'Middle name of user.'
    },
    {
      class: 'StringProperty',
      name: 'lastName',
      documentation: 'Last name of user.',
      tableWidth: 160
    },
    {
      class: 'StringProperty',
      name: 'legalName',
      documentation: 'Full legal name of user. Appends first, middle & last name.',
      transient: true,
      expression: function(firstName, middleName, lastName) {
        return middleName != '' ? firstName + ' ' + middleName + ' ' + lastName : firstName + ' ' + lastName;
      },
      javaGetter: `
        return ! getMiddleName().equals("")
          ? getFirstName() + " " + getMiddleName() + " " + getLastName()
          : getFirstName() + " " + getLastName();
      `,
    }
  ]
});
