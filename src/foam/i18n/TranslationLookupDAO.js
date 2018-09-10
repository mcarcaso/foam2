foam.CLASS({
  package: 'foam.i18n',
  name: 'TranslationDAOContext',
  exports: [
    'locale',
  ],
  properties: [
    {
      class: 'String',
      name: 'locale',
      value: 'en',
    },
  ],
});

foam.SCRIPT({
  package: 'foam.i18n',
  name: 'TranslationDAOScript',
  requires: [
    'foam.apploader.ClassLoaderContextScript',
    'foam.i18n.TranslationDAOContext',
  ],
  code: function() {
    var cxt = foam.i18n.TranslationDAOContext.create(null, foam.__context__);
    foam.__context__ = cxt.__subContext__;
  },
});
