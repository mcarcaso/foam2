/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.ruler',
  name: 'RuleHistory',
  documentation: 'Represents rule execution history.',

  implements: [
    'foam.nanos.auth.CreatedAware',
    'foam.nanos.auth.LastModifiedAware'
  ],

  properties: [
    {
      class: 'LongProperty',
      name: 'id',
      visibility: 'RO'
    },
    {
      class: 'DateTimeProperty',
      name: 'created',
      documentation: 'Creation date.'
    },
    {
      class: 'DateTimeProperty',
      name: 'lastModified',
      documentation: 'Last modified date.'
    },
    {
      class: 'ReferenceProperty',
      of: 'foam.nanos.ruler.Rule',
      name: 'ruleId',
      documentation: 'The applied rule.'
    },
    {
      class: 'ObjectProperty',
      name: 'objectId',
      visibility: 'RO',
      documentation: 'Id of the object on which rule is applied.'
    },
    {
      class: 'StringProperty',
      name: 'objectDaoKey',
      visibility: 'RO',
      documentation: 'DAO name of the object'
    },
    {
      class: 'ObjectProperty',
      name: 'result',
      documentation: 'Result of rule execution.',
      tableCellFormatter: function (value) {
        if ( !!value ) {
          this.add(value.toString());
        }
      },
      view: function (_, X) {
        return X.data.slot(function(result) {
          return foam.u2.TextField.create({
            mode: foam.u2.DisplayMode.RO,
            data: result ? result.toString() : ''
          });
        });
      }
    },
    {
      class: 'DateTimeProperty',
      name: 'expirationDate',
      documentation: 'Expiration date to be rescheduled.'
    },
    {
      class: 'Enum',
      of: 'foam.nanos.ruler.RuleHistoryStatus',
      name: 'status',
      documentation: 'Rule history status.'
    },
    {
      class: 'StringProperty',
      name: 'note',
      documentation: 'Note appended to the rule history.',
      view: {
        class: 'foam.u2.tag.TextArea',
        rows: 20, cols: 80
      }
    }
  ]
});
