foam.RELATIONSHIP({
  sourceModel: 'foam.nanos.demo.relationship.Student',
  targetModel: 'foam.nanos.demo.relationship.Course',
  cardinality: '*:*',
  forwardName: 'courses',
  inverseName: 'students'
});
