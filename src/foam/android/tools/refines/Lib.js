foam.LIB({
  name: 'foam.android.tools',
  flags: ['android'],
  methods: [
    {
      name: 'asAndroidValue',
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
          return o.asAndroidValue();
        },
        Array: function(a, prop) {
          return "new " + (prop ? prop.androidType : 'Object[]') + " {" +
            a.map(foam.android.tools.asAndroidValue).join(',') +
            '}';
        },
        Object: function(o) {
          if (foam.core.FObject.isSubClass(o)) {
            return (o.id == 'foam.core.FObject' ? 
              'foam.cross_platform.AbstractFObject' : o.id) + '.CLS_';
          }
          return `
new java.util.HashMap<String, Object>() {
  {
${Object.keys(o).map(function(k) {
  return `  put(${foam.android.tools.asAndroidValue(k)}, ${foam.android.tools.asAndroidValue(o[k])});`
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
