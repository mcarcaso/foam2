/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

foam.CLASS({
  package: 'foam.test',
  name: 'AllProperties',
  properties: [
    {
      class: 'foam.core.IntProperty',
      name: 'intProp'
    },
    {
      class: 'foam.core.StringProperty',
      name: 'stringProp'
    },
    {
      class: 'foam.core.FObjectArray',
      of: 'foam.test.TestObj',
      name: 'fObjectArrayProp'
    },
    {
      class: 'foam.core.ObjectProperty',
      name: 'objectProp'
    },
    {
      class: 'foam.core.FunctionProperty',
      name: 'functionProp'
    },
    {
      class: 'foam.core.StringArrayProperty',
      name: 'stringArray'
    },
    {
      class: 'foam.core.ClassProperty',
      name: 'classProp'
    },
    {
      class: 'foam.core.FObjectProperty',
      of: 'foam.test.TestObj',
      name: 'fObjectPropertyProp'
    },
    {
      class: 'foam.core.EMailProperty',
      name: 'emailProp'
    },
    {
      class: 'foam.u2.ViewSpec',
      name: 'viewSpecProp'
    },
    {
      class: 'foam.core.Enum',
      of: 'foam.test.TestEnum',
      name: 'enumProp'
    },
    {
      class: 'foam.core.DateProperty',
      name: 'dateProp'
    },
    {
      class: 'foam.core.DateTimeProperty',
      name: 'dateTimeProp'
    },
    {
      class: 'foam.core.FloatProperty',
      name: 'floatProp'
    },
    {
      class: 'foam.core.LongProperty',
      name: 'longProp'
    },
    {
      class: 'foam.core.CurrencyProperty',
      name: 'currencyProp'
    },
    {
      class: 'foam.core.ColorProperty',
      name: 'colorProp'
    },
    // {
    //   class: 'foam.core.ReferenceProperty',
    //   name: 'reference'
    // },
    {
      class: 'foam.core.ArrayProperty',
      name: 'arrayProp'
    },
    {
      class: 'foam.core.MapProperty',
      name: 'mapProp'
    },
    {
      class: 'foam.u2.view.TableCellFormatter',
      name: 'tableCellFormatterProp'
    },
    {
      class: 'foam.core.ByteProperty',
      name: 'byteProp'
    },
    {
      class: 'foam.core.ShortProperty',
      name: 'shortProp'
    },
    {
      class: 'foam.core.DoubleProperty',
      name: 'doubleProp'
    },
    {
      class: 'foam.core.ListProperty',
      name: 'listProp'
    },
    {
      class: 'foam.core.ImageProperty',
      name: 'imageProp'
    },
    {
      class: 'foam.core.URLProperty',
      name: 'urlProp'
    },
    {
      class: 'foam.core.PasswordProperty',
      name: 'passwordProp'
    },
    {
      class: 'foam.core.PhoneNumberProperty',
      name: 'phoneNumberProp'
    },
    // {
    //   class: 'foam.core.MultiPartID',
    //   name: 'multiPartID'
    // },
    {
      class: 'foam.parse.ParserArray',
      name: 'parserArrayProp'
    },
    {
      class: 'foam.parse.ParserProperty',
      name: 'parserPropertyProp'
    },
    {
      class: 'foam.mlang.ExprProperty',
      name: 'exprPropertyProp'
    },
    {
      class: 'foam.mlang.SinkProperty',
      name: 'sinkPropertyProp'
    },
    {
      class: 'foam.mlang.predicate.PredicateProperty',
      name: 'predicatePropertyProp'
    },
    {
      class: 'foam.mlang.predicate.PredicateArray',
      name: 'predicateArrayProp'
    },
    // {
    //   class: 'foam.dao.RelationshipProperty',
    //   name: 'relationshipProperty'
    // },
    {
      class: 'foam.core.Blob',
      name: 'blobProp'
    },
    // {
    //   class: 'foam.core.Stub',
    //   name: 'stub'
    // },
    {
      class: 'foam.u2.ViewFactory',
      name: 'viewFactoryProp'
    },
    {
      class: 'foam.core.IntProperty',
      transient: true,
      name: 'transientInt'
    },
    {
      class: 'foam.core.StringProperty',
      transient: true,
      name: 'transientString'
    },
    {
      class: 'foam.core.FObjectArray',
      of: 'foam.test.TestObj',
      transient: true,
      name: 'transientFObjectArray'
    },
    {
      class: 'foam.core.ObjectProperty',
      transient: true,
      name: 'transientObject'
    },
    {
      class: 'foam.core.FunctionProperty',
      transient: true,
      name: 'transientFunction'
    },
    {
      class: 'foam.core.StringArrayProperty',
      transient: true,
      name: 'transientStringArray'
    },
    {
      class: 'foam.core.ClassProperty',
      transient: true,
      name: 'transientClass'
    },
    {
      class: 'foam.core.FObjectProperty',
      of: 'foam.test.TestObj',
      transient: true,
      name: 'transientFObjectProperty',
    },
    {
      class: 'foam.core.EMailProperty',
      transient: true,
      name: 'transientEMail'
    },
    {
      class: 'foam.u2.ViewSpec',
      transient: true,
      name: 'transientViewSpec'
    },
    {
      class: 'foam.core.Enum',
      transient: true,
      of: 'foam.test.TestEnum',
      name: 'transientEnum'
    },
    {
      class: 'foam.core.DateProperty',
      transient: true,
      name: 'transientDate'
    },
    {
      class: 'foam.core.DateTimeProperty',
      transient: true,
      name: 'transientDateTime'
    },
    {
      class: 'foam.core.FloatProperty',
      transient: true,
      name: 'transientFloat'
    },
    {
      class: 'foam.core.LongProperty',
      transient: true,
      name: 'transientLong'
    },
    {
      class: 'foam.core.CurrencyProperty',
      transient: true,
      name: 'transientCurrency'
    },
    {
      class: 'foam.core.ColorProperty',
      transient: true,
      name: 'transientColor'
    },
    // {
    //   class: 'foam.core.ReferenceProperty',
    //   transient: true,
    //   name: 'transientReference'
    // },
    {
      class: 'foam.core.ArrayProperty',
      transient: true,
      name: 'transientArray'
    },
    {
      class: 'foam.core.MapProperty',
      transient: true,
      name: 'transientMap'
    },
    {
      class: 'foam.u2.view.TableCellFormatter',
      transient: true,
      name: 'transientTableCellFormatter'
    },
    {
      class: 'foam.core.ByteProperty',
      transient: true,
      name: 'transientByte'
    },
    {
      class: 'foam.core.ShortProperty',
      transient: true,
      name: 'transientShort'
    },
    {
      class: 'foam.core.DoubleProperty',
      transient: true,
      name: 'transientDouble'
    },
    {
      class: 'foam.core.ListProperty',
      transient: true,
      name: 'transientList'
    },
    {
      class: 'foam.core.ImageProperty',
      transient: true,
      name: 'transientImage'
    },
    {
      class: 'foam.core.URLProperty',
      transient: true,
      name: 'transientURL'
    },
    {
      class: 'foam.core.PasswordProperty',
      transient: true,
      name: 'transientPassword'
    },
    {
      class: 'foam.core.PhoneNumberProperty',
      transient: true,
      name: 'transientPhoneNumber'
    },
    // {
    //   class: 'foam.core.MultiPartID',
    //   transient: true,
    //   name: 'transientMultiPartID'
    // },
    {
      class: 'foam.parse.ParserArray',
      transient: true,
      name: 'transientParserArray'
    },
    {
      class: 'foam.parse.ParserProperty',
      transient: true,
      name: 'transientParserProperty'
    },
    {
      class: 'foam.mlang.ExprProperty',
      transient: true,
      name: 'transientExprProperty'
    },
    {
      class: 'foam.mlang.SinkProperty',
      transient: true,
      name: 'transientSinkProperty'
    },
    {
      class: 'foam.mlang.predicate.PredicateProperty',
      transient: true,
      name: 'transientPredicateProperty'
    },
    {
      class: 'foam.mlang.predicate.PredicateArray',
      transient: true,
      name: 'transientPredicateArray'
    },
    // {
    //   class: 'foam.dao.RelationshipProperty',
    //   transient: true,
    //   name: 'transientRelationshipProperty'
    // },
    {
      class: 'foam.core.Blob',
      transient: true,
      name: 'transientBlob'
    },
    {
      class: 'foam.u2.ViewFactory',
      transient: true,
      name: 'transientViewFactory'
    }
  ],
  classes: [
    {
      name: 'InnerClass1',
      properties: [
        {
          class: 'StringProperty',
          name: 'name'
        }
      ]
    }
  ],
  static: [
    function createPopulated() {
      return foam.test.AllProperties.create({
        intProp: 12,
        stringProp: "asdf",
        fObjectArrayProp: [foam.test.TestObj.create({ description: 'An object in an array!' }),
                           foam.test.TestObj.create({ description: 'Another object in an array!' })],
        objectProp: [1, 2, 3],
//        function: null,
        stringArrayProp: ['Hello', 'World'],
        classProp: foam.test.AllProperties,
        fObjectPropertyProp: foam.test.TestObj.create({ description: 'some object' }),
        emailProp: 'test@example.com',
//        viewSpec: null
        enumProp: foam.test.TestEnum.BAR,
        dateProp: new Date("1995-12-17T03:24:00"),
        dateTimeProp: new Date("1995-12-18T04:23:44"),
        floatProp: 1.2345,
        longProp: 12341234,
        currencyProp: 342342,
        colorProp: 'rgba(0, 0, 255, 0)',
//        list: null
        imageProp: '/favicon/favicon-32x32.png',
        urlProp: 'https://google.com/',
        passwordProp: 'superSecret111!',
        phoneNumberProp: '555-3455'
      });
    }
  ]
});
