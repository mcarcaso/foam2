/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao',
  name: 'RemoveChildrenOnRemoveDAO',
  extends: 'foam.dao.ProxyDAO',

  javaImports: [
    'static foam.mlang.MLang.*'
  ],

  properties: [
    {
      class: 'ObjectProperty',
      name: 'sourceKey',
      javaType: 'foam.core.PropertyInfo',
    },
    {
      class: 'ObjectProperty',
      name: 'targetKey',
      javaType: 'foam.core.PropertyInfo',
    },
    {
      class: 'StringProperty',
      name: 'targetDAOKey',
    }
  ],

  methods: [
    {
      name: 'remove_',
      code: function(x, id) {
      },
      javaCode: `
      DAO targetDAO = ((DAO) x.get(getTargetDAOKey())).where(EQ(getTargetKey(), getSourceKey().get(obj)));
      try {
        targetDAO.removeAll();
      }
      catch (Exception e) {
        throw new RuntimeException("Unable to delete children");
      }
      return getDelegate().remove_(x, obj);
      `
    }
  ],

  axioms: [
    {
      buildJavaClass: function(cls) {
        cls.extras.push(`
      public RemoveChildrenOnRemoveDAO(foam.core.X x, foam.dao.DAO delegate, foam.core.PropertyInfo sourceKey, foam.core.PropertyInfo targetKey, String targetDAOKey) {
      setSourceKey(sourceKey);
      setTargetKey(targetKey);
      setTargetDAOKey(targetDAOKey);
      setDelegate(delegate);
}
        `);
      }
    }
  ]
});
