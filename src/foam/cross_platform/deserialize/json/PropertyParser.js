foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'PropertyParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.json.KeyParser',
    'foam.cross_platform.deserialize.json.Whitespace',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'property',
    },
    {
      name: 'delegate',
      androidCode: `
        return Seq1_create(["index": 5, "parsers": [
          .setIndex(5)
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Whitespace_create().build(),
            KeyParser_create().setKey(getProperty().getName()),
            Whitespace_create().build(),
            Literal_create().setString(":").build(),
            Whitespace_create().build(),
            //getProperty().getJsonParser(),
            AnyParser_create().build(),
            Whitespace_create().build()
          })
        .build();
      `
    },
  ],
  methods: [
    {
      name: 'parse',
      swiftCode_DELETE: function() {/*
let ps = super.parse(ps, x);
if ps == nil { return nil }
let args = x.get("obj") as! Reference<[String:Any?]>
args.value[property.name] = ps!.value()
return ps
      */},
    },
  ],
});

