foam.CLASS({
  package: 'foam.nanos.demo',
  name: 'DemoBuild',
  requires: [
    'foam.tools.AppConfig',
    'foam.tools.Build',
  ],
  methods: [
    function execute() {
      var dir = __dirname + '/../../../NANO_BUILD/';
      console.log(dir);
      this.Build.create({
        appConfig: this.AppConfig.create({
          requires: [
            'foam.nanos.auth.AuthService',
            'foam.nanos.auth.ClientAuthService',
            'foam.nanos.auth.Permission',
            'foam.nanos.auth.ServiceProvider',
            'foam.nanos.auth.token.ClientTokenService',
            'foam.nanos.auth.twofactor.ClientOTPAuthService',
            'foam.nanos.auth.twofactor.OTPAuthService',
            'foam.nanos.controller.ApplicationController',
            'foam.nanos.cron.Cron',
            'foam.nanos.demo.DemoObject',
            'foam.nanos.demo.relationship.Course',
            'foam.nanos.demo.relationship.Professor',
            'foam.nanos.demo.relationship.Student',
            'foam.nanos.dig.DUG',
            'foam.nanos.export.ExportDriverRegistry',
            'foam.nanos.fs.File',
            'foam.nanos.fs.FileDAODecorator',
            'foam.nanos.notification.email.ClientEmailService',
            'foam.nanos.notification.email.EmailTemplate',
            'foam.nanos.notification.email.SMTPEmailService',
            'foam.nanos.pm.PMInfo',
            'foam.nanos.script.Script',
            'foam.nanos.session.Session',
            'foam.nanos.test.Test',
            // 'foam.nanos.pm.TemperatureCView', Figure out why this breaks.
            //'foam.nanos.demo.relationship.StudentCourseJunction', TODO relationships!
          ],
        }),
        root: dir,
      }).execute();
    },
  ],
});
