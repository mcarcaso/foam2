foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'GlobalContext',
  properties: [
    {
      class: 'MapProperty',
      name: 'classMap'
    },
  ],
  methods: [
    function buildSwiftResources(resources) {
      var cls = foam.swift.SwiftClass.create({
        name: 'foam_cross_platform_GlobalContext',
        extends: 'foam_cross_platform_Context'
      });
      cls.method({
        override: true,
        name: 'lookup',
        args: [
          { localName: 'id', type: 'String?' }
        ],
        type: 'foam_cross_platform_FoamClass?',
        body: `
          let cls = super.lookup(id);
          if cls != nil { return cls }
          switch id {
          ${Object.keys(this.classMap).map(k => `
            case "${k}":
              registerClass("${k}", ${foam.swift.asSwiftValue(this.classMap[k])})
              return ${foam.swift.asSwiftValue(this.classMap[k])};
          `).join('')}
            default:
              return nil;
          }
        `
      })
      resources.sources.push(cls);
      return resources;
    },
    function buildAndroidResources(resources) {
      var cls = foam.java.Class.create({
        package: 'foam.cross_platform',
        name: 'GlobalContext',
        extends: 'foam.cross_platform.Context'
      });
      cls.method({
        visibility: 'public',
        name: 'lookup',
        args: [
          { name: 'id', type: 'String' }
        ],
        type: 'foam.cross_platform.FoamClass',
        body: `
          foam.cross_platform.FoamClass cls = super.lookup(id);
          if ( cls != null ) return cls;
          switch(id) {
          ${Object.keys(this.classMap).map(k => `
            case "${k}":
              registerClass("${k}", ${foam.android.tools.asAndroidValue(this.classMap[k])});
              return ${foam.android.tools.asAndroidValue(this.classMap[k])};
          `).join('')}
            default:
              return null;
          }
        `
      });
      cls.method({
        visibility: 'public',
        name: 'GlobalContext',
        type: '',
        body: `
          super();
          getSlotMap_().put("androidContext", foam.core.SimpleSlot.SimpleSlotBuilder(null).build());
        `
      });
      cls.method({
        visibility: 'public',
        name: 'setAndroidContext',
        args: [{type: 'android.content.Context', name: 'ctx'}],
        body: `
          getXSlot("androidContext").slotSet(ctx);
        `
      });
      resources.sources.push(cls);
      return resources;
    },
  ]
});