foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'MultiPartID',
  refines: 'foam.core.MultiPartID',
  flags: ['swift'],
  properties: [
    {
      name: 'expressionArgs',
      factory: function() {
        return this.propNames
      },
    },
    {
      name: 'swiftExpression',
      expression: function(of, propNames) {
        return `
          return ${of.model_.swiftName}.CLS_()
            .createBuilder(getSubX())!
          ${propNames.map(p => `
            .setBuilderProperty("${p}", getProperty("${p}"))!
          `).join('')}
            .builderBuild() as? ${of.model_.swiftName}
        `
      }
    }
  ]
});
