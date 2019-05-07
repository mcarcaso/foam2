foam.ENUM({
  package: 'foam.u2.layout',
  name: 'AlignmentTypes',

  documentation: `
      An enum of alignment types for the Layout Package
  `,

  values: [
    { name: "START", webFlexProp: 'flex-start' },
    { name: "END", webFlexProp: 'flex-end' },
    { name: "CENTER", webFlexProp: 'center' },
    { name: "SPACE_AROUND", webFlexProp: 'space-around' },
    { name: "SPACE_BETWEEN", webFlexProp: 'space-between' },
    { name: "SPACE_EVENLY", webFlexProp: 'space-evenly' },
  ],

  properties:  [
    {
      class: 'String',
      name: 'webFlexProp',
    },
  ]
});
