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
  name: 'CheckBox',
  extends: 'foam.u2.View',
  documentation: 'Checkbox View.',
  properties: [
    {
      class: 'BooleanProperty',
      name: 'data'
    },
    {
      class: 'BooleanProperty',
      name: 'showLabel',
      factory: function() { return !! this.label || this.labelFormatter },
    },
    {
      class: 'StringProperty',
      name: 'label'
    },
    {
      name: 'labelFormatter'
    },
    {
      name: 'input_'
    }
  ],
  methods: [
    function initE() {
      var self = this;
      this.SUPER();
      this
        .start('input', null, this.input_$)
          .setAttribute('type', 'checkbox')
          .setAttribute('disabled', this.mode$.map(m => {
            return m === foam.u2.DisplayMode.RO ||
                   m === foam.u2.DisplayMode.DISABLED;
          }))
          .call(function() { self.data$.linkTo(this.attrSlot('checked')) })
        .end()
        .callIf(this.showLabel, function() {
          this
            .start('label')
              .addClass(self.myClass('noselect'))
              .callIfElse(
                this.labelFormatter,
                this.labelFormatter,
                function() { this.add(self.label$) })
              .setAttribute('for', this.input_$.dot('id'))
            .end();
        });
    }
  ],
  css: `
    ^ {
      margin: 4px;
      padding: 8px;
    }

    ^noselect {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  `
});