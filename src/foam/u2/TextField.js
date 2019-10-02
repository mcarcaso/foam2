/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
  package: 'foam.u2',
  name: 'TextField',
  extends: 'foam.u2.View',
  axioms: [
    { class: 'foam.u2.TextInputCSS' }
  ],
  css: `
    input[type="search"] {
      -webkit-appearance: textfield !important;
    }

    ^:read-only {
      border: none;
      background: rgba(0,0,0,0);
    }

    ^ {
      width: 100%;
    }
  `,
  properties: [
    {
      class: 'IntProperty',
      name: 'displayWidth'
    },
    {
      class: 'StringProperty',
      name: 'placeholder'
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'text'
    },
    {
      name: 'nodeName',
      value: 'INPUT'
    }
  ],

  methods: [
    function fromProperty(prop) {
      this.SUPER(prop);
      if ( ! this.placeholder && prop.placeholder ) {
        this.placeholder = prop.placeholder;
      }
      if ( ! this.displayWidth ) {
        this.displayWidth = prop.displayWidth;
      }
    },
    function initE() {
      var self = this;
      this.SUPER();
      this
        .addClass(this.myClass())
        .setAttribute('type', this.type$)
        .setAttribute('disabled', this.mode$.map(m => {
          return m === foam.u2.DisplayMode.DISABLED;
        }))
        .setAttribute('readonly', this.mode$.map(m => {
          return m === foam.u2.DisplayMode.RO;
        }))
        .call(function() {
          self.data$.relateTo(
            this.attrSlot('value', 'input'),
            d => foam.Null.isInstance(d) || foam.Undefined.isInstance(d) ?
              '' : d.toString(),
            d => d
          );
        });
    }
  ]
});