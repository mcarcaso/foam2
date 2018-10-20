foam.CLASS({
  package: 'foam.doc',
  name: 'TabbedCodeView',
  extends: 'foam.u2.View',
  requires: [
    'foam.doc.CodeTab',
    'foam.u2.Tab',
    'foam.doc.CodeTabs',
  ],
  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.doc.CodeTab',
      name: 'data',
      factory: function() {
        return [
          this.CodeTab.create({
            title: 'CURL',
            code: 'curl var i = 0;',
          }),
          this.CodeTab.create({
            title: 'JS',
            code: 'var i = 0;',
          }),
        ]
      },
    },
  ],
  css: `
  `,
  methods: [
    function initE() {
      var self = this;
      this.add(this.slot(function(data) {
        return this.E().
          callIf(data, function() {
            this.
              start(self.CodeTabs).
                forEach(data, function(d) {
                  this.
                    start(self.Tab, { label: d.title }).
                      start('code').
                        add(d.code$).
                      end().
                    end()
                }).
              end()
          })
      }))
    },
  ],
});
