foam.CLASS({
  package: 'demo',
  name: 'MLang',
  requires: [
    'foam.mlang.sink.Count',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.sink.Count',
      required: true,
      name: 'countSink',
      crossPlatformFactory: `return Count_create().build();`,
    },
  ],
  tests: [
    {
      name: 'testCount',
      crossPlatformCode: `
        <%=vr('demo.MLang', 'o', 'MLang_create().build()')%>
        o.getCountSink().put(o, <%=nul()%>);
        <%=assertEqual(1, 'o.getCountSink().getValue()')%>
        o.getCountSink().remove(o, <%=nul()%>);
        <%=assertEqual(0, 'o.getCountSink().getValue()')%>

        o.getCountSink().put(o, <%=nul()%>);
        o.getCountSink().put(o, <%=nul()%>);
        o.getCountSink().put(o, <%=nul()%>);
        <%=assertEqual(3, 'o.getCountSink().getValue()')%>
        o.getCountSink().reset(<%=nul()%>);
        <%=assertEqual(0, 'o.getCountSink().getValue()')%>
      `
    },
  ]
});
