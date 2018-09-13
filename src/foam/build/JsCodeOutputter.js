/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'JsCodeOutputter',
  requires: [
    'foam.core.Script',
    'foam.build.Lib',
    'foam.build.InnerSerializer',
    'foam.build.RequiresCompressSerializer',
    'foam.build.ImplementsCompressSerializer',
    'foam.dao.Relationship',
  ],
  methods: [
    function stringify(x, v) {
      var f = this.Relationship.isInstance(v) ? 'RELATIONSHIP' :
        this.Script.isInstance(v) ? 'SCRIPT' :
        this.Lib.isInstance(v) ? 'LIB' :
        'CLASS';

      var serializer = this.ImplementsCompressSerializer.create({
        delegate: this.InnerSerializer.create()
      });
      x = x.createSubContext({out: serializer})
      serializer.output(x, this.Lib.isInstance(v) ? v.json : v);
      return `foam.${f}(${serializer.getString()});`;
    }
  ],
});
