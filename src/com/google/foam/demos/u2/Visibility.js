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
  name: 'VisibilityTest',

  properties: [
    {
      class: 'StringProperty',
      name: 'readWrite',
      value: 'testing...',
      visibility: foam.u2.Visibility.RW
    },
    {
      class: 'StringProperty',
      name: 'final',
      value: 'testing...',
      visibility: foam.u2.Visibility.FINAL
    },
    {
      class: 'StringProperty',
      name: 'disabled',
      value: 'testing...',
      visibility: foam.u2.Visibility.DISABLED
    },
    {
      class: 'StringProperty',
      name: 'readOnly',
      value: 'testing...',
      visibility: foam.u2.Visibility.RO
    },
    {
      class: 'StringProperty',
      name: 'hidden',
      value: 'testing...',
      visibility: foam.u2.Visibility.HIDDEN
    },
    {
      class: 'BooleanProperty',
      name: 'flag',
      value: true
    },
    {
      class: 'StringProperty',
      name: 'disabledExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'DISABLED'];
      }
    },
    {
      class: 'BooleanProperty',
      name: 'disabledBooleanExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'DISABLED'];
      }
    },
    {
      class: 'DateProperty',
      name: 'disabledDateExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'DISABLED'];
      }
    },
    {
      class: 'StringProperty',
      name: 'readOnlyExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'RO'];
      }
    },
    {
      class: 'BooleanProperty',
      name: 'readOnlyBooleanExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'RO'];
      }
    },
    {
      class: 'DateProperty',
      name: 'readOnlyDateExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'RO'];
      }
    },
    {
      class: 'StringProperty',
      name: 'hiddenExpression',
      visibilityExpression: function(flag) {
        return foam.u2.Visibility[flag ? 'RW' : 'HIDDEN'];
      }
    }
  ]
});

var ctx = foam.__context__;

document.write('Default');

foam.u2.DetailView.create(
  {
    data: VisibilityTest.create()
  }
).write();


document.write('<br>Create');

foam.u2.DetailView.create(
  {
    data: VisibilityTest.create(),
    controllerMode: foam.u2.ControllerMode.CREATE
  }
).write();


document.write('<br>View');

foam.u2.DetailView.create(
  {
    data: VisibilityTest.create(),
    controllerMode: foam.u2.ControllerMode.VIEW
  }
).write();


document.write('<br>Edit');

foam.u2.DetailView.create(
  {
    data: VisibilityTest.create(),
    controllerMode: foam.u2.ControllerMode.EDIT
  }
).write();
