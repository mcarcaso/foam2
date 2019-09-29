/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
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
  package: 'foam.u2.view',
  name: 'PasswordView',
  extends: 'foam.u2.View',
  requires: [
    'foam.u2.TextField'
  ],
  css: `
    ^ {
      position: relative;
    }
    ^img {
      position: absolute;
      margin-top: 4px;
      right: 6px;
    }
  `,
  constants: [
    {
      type: 'String',
      name: 'VISIBILITY',
      value: '/src/foam/u2/images/visibility.svg'
    },
    {
      type: 'String',
      name: 'VISIBILITY_OFF',
      value: '/src/foam/u2/images/visibility-off.svg'
    }
  ],
  properties: [
    {
      class: 'Boolean',
      name: 'showPassword'
    },
    {
      class: 'Boolean',
      name: 'isShowPasswordEnabled'
    }
  ],
  methods: [
    function initE() {
      this.SUPER();
      this
        .addClass(this.myClass())
        .tag(this.TextField, {
          data$: this.data$,
          type$: this.showPassword$.map(b => b ? 'text' : 'password')
        })
        .add(this.isShowPasswordEnabled$.map(b => {
          return b ? this.E('IMG')
            .addClass(this.myClass('img'))
            .setAttribute('src', this.showPassword$.map(s => {
              return s ? this.VISIBILITY_OFF : this.VISIBILITY;
            }))
            .on('click', _ => this.showPassword = ! this.showPassword) : null;
        }));
    }
  ]
});
