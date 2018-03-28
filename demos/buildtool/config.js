{
  "$DEPS$": [
    "foam.tools.AppConfig"
  ],
  "$BODY$": {
    "$INST$": {
      "$CLS$": "foam.tools.AppConfig"
    },
    "refines": [
      "demo.build.ModelToBuildRefine"
    ],
    "requires": [
      "foam.u2.stack.StackView",
      "foam.u2.DetailView",
      "demo.build.ModelToBuild"
    ],
    "relationships": [
      "foam.nanos.demo.relationship.StudentCourseRelationship"
    ]
  }
}
