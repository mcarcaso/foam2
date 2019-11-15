foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'GenCode',
  imports: [
    'classloader'
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
      name: 'outputPath'
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

        Object.values(classes)
          .map(cls => cls[this.platform.buildClassMethod]().toSource())
          .flat()
          .forEach(source => {
            var path = this.outputPath + this.path.sep + source.path;
            this.ensurePath(path);
            this.fs.writeFileSync(path, source.body);
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
