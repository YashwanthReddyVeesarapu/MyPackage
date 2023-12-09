(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3255:function(e,t,n){Promise.resolve().then(n.bind(n,4982))},4982:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return RootLayout}});var r=n(7437),a=n(1708),i=n.n(a);n(3054);var l=n(4747),s=n(663),o=n(7373),u=n(9778);let c={items:null,loading:!1,error:null},d={uid:null,email:null,displayName:null,token:null,last_modified:null},h=(0,o.UY)({data:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0,{type:n,payload:r}=t;switch(n){case u.KC:return{...e,loading:!0,error:null};case u.Hh:return{...e,items:r,loading:!1};case u.Pn:return{...e,items:r,loading:!0};case u.lN:return{...e,loading:!1,error:r};case u.hU:return c;default:return e}},user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,{type:n,payload:r}=t;switch(n){case u.ki:return{...e,...t.payload};case u.Wb:return d;default:return e}}});var f=n(1302),y=n(9180),g=n(2173);let p=g.Z.create({baseURL:"https://mypackage-789471c5eba8.herokuapp.com/"});function*fetchDataSaga(e){let t=15;for(;t>0;)try{let n=yield p.get("/fetch-gmail-data",{headers:{Authorization:"Bearer ".concat(e.payload.token),email:e.payload.email}}).then(e=>e);if(200==n.status){yield(0,y.gz)({type:u.Hh,payload:n.data.items});return}201==n.status&&(yield(0,y.gz)({type:u.Pn,payload:n.data.items})),t-=1,yield(0,y.gw)(1e4)}catch(e){if(e.response){let t={status:e.response.status,message:e.response.data.detail};yield(0,y.gz)({type:u.lN,payload:t})}else yield(0,y.gz)({type:u.lN,payload:e});t-=1,yield(0,y.gw)(1e4)}yield(0,y.gz)({type:u.lN,payload:{message:"Max tries exceeded"}})}var m=n(1850),x=n(1267),j=n(3944),v=n.n(j);let C=(0,f.ZP)(),A={key:"root",storage:m.Z},_=(0,x.OJ)(A,h),k=(0,s.xC)({reducer:_,middleware:e=>e().concat(C,v())});(0,x.p5)(k),C.run(function*(){yield(0,y.$6)([function*(){yield(0,y.ib)(u.KC,fetchDataSaga)}()])});var S=n(4931),b=n(1617),E=n(5673),N=n(606),H=n(3198);function RootLayout(e){let{children:t}=e;S.I;let n=(0,N.Z)({typography:{fontFamily:i().style.fontFamily}});return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)(E.a,{theme:n,children:(0,r.jsx)("body",{className:i().className,children:(0,r.jsx)(H.zt,{store:k,children:(0,r.jsx)(l.H,{children:(0,r.jsx)(b.Z,{children:t})})})})})})}},4747:function(e,t,n){"use strict";n.d(t,{H:function(){return AuthContextProvider},_:function(){return UserAuth}});var r=n(7437),a=n(2265),i=n(4931),l=n(3085);let s=(0,a.createContext)("auth"),AuthContextProvider=e=>{let{children:t}=e,[n,o]=(0,a.useState)(null),[u,c]=(0,a.useState)(null),[d,h]=(0,a.useState)(!0);return((0,l.Aj)(i.I,e=>{o(e),h(!1)}),d)?(0,r.jsx)("div",{className:"lds-circle",children:(0,r.jsx)("div",{})}):(0,r.jsx)(s.Provider,{value:{user:n,access:u,setAccess:c,setLoading:h},children:t})},UserAuth=()=>(0,a.useContext)(s)},1617:function(e,t,n){"use strict";n.d(t,{Z:function(){return MainLayout}});var r=n(7437);n(2265),n(9482);var a=n(1396),i=n.n(a);function Footer(e){return(0,r.jsx)("footer",{children:(0,r.jsxs)("div",{className:"f-col",children:[(0,r.jsx)(i(),{href:"/",children:"Track Packages"}),(0,r.jsx)(i(),{href:"/about",children:"About"}),(0,r.jsx)(i(),{href:"/chat",children:"Chat"}),(0,r.jsx)(i(),{href:"/contact",children:"Contact us"}),(0,r.jsx)(i(),{href:"/disclaimer",children:"Disclaimer"})]})})}n(2208);var l=n(4747);function Header(){let e=(0,l._)();return(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(i(),{href:"/",children:"MyPackage"})}),(0,r.jsx)("div",{children:e?(0,r.jsx)(i(),{href:"/profile",children:"Profile"}):(0,r.jsx)(i(),{href:"/login",children:"Login / Sign Up"})})]})}function MainLayout(e){let{children:t,className:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Header,{}),(0,r.jsx)("main",{className:n,children:t}),(0,r.jsx)(Footer,{})]})}},4931:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(994),a=n(3085);let i=(0,r.ZF)({apiKey:"AIzaSyBrh0gfeGN7xJA9W3BJpbDYi6hd2kgT4jA",authDomain:"mypackage.redsols.us",projectId:"my-package-solution",storageBucket:"my-package-solution.appspot.com",messagingSenderId:"564439130795",appId:"1:564439130795:web:2f74639f5fb3bf8c710dee",measurementId:"G-CK1Y5RH620"}),l=(0,a.v0)(i)},9778:function(e,t,n){"use strict";n.d(t,{Hh:function(){return a},KC:function(){return r},Pn:function(){return i},Wb:function(){return o},hU:function(){return u},ki:function(){return s},lN:function(){return l}});let r="FETCH_DATA",a="FETCH_DATA_SUCCESS",i="FETCH_DATA_CACHE_SUCCESS",l="FETCH_DATA_ERROR",s="FETCH_USER_DATA",o="LOGOUT_USER",u="CLEAR_DATA"},3054:function(){},9482:function(){},2208:function(){}},function(e){e.O(0,[565,955,547,198,421,538,971,864,744],function(){return e(e.s=3255)}),_N_E=e.O()}]);