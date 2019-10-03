/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.notification',
  name: 'Notification',

  implements: [
    'foam.nanos.auth.Authorizable'
  ],

  documentation: 'Notification model responsible for system and integrated messaging notifications.',

  javaImports: [
    'foam.nanos.auth.AuthService',
    'foam.nanos.auth.AuthorizationException',
    'foam.nanos.auth.User',
    'java.util.Date'
  ],

  tableColumns: ['id', 'body', 'notificationType', 'broadcasted', 'userId', 'groupId' ],

  properties: [
    {
      class: 'BooleanProperty',
      name: 'read',
      documentation: 'Determines if notification has been read.',
      visibility: foam.u2.Visibility.RO
    },
    {
      class: 'LongProperty',
      name: 'id',
      visibility: foam.u2.Visibility.RO
    },
    {
      class: 'StringProperty',
      name: 'template'
    },
    {
      class: 'StringProperty',
      name: 'notificationType',
      label: 'Notification type',
      documentation: 'Type of notification.',
      value: 'General'
    },
    {
      class: 'DateProperty',
      name: 'issuedDate',
      factory: function() { return new Date(); },
      label: 'Notification Date',
      documentation: 'Date notification was created.',
      visibility: foam.u2.Visibility.RO
    },
    {
      class: 'DateProperty',
      name: 'expiryDate',
      documentation: 'Expiration date of notification.',
      factory: function() {
        // 90 days since creation date
        return new Date(Date.now() + (90 * 24 * 60 * 60 * 1000));
      }
    },
    {
      class: 'StringProperty',
      name: 'body',
      documentation: 'Notification body'
    },
    {
      class: 'BooleanProperty',
      name: 'broadcasted',
      documentation: 'Determines if notification is sent to all users in a group or system.'
    },
    {
      class: 'Reference',
      of: 'foam.nanos.auth.User',
      name: 'userId',
      documentation: 'User notification will be sent to.',
      view: { class: 'foam.u2.view.ReferenceView', placeholder: 'select user' }
    },
    {
      class: 'Reference',
      of: 'foam.nanos.auth.Group',
      name: 'groupId',
      documentation: 'Group notification will be sent to.',
      view: { class: 'foam.u2.view.ReferenceView', placeholder: 'select group' }
    },
    {
      class: 'MapProperty',
      name: 'emailArgs',
      visibility: foam.u2.Visibility.HIDDEN,
      documentation: 'Arguments for email template.',
      javaFactory: 'return new java.util.HashMap<String, Object>();'
    },
    {
      class: 'StringProperty',
      name: 'emailName',
      label: 'Email template name',
      value: 'notification',
      documentation: 'Email template name.'
    },
    {
      class: 'BooleanProperty',
      name: 'emailIsEnabled',
      documentation: 'Determines an email is sent to user.'
    },
    {
      class: 'BooleanProperty',
      name: 'sendSlackMessage',
      documentation: 'Sends notification as a Slack message.'
    },
    {
      class: 'StringProperty',
      name: 'slackWebhook',
      documentation: 'Webhook associated to Slack.'
    },
    {
      class: 'StringProperty',
      name: 'slackMessage',
      documentation: 'Message to be sent to Slack if sendSlackMessage is enabled.'
    }
  ],

  methods: [
    {
      name: 'checkOwnership',
      args: [
        { name: 'x', type: 'Context' }
      ],
      type: 'Boolean',
      javaCode: `
        User user = (User) x.get("user");
        return user != null && getUserId() == user.getId();
      `
    },
    {
      name: 'authorizeOnCreate',
      javaCode: `
      AuthService auth = (AuthService) x.get("auth");
      if ( ! checkOwnership(x) && ! auth.check(x, createPermission("create")) ) throw new AuthorizationException("You don't have permission to create this notification.");
      `
    },
    {
      name: 'authorizeOnUpdate',
      javaCode: `
      AuthService auth = (AuthService) x.get("auth");
      if ( ! checkOwnership(x) && ! auth.check(x, createPermission("update")) ) throw new AuthorizationException("You don't have permission to update notifications you do not own.");
      `
    },
    {
      name: 'authorizeOnDelete',
      javaCode: `
      AuthService auth = (AuthService) x.get("auth");
      if ( ! checkOwnership(x) && ! auth.check(x, "*") ) throw new AuthorizationException("You don't have permission to delete notifications you do not own.");
      `
    },
    {
      name: 'authorizeOnRead',
      javaCode: `
      AuthService auth = (AuthService) x.get("auth");
      if ( ! checkOwnership(x) ) throw new AuthorizationException("You don't have permission to read notifications you do not own.");
      `
    },
    {
      name: 'createPermission',
      args: [
        { name: 'operation', type: 'String' }
      ],
      type: 'String',
      javaCode: `
        return "notification." + operation + "." + getId();
      `
    }
  ]
});
