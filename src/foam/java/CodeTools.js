foam.LIB({
  name: 'foam.java.CodeTools',
  methods: [
    function t() {
      if ( ! this.template ) {
        this.template = foam.java.CodeToolsTemplates.create();
      }
      return this.template;
    },
  ],
});

foam.CLASS({
  package: 'foam.java',
  name: 'CodeToolsTemplates',
  methods: [
    function map(map) {
      return `(${this.f(this.map_(map), 'Void', 'java.util.Map<String, Object>')}).apply(null)`;
    },
  ],
  templates: [
    {
      name: 'map_',
      args: ['map'],
      template: function() {/*
java.util.Map<String, Object> map = new java.util.HashMap<>();
<% Object.keys(map).forEach(function(k) { %>
map.put("<%=k%>", <%=map[k]%>); 
<% }) %>
return map;
      */},
    },
    {
      name: 'f',
      args: ['code', 'arg', 'ret'],
      template: function() {/*
<% arg = arg || 'Object' %>
<% ret = ret || 'Object' %>
new java.util.function.Function<<%=arg%>, <%=ret%>>() {
  public <%=ret%> apply(<%=arg%> arg) {
    <%=code%>
  }
}
      */},
    },
  ],
});
