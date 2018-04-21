foam.CLASS({
  package: 'demo',
  name: 'ClassDisplayer',
  imports: [
    'classloader',
  ],
  properties: [
    {
      class: 'String',
      name: 'modelId',
      factory: function() { return 'foam.util.Timer' },
      postSet: function(_, n) {
        this.updateData();
      },
    },
    {
      class: 'FObjectProperty',
      view: {
        class: 'foam.u2.DetailView',
        showActions: true,
      },
      name: 'data',
      factory: function() {
        return this.Example.create();
      },
    },
  ],
  classes: [
    {
      name: 'Example',
      properties: [
        {
          name: 'message',
        },
      ],
    },
  ],
  listeners: [
    {
      name: 'updateData',
      isMerged: true,
      code: function() {
        var self = this;
        if ( ! self.modelId ) return;
        self.classloader.load(self.modelId).then(function(cls) {
          self.data = cls.create();
        }).catch(function() {
          self.data = self.Example.create({message: 'Cannot find ' + self.modelId});
        });
      },
    },
  ],
});
