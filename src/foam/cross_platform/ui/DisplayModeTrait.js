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
      `,
      swiftExpression: `
        return controllerMode_ is foam_u2_ControllerMode ?
          controllerMode_ as! foam_u2_ControllerMode :
          foam_u2_ControllerMode.CREATE;
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
      swiftExpression: `
        if ( foam_cross_platform_Lib.equals(visibility, foam_u2_Visibility.HIDDEN) ) {
          return foam_u2_DisplayMode.HIDDEN;
        }

        if ( foam_cross_platform_Lib.equals(visibility, foam_u2_Visibility.RO) ) {
          return foam_u2_DisplayMode.RO;
        }

        if ( foam_cross_platform_Lib.equals(visibility, foam_u2_Visibility.DISABLED) ) {
          return foam_u2_DisplayMode.DISABLED;
        }

        if ( foam_cross_platform_Lib.equals(visibility, foam_u2_Visibility.FINAL) &&
             !foam_cross_platform_Lib.equals(controllerMode, foam_u2_ControllerMode.CREATE) ) {
          return foam_u2_DisplayMode.RO;
        }

        return foam_cross_platform_Lib.equals(controllerMode, foam_u2_ControllerMode.VIEW) ?
          foam_u2_DisplayMode.RO :
          foam_u2_DisplayMode.RW ;
      `,
    }
  ]
});
