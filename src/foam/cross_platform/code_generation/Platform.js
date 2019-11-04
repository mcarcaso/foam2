foam.ENUM({
  package: 'foam.cross_platform.code_generation',
  name: 'Platform',
  properties: [
    {
      class: 'StringProperty',
      name: 'flag'
    },
    {
      class: 'StringProperty',
      name: 'buildClassMethod'
    },
    {
      class: 'FunctionProperty',
      name: 'modelToPath'
    }
  ],
  values: [
    {
      name: 'ANDROID',
      flag: 'android',
      buildClassMethod: 'buildAndroidClass',
      modelToPath: function(model) {
        var sep = require('path').sep;
        return model.package.replace(/\./g, sep) + sep + model.name + '.java';
      }
    },
    {
      name: 'SWIFT',
      flag: 'swift',
      buildClassMethod: 'buildSwiftClass',
      modelToPath: function (model) {
        return model.swiftName + '.swift';
      }
    },
  ]
})