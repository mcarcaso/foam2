foam.CLASS({
  package: 'demo',
  name: 'ModelToDisplay',
  imports: [
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
      name: 'language',
      value: 'en',
      label: 'The label for language',
      postSet: function(_, n) {
        this.locale = n;
      },
    },
    {
      class: 'String',
      name: 'stringWithLabel',
      labelMessage: {
        messageMap: {
          en: 'Im English',
          fr: 'Im french',
        },
      }
    },
  ],
  actions: [
    function printStrings() {
      alert(this.STRING2.label);
      alert(this.PROP_LABEL);
    },
  ],
});
