foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'MultiPartID',
  refines: 'foam.core.MultiPartID',
  properties: [
    {
      name: 'expressionArgs',
      factory: function() {
        return this.propNames
      },
    },
    ['androidGetter', null],
    {
      name: 'androidExpression',
      expression: function(of, propNames) {
        return `
          return (${of.id}) ${of.id}.CLS_()
            .createBuilder(getSubX())
          ${propNames.map(p => `
            .setBuilderProperty("${p}", getProperty("${p}"))
          `).join('')}
            .builderBuild();
        `
      }
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
