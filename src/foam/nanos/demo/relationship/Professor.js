/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.demo.relationship',
  name: 'Professor',
  properties: [
    {
      class: 'StringProperty',
      name: 'id',
      hidden: true
    },
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'FloatProperty',
      name: 'salary'
    }
  ]
});

foam.RELATIONSHIP({
  sourceModel: 'foam.nanos.demo.relationship.Professor',
  targetModel: 'foam.nanos.demo.relationship.Course',
  forwardName: 'courses',
  inverseName: 'professor'
});
