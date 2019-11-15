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
  ],
  values: [
    {
      name: 'ANDROID',
      flag: 'android',
      buildClassMethod: 'buildAndroidClass',
    },
    {
      name: 'SWIFT',
      flag: 'swift',
      buildClassMethod: 'buildSwiftClass',
    },
  ]
})
