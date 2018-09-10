foam.CLASS({
  package: 'foam.i18n',
  name: 'TranslationModelDAO',
  extends: 'foam.dao.AbstractDAO',
  properties: [
    {
      name: 'of',
      value: 'foam.i18n.MessagesExtension',
    },
    {
      name: 'modelDAO',
    },
  ],
  methods: [
    function find_(x, id) {
      var match = id.match(/^(.*)\.(.*)$/);
      if ( ! match ) return Promise.resolve(null);
      var self = this;
      return self.modelDAO.find(match[1]).then(function(model) {
        ;
        return model ? model.axioms_.find(function(a) { return a.name == match[2] }) : null;
      });
    },
  ],
});
