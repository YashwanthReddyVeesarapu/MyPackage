(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5544:function(e,n,a){Promise.resolve().then(a.bind(a,1295))},1295:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return Home}});var t=a(7437);a(5643);var l=a(2265),i=a(817),r=a(8389),o=a(33),c=a(5873),s=a(8469),d=a(7079),m=a(789),p=a(7668),u=a(5631),h=a(8768),x=a(4719),f=a(1344),v=a(4202),j=a(3564),g=a(5926),Z=a(8909),_=a(6691),S=a.n(_);let b=[{_id:"1213123",company_name:"Apple",status:"Out for delivery",last_location:"Secaucus, NJ, 07310",last_modified:"",tracking_number:"",image:"",carrier:"FedEx",tracking_link:""},{_id:"1213123",company_name:"Amazon",status:"Shipped",last_location:"San Francisco, CA, 94102",last_modified:"",tracking_number:"",image:"",carrier:"UPS",tracking_link:""}],y=(0,Z.ZP)(j.Z)(e=>{let{theme:n}=e;return{["&.".concat(g.Z.alternativeLabel)]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},["&.".concat(g.Z.active)]:{["& .".concat(g.Z.line)]:{borderColor:"#784af4"}},["&.".concat(g.Z.completed)]:{["& .".concat(g.Z.line)]:{borderColor:"#784af4"}},["& .".concat(g.Z.line)]:{borderColor:"dark"===n.palette.mode?n.palette.grey[800]:"#eaeaf0",borderTopWidth:7,borderRadius:1,marginTop:"22px"}}}),k=(0,Z.ZP)("div")(e=>{let{theme:n,ownerState:a}=e;return{color:"dark"===n.palette.mode?n.palette.grey[700]:"#eaeaf0",display:"flex",height:25,alignItems:"center",...a.active&&{color:"#784af4"},"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:25},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}});function QontoStepIcon(e){let{active:n,completed:a,className:l}=e;return(0,t.jsx)(k,{ownerState:{active:n},className:l,children:a?(0,t.jsx)(x.Z,{className:"QontoStepIcon-completedIcon"}):(0,t.jsx)("div",{className:"QontoStepIcon-circle"})})}function Home(){let[e,n]=(0,l.useState)(""),[a,x]=(0,l.useState)("All"),[j,g]=(0,l.useState)([]),Z=["Waiting for details","Shipped","Out for delivery","Delivered"];return console.log(a),(0,l.useEffect)(()=>{g(b)},[]),(0,l.useEffect)(()=>{"All"==a?g(b):g(()=>b.filter(e=>e.status==a))},[a]),(0,t.jsxs)("div",{className:"home",children:[(0,t.jsx)(i.Z,{value:a,exclusive:!0,onChange:(e,n)=>{x(n)},style:{background:"#784af4",color:"white",display:"flex",width:"100%"},children:[{value:"All",name:"All"},{value:"Shipped",name:"Shipped"},{value:"Out for delivery",name:"Out for delivery"},{value:"Delivered",name:"Delivered"}].map((e,n)=>(0,t.jsx)(r.Z,{style:{color:"white"},value:e.value,children:e.name},n))}),j.length>=1?j.map((e,n)=>(0,t.jsxs)(o.Z,{children:[(0,t.jsxs)(c.Z,{expandIcon:(0,t.jsx)(f.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[(0,t.jsx)("div",{style:{display:"flex",alignItems:"center"},children:e.image?(0,t.jsx)(S(),{width:151,src:e.image,alt:"Live from space album cover"}):(0,t.jsx)(v.Z,{style:{fontSize:"5em"}})}),(0,t.jsxs)(s.Z,{sx:{flex:"1",width:"100%",display:"flex",flexDirection:"column",textAlign:"center"},children:[(0,t.jsx)(d.Z,{variant:"h2",style:{fontSize:"2em",marginBottom:"20px",fontWeight:"bold"},children:e.company_name}),(0,t.jsx)(m.Z,{alternativeLabel:!0,activeStep:Z.findIndex(n=>n==e.status),connector:(0,t.jsx)(y,{}),children:Z.map(e=>(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(d.Z,{children:e}),(0,t.jsx)(u.Z,{StepIconComponent:QontoStepIcon})]},e))}),(0,t.jsx)(d.Z,{variant:"subtitle1",color:"text.secondary",component:"div",children:e.last_location})]})]}),(0,t.jsx)(h.Z,{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"column",children:[(0,t.jsx)("span",{children:"Tracking ID:"}),e.tracking_number?(0,t.jsx)("a",{href:e.tracking_link,children:e.tracking_number}):"N/A",(0,t.jsx)("span",{children:"Last updated:"})," ",e.last_modified?e.last_modified:"N/A"]}),(0,t.jsxs)("div",{className:"column",children:[(0,t.jsx)("span",{children:"Carrier:"})," ",e.carrier?e.carrier:"N/A",(0,t.jsx)("span",{children:"Last Location: "})," ",e.last_location?e.last_location:"N/A"]})]})})]},n)):(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)(d.Z,{style:{margin:"50px",fontSize:"2em"},children:"No Data"})})})]})}},5643:function(){}},function(e){e.O(0,[791,402,341,50,971,864,744],function(){return e(e.s=5544)}),_N_E=e.O()}]);