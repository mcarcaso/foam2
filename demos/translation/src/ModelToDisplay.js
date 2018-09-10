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
    {
      class: 'String',
      name: 'string2',
      labelMessage: {
        messageMap: {
          en: 'Im English',
          fr: 'Im french',
        },
      }
    },
  ],
  reactions: [
    [ 'stringId', null, 'onUpdate' ],
    [ 'locale', null, 'onUpdate' ]
  ],
  actions: [
    function printLabel() {
      alert(this.STRING2.label);
    },
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
