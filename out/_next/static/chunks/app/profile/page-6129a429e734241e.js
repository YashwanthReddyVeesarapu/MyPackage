(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{9050:function(e,t,o){"use strict";o.d(t,{Z:function(){return I}});var a=o(791),n=o(3428),r=o(2265),i=o(7042),l=o(98),s=o(5600),c=o(9975),d=o(8909),u=o(1092),p=o(39),h=o(8702),v=o(6520),x=o(5702);function getButtonUtilityClass(e){return(0,x.Z)("MuiButton",e)}let m=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=r.createContext({}),f=r.createContext(void 0);var b=o(7437);let y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:t,disableElevation:o,fullWidth:a,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(r)}`,`${i}Size${(0,h.Z)(r)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(r)}`]},d=(0,s.Z)(c,getButtonUtilityClass,l);return(0,n.Z)({},l,d)},commonIconStyles=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,h.Z)(o.color)}`],t[`size${(0,h.Z)(o.size)}`],t[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,a;let r="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${m.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${m.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(a=e.palette).getContrastText)?void 0:o.call(a,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:r,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${m.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${m.disabled}`]:{boxShadow:"none"}}),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),C=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),Z=r.forwardRef(function(e,t){let o=r.useContext(g),s=r.useContext(f),c=(0,l.Z)(o,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:h="primary",component:v="button",className:x,disabled:m=!1,disableElevation:Z=!1,disableFocusRipple:I=!1,endIcon:j,focusVisibleClassName:k,fullWidth:w=!1,size:$="medium",startIcon:R,type:B,variant:N="text"}=d,M=(0,a.Z)(d,y),L=(0,n.Z)({},d,{color:h,component:v,disabled:m,disableElevation:Z,disableFocusRipple:I,fullWidth:w,size:$,type:B,variant:N}),P=useUtilityClasses(L),E=R&&(0,b.jsx)(z,{className:P.startIcon,ownerState:L,children:R}),F=j&&(0,b.jsx)(C,{className:P.endIcon,ownerState:L,children:j}),W=s||"";return(0,b.jsxs)(S,(0,n.Z)({ownerState:L,className:(0,i.Z)(o.className,P.root,x,W),component:v,disabled:m,focusRipple:!I,focusVisibleClassName:(0,i.Z)(P.focusVisible,k),ref:t,type:B},M,{classes:P,children:[E,p,F]}))});var I=Z},8114:function(e,t,o){Promise.resolve().then(o.bind(o,4898))},4898:function(e,t,o){"use strict";o.r(t);var a=o(7437);o(1617);var n=o(3085);o(2265);var r=o(4747),i=o(4585),l=o(4033),s=o(9050);t.default=()=>{let e=(0,r._)(),t=(0,n.v0)(),handleLogout=()=>{(0,n.w7)(t)};return e||(0,l.redirect)("/login"),(0,a.jsx)(a.Fragment,{children:e&&(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)("h3",{children:["Hey ",e.displayName,", Welcome to MyPackage"]}),(0,a.jsx)(s.Z,{onClick:()=>handleLogout(),children:"Logout"})]})})}},4585:function(e,t,o){"use strict";var a=o(7437);o(5263),o(2265),t.Z=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"container",children:t})}},4747:function(e,t,o){"use strict";o.d(t,{H:function(){return AuthContextProvider},_:function(){return UserAuth}});var a=o(7437),n=o(2265),r=o(4931),i=o(3085);let l=(0,n.createContext)("auth"),AuthContextProvider=e=>{let{children:t}=e,[o,s]=(0,n.useState)(null),[c,d]=(0,n.useState)(!0);return((0,i.Aj)(r.I,e=>{s(e),setTimeout(()=>{d(!1)},500)}),console.log(o),c)?(0,a.jsx)("div",{className:"lds-circle",children:(0,a.jsx)("div",{})}):(0,a.jsx)(l.Provider,{value:o,children:t})},UserAuth=()=>(0,n.useContext)(l)},1617:function(e,t,o){"use strict";o.d(t,{Z:function(){return MainLayout}});var a=o(7437);o(2265),o(9482);var n=o(1396),r=o.n(n);function Footer(e){return(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"f-col",children:[(0,a.jsx)(r(),{href:"/about",children:"About"}),(0,a.jsx)(r(),{href:"/chat",children:"Chat"}),(0,a.jsx)(r(),{href:"/contact",children:"Contact us"}),(0,a.jsx)(r(),{href:"/disclaimer",children:"Disclaimer"})]})})}o(2208);var i=o(4747);function Header(){let e=(0,i._)();return(0,a.jsxs)("header",{children:[(0,a.jsx)("div",{children:(0,a.jsx)(r(),{href:"/",children:"MyPackage"})}),(0,a.jsx)("div",{children:e?(0,a.jsx)(r(),{href:"/profile",children:"Profile"}):(0,a.jsx)(r(),{href:"/login",children:"Login / Sign Up"})})]})}function MainLayout(e){let{children:t,className:o}=e,n=(0,i._)();return console.log(n),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Header,{}),(0,a.jsx)("main",{className:o,children:t}),(0,a.jsx)(Footer,{})]})}},4931:function(e,t,o){"use strict";o.d(t,{I:function(){return i}});var a=o(994),n=o(3085);let r=(0,a.ZF)({apiKey:"AIzaSyBrh0gfeGN7xJA9W3BJpbDYi6hd2kgT4jA",authDomain:"mypackage.redsols.us",projectId:"my-package-solution",storageBucket:"my-package-solution.appspot.com",messagingSenderId:"564439130795",appId:"1:564439130795:web:2f74639f5fb3bf8c710dee",measurementId:"G-CK1Y5RH620"}),i=(0,n.v0)(r)},5263:function(){},9482:function(){},2208:function(){},4033:function(e,t,o){e.exports=o(290)}},function(e){e.O(0,[565,791,733,402,396,971,864,744],function(){return e(e.s=8114)}),_N_E=e.O()}]);