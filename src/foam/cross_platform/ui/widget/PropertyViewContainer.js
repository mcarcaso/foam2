foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'PropertyViewContainer',
  requires: [
    'foam.util.ProxyDetachable',
  ],
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  documentation: `
    A view that's a container around another property view. It handles creating
    the child view and handling the correct property and data properties.

    Example:
    Consider a DetailPropertyViewModel with the following data in it:
    data = { 
      class: 'DetailPropertyViewModel',
      data: { class: 'demo.Person' },
      prop: demo.Person.FULL_NAME
    };
    To properly render this FULL_NAME (or any data being stored in the
    DetailPropertyViewModel), you can use an PropertyViewContainer like so:
    view = {
      class: 'PropertyViewContainer',
      dataExpr: DetailPropertyViewModel.DATA,
      propExpr: DetailPropertyViewModel.PROP
    };
    And the binding would happen with:
    doBinding((DetailPropertyViewModel) o, null); // Second param is ignored.
    With the dataExpr and propExpr set, the PropertyViewContainer can figure out
    that a FULL_NAME is trying to be rendered and can bind the child view with
    the Person as the data.
  `,
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.Expr',
      name: 'propExpr',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.Expr',
      name: 'dataExpr',
    },
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop'
    },
    {
      androidType: 'android.view.ViewGroup',
      name: 'view'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.AxiomView',
      name: 'child',
      expressionArgs: ['prop', 'view'],
      androidExpression: `
        if ( prop == null ) return null;
        if ( view == null ) return null;
        foam.cross_platform.Context x = getSubX().createSubContext(new java.util.HashMap() {
          {
            put("androidContext", view.getContext());
          }
        });
        return prop.createView(x);
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.util.ProxyDetachable',
      name: 'sub_',
      crossPlatformFactory: `return ProxyDetachable_create().build();`
    },
  ],
  reactions: [
    ['', 'propertyChange.prop', 'doBinding'],
    ['', 'propertyChange.data', 'doBinding'],
    ['', 'propertyChange.child', 'doBinding'],

    ['', 'propertyChange.view', 'updateView'],
    ['child', 'propertyChange.view', 'updateView'],
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        setData(getDataExpr().f(data));
        setProp(getPropExpr().f(data));
        return getSub_();
      `,
    }
  ],
  listeners: [
    {
      name: 'doBinding',
      androidCode: `
        if ( getData() == null ) return;
        if ( getProp() == null ) return;
        if ( getChild() == null ) return;
        if ( getSub_().getDelegate() != null ) getSub_().getDelegate().detach();
        getSub_().setDelegate(getChild().bindData(
          getData(),
          getProp()));
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
