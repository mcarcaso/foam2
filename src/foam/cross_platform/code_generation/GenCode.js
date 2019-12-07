foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'GenCode',
  imports: [
    'classloader'
  ],
  requires: [
    'foam.cross_platform.code_generation.Platform'
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
      name: 'testPath'
    },
    {
      class: 'StringProperty',
      name: 'swiftAppName'
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

        foam.cross_platform.Context.getAxiomByName('GLOBAL').value = foam.cross_platform.Context.create({
          classMap_: classes
        });

        Object.values(classes)
          .map(cls => cls[this.platform.buildResourcesMethod]({
            sources: [],
            tests: []
          }, cls))
          .flat()
          .forEach(resources => {
            resources.sources
              .map(s => s.toSource())
              .forEach(s => writeResource(s.body, s.path, this.sourcePath));
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
