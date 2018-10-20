foam.CLASS({
  package: 'foam.doc',
  name: 'DigGetView',
  extends: 'foam.u2.View',
  implements: [
    'foam.mlang.Expressions',
  ],
  imports: [
    'appConfig',
    'user',
  ],
  requires: [
    'foam.doc.dao.AxiomDAO',
    'foam.doc.PropertyAxiom',
    'foam.doc.CodeTab',
    'foam.doc.TabbedCodeView',
    'foam.flow.PromiseSlot',
    'foam.u2.DetailView',
    'foam.nanos.dig.DIG',
  ],
  properties: [
    {
      class: 'StringArray',
      name: 'digProperties',
      factory: function() {
        return [
          'format',
          'q',
        ];
      },
    },
    {
      name: 'url',
      expression: function(appConfig) {
        if ( appConfig ) return appConfig.url;
      }
    },
  ],
  methods: [
    function initE() {
      var self = this;
      this.
      start('h1').add(this.data$).end().
      add(this.slot(function(data, url, user, digProperties) {
        var dig = self.DIG.create({
          daoKey: data,
          cmd: 'SELECT',
        }, self);
        var code = [
          self.CodeTab.create({
            title: 'CURL',
            code$: dig.slot(function(digURL) {
              return `
curl -X GET \\
  '${url.replace(/\/$/,'') + digURL}' \\
  -u '${user.email}' \\
  -H 'accept: application/json' \\
  -H 'cache-control: no-cache' \\
  -H 'content-type: application/json'
              `.trim();
            })
          }),
          self.CodeTab.create({
            title: 'Node',
            code$: dig.slot(function(digURL) {
              var u = new URL(url);
              var protocol = u.protocol.slice(0, -1)
              return `
var password = 'REPLACE_WITH_PASSWORD';

const ${protocol} = require('${protocol}');
var req = ${protocol}.request({
  hostname: '${u.hostname}',
  port: ${u.port},
  path: '${digURL}',
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    'cache-control': 'no-cache',
    'authorization': "Basic " + new Buffer("${user.email}:" + password).toString("base64"),
  }
}, (resp) => {
  let data = ''
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    // Complete!
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

req.write('');
req.end();
              `.trim();
            })
          }),
        ]
        return this.E().
          callIf(this.__context__[data], function() {
            this.
              start(self.DetailView, {
                data: dig,
                properties: digProperties.map(function(p) {
                  return self.DIG.getAxiomByName(p);
                })
              }).
              end().
              start(self.TabbedCodeView, { data: code }).
              end()
          })
      }))
    },
  ],
});
