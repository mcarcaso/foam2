foam.LIB({
  name: 'foam.android.tools',
  flags: ['android'],
  methods: [
    {
      name: 'isJavaPrimitive',
      code: function(str) {
        return [
          'byte',
          'short',
          'int',
          'long',
          'float',
          'double',
          'char',
          'boolean',
        ].indexOf(str) != -1;
      }
    },
    {
      name: 'asAndroidValue',
      code: foam.mmethod({
        String: function(s) {
          return JSON.stringify(s);
        },
        Boolean: function(b) {
          return b ? "true" : "false";
        },
        Number: function(n) {
          return '' + n + (n > Math.pow(2, 31) ? 'L' : '');
        },
        FObject: function(o, _, x) {
          return o.asAndroidValue(x);
        },
        Array: function(a, t, x) {
          var type = 'Object[]';
          return `new ${type} {
            ${a.map(a => foam.android.tools.asAndroidValue(a, null, x)).join(', ')}
          }`;
        },
        Object: function(o, _, x) {
          if (foam.core.FObject.isSubClass(o)) {
            if ( foam.core.InterfaceModel.isInstance(o.model_) ) {
              return o.id + 'Class.CLS_()';
            }
            if ( o.id == 'foam.core.AbstractInterface' ) {
              return o.id + 'Class.CLS_()';
            }
            return (o.id == 'foam.core.FObject' ?
              'foam.cross_platform.AbstractFObject' :
              o.id)
              + '.CLS_()';
          }
          return `
new java.util.HashMap<String, Object>() {
  {
${Object.keys(o).map(function(k) {
  return `  put(${foam.android.tools.asAndroidValue(k, null, x)}, ${foam.android.tools.asAndroidValue(o[k], null, x)});`
}).join('\n')}
  }
}
          `;
        },
        Date: function(o) {
          return `new java.util.Date(${o.getTime()}L)`;
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
