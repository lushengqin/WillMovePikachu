// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n.san{\n    width: 0;\n    border: 10px solid black;\n    border-color: black transparent transparent transparent;\n    position: absolute;\n    top:100%;\n    transform: translate(-50%,-50%);\n}\n.san::after{\n    content: '';\n    clear: both;\n    display: block;\n    background-color: black;\n    position: absolute;\n    width: 20px;\n    height: 8px;\n    top: 100%;\n    transform: translate(-50%,-220%);\n    border-radius:10px 10px 0 0;\n}\n\n.eye{\n    width: 64px;\n    height: 64px;\n    border: 2px solid black;\n    position: absolute;\n    top: 25%;\n    left: 50%;\n    /* transform: translate(-50%); */\n    margin-left: -32px;\n    border-radius: 50%;\n    background-color: #2e2e2e;\n    \n}\n@media screen and (min-width:500px){\n    .eye{\n    top: 15%;\n    }\n}\n.eye.left{\n    transform: translateX(100px);\n    \n}\n.eye::before{\n    content: '';\n    display: block;\n    clear: both;\n    width: 26px;\n    height: 26px;\n    background-color: #fff;\n    position: absolute;\n    border-radius: 50%;\n    top: 3px;\n    left: 20%;\n    border: 2px solid #000;\n}\n.eye.right{\n    transform: translateX(-100px);\n}\n.mouth{\n    width: 200px;\n    height: 140px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%);\n    overflow: hidden;\n}\n@media screen and (min-width:500px){\n.mouth{\ntop: 22%;\n}\n    \n}\n.up{\n    width: inherit;\n    height: 100%;\n    position: absolute;\n    left: -1px;\n    top: 0;\n}\n.up .lip{\n    position: absolute;\n    top: -5px;\n    margin-left: 1px;\n    border: 2px solid black;\n    border-color:  transparent transparent black transparent;\n    width: 100px;\n    height: 20px;\n    background-color: #ffdb00;\n    z-index: 1;\n}\n.up .lip::after{\n    content: '';\n    clear: both;\n    display: block;\n    position: absolute;\n    top: -14px;\n    border: 5px solid  #ffdb00;\n    background-color: #ffdb00;\n    height: 30px;\n    \n}\n.up .lip.left::after{\n    left:48%;\n}\n.up .lip.right::after{\n    right:98%;\n}\n.up .lip.right{\n    border-radius: 0 0  20px 0;\n    right: 50%;\n    transform: translateX(100%) rotate(14deg);\n}\n.up .lip.left{\n    border-radius: 0 0 0 20px;\n    left: 50%;\n    transform: translateX(-100%) rotate(-14deg);\n}\n\n\n.down{\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    border: 2px solid black;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 90px/350px;\n    background-color: #a61108;\n    overflow: hidden;\n}\n.yuan1{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 89%;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 50%;\n    background-color: #ff5b5d;\n}\n\n.face{\n    width: 88px;\n    height: 88px;\n    border: 2px solid black;\n    position: absolute;\n    top: 56%;\n    left: 50%;\n    border-radius: 50%;\n    margin-left: -44px;\n    z-index: 2;\n    background-color: #fe1800;\n\n}\n@media screen and (min-width:500px){\n.face{\ntop: 24%;\n}\n    \n}\n.face.left{\n    transform: translateX(-170px);\n}\n\n.face.right{\n    transform: translateX(170px);\n}\n";
var n = 0;
demo.innerText = string.substr(0, n); //找到string的子字符串

demo2.innerHTML = string.substr(0, n);
var id = setInterval(function () {
  n += 1;

  if (n > string.length - 1) {
    window.clearInterval(id); //如果超过文字的长度 就取消定时器
  }

  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight; //它的滚动高度
}, 0);
},{}],"C:/Users/pc/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12967" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/pc/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map