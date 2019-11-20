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
      name: 'buildResourcesMethod'
    },
  ],
  values: [
    {
      name: 'ANDROID',
      flag: 'android',
      buildResourcesMethod: 'buildAndroidResources',
    },
    {
      name: 'SWIFT',
      flag: 'swift',
      buildResourcesMethod: 'buildSwiftResources',
    },
  ]
})
