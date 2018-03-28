{
  "$DEPS$": [
    "foam.tools.AppConfig"
  ],
  "$BODY$": {
    "$INST$": {
      "$CLS$": "foam.tools.AppConfig"
    },
    "refines": [
      "foam.u2.TableCellActionRefinement",
      "foam.u2.TableCellPropertyRefinement",
      "foam.u2.view.TableCellPropertyRefinement",
      "foam.u2.view.refines.Refine_foam_core_Action",
      "foam.u2.view.refines.Refine_foam_core_Currency",
      "foam.u2.view.refines.Refine_foam_core_Date",
      "foam.u2.view.refines.Refine_foam_core_DateTime",
      "foam.u2.view.refines.Refine_foam_core_Enum",
      "foam.u2.view.refines.Refine_foam_core_FObjectProperty"
    ],
    "requires": [
      "foam.nanos.auth.AuthService",
      "foam.nanos.auth.ClientAuthService",
      "foam.nanos.auth.Permission",
      "foam.nanos.auth.ServiceProvider",
      "foam.nanos.auth.token.ClientTokenService",
      "foam.nanos.auth.twofactor.ClientOTPAuthService",
      "foam.nanos.auth.twofactor.OTPAuthService",
      "foam.nanos.controller.ApplicationController",
      "foam.nanos.cron.Cron",
      "foam.nanos.demo.DemoObject",
      "foam.nanos.demo.relationship.Professor",
      "foam.nanos.demo.relationship.StudentCourseJunction",
      "foam.nanos.dig.DIG",
      "foam.nanos.dig.DUG",
      "foam.nanos.export.ExportDriverRegistry",
      "foam.nanos.fs.File",
      "foam.nanos.fs.FileDAODecorator",
      "foam.nanos.notification.email.ClientEmailService",
      "foam.nanos.notification.email.EmailTemplate",
      "foam.nanos.notification.email.SMTPEmailService",
      "foam.nanos.pm.PMInfo",
      "foam.nanos.pm.TemperatureCView",
      "foam.nanos.script.Script",
      "foam.nanos.session.Session",
      "foam.nanos.test.Test"
    ],
    "relationships": [
      "foam.nanos.demo.relationship.StudentCourseRelationship"
    ]
  }
}
