foam.CLASS({
  package: 'foam.swift',
  name: 'Initializer',
  flags: ['swift'],

  properties: [
    'visibility',
    'body',
    'override',
    {
      class: 'FObjectArray',
      of: 'foam.swift.Argument',
      name: 'args'
    },
  ],

  methods: [
    function outputSwift(o) {
      o.indent();

      o.out(
        this.visibility ? this.visibility + ' ' : '',
        this.override ? 'override ' : '',
        'init',
        '(');

      for (var i = 0, arg; arg = this.args[i]; i++) {
        o.out(i > 0 ? ', ' : '');
        arg.outputSwift(o);
      }

      o.out(') {\n');

      o.increaseIndent();
      o.indent();
      o.out(this.body, '\n');
      o.decreaseIndent();
      o.indent();
      o.out('}');
    }
  ]
});

