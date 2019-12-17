foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'AxiomViewContainer',
  requires: [
    'foam.util.ProxyDetachable',
  ],
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      name: 'delegateAxiom',
    },
    {
      androidType: 'android.view.ViewGroup',
      name: 'view'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.AxiomView',
      name: 'child',
      expressionArgs: ['delegateAxiom', 'view'],
      androidExpression: `
        if ( view == null ) return null;
        foam.cross_platform.Context x = getSubX().createSubContext(new java.util.HashMap() {
          {
            put("androidContext", view.getContext());
          }
        });
        return getDelegateAxiom() instanceof foam.core.Property ?
          ((foam.core.Property) getDelegateAxiom()).createView(x) : null;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.util.ProxyDetachable',
      name: 'sub_',
      crossPlatformFactory: `return ProxyDetachable_create().build();`
    },
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      name: 'axiom'
    },
  ],
  reactions: [
    ['', 'propertyChange.data', 'doBinding'],
    ['', 'propertyChange.axiom', 'doBinding'],
    ['', 'propertyChange.child', 'doBinding'],

    ['', 'propertyChange.view', 'updateView'],
    ['child', 'propertyChange.view', 'updateView'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        setData(data);
        setAxiom(axiom);
        return getSub_();
      `,
    }
  ],
  listeners: [
    {
      name: 'doBinding',
      androidCode: `
        if ( getData() == null ) return;
        if ( getAxiom() == null ) return;
        if ( getChild() == null ) return;
        if ( getSub_().getDelegate() != null ) {
          getSub_().getDelegate().detach();
        }
        getSub_().setDelegate(getChild().bindData(getData(), getAxiom()));
      `
    },
    {
      name: 'updateView',
      androidCode: `
        if ( getView() == null ) return;
        if ( getChild() == null ) return;
        getView().removeAllViews();
        if ( getChild().getView().getParent() instanceof  android.view.ViewGroup ) {
          ((android.view.ViewGroup) getChild().getView().getParent())
            .removeView(getChild().getView());
        }
        getView().addView(getChild().getView());
      `
    }
  ]
});
