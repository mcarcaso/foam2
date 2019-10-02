/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao.jdbc',
  name: 'ConnectionPool',

  documentation: 'Represents a database connection pool',

  implements: [ 'foam.nanos.NanoService' ],

  javaImports: [ 'org.apache.commons.dbcp2.BasicDataSource' ],

  properties: [
    {
      class: 'ObjectProperty',
      name: 'pool',
      javaType: 'BasicDataSource',
      documentation: 'Connection pool',
    },
    {
      class: 'IntProperty',
      name: 'poolSize',
      value: 20,
      documentation: 'Connection pool size'
    },
    {
      class: 'StringProperty',
      name: 'driver',
      documentation: 'Database driver'
    },
    {
      class: 'StringProperty',
      name: 'prefix',
      documentation: 'Database connection string prefix. i.e. jdbc:postgresq://'
    },
    {
      class: 'StringProperty',
      name: 'hostname',
      documentation: 'Database hostname'
    },
    {
      class: 'StringProperty',
      name: 'port',
      documentation: 'Database port'
    },
    {
      class: 'StringProperty',
      name: 'database',
      documentation: 'Database name'
    },
    {
      class: 'StringProperty',
      name: 'username',
      documentation: 'Database username for authentication'
    },
    {
      class: 'StringProperty',
      name: 'password',
      documentation: 'Database password for authentication'
    },
    {
      class: 'StringProperty',
      name: 'connectionString',
      transient: true,
      javaFactory: `return getPrefix() +
        getHostname() + ":" +
        getPort() + "/" +
        getDatabase();`
    }
  ],

  methods: [
    {
      name: 'start',
      javaCode: `try {
  BasicDataSource pool = new BasicDataSource();
  pool.setUsername(getUsername());
  pool.setDriverClassName(getDriver());
  pool.setUrl(getConnectionString());
  pool.setInitialSize(getPoolSize());
  setPool(pool);
} catch (Exception e) {
  e.printStackTrace();
}`
    },
    {
      name: 'getConnection',
      javaType: 'java.sql.Connection',
      javaThrows: ['java.sql.SQLException'],
      javaCode: 'return getPool().getConnection();'
    }
  ]
});
