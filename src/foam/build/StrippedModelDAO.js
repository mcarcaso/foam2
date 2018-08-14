/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'StrippedModelDAO',
  extends: 'foam.dao.PromisedDAO',
  requires: [
    'foam.build.DirCrawlModelDAO',
    'foam.build.FlagStripSink',
    'foam.dao.DAOSink',
    'foam.dao.EasyDAO',
    'foam.dao.PromisedDAO',
  ],
  implements: [
    'foam.mlang.Expressions',
  ],
  properties: [
    {
      name: 'flags',
      value: ['js', 'web', 'debug'],
    },
    {
      name: 'srcDir',
      value: 'src',
    },
    {
      name: 'modelDAO',
      expression: function(srcDir) {
        return this.DirCrawlModelDAO.create({srcDir: srcDir})
      },
    },
    {
      name: 'promise',
      expression: function(flags, modelDAO) {
        var self = this;
        return new Promise(function(r) {
          var dest = self.EasyDAO.create({daoType: 'MDAO', of: 'foam.core.Model'});
          modelDAO
            .where(self.FUNC(foam.util.flagFilter(flags)))
            .select(self.FlagStripSink.create({
              flags: flags,
              delegate: self.DAOSink.create({dao: dest})
            })).then(function() { r(dest) });
        });
      },
    },
  ],
});