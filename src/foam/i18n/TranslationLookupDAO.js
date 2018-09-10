foam.CLASS({
  package: 'foam.i18n',
  name: 'TranslationLookupDAO',
  extends: 'foam.dao.AbstractDAO',
  properties: [
    {
      name: 'of',
      value: 'foam.i18n.MessagesExtension',
    },
  ],
  methods: [
    function find_(x, id) {
      var match = id.match(/^(.*)\.(.*)$/);
      if ( ! match ) return Promise.resolve(null);
      var model = foam.lookup(match[1], true);
      return Promise.resolve(model ? model.getAxiomByName(match[2]) : null);
    },
  ],
});

foam.CLASS({
  package: 'foam.i18n',
  name: 'TranslationDAOContext',
  requires: [
    'foam.i18n.TranslationLookupDAO',
    'foam.i18n.TranslationModelDAO',
    'foam.classloader.OrDAO',
  ],
  imports: [
    'classloader',
  ],
  exports: [
    'locale',
    'translationDAO',
  ],
  properties: [
    {
      name: 'translationDAO',
      factory: function() {
        return this.OrDAO.create({
          primary: this.TranslationLookupDAO.create(),
          delegate: this.TranslationModelDAO.create({
            modelDAO$: this.classloader.modelDAO$,
          })
        })
      },
    },
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
