/**
 * @license
 * Copyright 2016 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.core',
  name: 'IntProperty',
  extends: 'Property',

  properties: [
    'units',
    [ 'value', 0 ],
    'min',
    'max',
    [ 'type', 'Integer' ],
    [ 'adapt', function adaptInt(_, v) {
        return typeof v === 'number' ? Math.trunc(v) :
          v ? parseInt(v) :
          0 ;
      }
    ],
    [ 'fromString', function intFromString(str) {
        return str ? parseInt(str) : 0;
      }
    ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'StringProperty',
  extends: 'Property',

  documentation: 'StringProperties coerce their arguments into Strings.',

  properties: [
    {
      class: 'BooleanProperty',
      name: 'trim',
      value: false
    },
    { class: 'IntProperty', name: 'width', value: 30 },
    {
      name: 'adapt',
      value: function(_, a, p) {
        var s = typeof a === 'function' ? foam.String.multiline(a) :
                typeof a === 'number'   ? String(a)                :
                a && a.toString         ? a.toString()             :
                                          ''                       ;
        return p.trim ? s.trim() : s;
      }
    },
    [ 'type', 'String' ],
    [ 'value', '' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ModelDocumentationRefinement',
  refines: 'foam.core.Model',

  documentation: 'Upgrade Mode.documentation to a proper String property.',

  properties: [
    { class: 'StringProperty', name: 'documentation' }
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'DateProperty',
  extends: 'Property',

  // documentation: 'Describes properties of type Date.',
  label: 'Date',

  properties: [
    {
      name: 'toJSON',
      value: function toJSON(value, outputter) {
        // A Date property can be transmitted as a plain timestamp.
        // Since we know the type information we will adapt a timestamp
        // back to a Date.
        return value == null ? null :
          outputter.formatDatesAsNumbers ?
          value.getTime() :
          value.toISOString();
      }
    },
    {
      name: 'adapt',
      value: function (_, d) {
        if ( typeof d === 'number' ) return new Date(d);
        if ( typeof d === 'string' ) {
          var ret = new Date(d);

          if ( isNaN(ret.getTime()) ) throw 'Invalid Date: ' + d;

          return ret;
        }
        return d;
      }
    },
    [ 'type', 'Date' ],
    {
      name: 'comparePropertyValues',
      value: function(o1, o2) {
        if ( ! o1 ) return o2 ? -1 : 0;
        if ( ! o2 ) return 1;

        return foam.Date.compare(o1, o2);
      }
    }
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'DateTimeProperty',
  extends: 'DateProperty',

  documentation: 'Describes properties of type DateTime.',
  label: 'Date and time',

  properties: [
    [ 'type', 'DateTime' ]
  ]
});

foam.CLASS({
  package: 'foam.core',
  name: 'TimeProperty',
  extends: 'StringProperty',

  documentation: 'Describes properties of type Time.',
  label: 'Time',

  properties: [
    [ 'type', 'Time' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ByteProperty',
  extends: 'IntProperty',

  documentation: 'Describes properties of type Byte.',
  label: 'Round byte numbers',

  properties: [
    [ 'type', 'Byte' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ShortProperty',
  extends: 'IntProperty',

  documentation: 'Describes properties of type Short.',
  label: 'Round short numbers',

  properties: [
    [ 'type', 'Short' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name:  'LongProperty',
  extends: 'IntProperty',

  documentation:  'Describes properties of type Long.',
  label: 'Round long numbers',

  properties: [
    [ 'type', 'Long' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'FloatProperty',
  extends: 'IntProperty',

  // documentation:  'Describes properties of type Float.',
  label: 'Decimal numbers',

  properties: [
    'precision',
    [
      'adapt',
      function (_, v) {
        return typeof v === 'number' ? v : v ? parseFloat(v) : 0.0 ;
      }
    ],
    [ 'type', 'Float' ]
  ]
});


/**
 No different than Float for JS, but useful when targeting with other languages.
 **/
foam.CLASS({
  package: 'foam.core',
  name: 'DoubleProperty',
  extends: 'FloatProperty',
  properties: [
    [ 'type', 'Double' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'FunctionProperty',
  extends: 'Property',

  documentation: 'Describes properties of type Function.',
  label: 'Code that can be run',

  properties: [
    [
      'value',
      function() {}
    ],
    [
      'assertValue',
      function(value, prop) {
        foam.assert(typeof value === 'function', prop.name, 'Cannot set to non function type.');
      }
    ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'DurationProperty',
  extends: 'LongProperty',

  documentation: `
    A length of time in milliseconds. Further refined in TableCellFormatter.js
    to make values human-readable when displayed in tables.
  `,

  properties: [
    {
      name: 'units',
      value: 'ms'
    }
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ObjectProperty',
  extends: 'Property',
  documentation: '',
  properties: [
    [ 'type', 'Any' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ArrayProperty',
  extends: 'Property',

  properties: [
    [
      'factory',
      function() { return []; }
    ],
    [
      'isDefaultValue',
      function(v) { return ! v || ! v.length; }
    ],
    [ 'type', 'Any[]' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ListProperty',
  extends: 'foam.core.ObjectProperty',
  properties: [
    [ 'type', 'List' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'StringArrayProperty',
  extends: 'Property',

  documentation: 'An array of String values.',
  label: 'List of text strings',

  properties: [
    {
      name: 'of',
      value: 'String',
      documentation: 'The FOAM sub-type of this property.'
    },
    [ 'type', 'String[]' ],
    [
      'factory',
      function() { return []; }
    ],
    [
      'adapt',
      function(_, v, prop) {
        if ( ! Array.isArray(v) ) return v;

        var copy;
        for ( var i = 0 ; i < v.length ; i++ ) {
          if ( typeof v[i] !== 'string' ) {
            if ( ! copy ) copy = v.slice();
            copy[i] = '' + v[i];
          }
        }

        return copy || v;
      }
    ],
    [
      'assertValue',
      function(v, prop) {
        if ( v === null ) return;

        foam.assert(Array.isArray(v),
            prop.name, 'Tried to set StringArray to non-array type.');
        for ( var i = 0 ; i < v.length ; i++ ) {
          foam.assert(typeof v[i] === 'string',
              prop.name, 'Element', i, 'is not a string', v[i]);
        }
      }
    ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ClassProperty',
  extends: 'Property',

  properties: [
    {
      name: 'toJSON',
      value: function toJSON(value, _) {
        return value && value.id;
      }
    },
    [
      'adapt',
      function(_, v) {
        if ( v && v.class == '__Class__' )
          return v.forClass_;
        return v;
      }
    ],
    [ 'type', 'Class' ]
  ],
  methods: [
    function installInProto(proto) {
      this.SUPER(proto);

      // Wrap the getter that was installed with an adapter that will perform the lookup.
      // We don't adapt at set time because the class were referring to might not be loaded
      // at that point.
      var name = this.name;
      var desc = Object.getOwnPropertyDescriptor(proto, name);

      var adapt = function(value) {
        if ( foam.String.isInstance(value) ) {
          var cls = this.__context__.lookup(value, true);
          if ( ! cls ) {
            console.error(`Property '${name}' of type '${this.model_.name}' was set to '${value}', which isn't a valid class.`);
            return null;
          }
          return cls;
        }
        return value;
      };

      var get = desc.get;
      desc.get = function() {
        return adapt.call(this, get.call(this));
      };

      Object.defineProperty(proto, name, desc);


      Object.defineProperty(proto, name + '$cls', {
        get: function classGetter() {
          console.warn("Deprecated use of 'cls.$cls'. Just use 'cls' instead.");
          return typeof this[name] !== 'string' ? this[name] :
            this.__context__.lookup(this[name], true);
        },
        configurable: true
      });
    }
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'EMailProperty',
  extends: 'StringProperty',
  // FUTURE: verify
  label: 'Email address'
});


foam.CLASS({
  package: 'foam.core',
  name: 'ImageProperty',
  extends: 'StringProperty',
  // FUTURE: verify
  label: 'Image data or link',
  properties: [ [ 'displayWidth', 80 ] ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'URLProperty',
  extends: 'StringProperty',
  // FUTURE: verify
  label: 'Web link (URL or internet address)',
  properties: [ [ 'displayWidth', 80 ] ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ColorProperty',
  extends: 'StringProperty',
  label: 'Color',
  properties: [ [ 'displayWidth', 20 ] ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'PasswordProperty',
  extends: 'StringProperty',
  label: 'Password that displays protected or hidden text'
});


foam.CLASS({
  package: 'foam.core',
  name: 'PhoneNumberProperty',
  extends: 'StringProperty',
  label: 'Phone number'
});


foam.CLASS({
  package: 'foam.core',
  name: 'CurrencyProperty',
  extends: 'LongProperty'
});


foam.CLASS({
  package: 'foam.core',
  name: 'MapProperty',
  extends: 'Property',

  // TODO: Remove need for sorting
  properties: [
    [ 'factory', function() { return {} } ],
    [
      'comparePropertyValues',
      function(o1, o2) {
        if ( foam.typeOf(o1) != foam.typeOf(o2) ) return -1;

        var keys1 = Object.keys(o1).sort();
        var keys2 = Object.keys(o2).sort();
        if ( keys1.length < keys2.length ) return -1;
        if ( keys1.length > keys2.length ) return 1;
        for ( var i = 0 ; i < keys1.length ; i++ ) {
          var c = foam.String.compare(keys1[i], keys2[i]);
          if ( c != 0 ) return c;
          c = foam.util.compare(o1[keys1[i]], o2[keys2[i]]);
          if ( c != 0 ) return c;
        }

        return 0;
      }
    ],
    [
      'cloneProperty',
      function(value, cloneMap) {
        if ( value ) {
          var tmp = cloneMap[this.name] = {};
          for ( var key in value ) {
            tmp[key] = value[key];
          }
        }
      }
    ],
    [
      'diffPropertyValues',
      function(o1, o2) {
        // TODO
      }
    ],
    [ 'type', 'Map' ]
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'FObjectProperty',
  extends: 'Property',

  properties: [
    {
      class: 'ClassProperty',
      name: 'of',
      value: 'foam.core.FObject'
    },
    {
      name: 'type',
      factory: function() { return this.of.id; }
    },
    {
      name: 'fromJSON',
      value: function(json, ctx, prop) {
        return foam.json.parse(json, foam.lookup(prop.type), ctx);
      }
    },
    {
      name: 'adapt',
      value: function(_, v, prop) {
        // All FObjects may be null.
        if ( v === null ) return v;

        var type = foam.lookup(prop.type);

        return type.isInstance(v) ?
          v :
          ( v.class ?
            this.__context__.lookup(v.class) :
            type ).create(v, this.__subContext__);
      }
    }
  ],
  methods: [
    function xinitObject(obj) {
      var s1, s2;

      obj.onDetach(function() {
        s1 && s1.detach();
        s2 && s2.detach();
      });

      var name = this.name;
      var slot = this.toSlot(obj);

      function proxyListener(sub) {
        var args = [
          'nestedPropertyChange', name, slot
        ].concat(Array.from(arguments).slice(1));

        obj.pub.apply(obj, args);
      }

      function attach(inner) {
        s1 && s1.detach();
        s1 = inner && inner.sub && inner.sub('propertyChange', proxyListener);

        s2 && s2.detach();
        s2 = inner && inner.sub && inner.sub('nestedPropertyChange', proxyListener);
      }

      function listener(s, pc, name, slot) {
        attach(slot.get());
      }

      obj.sub('propertyChange', name, listener);

      // TODO: Only hook up the subscription when somebody listens to us.
      if ( obj[name] ) attach(obj[name]);
    }
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'ReferenceProperty',
  extends: 'Property',

  properties: [
    {
      class: 'ClassProperty',
      name: 'of'
    },
    [ 'type', 'Any' ],
    {
      class: 'StringProperty',
      name: 'targetDAOKey',
      expression: function(of) {
        if ( ! of ) {
          console.error("invalid 'of' for property with targetDAOKey", this.name);
        }
        return foam.String.daoize(of.name);
      }
    },
    {
      class: 'StringProperty',
      name: 'unauthorizedTargetDAOKey',
      documentation: `
        Can be provided to use unauthorized local DAOs when the context user is the SYSTEM USER.
      `
    },
    {
      name: 'adapt',
      value: function(oldValue, newValue, prop) {
        return prop.of.isInstance(newValue) ?
          newValue.id :
          newValue ;
      }
    },
    {
      name: 'value',
      expression: function(of) {
        return of ? of.ID.value : null;
      }
    }
  ],

  methods: [
    function installInProto(proto) {
      this.SUPER(proto);
      var self = this;
      Object.defineProperty(proto, self.name + '$find', {
        get: function classGetter() {
          return this.__subContext__[self.targetDAOKey].find(this[self.name]);
        },
        configurable: true
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.core',
  name: 'ModelUpgradeTypesRefinement',
  refines: 'foam.core.Model',

  documentation: 'Update Model Property types.',

  properties: [
    {
      class: 'StringProperty',
      name: 'id',
      hidden: true,
      transient: true,
      getter: function () {
        return this.package ? this.package + '.' + this.name : this.name;
      }
    },
    {
      class: 'LongProperty',
      name: 'order',
      section: 'advanced',
      value: Number.MAX_SAFE_INTEGER,
    },
    {
      class: 'StringProperty',
      name: 'name',
      gridColumns: 4,
      order: 1
    },
    {
      class: 'StringProperty',
      name: 'package',
      gridColumns: 4,
      order: 0
    },
    {
      class: 'StringProperty',
      name: 'plural',
      gridColumns: 6,
      order: 7,
      section: 'uiSection',
      expression: function(name) {
        return foam.String.pluralize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'label',
      order: 6,
      section: 'uiSection',
      gridColumns: 6,
      expression: function(name) { return foam.String.labelize(name); }
    },
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'FacetedPropertyRefinement',
  refines: 'foam.core.Property',

  axioms: [
    foam.pattern.Faceted.create()
  ],

  properties: [
    {
      name: 'of'
    }
  ]
});


foam.CLASS({
  package: 'foam.core',
  name: 'PropertyShortNameRefinement',
  refines: 'Property',

  properties: [
    /**
      A short-name is an optional shorter name for a property.
      It is used by JSON and XML support when 'useShortNames'
      is enabled. Short-names enable output to be smaller,
      which can save disk space and/or network bandwidth.
      Ex.
    <pre>
      properties: [
        { name: 'firstName', shortName: 'fn' },
        { name: 'lastName',  shortName: 'ln' }
      ]
    </pre>
    */
    { class: 'StringProperty', name: 'shortName' }
  ]
});

// Upgrade async property to a real boolean property.
foam.CLASS({
  package: 'foam.core',
  name: 'AbstractMethodUpgradeTypesRefinement',
  refines: 'foam.core.AbstractMethod',
  properties: [
    {
      class: 'BooleanProperty',
      name: 'async',
      value: false
    }
  ]
});
