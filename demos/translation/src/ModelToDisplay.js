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
      label: 'The label for language. This is only in english',
      postSet: function(_, n) {
        this.locale = n;
      },
    },
    {
      class: 'String',
      name: 'stringWithLabel',
      labelMessage: {
        description: 'This is a description for stringWithLabel',
        messageMap: {
          en: 'Im English',
          fr: 'Im french',
        },
      }
    },
  ],
  actions: [
    function printStrings() {
      alert(this.STRING_WITH_LABEL.label);
      alert(this.PROP_LABEL);
    },
  ],
});
