foam.CLASS({
  package: 'foam.android.tools',
  name: 'GenJava',
  imports: [
    'classloader'
  ],
  properties: [
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
        'foam.android.Tests',
      ]
    },
    {
      class: 'StringProperty',
      name: 'outputPath',
      value: 'android_build'
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
        var flagFilter = foam.util.flagFilter(['android']);

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

        var paths = Object.values(classes).map(cls => {
          var model = cls.model_;
          var path = this.outputPath
            .split(this.path.sep)
            .concat(model.androidPackage.split('.'))
            .filter(s => s)
            .reduce((sum, next) => {
              sum = sum ? sum + this.path.sep + next : next;
              try {
                var stat = this.fs.statSync(sum);
                if ( ! stat.isDirectory() ) throw sum + 'is not a directory';
              } catch(e) {
                this.fs.mkdirSync(sum);
              }
              return sum;
            }, '') + this.path.sep + model.name + '.java';

          this.fs.writeFileSync(path, cls.buildAndroidClass().toJavaSource());
          return path;
        });

        console.log('\nClass generation complete. To compile, run the following:\n');
        console.log(`javac ${paths.join(' ')}`);
        console.log();
      }
    }
  ]
});
