/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao.jdbc',
  name: 'TestDataForJDBC',
  properties: [
    {
      class: 'Int',
      name: 'id',
      sqlType: 'int'
    },
    {
      class: 'StringProperty',
      name: 'name',
      sqlType: 'VARCHAR(40)'
    }
  ]
});

foam.CLASS({
  package: 'foam.dao.jdbc',
  name: 'TestCompany',
  properties: [
    {
      name: 'id',
      class: 'Int',
      sqlType: 'int'
    },
    {
      name: 'name',
      class: 'StringProperty',
      sqlType: 'VARCHAR(40)'
    }
  ]
});

foam.CLASS({
  package: 'foam.dao.jdbc',
  name: 'TestEmployee',
  properties: [
    {
      name: 'id',
      class: 'Int',
      sqlType: 'int'
    },
    {
      name: 'firstName',
      class: 'StringProperty',
      sqlType: 'VARCHAR(40)'
    },
    {
      name: 'lastName',
      class: 'StringProperty',
      sqlType: 'VARCHAR(40)'
    }
  ]
});

//Foreign Key from TestEmployee to TestCompany
foam.RELATIONSHIP({
  sourceModel: 'foam.dao.jdbc.TestCompany',
  forwardName: 'employees',
  targetModel: 'foam.dao.jdbc.TestEmployee',
  inverseName: 'company'
});
