(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{5487:function(t,e,r){"use strict";var o=r(9176),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function getStatics(t){return o.isMemo(t)?f:a[t.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=f;var i=Object.defineProperty,s=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,l=Object.prototype;t.exports=function hoistNonReactStatics(t,e,r){if("string"!=typeof e){if(l){var o=y(e);o&&o!==l&&hoistNonReactStatics(t,o,r)}var n=s(e);u&&(n=n.concat(u(e)));for(var f=getStatics(t),a=getStatics(e),m=0;m<n.length;++m){var d=n[m];if(!c[d]&&!(r&&r[d])&&!(a&&a[d])&&!(f&&f[d])){var S=p(e,d);try{i(t,d,S)}catch(t){}}}}return t}},650:function(t,e,r){Promise.resolve().then(r.bind(r,2327))},2327:function(t,e,r){"use strict";r.r(e);var o=r(3736),n=r(3085),c=r(4033);r(2265);var f=r(3198);e.default=()=>{let t=(0,n.v0)(),e=(0,f.I0)();e((0,o.Nk)()),e((0,o.TX)()),t.signOut(),(0,c.redirect)("/login")}},9778:function(t,e,r){"use strict";r.d(e,{Hh:function(){return n},KC:function(){return o},Wb:function(){return a},hU:function(){return i},ki:function(){return f},lN:function(){return c}});let o="FETCH_DATA",n="FETCH_DATA_SUCCESS",c="FETCH_DATA_ERROR",f="FETCH_USER_DATA",a="LOGOUT_USER",i="CLEAR_DATA"},3736:function(t,e,r){"use strict";r.d(e,{FQ:function(){return fetchUserData},Nk:function(){return clearData},TX:function(){return logoutUser},rQ:function(){return fetchData}});var o=r(9778);let fetchData=t=>({type:o.KC,payload:t}),clearData=()=>({type:o.hU}),fetchUserData=t=>({type:o.ki,payload:t}),logoutUser=()=>({type:o.Wb})},4033:function(t,e,r){t.exports=r(290)},8236:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,f=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,S=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,$=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,h=r?Symbol.for("react.scope"):60119;function z(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case u:case p:case c:case a:case f:case l:return t;default:switch(t=t&&t.$$typeof){case s:case y:case S:case d:case i:return t;default:return e}}case n:return e}}}function A(t){return z(t)===p}e.AsyncMode=u,e.ConcurrentMode=p,e.ContextConsumer=s,e.ContextProvider=i,e.Element=o,e.ForwardRef=y,e.Fragment=c,e.Lazy=S,e.Memo=d,e.Portal=n,e.Profiler=a,e.StrictMode=f,e.Suspense=l,e.isAsyncMode=function(t){return A(t)||z(t)===u},e.isConcurrentMode=A,e.isContextConsumer=function(t){return z(t)===s},e.isContextProvider=function(t){return z(t)===i},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return z(t)===y},e.isFragment=function(t){return z(t)===c},e.isLazy=function(t){return z(t)===S},e.isMemo=function(t){return z(t)===d},e.isPortal=function(t){return z(t)===n},e.isProfiler=function(t){return z(t)===a},e.isStrictMode=function(t){return z(t)===f},e.isSuspense=function(t){return z(t)===l},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===c||t===p||t===a||t===f||t===l||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===S||t.$$typeof===d||t.$$typeof===i||t.$$typeof===s||t.$$typeof===y||t.$$typeof===$||t.$$typeof===g||t.$$typeof===h||t.$$typeof===b)},e.typeOf=z},9176:function(t,e,r){"use strict";t.exports=r(8236)}},function(t){t.O(0,[565,955,198,971,864,744],function(){return t(t.s=650)}),_N_E=t.O()}]);