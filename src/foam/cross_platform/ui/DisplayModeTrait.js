foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'DisplayModeTrait',
  imports: [
    'controllerMode? as controllerMode_'
  ],
  exports: [
    'controllerMode'
  ],
  properties: [
    {
      class: 'Enum',
      of: 'foam.u2.ControllerMode',
      name: 'controllerMode',
      expressionArgs: ['controllerMode_'],
      androidExpression: `
        return controllerMode_ instanceof foam.u2.ControllerMode ?
          (foam.u2.ControllerMode) controllerMode_ :
          foam.u2.ControllerMode.CREATE;
      `
    },
    {
      class: 'Enum',
      of: 'foam.u2.Visibility',
      name: 'visibility',
      value: 'RW'
    },
    {
      class: 'Enum',
      of: 'foam.u2.DisplayMode',
      name: 'mode',
      expressionArgs: ['visibility', 'controllerMode'],
      androidExpression: `
        if ( visibility == foam.u2.Visibility.HIDDEN ) {
          return foam.u2.DisplayMode.HIDDEN;
        }

        if ( visibility == foam.u2.Visibility.RO ) {
          return foam.u2.DisplayMode.RO;
        }

        if ( visibility == foam.u2.Visibility.DISABLED ) {
          return foam.u2.DisplayMode.DISABLED;
        }

        if ( visibility == foam.u2.Visibility.FINAL &&
             controllerMode != foam.u2.ControllerMode.CREATE ) {
          return foam.u2.DisplayMode.RO;
        }

        return controllerMode == foam.u2.ControllerMode.VIEW ?
          foam.u2.DisplayMode.RO :
          foam.u2.DisplayMode.RW ;
      `,
    }
  ]
});
