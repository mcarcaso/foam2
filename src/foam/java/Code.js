/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
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
  package: 'foam.java',
  name: 'Code',

  properties: [
    {
      class: 'StringProperty',
      name: 'data'
    }
  ],

  methods: [
    function outputJava(o) {
      var lines = this.data.split('\n');

      // It's common for the first and/or last lines to be empty.
      if ( ! lines[0].trim() ) lines.shift();
      if ( ! lines.length ) return;
      if ( ! lines[lines.length-1].trim() ) lines.pop();
      if ( ! lines.length ) return;

      var leadingWhitespace = Math.max(lines[0].search(/\S/), 0);
      for ( var i = 0 ; i < lines.length ; i++ ) {
        var spaceToTrim = Math.min(
          leadingWhitespace,
          Math.max(lines[i].search(/\S/), 0));
        o.out('\n');
        o.indent();
        o.out(lines[i].substring(spaceToTrim).trimRight());
      }
    }
  ]
});
