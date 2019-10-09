foam.LIB({
  name: 'foam.android.tools',
  flags: ['android'],
  methods: [
    {
      name: 'asJavaValue',
      code: foam.mmethod({
        String: function(s) {
          return '"' + s.
            replace(/\\/g, "\\\\").
            replace(/"/g, '\\"').
            replace(/\n/g, "\\n") + '"';
        },
        Boolean: function(b) {
          return b ? "true" : "false";
        },
        Number: function(n) {
          return '' + n + (n > Math.pow(2, 31) ? 'L' : '');
        },
        FObject: function(o) {
          return 'null';//o.asJavaValue();
        },
        Undefined: function() {
          // TODO: This probably isn't strictly right, but we do it in
          // a number of places.
          return null;
        },
        Array: function(a, prop) {
          return "new " + (prop ? prop.javaType : 'Object[]') + " {" +
            a.map(foam.android.tools.asJavaValue).join(',') +
            '}';
        },
        Null: function(n) { return "null"; },
        Object: function(o) {
          if (foam.core.FObject.isSubClass(o)) return 'null'; // TODO!
          return `
new java.util.HashMap() {
  {
${Object.keys(o).map(function(k) {
  return `  put(${foam.android.tools.asJavaValue(k)}, ${foam.android.tools.asJavaValue(o[k])});`
}).join('\n')}
  }
}
          `;
        },
        RegExp: function(o) {
          o = o.toString();
          o = o.slice(o.indexOf('/') + 1, o.lastIndexOf('/'))
          o = o.replace(/\\/g, '\\\\')
          return `java.util.regex.Pattern.compile("${o}")`
        },
      }, function(v) {
        return 'null';
      })
    }
  ]
});
