foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'CustomDetailView',
  properties: [
    {
      class: 'StringProperty',
      name: 'forClass_'
    },
    {
      class: 'StringProperty',
      name: 'package',
      expression: function(forClass_) {
        return foam.lookup(forClass_).model_.package;
      }
    },
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringProperty',
      name: 'androidClass',
      value: 'android.widget.LinearLayout'
    },
  ],
  methods: [
    function buildAndroidResources(resources, parentCls) {
      var name = parentCls.model_.name;
      var detailViewCls = foam.java.Class.create({
        name: this.name,
        extends: this.androidClass,
        package: this.package,
      });
      detailViewCls.method({
        visibility: 'public',
        name: detailViewCls.name,
        type: '', // Constructor
        args: [
          { type: 'android.content.Context', name: 'context' }
        ],
        body: `super(context);`
      });
      detailViewCls.method({
        visibility: 'public',
        name: detailViewCls.name,
        type: '', // Constructor
        args: [
          { type: 'android.content.Context', name: 'context' },
          { type: 'android.util.AttributeSet', name: 'attrs' }
        ],
        body: `super(context, attrs);`
      });
      detailViewCls.method({
        visibility: 'public',
        name: detailViewCls.name,
        type: '', // Constructor
        args: [
          { type: 'android.content.Context', name: 'context' },
          { type: 'android.util.AttributeSet', name: 'attrs' },
          { type: 'int', name: 'defStyle' }
        ],
        body: `super(context, attrs, defStyle);`
      });

      var axioms = parentCls.getAxioms()
        .filter(a => a.cls_ && a.cls_.getAxiomByName('createView'))
        .filter(a => !a.hidden);
      axioms.forEach(p => {
        var sub = p.name + '_sub_';
        detailViewCls.field({
          type: foam.core.Detachable.id,
          name: sub,
        });
        var androidType = 'foam.cross_platform.ui.AxiomView';
        detailViewCls.field({
          type: androidType,
          name: p.name + 'FoamView',
          initializer: 'null',
        });
        detailViewCls.method({
          type: androidType,
          name: `get_${p.name}`,
          body: `
            if ( ${p.name}FoamView == null ) {
              ${p.name}FoamView = ${parentCls.id}.${p.crossPlatformAxiomName}()
                .createView(x_);
            }
            return ${p.name}FoamView;
          `
        });
        detailViewCls.field({
          type: 'android.view.View',
          name: p.name,
        });
        detailViewCls.method({
          name: `set_${p.name}`,
          args: [
            { type: 'android.view.View', name: 'v' }
          ],
          body: `
            ${p.name} = v;
            if ( ${sub} != null ) ${sub}.detach();
            ${sub} = null;
            initSubs();
          `
        });
      });
      detailViewCls.method({
        visibility: 'protected',
        name: 'onFinishInflate',
        body: `
          super.onFinishInflate();

          android.content.res.Resources res = getResources();

          ${axioms.map(a => `
          int ${a.name}_id = res.getIdentifier(
            "${a.name}", "id", getContext().getPackageName());
          if ( ${a.name}_id != 0 ) {
            android.view.View v = findViewById(${a.name}_id);
            if ( v != null ) {
              set_${a.name}(v);
            }
          }
          `).join('\n')}
        `
      });

      detailViewCls.field({
        type: 'foam.cross_platform.Context',
        name: 'x_',
        initializer: 'null'
      });
      detailViewCls.field({
        type: name,
        name: '_model_data_',
        initializer: 'null'
      });
      detailViewCls.method({
        visibility: 'public',
        name: 'setData',
        args: [
          {
            type: name,
            name: 'data',
          }
        ],
        body: `
          _model_data_ = data;
          ${axioms.map(p => `
          if ( ${p.name}_sub_ != null ) ${p.name}_sub_.detach();
          ${p.name}_sub_ = null;
          if ( ${p.name}FoamView != null )
            ((foam.cross_platform.FObject) ${p.name}FoamView).detach();
          ${p.name}FoamView = null;
          `).join('\n')}
          x_ = data.getSubX().createSubContext(new java.util.HashMap() {
            {
              put("androidContext", getContext());
            }
          });
          initSubs();
        `
      });
      detailViewCls.method({
        name: 'initSubs',
        body: `
          if ( _model_data_ == null ) return;
          ${axioms.map(p => `
          if ( ${p.name} != null && ${p.name}_sub_ == null ) {
            get_${p.name}().setView(${p.name});
            ${p.name}_sub_ = get_${p.name}().bindData(
              _model_data_, _model_data_.getCls_().getAxiomByName("${p.name}"));
          }
          `).join('\n')}
        `
      });

      resources.sources.push(detailViewCls);
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
