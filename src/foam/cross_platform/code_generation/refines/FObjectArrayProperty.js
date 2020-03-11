foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectArrayPropertyJavaRefinement',
  refines: 'foam.core.FObjectArray',
  flags: ['android'],
  properties: [
    {
      name: 'androidFAsAndroidValue',
      expression: function() {
        return (o, t, x) => {
          var v = this.f(o);
          if ( ! foam.Array.isInstance(v) ) {
            return foam.android.tools.asAndroidValue(v);
          }
          return `new ${this.of}[] { ${v.map(s => foam.android.tools.asAndroidValue(s, this.androidType, x)).join(', ')} }`;
        }
      }
    },
    {
      name: 'androidAdapt',
      expression: function(of) {
        return `
          if ( newValue instanceof ${of}[] ) return (${of}[]) newValue;
          Object[] oa = foam.cross_platform.type.ArrayType
            .ArrayTypeBuilder(null)
            .build()
            .toObjectArray(newValue);
          ${of}[] sa = new ${of}[oa.length];
          for ( int i = 0 ; i < oa.length ; i++ ) {
            sa[i] = (${of}) oa[i];
          }
          return sa;
        `
      }
    },
  ],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of] = true;
      }
    }
  ]
});
