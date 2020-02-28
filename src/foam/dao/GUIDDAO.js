foam.CLASS({
  package: 'foam.dao',
  name: 'GUIDDAO',
  extends: 'foam.dao.ProxyDAO',
  documentation: `
    DAO Decorator that sets a property to a new random GUID (globally unique identifier) on put(), unless value already set.
    By default, the .id property is used.
    <p>
    Use a foam.dao.EasyDAO with guid:true to automatically set GUIDs. Set
    EasyDAO.seqProperty to the desired property name or use the default
    of 'id'.
  `,
  properties: [
    {
      class: 'StringProperty',
      name: 'property',
      value: 'id'
    },
  ],
  methods: [
    {
      name: 'put_',
      code: function put_(x, obj) {
        if ( ! obj.hasOwnProperty(this.property) ) {
          obj[this.property] = foam.uuid.randomGUID();
        }
        return this.delegate.put_(x, obj);
      },
      androidCode: `
        if ( ! obj.hasPropertySet(getProperty()) ) {
          obj.setProperty(getProperty(), java.util.UUID.randomUUID());
        }
        return super.put_(x, obj);
      `
    },
  ],
});
