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
  package: 'foam.u2',
  name: 'ClassView',
  extends: 'foam.u2.View',
  documentation: `
    View for editing a Class Property.
    TODO: The validation for this is awkward. Design a view that doesn't allow
    a user to input a bad value.
  `,
  properties: [
    { class: 'Class', name: 'data' },
    {
      class: 'StringProperty',
      name: 'data_',
      expression: function(data) {
        return data ? data.id : '';
      },
      postSet: function(_, n) {
        n = n.trim();
        var cls = foam.lookup(n, true);
        if ( ! cls ) {
          this.error_ = 'Please enter a valid class';
        } else {
          this.data = cls;
          this.data_ = undefined;
          this.error_ = undefined;
        }
      },
      visibilityExpression: function (visibility) {
        return visibility;
      }
    },
    {
      class: 'StringProperty',
      name: 'error_',
      visibility: 'RO'
    }
  ],
  methods: [
    function initE() {
      this.SUPER();
      this
        .startContext({ data: this })
          .add(this.DATA_)
          .add(this.ERROR_)
        .endContext();
    }
  ]
});