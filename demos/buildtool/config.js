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
      "foam.tools.WebAppConfigLoader",
      "demo.build.ModelToBuild"
    ]
  }
}
