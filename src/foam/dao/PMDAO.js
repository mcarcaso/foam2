/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao',
  name: 'PMDAO',
  extends: 'foam.dao.ProxyDAO',

  implements: [
    'foam.nanos.auth.EnabledAware',
    'foam.nanos.boot.NSpecAware'
  ],

  requires: [
    'foam.nanos.pm.PM'
  ],

  javaImports: [
    'foam.core.X',
    'foam.mlang.order.Comparator',
    'foam.mlang.predicate.Predicate',
    'foam.nanos.pm.PM'
  ],

  properties: [
    {
      name: 'enabled',
      class: 'BooleanProperty',
      value: true
    },
    {
      name: 'nSpec',
      class: 'FObjectProperty',
      type: 'foam.nanos.boot.NSpec'
    },
    {
      name: 'classType',
      class: 'ClassProperty',
      javaFactory: `
        return PMDAO.getOwnClassInfo();
      `,
      hidden: true
    },
    {
      documentation: 'Enable PMs on DAO.find operations',
      name: 'pmFind',
      class: 'BooleanProperty'
    },
    {
      name: 'putName',
      class: 'StringProperty',
      javaFactory: 'return getNSpec().getName() + ":put";',
      visibility: 'RO'
    },
    {
      name: 'findName',
      class: 'StringProperty',
      javaFactory: 'return getNSpec().getName() + ":find";',
      visibility: 'RO'
    },
    {
      name: 'selectName',
      class: 'StringProperty',
      javaFactory: 'return getNSpec().getName() + ":select";',
      visibility: 'RO'
    },
    {
      name: 'removeName',
      class: 'StringProperty',
      javaFactory: 'return getNSpec().getName() + ":remove";',
      visibility: 'RO'
    },
    {
      name: 'removeAllName',
      class: 'StringProperty',
      javaFactory: 'return getNSpec().getName() + ":removeAll";',
      visibility: 'RO'
    },
    {
      name: 'cmdName',
      class: 'StringProperty',
      javaFactory: 'return getNSpec().getName() + ":cmd";',
      visibility: 'RO'
    }
  ],

  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      name: 'javaExtras',
      buildJavaClass: function(cls) {
        cls.extras.push(foam.java.Code.create({
          data: `
            public PMDAO(X x, DAO delegate) {
              super(x, delegate);
            }
          `
        }));
      }
    }
  ],

  methods: [
    {
      name: 'createPM',
      args: [
        {
          name: 'x',
          type: 'X'
        },
        {
          name: 'op',
          type: 'String'
        }
      ],
      javaType: 'PM',
      javaCode: `
    PM pm = null;
    if ( getEnabled() ) {
      pm =  (PM) x.get("PM");
      pm.setClassType(this.getClassType());
      pm.setName(op);
      pm.init_();
    }
    return pm;
      `
    },
    {
      name: 'log',
      args: [
        {
          name: 'x',
          type: 'X',
        },
        {
          name: 'pm',
          type: 'PM'
        }
      ],
      javaCode: `
    if ( pm != null ) {
      pm.log(x);
    }
      `
    },
    {
      name: 'put_',
      javaCode: `
    PM pm = createPM(x, getPutName());
    try {
      return super.put_(x, obj);
    } finally {
      log(x, pm);
    }
     `
    },
    {
      name: 'find_',
      javaCode: `
    PM pm = null;
    if ( getPmFind() ) pm = createPM(x, getFindName());
    try {
      return super.find_(x, id);
    } finally {
      log(x, pm);
    }
     `
    },
    {
      name: 'select_',
      javaCode: `
    PM pm = createPM(x, getSelectName());
    try {
      return super.select_(x, sink, skip, limit, order, predicate);
    } finally {
      log(x, pm);
    }
     `
    },
    {
      name: 'removeAll_',
      javaCode: `
    PM pm = createPM(x, getRemoveAllName());
    try {
      super.removeAll_(x, skip, limit, order, predicate);
    } finally {
      log(x, pm);
    }
     `
    },
    {
      name: 'cmd_',
      javaCode: `
    PM pm = createPM(x, getCmdName());
    try {
      return super.cmd_(x, obj);
    } finally {
      log(x, pm);
    }
     `
    }
  ]
});
