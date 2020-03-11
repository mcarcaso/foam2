foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'GenCode',
  imports: [
    'classloader'
  ],
  requires: [
    'foam.cross_platform.code_generation.Platform',
    'foam.cross_platform.code_generation.GlobalContext',
    'foam.cross_platform.code_generation.StringGenerator',
    'foam.dao.MDAO',
    'foam.i18n.Message',
  ],
  properties: [
    {
      class: 'Enum',
      of: 'foam.cross_platform.code_generation.Platform',
      name: 'platform'
    },
    {
      class: 'StringArrayProperty',
      name: 'required_',
      value: [
        'foam.core.Export',
        'foam.cross_platform.Builder',
        'foam.cross_platform.FoamClass',
        'foam.cross_platform.AbstractFObject',
      ]
    },
    {
      class: 'StringArrayProperty',
      name: 'classIds',
      value: [
        'foam.core.Model',
      ]
    },
    {
      class: 'StringProperty',
      name: 'sourcePath'
    },
    {
      class: 'StringProperty',
      name: 'resourcePath'
    },
    {
      class: 'StringProperty',
      name: 'testPath'
    },
    {
      class: 'StringProperty',
      name: 'swiftAppName'
    },
    {
      class: 'StringProperty',
      name: 'translationsPath'
    },
    {
      name: 'fs',
      factory: function() {
        return require('fs');
      }
    },
    {
      name: 'path',
      factory: function() {
        return require('path');
      }
    }
  ],
  methods: [
    {
      name: 'execute',
      code: async function() {
        var flagFilter = foam.util.flagFilter([this.platform.flag]);

        var classes = {};
        var pending = this.classIds.concat(this.required_);
        while ( pending.length ) {
          var id = pending.pop();
          if ( id.indexOf('.') == -1 ) id = 'foam.core.' + id;
          if ( classes[id] ) continue;
          var cls = await this.classloader.load(id);
          if ( ! flagFilter(cls.model_) ) continue;
          classes[id] = cls;

          var deps = {};
          cls.getDeps(flagFilter, deps);
          pending = pending.concat(Object.keys(deps));
        }

        console.log('Generating classes for:');
        console.log(Object.keys(classes).join('\n'));

        var writeResource = function(body, path, outputPath) {
          var path = outputPath + this.path.sep + path;
          this.ensurePath(path);

          if ( this.fs.existsSync(path) ) {
            var curFileBody = this.fs.readFileSync(path, 'utf8');
            if ( curFileBody == body ) return;
            console.log('Changed file:', path);
          } else {
            console.log('New file:', path);
          }

          this.fs.writeFileSync(path, body);
        }.bind(this);

        var translatedJsonStr = this.fs.existsSync(this.translationsPath) &&
          this.fs.readFileSync(this.translationsPath, 'utf-8');
        var translatedMessages = translatedJsonStr ?
          foam.json.parseString(translatedJsonStr) : [];
        var translatedMessagesById = {};
        translatedMessages.forEach(m => translatedMessagesById[m.id] = m);

        var messagesById = {};
        Object.values(classes).map(c => c.getMessages(flagFilter, messagesById));

        Object.values(messagesById)
            .forEach(m => {
              var t = translatedMessagesById[m.id];
              if ( ! t ) return m;
              if ( m.description != t.description ) {
                console.warn(`
${m.id} description changed from
${t.description}
to
${m.description}
                `.trim());
              }
              if ( m.translations['en'] != t.translations['en'] ) {
                console.warn(`
${m.id} has changed from
${t.translations['en']}
to
${m.translations['en']}
                `.trim());
              }
              Object.keys(t.translations)
                .filter(k => k != 'en')
                .forEach(k => m.translations[k] = t.translations[k])
              delete translatedMessagesById[t.id];
            })

        var messages = Object.values(messagesById);
        this.fs.writeFileSync(
          this.translationsPath,
          foam.json.PrettyStrict.stringify(messages.filter(m => Object.keys(m.translations).length > 1)));

        Object.values(classes)
          .concat(this.GlobalContext.create({classMap: classes}))
          .concat(this.StringGenerator.create({ messages: messages }))
          .map(cls => cls[this.platform.buildResourcesMethod]({
            sources: [],
            resources: [],
            tests: []
          }, cls))
          .flat()
          .forEach(resources => {
            resources.sources
              .map(s => s.toSource())
              .forEach(s => writeResource(s.body, s.path, this.sourcePath));
            resources.resources
              .map(s => s.toSource())
              .forEach(s => writeResource(s.body, s.path, this.resourcePath));
            resources.tests
              .map(s => s.toSource())
              .forEach(s => {
                var body = s.body;
                if ( this.platform === this.Platform.SWIFT ) {
                  body = '@testable import '+this.swiftAppName+'\n' + body;
                }
                writeResource(body, s.path, this.testPath);
              });
          });
      }
    },
    function ensurePath(path) {
      var sep = this.path.sep;
      path
        .split(sep)
        .filter(s => s)
        .reduce((sum, next, i, arr) => {
          sum = sum + sep + next;
          if ( i + 1 != arr.length ) {
            try {
              var stat = this.fs.statSync(sum);
              if ( ! stat.isDirectory() ) throw sum + 'is not a directory';
            } catch (e) {
              this.fs.mkdirSync(sum);
            }
          }
          return sum;
        }, path.startsWith(sep) ? '' : '.');
    }
  ]
});
