/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'Crawler',
  requires: [
    'foam.core.Script',
    'foam.dao.Relationship',
    'foam.build.DepComparator',
    'foam.build.JsCodeFileSink',
    'foam.build.FileTreeSink',
    'foam.build.DirCrawlModelDAO',
    'foam.build.FlagStripSink',
  ],
  implements: [
    'foam.mlang.Expressions',
  ],
  properties: [
    {
      name: 'flags',
      value: ['js', 'web'],
    },
  ],
  classes: [
    {
      name: 'AxiomBuildHack',
      requires: [
        'foam.core.Model',
      ],
      extends: 'foam.dao.ProxySink',
      methods: [
        function put(o, s) {
          if ( this.Model.isInstance(o) ) {
            o.cls_.private_.axiomCache[''] = undefined;
          }
          this.delegate.put(o, s);
        },
      ],
    },
  ],
  methods: [
    function execute() {
      var self = this;
      var dao = self.DirCrawlModelDAO.create();
      dao
        .where(self.FUNC(foam.util.flagFilter(self.flags)))
        .select(
          self.AxiomBuildHack.create({
            delegate: self.FlagStripSink.create({
              flags: self.flags,
              delegate: self.FileTreeSink.create({
                dir: 'STRIPPED',
              }),
            })
          })
        ).then(function(s) {
          s = s.delegate;
          s = s.delegate;
          require('fs').writeFileSync('BUILD_CODE.js', s.output, 'utf8');
        });
    },
  ],
});
