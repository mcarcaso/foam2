foam.CLASS({
  package: 'demo',
  name: 'ArrayDAO',
  requires: [
    'demo.Person',
    'foam.dao.ArrayDAO',
    'foam.dao.ArraySink',
    'foam.mlang.Constant',
    'foam.mlang.order.Desc',
    'foam.mlang.predicate.Eq',
    'foam.mlang.sink.Count',
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      androidFactory: `
        return ArrayDAO_create()
          .setOf(demo.Person.CLS_())
          .build();
      `
    },
  ],
  tests: [
    {
      name: 'testPutAndRemove',
      androidCode: `
        ArrayDAO o = ArrayDAO_create().build();
        foam.dao.AbstractDAO d = (foam.dao.AbstractDAO) o.getDao();
        foam.mlang.sink.Count c = o.Count_create().build();

        final int[] pubs = { 0, 0, 0 };
        d.on().sub(null, <%=listener(\`
          pubs[0]++; 
        \`)%>);
        d.on().getSubTopic("put").sub(null, <%=listener(\`
          pubs[1]++; 
        \`)%>);
        d.on().getSubTopic("remove").sub(null, <%=listener(\`
          pubs[2]++; 
        \`)%>);

        // Same ID. Only one entry should be in DAO.
        d.put(o.Person_create()
          .setFullName("Mike C")
          .build());
        d.put(o.Person_create()
          .setFirstName("Mike")
          .setLastName("C")
          .build());

        c.reset(null);
        d.select(c);
        assertEquals(1, c.getValue());
        assertEquals("All", 2, pubs[0]);
        assertEquals("Puts", 2, pubs[1]);
        assertEquals("Removes", 0, pubs[2]);

        d.put(o.Person_create()
          .setFirstName("Mike")
          .setLastName("D")
          .build());

        c.reset(null);
        d.select(c);
        assertEquals(2, c.getValue());
        assertEquals("All", 3, pubs[0]);
        assertEquals("Puts", 3, pubs[1]);
        assertEquals("Removes", 0, pubs[2]);

        d.remove(o.Person_create()
          .setFirstName("Mike")
          .setLastName("E")
          .build());

        c.reset(null);
        d.select(c);
        assertEquals(2, c.getValue());
        assertEquals("All", 3, pubs[0]);
        assertEquals("Puts", 3, pubs[1]);
        assertEquals("Removes", 0, pubs[2]);

        d.remove(o.Person_create()
          .setFullName("Mike C")
          .build());

        c.reset(null);
        d.select(c);
        assertEquals(1, c.getValue());
        assertEquals("All", 4, pubs[0]);
        assertEquals("Puts", 3, pubs[1]);
        assertEquals("Removes", 1, pubs[2]);
      `,
    },
    {
      name: 'testWhere',
      androidCode: `
        ArrayDAO o = ArrayDAO_create().build();
        foam.dao.AbstractDAO d = (foam.dao.AbstractDAO) o.getDao();
        foam.mlang.sink.Count c = o.Count_create().build();

        d.put(o.Person_create()
          .setFirstName("A")
          .build());
        d.put(o.Person_create()
          .setFirstName("B")
          .build());

        foam.dao.DAO fd = d.where(o.Eq_create()
          .setArg1(demo.Person.FIRST_NAME())
          .setArg2(o.Constant_create().setValue("B").build())
          .build());

        d.select(c);
        assertEquals(2, c.getValue());
        c.reset(null);

        fd.select(c);
        assertEquals(1, c.getValue());
        c.reset(null);
      `,
    },
    {
      name: 'testOrderBy',
      androidCode: `
        ArrayDAO o = ArrayDAO_create().build();
        foam.dao.ArraySink a = o.ArraySink_create().build();
        foam.dao.AbstractDAO d = (foam.dao.AbstractDAO) o.getDao();
        foam.mlang.order.Comparator asc = demo.Person.FIRST_NAME();
        foam.mlang.order.Comparator desc = o.Desc_create()
          .setArg1(asc)
          .build();

        d.put(o.Person_create()
          .setFirstName("C")
          .build());
        d.put(o.Person_create()
          .setFirstName("A")
          .build());
        d.put(o.Person_create()
          .setFirstName("B")
          .build());

        a.reset(null);
        d.orderBy(asc).select(a);

        assertEquals("A",
          ((demo.Person) a.getArray().get(0)).getFirstName());
        assertEquals("B",
          ((demo.Person) a.getArray().get(1)).getFirstName());
        assertEquals("C",
          ((demo.Person) a.getArray().get(2)).getFirstName());

        a.reset(null);
        d.orderBy(desc).select(a);

        assertEquals("C",
          ((demo.Person) a.getArray().get(0)).getFirstName());
        assertEquals("B",
          ((demo.Person) a.getArray().get(1)).getFirstName());
        assertEquals("A",
          ((demo.Person) a.getArray().get(2)).getFirstName());
      `,
    },
  ]
});
