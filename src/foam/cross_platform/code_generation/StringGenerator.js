foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'StringGenerator',
  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.i18n.Message',
      name: 'messages'
    },
  ],
  methods: [
    function buildSwiftResources(resources) {
      var locales = {};
      this.messages
        .map(m => Object.keys(m.translations))
        .flat()
        .forEach(m => locales[m] = true);
      locales = Object.keys(locales).filter(l => l != 'en');

      locales.forEach(l => {
        resources.resources.push({
          toSource: () => ({
            body: `
${this.messages
  .filter(m => m.translations[l])
  .map(m => `
/* ${m.description} */
${foam.swift.asSwiftValue(m.translations['en'])} = ${foam.swift.asSwiftValue(m.translations[l])};
    `).join('')}
            `,
            path: `${l}.lproj/Localizable.strings`,
          })
        });
      });
      return resources;

    },
    function buildAndroidResources(resources) {
      var locales = {};
      this.messages
        .map(m => Object.keys(m.translations))
        .flat()
        .forEach(m => locales[m] = true);
      locales = Object.keys(locales);

      locales.forEach(l => {
        resources.resources.push({
          toSource: () => ({
            body: `
  <resources>
  ${this.messages
    .filter(m => m.translations[l])
    .map(m => `
    <string name="${m.id.replace(/\./g, '_')}">${m.translations[l].replace(/'/g, "\\'")}</string>
    `).join('')}
  </resources>
            `,
            path: `values${l == 'en' ? '' : '-' + l}/gen_strings.xml`,
          })
        });
      });
      return resources;
    }
  ]
});