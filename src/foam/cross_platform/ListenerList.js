foam.CLASS({
  package: 'foam.cross_platform',
  name: 'ListenerList',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ListenerList',
      name: 'prev'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ListenerList',
      name: 'next'
    },
    {
      class: 'MapProperty',
      name: 'children',
      swiftSetter: `
        children_isSet_ = true;
        children_ = value as! [AnyHashable:Any?]?;
      `,
      androidSetter: `
        children_isSet_ = true;
        children_ = (java.util.Map) value;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Listener',
      name: 'listener'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'subscription'
    }
  ]
});
