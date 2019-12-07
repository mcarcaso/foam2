foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ProxiedMethodRefine',
  refines: 'foam.core.ProxiedMethod',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidCode',
      expression: function(forClass_, property, name, args, androidType) {
        var cls = foam.lookup(forClass_);
        var p = cls.getAxiomByName(property);
        var call = `
          ${p.crossPlatformGetterName}().${name}(${args.map(a => a.name).join(', ')})
        `;
        return `
          ${androidType != 'void' ? 'return ' : ''}${call.trim()};
        `;
      }
    },
 ],
});
