/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao.jdbc',
  name: 'JDBCConnectionSpec',
  documentation: 'A JDBC Connection Specification to add to the system context.',
  properties: [
    {
      class: 'StringProperty',
      name: 'databaseServer'
    },
    {
      class: 'StringProperty',
      name: 'hostName'
    },
    {
      class: 'StringProperty',
      name: 'databaseName'
    },
    {
      class: 'StringProperty',
      name: 'userName'
    },
    {
      class: 'PasswordProperty',
      name: 'userPassword'
    }
  ],
  methods: [
    {
        name: 'buildConnectionURI',
        type: 'String',
        javaCode: `return "jdbc:" + getDatabaseServer() + "://" + getHostName() +
                               "/" + getDatabaseName() + "?useUnicode=true&useJDBCCompliantTimezoneShift=true" +
                               "&useLegacyDatetimeCode=false&serverTimezone=UTC" +
                               "&user=" + getUserName() + "&password=" + getUserPassword();
                  `
    }
  ]
});
