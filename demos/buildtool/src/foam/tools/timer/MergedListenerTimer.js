foam.CLASS({
  package: 'foam.tools.timer',
  name: 'MergedListenerTimer',
  properties: [
    {
      name: 'value',
    },
    {
      class: 'Boolean',
      name: 'on',
      visibility: 'RO',
      postSet: function() { this.update() },
    },
  ],
  listeners: [
    {
      name: 'update',
      isMerged: true,
      code: function() {
        if ( this.on ) {
          this.value = Date.now();
          this.update();
        }
      },
    },
  ],
  actions: [
    function start() {
      this.on = true;
    },
    function stop() {
      this.on = false;
    },
  ],
});
