(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{219:function(e,r,t){Promise.resolve().then(t.bind(t,7e3))},7e3:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return HomePage}});var n=t(7437),i=t(1617);function HomePage(){return(0,n.jsx)(i.Z,{children:"Home"})}},4747:function(e,r,t){"use strict";t.d(r,{H:function(){return AuthContextProvider},_:function(){return UserAuth}});var n=t(7437),i=t(2265),o=t(4931),s=t(3085);let c=(0,i.createContext)("auth"),AuthContextProvider=e=>{let{children:r}=e,[t,u]=(0,i.useState)(null),[a,l]=(0,i.useState)(null),[f,d]=(0,i.useState)(!0);return((0,s.Aj)(o.I,e=>{u(e),d(!1)}),f)?(0,n.jsx)("div",{className:"lds-circle",children:(0,n.jsx)("div",{})}):(0,n.jsx)(c.Provider,{value:{user:t,access:a,setAccess:l,setLoading:d},children:r})},UserAuth=()=>(0,i.useContext)(c)},1617:function(e,r,t){"use strict";t.d(r,{Z:function(){return MainLayout}});var n=t(7437);t(2265),t(9482);var i=t(1396),o=t.n(i);function Footer(e){return(0,n.jsx)("footer",{children:(0,n.jsxs)("div",{className:"f-col",children:[(0,n.jsx)(o(),{href:"/",children:"Track Packages"}),(0,n.jsx)(o(),{href:"/about",children:"About"}),(0,n.jsx)(o(),{href:"/chat",children:"Chat"}),(0,n.jsx)(o(),{href:"/contact",children:"Contact us"}),(0,n.jsx)(o(),{href:"/disclaimer",children:"Disclaimer"})]})})}t(2208);var s=t(4747);function Header(){let e=(0,s._)();return(0,n.jsxs)("header",{children:[(0,n.jsx)("div",{children:(0,n.jsx)(o(),{href:"/",children:"MyPackage"})}),(0,n.jsx)("div",{children:e?(0,n.jsx)(o(),{href:"/profile",children:"Profile"}):(0,n.jsx)(o(),{href:"/login",children:"Login / Sign Up"})})]})}function MainLayout(e){let{children:r,className:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Header,{}),(0,n.jsx)("main",{className:t,children:r}),(0,n.jsx)(Footer,{})]})}},4931:function(e,r,t){"use strict";t.d(r,{I:function(){return s}});var n=t(994),i=t(3085);let o=(0,n.ZF)({apiKey:"AIzaSyBrh0gfeGN7xJA9W3BJpbDYi6hd2kgT4jA",authDomain:"mypackage.redsols.us",projectId:"my-package-solution",storageBucket:"my-package-solution.appspot.com",messagingSenderId:"564439130795",appId:"1:564439130795:web:2f74639f5fb3bf8c710dee",measurementId:"G-CK1Y5RH620"}),s=(0,i.v0)(o)},9482:function(){},2208:function(){},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,t){var n,o={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!u.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=q,r.jsxs=q},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[565,955,421,971,864,744],function(){return e(e.s=219)}),_N_E=e.O()}]);