foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'SingletonRefines',
  refines: 'foam.pattern.Singleton',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls) {
      var b = cls.classes.find(c => foam.cross_platform.code_generation.ios_swift.BuilderClass.isInstance(c));
      b.builder = foam.cross_platform.code_generation.ios_swift.SingletonBuilder.create({
        delegate: b.builder,
      });
    }
  ]
});
