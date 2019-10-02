foam.CLASS({
  name: 'Phone',
  properties: [
    {
      class: 'StringProperty',
      name: 'id',
    },
    'age', 'name', 'snippet', 'additionalFeatures', 'android',
    'availability', 'battery', 'camera', 'connectivity', 'description',
    'display', 'hardware', 'sizeAndWeight', 'storage', 'details',
    { name: 'imageUrl', view: 'foam.u2.ImageView' },
    { name: 'images', class: 'StringArrayProperty' }
  ]
});