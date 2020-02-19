/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'Util',
  requires: [
    'foam.cross_platform.type.ArrayType',
    'foam.cross_platform.type.BooleanType',
    'foam.cross_platform.type.DateType',
    'foam.cross_platform.type.FObjectType',
    'foam.cross_platform.type.MapType',
    'foam.cross_platform.type.NullType',
    'foam.cross_platform.type.NumberType',
    'foam.cross_platform.type.StringType',
    'foam.cross_platform.type.UnknownType',
  ],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'fObjectType',
      androidFactory: 'return FObjectType_create().build();',
      swiftFactory: 'return FObjectType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'unknownType',
      androidFactory: 'return UnknownType_create().build();',
      swiftFactory: 'return UnknownType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'dateType',
      androidFactory: 'return DateType_create().build();',
      swiftFactory: 'return DateType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.ArrayType',
      name: 'arrayType',
      androidFactory: 'return ArrayType_create().build();',
      swiftFactory: 'return ArrayType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'stringType',
      androidFactory: 'return StringType_create().build();',
      swiftFactory: 'return StringType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'numberType',
      androidFactory: 'return NumberType_create().build();',
      swiftFactory: 'return NumberType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'booleanType',
      androidFactory: 'return BooleanType_create().build();',
      swiftFactory: 'return BooleanType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'nullType',
      androidFactory: 'return NullType_create().build();',
      swiftFactory: 'return NullType_create().build();',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.type.Type',
      name: 'mapType',
      androidFactory: 'return MapType_create().build();',
      swiftFactory: 'return MapType_create().build();',
    },
  ],
  methods: [
    {
      name: 'typeOf',
      args: [
        { type: 'Any', name: 'o' },
      ],
      type: 'foam.cross_platform.type.Type',
      androidCode: `
        if ( getNullType().isInstance(o) ) return getNullType();
        if ( getBooleanType().isInstance(o) ) return getBooleanType();
        if ( getStringType().isInstance(o) ) return getStringType();
        if ( getNumberType().isInstance(o) ) return getNumberType();
        if ( getArrayType().isInstance(o) ) return getArrayType();
        if ( getDateType().isInstance(o) ) return getDateType();
        if ( getFObjectType().isInstance(o) ) return getFObjectType();
        if ( getMapType().isInstance(o) ) return getMapType();
        return getUnknownType();
      `,
      swiftCode: `
        if getNullType()!.isInstance(o) { return getNullType() }
        if getBooleanType()!.isInstance(o) { return getBooleanType() }
        if getStringType()!.isInstance(o) { return getStringType() }
        if getNumberType()!.isInstance(o) { return getNumberType() }
        if getArrayType()!.isInstance(o) { return getArrayType() }
        if getDateType()!.isInstance(o) { return getDateType() }
        if getFObjectType()!.isInstance(o) { return getFObjectType() }
        if getMapType()!.isInstance(o) { return getMapType() }
        return getUnknownType()
      `,
    },
    {
      name: 'compare',
      args: [
        { name: 'a' },
        { name: 'b' },
      ],
      type: 'Integer',
      androidCode: `
        foam.cross_platform.type.Type aType = typeOf(a);
        foam.cross_platform.type.Type bType = typeOf(b);
        return aType.getOrdinal() > bType.getOrdinal() ? 1 :
            aType.getOrdinal() < bType.getOrdinal() ? -1 : aType.compare(a, b);
      `,
      swiftCode: `
        let aType = typeOf(a)!
        let bType = typeOf(b)!
        return aType.getOrdinal() > bType.getOrdinal() ? 1 :
            aType.getOrdinal() < bType.getOrdinal() ? -1 : aType.compare(a, b);
      `,
    },
  ],
});
