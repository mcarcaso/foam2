foam.CLASS({
  package: 'foam.build',
  name: 'RequiresCompressSerializer',
  extends: 'foam.build.ProxySerializer',
  requires: [
    'foam.core.Model',
    'foam.core.Requires',
  ],
  properties: [
    {
      class: 'Array',
      name: 'chain',
    },
  ],
  methods: [
    function output(x, v) {
      if ( this.Requires.isInstance(v) &&
           this.chain.length >= 2 &&
           foam.Array.isInstance(this.chain[this.chain.length - 1]) &&
           this.Model.isInstance(this.chain[this.chain.length - 2]) ) {
        var requires = this.chain[this.chain.length - 1];
        var model = this.chain[this.chain.length - 2];
        if ( model.requires == requires && v.equals(v.cls_.create({path: v.path})) ) {
          v = v.path;
        }
      }
      this.chain.push(v)
      this.delegate.output(x, v);
      this.chain.pop()
    },
  ],
});
