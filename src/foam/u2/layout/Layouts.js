foam.CLASS({
  package: 'foam.u2.layout',
  name: 'AbstractLayout',
  extends: 'foam.u2.Element',
  properties: [
    {
      class: 'Class',
      name: 'childCls'
    },
    {
      class: 'Map',
      name: 'defaultChildConfig',
    },
    {
      class: 'foam.u2.ViewSpec',
      name: 'border',
      value: { class: 'foam.u2.borders.NullBorder' }
    },
    {
      class: 'Enum',
      of: 'foam.u2.layout.AlignmentType',
      name: 'alignmentType',
      value: 'SPACE_BETWEEN'
    }
  ],

  methods: [
    function start(spec, args, slot) {
      var c = this.SUPER(spec, args, slot);
      // Force the parent to this because the add() override could cause
      // the parent not to be this so the user would unknowingly have to
      // call end() more times.
      c.parentNode = this;
      return c;
    },

    /**
     * This expects all child elements to be instances of foam.u2.layout.Col 
     * so we override the add method to enforce this.
     */
    function add() {
      [...arguments].forEach(value => {
        if ( this.childCls.isInstance(value) ) {
          this.SUPER(value);
        }
        else {
          this
            .start(this.childCls, this.defaultChildConfig)
              .start(this.border)
                .add(value)
              .end()
            .end();
        }
      })
      return this;
    },

    function initE() {
      this.SUPER();
      this
        .addClass(this.myClass())
        .style({ 'justify-content': this.alignmentType$.dot('webFlexProp') });
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Rows',
  extends: 'foam.u2.layout.AbstractLayout',
  css: `
    ^ {
      display: flex;
      flex-direction: column;
    }
  `,
  properties: [
    {
      name: 'childCls',
      value: 'foam.u2.layout.Row'
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Cols',
  extends: 'foam.u2.layout.AbstractLayout',
  css: `
    ^ {
      display: flex;
    }
  `,
  properties: [
    {
      name: 'childCls',
      value: 'foam.u2.layout.Col'
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Row',
  extends: 'foam.u2.Element',

  documentation: `
    An individual row element within a group of rows.
  `,

  properties: [
    {
      class: 'Float',
      name: 'flex',
      documentation: `
        Defines how much this specific column will grow (take up space) relative 
        to the other Row elements within its Rows group
      `,
      value: 0
    },
  ],

  methods: [
    function initE() {
      this.SUPER();

      this.addClass(this.myClass())

      // we can add to this list as we go on when we have more style properties to consider
      const styles = {
        'flex-grow': this.flex$,
      }

      this.style(styles);
    }
  ],
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Col',
  extends: 'foam.u2.Element',

  documentation: `
    An individual column element within a group of columns.
  `,

  properties: [
    {
      class: 'Float',
      name: 'flex',
      documentation: `
        Defines how much this specific column will grow (take up space) relative 
        to the other Col elements within its Cols group
      `
    },
  ],
  
  methods: [
    function initE() {
      this.SUPER();

      this.addClass(this.myClass())

      // we can add to this list as we go on when we have more style properties to consider
      const styles = {
        'flex-grow': this.flex$,
      }

      this.style(styles);
    },
  ]
});