/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['client/state.js']) {
  _$jscoverage['client/state.js'] = [];
  _$jscoverage['client/state.js'][1] = 0;
  _$jscoverage['client/state.js'][3] = 0;
  _$jscoverage['client/state.js'][5] = 0;
  _$jscoverage['client/state.js'][8] = 0;
  _$jscoverage['client/state.js'][9] = 0;
  _$jscoverage['client/state.js'][13] = 0;
  _$jscoverage['client/state.js'][14] = 0;
  _$jscoverage['client/state.js'][18] = 0;
  _$jscoverage['client/state.js'][26] = 0;
  _$jscoverage['client/state.js'][30] = 0;
  _$jscoverage['client/state.js'][34] = 0;
  _$jscoverage['client/state.js'][35] = 0;
  _$jscoverage['client/state.js'][36] = 0;
}
_$jscoverage['client/state.js'].source = ["define(['utils/document'], function (doc) {","","    'use strict';","","    return {","","        get: function (url) {","            url = url || window.location.pathname + window.location.search;","            return LAZO.router.getItem(url);","        },","","        set: function (cmpDef, rootCtx) {","            var url = window.location.pathname + window.location.search;","            LAZO.router.updateState(this.createStateObj(cmpDef, rootCtx), url);","        },","","        getAddRemoveLinks: function () {","            return {","                add: this._getRequestCss(),","                remove: this._getRequestCss(LAZO.router.getPreviousUrl())","            };","","        },","","        createStateObj: function (cmpDef, rootCtx) {","            var deps = { // we only care about CSS","                css: rootCtx.dependencies.css.slice(0)","            };","","            return { dependencies: deps };","        },","","        _getRequestCss: function (url) {","            var request = this.get(url);","            request = request ? request.state : {};","            return request.dependencies &amp;&amp; request.dependencies.css ?","                request.dependencies.css.slice(0) : [];","        }","","    };","","});"];
_$jscoverage['client/state.js'][1]++;
define(["utils/document"], (function (doc) {
  _$jscoverage['client/state.js'][3]++;
  "use strict";
  _$jscoverage['client/state.js'][5]++;
  return ({get: (function (url) {
  _$jscoverage['client/state.js'][8]++;
  url = (url || (window.location.pathname + window.location.search));
  _$jscoverage['client/state.js'][9]++;
  return LAZO.router.getItem(url);
}), set: (function (cmpDef, rootCtx) {
  _$jscoverage['client/state.js'][13]++;
  var url = (window.location.pathname + window.location.search);
  _$jscoverage['client/state.js'][14]++;
  LAZO.router.updateState(this.createStateObj(cmpDef, rootCtx), url);
}), getAddRemoveLinks: (function () {
  _$jscoverage['client/state.js'][18]++;
  return ({add: this._getRequestCss(), remove: this._getRequestCss(LAZO.router.getPreviousUrl())});
}), createStateObj: (function (cmpDef, rootCtx) {
  _$jscoverage['client/state.js'][26]++;
  var deps = {css: rootCtx.dependencies.css.slice(0)};
  _$jscoverage['client/state.js'][30]++;
  return ({dependencies: deps});
}), _getRequestCss: (function (url) {
  _$jscoverage['client/state.js'][34]++;
  var request = this.get(url);
  _$jscoverage['client/state.js'][35]++;
  request = (request? request.state: {});
  _$jscoverage['client/state.js'][36]++;
  return ((request.dependencies && request.dependencies.css)? request.dependencies.css.slice(0): []);
})});
}));