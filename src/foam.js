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

(function() {

  var isWorker = typeof importScripts !== 'undefined';
  var isServer = ( ! isWorker ) && typeof window === 'undefined';

  var flags    = this.FOAM_FLAGS || {};
  if ( ! flags.hasOwnProperty('web')    ) flags.web    = ! isServer;
  if ( ! flags.hasOwnProperty('node')   ) flags.node   = isServer;
  if ( ! flags.hasOwnProperty('loader') ) flags.loader = ! isServer;
  if ( ! flags.hasOwnProperty('debug')  ) flags.debug  = true;
  if ( ! flags.hasOwnProperty('js')     ) flags.js     = true;

  function createLoadBrowser() {
    var path = document.currentScript && document.currentScript.src;

    // document.currentScript isn't supported on all browsers, so the following
    // hack gets the job done on those browsers.
    if ( ! path ) {
      var scripts = document.getElementsByTagName('script');
      for ( var i = 0 ; i < scripts.length ; i++ ) {
        if ( scripts[i].src.match(/\/foam.js$/) ) {
          path = scripts[i].src;
          break;
        }
      }
    }

    path = path.substring(0, path.lastIndexOf('src/')+4);

    if ( typeof global !== 'undefined' ) global.FOAM_ROOT = path;
    if ( typeof window !== 'undefined' ) window.FOAM_ROOT = path;

    return function(filename) {
      document.writeln(
        '<script type="text/javascript" src="' + path + filename + '.js"></script>\n');
    };
  }

  function loadServer() {
    var caller = flags.src || __filename;
    var path = caller.substring(0, caller.lastIndexOf('src/')+4);

    if ( typeof global !== 'undefined' ) global.FOAM_ROOT = path;

    return function (filename) {
      require(path + filename + '.js');
    }
  }

  function createLoadWorker(filename) {
    var path = FOAM_BOOT_PATH;
    return function(filename) {
      importScripts(path + filename + '.js');
    };
  }

  function getLoader() {
    return isServer ? loadServer() :
      isWorker ? createLoadWorker() :
      createLoadBrowser();
  }

  // TODO: Did this to reuse it in Boot.js. Is there a better place?
  this.FLAG_FILTER = function(f) {
    if ( f.flags ) {
      for ( var i = 0; i < f.flags.length; i++ ) {
        if ( ! flags[f.flags[i]] ) return false;
      }
    }
    if ( f.notFlags ) {
      for ( var i = 0; i < f.notFlags.length; i++ ) {
        if ( flags[f.notFlags[i]] ) return false;
      }
    }
    return true;
  }

  this.FOAM_FILES = function(files) {
    var load = getLoader();

    files.
      filter(this.FLAG_FILTER).
      map(function(f) { return f.name; }).
      forEach(load);

  //  delete this.FOAM_FILES;
  };

  getLoader()(flags['files_lite'] ? 'files_lite' : 'files');
})();
