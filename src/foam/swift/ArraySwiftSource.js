foam.CLASS({
  package: 'foam.swift',
  name: 'ArraySwiftSource',
  flags: ['swift'],
  properties: [
    {
      class: 'ArrayProperty',
      name: 'sources'
    }
  ],
  methods: [
    function toSource() {
      return this.sources.map(s => s.toSource()).flat();
    },
  ]
});
