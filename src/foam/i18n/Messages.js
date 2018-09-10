/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
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
  package: 'foam.i18n',
  name: 'MessageAxiom',
  imports: [
    'locale?',
  ],
  properties: [
    {
      class: 'String',
      name: 'name'
    },
    {
      class: 'String',
      name: 'description'
    },
    {
      class: 'Object',
      name: 'messageMap',
      help: 'Map of language codes to the message in that language.',
      factory: function() { return {}; }
    },
    {
      class: 'String',
      name: 'message',
      getter: function() { return this.message_ || this.messageMap[this.locale || 'en']; },
      setter: function(m) { this.message_ = this.messageMap[this.locale || 'en'] = m; }
    },
    {
      class: 'Simple',
      name: 'message_'
    }
  ],

  methods: [
    function installInClass(cls) {
      Object.defineProperty(
        cls,
        this.name,
        {
          get: function() { return this.message }.bind(this),
          configurable: false
        });
    },

    function installInProto(proto) {
      this.installInClass(proto);
    }
  ]
});


foam.CLASS({
  package: 'foam.i18n',
  name: 'MessagesExtension',
  refines: 'foam.core.Model',

  properties: [
    {
      name: 'messages',
      class: 'AxiomArray',
      of: 'foam.i18n.MessageAxiom'
    }
  ]
});

foam.CLASS({
  package: 'foam.i18n',
  name: 'PropertyI18nRefine',
  refines: 'foam.core.Property',
  properties: [
    {
      name: 'label',
      getter: function() {
        return this.labelMessage ?
          this.labelMessage.message :
          foam.String.labelize(this.name);
      },
      setter: function(n) {
        this.labelMessage = {
          description: `Label for ${this.name}`,
          messageMap: {
            en: n
          }
        }
      },
    },
    {
      name: 'labelMessage',
      adapt: function(_, n) {
        if ( foam.core.FObject.isInstance(n) ) return n;
        return foam.lookup(n.class || 'foam.i18n.MessageAxiom').create(n);
      },
    }
  ],
});
