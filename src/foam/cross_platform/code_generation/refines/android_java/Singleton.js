foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'SingletonRefines',
  refines: 'foam.pattern.Singleton',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      var b = cls.classes.find(c => foam.cross_platform.code_generation.android_java.BuilderClass.isInstance(c));
      b.builder = foam.cross_platform.code_generation.android_java.SingletonBuilder.create({
        delegate: b.builder,
      });
    }
  ]
});
