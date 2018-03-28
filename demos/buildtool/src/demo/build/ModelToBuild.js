foam.CLASS({
  package: 'demo.build',
  name: 'ModelToBuild',
  requires: [
    {
      path: 'foam.swift.parse.json.output.Outputter',
      flags: ['swift'],
    },
    {
      path: 'foam.dao.EasyDAO',
      flags: ['js'],
    },
  ],
  exports: [
    'studentDAO',
    'courseDAO',
    'studentCourseJunctionDAO',
  ],
  properties: [
    {
      name: 'jsProp',
      flags: ['js'],
    },
    {
      name: 'swiftProp',
      flags: ['swift'],
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'studentDAO',
      factory: function() {
        return this.EasyDAO.create({
          of: 'foam.nanos.demo.relationship.Student',
          daoType: 'MDAO',
        });
      },
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'courseDAO',
      factory: function() {
        return this.EasyDAO.create({
          of: 'foam.nanos.demo.relationship.Course',
          daoType: 'MDAO',
        });
      },
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'studentCourseJunctionDAO',
      factory: function() {
        return this.EasyDAO.create({
          of: 'foam.nanos.demo.relationship.StudentCourseJunction',
          daoType: 'MDAO',
        });
      },
    },
  ],
});
