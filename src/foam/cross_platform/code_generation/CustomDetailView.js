foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'CustomDetailView',
  methods: [
    function getDeps(flagFilter, map) {
      if ( flagFilter({flags: ['swift']}) ) {
        map['foam.cross_platform.ui.widget.Label'] = true;
        map['foam.cross_platform.ui.widget.ActionButton'] = true;
      }
    },
    function buildSwiftResources(resources, parentCls) {
      var name = parentCls.model_.swiftName;
      var detailViewCls = foam.swift.SwiftClass.create({
        name: name + 'DetailView',
        extends: 'UIView',
        extras: [`
          required init?(coder: NSCoder) {
            super.init(coder: coder);
          }
        `],
        imports: [
          'UIKit'
        ]
      });

      var axioms = parentCls.getAxioms()
        .filter(a => a.crossPlatformView);
      axioms.forEach(p => {
        var sub = p.name + '_sub_';
        detailViewCls.field({
          type: foam.core.Detachable.model_.swiftName + '?',
          name: sub,
        });
        var swiftType = p.crossPlatformView.model_.swiftName;
        detailViewCls.field({
          type: swiftType,
          name: p.name + 'FoamView',
          initializer: `
            return ${swiftType}.${swiftType}Builder(nil).build();
          `
        });
        detailViewCls.field({
          annotations: [
            '@IBOutlet'
          ],
          type: 'UIView?',
          name: p.name,
          didSet: `
            ${p.name}FoamView.setView(${p.name});
            ${sub}?.detach();
            ${sub} = nil;
            initSubs();
          `
        });
      });

      detailViewCls.field({
        type: name + '?',
        name: '_model_data_',
        defaultValue: 'nil'
      });
      detailViewCls.method({
        name: 'setData',
        args: [
          {
            type: name,
            localName: 'data',
          }
        ],
        body: `
          _model_data_ = data;
          ${axioms.map(p => `
          ${p.name}_sub_?.detach();
          ${p.name}_sub_ = nil;
          `).join('\n')}
          initSubs();
        `
      });
      detailViewCls.method({
        name: 'initSubs',
        body: `
          if _model_data_ == nil { return }
          ${axioms.map(p => `
          if ${p.name} != nil && ${p.name}_sub_ == nil {
            ${p.name}_sub_ = ${p.name}FoamView.bindData(
              _model_data_, _model_data_!.getCls_()!.getAxiomByName("${p.name}"));
          }
          `).join('\n')}
        `
      });

      resources.sources.push(detailViewCls);
    }
  ]
});
