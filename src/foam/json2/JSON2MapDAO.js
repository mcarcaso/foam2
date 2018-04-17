foam.CLASS({
  package: 'foam.json2',
  name: 'JSON2MapDAO',
  extends: 'foam.dao.AbstractDAO',
  requires: [
    'foam.json2.Deserializer',
    'foam.json2.Serializer',
  ],
  properties: [
    {
      class: 'Map',
      name: 'map',
    },
    {
      name: 's',
      hidden: true,
      factory: function() {
        return this.Serializer.create()
      },
    },
    {
      name: 'd',
      hidden: true,
      factory: function() {
        return this.Deserializer.create({parseFunctions: true})
      },
    },
  ],
  methods: [
    function put_(x, o) {
      this.map[o.id] = this.s.stringify(x, o);
      return Promise.resolve(o);
    },
    function find_(x, id) {
      return this.map[id] ?
        this.d.aparseString(x, this.map[id]) :
        Promise.resolve();
    },
  ]
});
