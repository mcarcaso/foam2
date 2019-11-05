foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'PropertyJavaRefinement',
  refines: 'foam.core.Property',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var override = !! parentCls.getSuperClass().getAxiomByName(this.name);
      if (this.name == 'listeners_') debugger;

      cls.field({
        visibility: 'private',
        type: this.swiftValueType,
        name: this.crossPlatformPrivateVarName,
        defaultValue: 'nil'
      });

      cls.field({
        visibility: 'private',
        type: 'Bool',
        name: this.crossPlatformIsSetVarName,
        defaultValue: 'false'
      });

      cls.field({
        visibility: 'private',
        type: 'foam_core_Slot?',
        name: this.crossPlatformSlotVarName,
        defaultValue: 'nil'
      });

      cls.method({
        override: override,
        visibility: 'public',
        type: 'foam_core_Slot',
        name: this.crossPlatformSlotGetterName,
        body: `
        fatalError()
        /*
          if ( ${this.crossPlatformSlotVarName} == null ) {
            ${this.crossPlatformSlotVarName} = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
              .setObj(this)
              .setProp(${this.crossPlatformAxiomName})
              .build();
          }
          return ${this.crossPlatformSlotVarName};
          */
        `
      });

      return;
      var getter = {
        visibility: 'public',
        type: this.androidType,
        name: this.crossPlatformGetterName
      };
      if ( this.androidGetter ) {
        getter.body = this.androidGetter;
      } else if ( this.androidFactory ) {
        var factoryName = this.name + '_factory_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: factoryName,
          body: this.androidFactory
        });
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} ) {
            setProperty("${this.name}", ${factoryName}());
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.androidExpression ) {
        var subName = this.name + '_expression_sub_';
        cls.field({
          visibility: 'private',
          type: 'foam.core.Detachable',
          name: subName
        });
        var expressionName = this.name + '_expression_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: expressionName,
          args: this.expressionArgs.map(a => {
            return {
              type: parentCls.getAxiomByName(a).androidType,
              name: a
            }
          }),
          body: `
            ${this.androidExpression}
          `
        });
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} && ${subName} == null ) {
            final ${parentCls.name} obj = this;
            final foam.core.ExpressionSlot eSlot = foam.core.ExpressionSlot.ExpressionSlotBuilder(getSubX())
              .setArgs(new foam.core.Slot[] {
                ${this.expressionArgs.map(a => `getSlot("${a}")`).join(',')}
              })
              .setCode(new foam.cross_platform.GenericFunction() {
                public Object executeFunction(Object[] args) {
                  return obj.${expressionName}(
                    ${this.expressionArgs.map((a, i) => `
                      (${parentCls.getAxiomByName(a).androidType}) args[${i}]
                    `).join(',')}
                  );
                }
              })
              .build();
            ${this.crossPlatformPrivateVarName} = (${this.androidType}) eSlot.slotGet();
            ${subName} = eSlot.slotSub(new foam.cross_platform.Listener() {
              public void executeListener(foam.core.Detachable sub, Object[] args) {
                if ( foam.cross_platform.Lib.compare(eSlot.slotGet(), obj.${this.crossPlatformPrivateVarName}) != 0 ) {
                  obj.${this.crossPlatformPrivateVarName} = (${this.androidType}) eSlot.slotGet();
                  obj.pub(new Object[] { "propertyChange", "${this.name}", obj.${this.crossPlatformPrivateVarName} });
                }
              }
            });
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.androidValue ) {
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} ) {
            return ${this.androidValue};
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else {
        getter.body = `
          return ${this.crossPlatformPrivateVarName};
        `;
      }
      cls.method(getter);

      var setter = {
        visibility: 'public',
        type: 'void',
        name: this.crossPlatformSetterName,
        args: [
          { type: 'Object', name: 'value' }
        ]
      };
      if ( this.androidSetter ) {
        setter.body = this.androidSetter;
      } else {
        var adaptName = this.name + '_adapt';
        cls.method({
          visibility: 'private',
          type: this.androidType,
          name: adaptName,
          args: [
            { type: 'Object', name: 'oldValue' },
            { type: 'Object', name: 'newValue' },
            { type: 'boolean', name: 'oldValueSet' }
          ],
          body: this.androidAdapt
        });
        setter.body = `
boolean hasOldValue = hasPropertySet("${this.name}");
Object oldValue = hasOldValue ?
  ${this.crossPlatformGetterName}() :
  null;
${this.androidType} castedValue = ${adaptName}(oldValue, value, hasOldValue);
        `;

        if ( this.androidExpression ) {
          setter.body += `
if ( ${subName} != null ) ${subName}.detach();
          `;
        }

        if ( this.androidPreSet ) {
          var preSetName = this.name + '_preSet';
          cls.method({
            visibility: 'private',
            type: this.androidType,
            name: preSetName,
            args: [
              { type: 'Object', name: 'oldValue' },
              { type: this.androidType, name: 'newValue' },
              { type: 'boolean', name: 'oldValueSet' }
            ],
            body: this.androidPreSet
          });
          setter.body += `
castedValue = ${preSetName}(oldValue, castedValue, hasOldValue);
          `;
        }

        setter.body += `
${this.crossPlatformIsSetVarName} = true;
${this.crossPlatformPrivateVarName} = castedValue;
Object[] args = new Object[] { "propertyChange", "${this.name}", null };
if ( hasListeners(args) ) {
  args[2] = ${this.crossPlatformSlotGetterName}();
  pub(args);
}
        `;

        if ( this.androidPostSet ) {
          var postSetName = this.name + '_postSet';
          cls.method({
            visibility: 'private',
            type: 'void',
            name: postSetName,
            args: [
              { type: 'Object', name: 'oldValue' },
              { type: this.androidType, name: 'newValue' },
              { type: 'boolean', name: 'oldValueSet' }
            ],
            body: this.androidPostSet
          });
          setter.body += `
${postSetName}(oldValue, castedValue, hasOldValue);
          `;
        }
      }
      cls.method(setter);

      cls.field({
        visibility: 'public',
        static: true,
        type: this.cls_.id,
        name: this.crossPlatformAxiomName,
        initializer: this.crossPlatformAxiomInitializerName + '()'
      });
      cls.method({
        visibility: 'private',
        static: true,
        type: this.cls_.id,
        name: this.crossPlatformAxiomInitializerName,
        body: `return ${foam.core.FObject.getAxiomByName('asAndroidValue').code.call(this)};`
      });

      return cls;
    }
  ]
});
