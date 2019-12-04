foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ProxiedMethodRefine',
  refines: 'foam.core.ProxiedMethod',
  flags: ['swift'],
  properties: [
    {
      class: 'StringProperty',
      name: 'swiftCode',
      expression: function(forClass_, property, name, args, swiftType) {
        var cls = foam.lookup(forClass_);
        var p = cls.getAxiomByName(property);
        var call = `
          ${p.crossPlatformGetterName}()!.${name}(${args.map(a => a.name).join(', ')})
        `;
        return `
          ${swiftType != 'Void' ? 'return ' : ''}${call.trim()};
        `;
      }
    },
 ],
});
