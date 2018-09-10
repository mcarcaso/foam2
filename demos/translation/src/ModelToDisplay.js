foam.CLASS({
  package: 'demo',
  name: 'ModelToDisplay',
  imports: [
    'translationDAO',
    'locale',
  ],
  messages: [
    {
      name: 'PROP_LABEL',
      messageMap: {
        en: 'Hello',
        fr: 'Bonjour',
      },
    },
  ],
  properties: [
    {
      class: 'String',
      name: 'stringId',
      value: 'demo.ModelToDisplay.PROP_LABEL',
    },
    {
      class: 'String',
      name: 'language',
      value: 'en',
      postSet: function(_, n) {
        this.locale = n;
      },
    },
    {
      class: 'String',
      name: 'string',
      labelMessageId: 'demo.ModelToDisplay.PROP_LABEL',
    },
  ],
  reactions: [
    [ 'stringId', null, 'onUpdate' ],
    [ 'locale', null, 'onUpdate' ]
  ],
  methods: [
    function init() { this.onUpdate() },
  ],
  listeners: [
    function onUpdate() {
      var self = this;
      self.translationDAO.find(self.stringId).then(function(m) {
        self.string = m ?
          m.message ?
            m.message :
            'No translation found' :
          'MessageID not found';
      });
    },
  ],
});
