(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{181:function(e,t,a){e.exports=a(292)},186:function(e,t,a){},193:function(e,t){},195:function(e,t){},233:function(e,t){},234:function(e,t){},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(186),a(19)),i=a(40),u=a(335),m=a(339),s=a(342),d=a(340),p=a(341),E=a(343),f=a(83),h={uriBase:"",authRoute:"/api/v1/auth",projectsRoute:"/api/v1/projects",usersRoute:"/api/v1/users"},g=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(u.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(u.a,{item:!0,xs:10},r.a.createElement(m.a,{raised:!0},r.a.createElement(d.a,null,r.a.createElement(p.a,{component:"img",alt:"Hot air balloons",height:"140",image:"".concat(h.uriBase,"/public/images/about.jpg"),title:"Who is Spencer Nelson"}),r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Spencer Nelson"),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"I am a software developer in the Salt Lake area. My focus is currently on React.js, express.js, MongoDB, and Node.js. I also have experience working with python and prostgres. Please look at my projects and see the cool things I've created. Thanks!")),r.a.createElement(s.a,null,r.a.createElement(E.a,{size:"small",color:"primary",href:"/about"},"More About Me")))))))},b=a(54),v=a(10),j=a(344),y=a(161),O=a.n(y),k=r.a.createContext(),w=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(v.a)(c,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){var e=window.localStorage.getItem("token");if(e){var t=O.a.decode(e);Date.now().valueOf()/1e3>=t.exp?(alert("You have been logged out due to inactivity."),l(!1),window.localStorage.removeItem("token")):(m(e),l(!0))}}),[]),r.a.createElement(k.Provider,{value:{loggedIn:o,setLoggedIn:l,token:u,writeToken:function(e){window.localStorage.setItem("token",e),m(e),l(!0)}}},e.children)},C=k.Consumer,x=Object(j.a)({root:{maxWidth:345,minWidth:345,margin:16,display:"flex",flexDirection:"column",justifyContent:"space-between"},media:{height:140}});var S=function(e){var t=x(),a=Object(n.useContext)(k),o=a.loggedIn,l=a.token,c=Object(n.useState)(e.card._id),i=Object(v.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:t.root,raised:!0},r.a.createElement(p.a,{className:t.media,image:"".concat(h.uriBase,"/public/images/").concat(e.card.imgSrc),title:"Contemplative Reptile"}),r.a.createElement(d.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.card.title),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},e.card.text)),r.a.createElement(s.a,null,""!==e.card.liveLink?r.a.createElement(E.a,{href:e.card.liveLink,size:"small",color:"primary"},"Live Site"):null,e.card.gitHubLinks!==[]?e.card.gitHubLinks.map((function(e,t){return r.a.createElement(E.a,{key:e,href:e,color:"primary"},"GitHub ".concat(t+1))})):null,o?r.a.createElement(E.a,{onClick:function(){fetch("".concat(h.uriBase).concat(h.projectsRoute,"/").concat(e.card._id),{method:"DELETE",headers:{Authorization:"Bearer ".concat(l),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Could not delete object");return e.json()})).then((function(t){if(1===t.deletedCount){var a,n=Object(b.a)(e.projects),r=!0,o=!1,l=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var m=c.value;m._id===i&&(a=n.indexOf(m))}}catch(s){o=!0,l=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw l}}n.splice(a,1),e.setProjects(n)}else alert("Not Authorized")})).catch((function(e){console.log(e)}))},color:"secondary"},"Delete"):null)))},T=[{_id:0,title:"Task Manager",text:"I've created a simple task app and added Google signin using OAuth2. The front end is created in React.js and the backend is run on Node.js with a MongoDB database. The sight utilized authentication and authorization.",liveLink:"https://sn-todo.herokuapp.com",gitHubLinks:["https://github.com/spencerNelson-dev/to-do-ui","https://github.com/spencerNelson-dev/to-do-api"],imgSrc:"task-tracker.png"}],N=function(){return fetch("".concat(h.uriBase).concat(h.projectsRoute),{method:"GET"}).then((function(e){if(!e.ok)throw new Error("Could not get all projects");return e.json()})).then((function(e){return e===[]?T:e})).catch((function(e){return console.log(e),T}))},L=r.a.createContext(),P=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)([]),i=Object(v.a)(c,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){0===o.length&&N().then((function(e){l(e)})),0===u.length&&fetch("".concat(h.uriBase).concat(h.projectsRoute,"/img"),{method:"Get"}).then((function(e){if(!e.ok)throw new Error("Could not get image file names");return e.json()})).then((function(e){m(e)})).catch((function(e){console.log(e),m([])}))}),[u.length,o.length]),r.a.createElement(L.Provider,{value:{projects:o,setProjects:l,images:u,setImages:m}},e.children)};L.Consumer;function B(e){var t=Object(n.useContext)(L),a=t.projects,o=t.setProjects;return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(u.a,{container:!0,justify:"center",spacing:3,alignItems:"stretch"},function(e,t){for(var a=[],n=0;n<e.length&&n<3;n++)a.push(e[n]);return a}(a).map((function(e){return r.a.createElement(u.a,{key:e._id,item:!0,component:function(){return r.a.createElement(S,{key:e._id,card:e,projects:a,setProjects:o})}})}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(E.a,{variant:"contained",color:"secondary",component:c.b,to:"/portfolio"},"View All Projects")))}var I=function(e){var t=Object(n.useContext)(L),a=t.projects,o=t.setProjects;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(u.a,{container:!0,justify:"center",spacing:3},a.map((function(e){return r.a.createElement(u.a,{key:e._id,item:!0,component:function(){return r.a.createElement(S,{key:e._id,card:e,setProjects:o,projects:a})}})}))))),r.a.createElement("br",null),r.a.createElement("br",null))},A=a(172);var _=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:12,style:{margin:32}},r.a.createElement(A.a,{elevation:6},r.a.createElement(m.a,null,r.a.createElement(p.a,{component:"img",alt:"Hot air balloons",height:"140",image:"".concat(h.uriBase,"/public/images/about.jpg"),title:"Who is Spencer Nelson"}),r.a.createElement(d.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Introduction"),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Coming soon",r.a.createElement("a",{href:"https://wonderful-bhabha-1bf181.netlify.com"},"events")),r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Mission")))))))};var H=function(e){return r.a.createElement("div",null,"Email: spencernelson144@gmail.com")},R=a(345),W=a(346),D=a(163),M=a.n(D),z=a(164),F=a.n(z),G=Object(j.a)({root:{width:500}});var q=function(e){var t=G();return r.a.createElement("div",null,r.a.createElement(R.a,{showLabels:!0,className:t.root},r.a.createElement(W.a,{component:c.b,to:"/login",label:"Spencer Nelson",icon:r.a.createElement(M.a,null)}),r.a.createElement(W.a,{href:"https://templateflip.com/",target:"_blank",rel:"noopener noreferrer",label:"templateflip.com",icon:r.a.createElement(F.a,null)})))},J=a(347),U=a(348),V=a(349),Y=a(169),$=a.n(Y),K=a(359),Q=a(350),X=a(293),Z=a(351),ee=a(352),te=a(165),ae=a.n(te),ne=a(167),re=a.n(ne),oe=a(168),le=a.n(oe),ce=a(166),ie=a.n(ce),ue=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));var me=function(e){var t=ue(),a=Object(n.useState)(!1),o=Object(v.a)(a,2),l=o[0],i=o[1],u=Object(n.useContext)(k),m=u.loggedIn,s=u.setLoggedIn,d=function(){i(!l)};return r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement(J.a,{position:"fixed"},r.a.createElement(U.a,null,r.a.createElement(V.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:d},r.a.createElement($.a,null)),r.a.createElement(f.a,{variant:"h6",className:t.title},"Spencer Nelson ",m?r.a.createElement(c.b,{to:"/admin"},"Admin"):null,m?r.a.createElement(E.a,{onClick:function(){window.localStorage.removeItem("token"),s(!1)}},"Log Out"):null),r.a.createElement(E.a,{color:"inherit",component:c.b,to:"/"},"Home"),r.a.createElement(E.a,{color:"inherit",component:c.b,to:"/portfolio"},"Portfolio"),r.a.createElement(E.a,{color:"inherit",component:c.b,to:"/about"},"About"),r.a.createElement(E.a,{color:"inherit",component:c.b,to:"/contact"},"Contact"))),r.a.createElement(U.a,null)),r.a.createElement("div",null,r.a.createElement(K.a,{open:l,onClose:d},r.a.createElement("div",{className:t.list,role:"presentation"},r.a.createElement(Q.a,null,["Home","Portfolio","About","Contact"].map((function(e,t){return r.a.createElement(X.a,{button:!0,onClick:d,component:c.b,to:"/".concat(e.toLowerCase()),key:e},r.a.createElement(Z.a,null,function(e){var t;switch(e){case"Home":t=r.a.createElement(ae.a,null);break;case"Portfolio":t=r.a.createElement(ie.a,null);break;case"About":t=r.a.createElement(re.a,null);break;case"Contact":t=r.a.createElement(le.a,null)}return t}(e)),r.a.createElement(ee.a,{primary:e}))})))))))},se=a(360),de=a(354),pe=a(357),Ee=a(170),fe=a.n(Ee),he=a(353),ge=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function be(e){var t=ge(),a=Object(n.useState)(""),o=Object(v.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(""),u=Object(v.a)(i,2),m=u[0],s=u[1],d=Object(n.useContext)(k).writeToken;return r.a.createElement("div",null,r.a.createElement(he.a,{component:"main",maxWidth:"xs"},r.a.createElement(de.a,null),r.a.createElement("div",{className:"".concat(t.paper)},r.a.createElement(se.a,{className:t.avatar},r.a.createElement(fe.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement(pe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:m,onChange:function(e){return s(e.target.value)}}),r.a.createElement(E.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){fetch("".concat(h.uriBase).concat(h.authRoute,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:m})}).then((function(e){if(!e.ok)throw new Error("Login Failed");return e.json()})).then((function(t){""!==t?d(t):alert("Incorrect email and password!"),c(""),s(""),e.history.push("/admin")}))}},"Sign In"))))}var ve=a(356),je=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var ye=function(e){var t=je(),a=Object(n.useState)(""),o=Object(v.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(""),u=Object(v.a)(i,2),m=u[0],s=u[1],d=Object(n.useState)(""),p=Object(v.a)(d,2),f=p[0],g=p[1],j=Object(n.useState)(""),y=Object(v.a)(j,2),O=y[0],w=y[1],C=Object(n.useState)(""),x=Object(v.a)(C,2),S=x[0],T=x[1],N=Object(n.useContext)(L),P=N.images,B=N.projects,I=N.setProjects,_=Object(n.useContext)(k).token;return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3,style:{padding:16}},r.a.createElement("h3",null,"Create Project"),r.a.createElement("div",{className:t.root},r.a.createElement(pe.a,{required:!0,label:"Title",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(pe.a,{required:!0,multiline:!0,label:"Text",value:m,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(pe.a,{label:"Live Link",value:f,onChange:function(e){return g(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(pe.a,{label:"GitHub Links",multiline:!0,value:O,onChange:function(e){return w(e.target.value)},helperText:"multiple links seperated with commas"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(pe.a,{select:!0,value:S,onChange:function(e,t){T(t.key)},helperText:"Please select an image"},P.map((function(e){return r.a.createElement(ve.a,{key:e,value:e},e)})))),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t={title:l,text:m,liveLink:f,gitHubLinks:O,imgSrc:S};fetch("".concat(h.uriBase).concat(h.projectsRoute),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(_)},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Could not get projects");return e.json()})).then((function(e){var t=Object(b.a)(B);t.push(e),I(t),c(""),s(""),g(""),w(""),T("")})).catch((function(e){alert(e)}))}},"Create!")))},Oe=a(355);var ke=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),o=a[0],l=a[1],c=Object(n.useContext)(k).token;return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3},r.a.createElement("div",{style:{margin:30}},r.a.createElement("h3",null,"Upload Image"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("file",o),t.append("filename",o.name),fetch("".concat(h.uriBase).concat(h.projectsRoute,"/img/upload"),{method:"POST",headers:{Authorization:"Bearer ".concat(c)},body:t}).then((function(e){if(!e.ok)throw new Error("Failed to upload file");return e.json()})).then((function(e){alert(e),l("")})).catch((function(e){alert(e)}))}},r.a.createElement(Oe.a,{type:"file",onChange:function(e){return l(e.target.files[0])},inputProps:{"aria-label":"description"}}),r.a.createElement(E.a,{type:"submit"},"Upload")))))},we=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},button:{float:"right"}}}));var Ce=function(e){var t=we(),a=Object(n.useState)(""),o=Object(v.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(""),u=Object(v.a)(i,2),m=u[0],s=u[1],d=Object(n.useState)(""),p=Object(v.a)(d,2),f=p[0],g=p[1],j=Object(n.useState)(""),y=Object(v.a)(j,2),O=y[0],w=y[1],C=Object(n.useState)(""),x=Object(v.a)(C,2),S=x[0],T=x[1],N=Object(n.useState)(""),P=Object(v.a)(N,2),B=P[0],I=P[1],_=Object(n.useState)({}),H=Object(v.a)(_,2),R=H[0],W=H[1],D=Object(n.useContext)(L),M=D.images,z=D.projects,F=D.setProjects,G=Object(n.useContext)(k).token,q=function(){c(""),s(""),g(""),w(""),T(""),I(""),W({})};return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3,style:{padding:16}},r.a.createElement("h3",null,"Edit Project"),r.a.createElement("div",{className:t.root},r.a.createElement(pe.a,{select:!0,value:l,onChange:function(e,t){var a=!0,n=!1,r=void 0;try{for(var o,l=z[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;i._id===t.key&&(c(t.key),s(i.title),g(i.text),w(i.liveLink),T(i.gitHubLinks),I(i.imgSrc),W(i))}}catch(u){n=!0,r=u}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}},helperText:"Please select a project"},z.map((function(e){return r.a.createElement(ve.a,{key:e._id,value:e._id},e.title)}))),r.a.createElement("br",null),r.a.createElement(pe.a,{required:!0,label:"Title",value:m,onChange:function(e){return s(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(pe.a,{required:!0,multiline:!0,label:"Text",value:f,onChange:function(e){return g(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(pe.a,{label:"Live Link",value:O,onChange:function(e){return w(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(pe.a,{label:"GitHub Links",multiline:!0,value:S,onChange:function(e){return T(e.target.value)},helperText:"multiple links seperated with commas"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(pe.a,{select:!0,value:B,onChange:function(e,t){I(t.key)},helperText:"Please select an image"},M.map((function(e){return r.a.createElement(ve.a,{key:e,value:e},e)})))),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:function(){if(""===l)alert("No project selected to edit."),q();else{var e={_id:l,title:m,text:f,liveLink:O,gitHubLinks:Array.isArray(S)?S:S.replace(/[\s\n]/g,"").split(","),imgSrc:B},t={};for(var a in R)"__v"!==a&&e[a]!==R[a]&&(t[a]=e[a]);fetch("".concat(h.uriBase).concat(h.projectsRoute,"/").concat(l),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(G)},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Failed to patch");return e.json()})).then((function(e){if(1===e.nModified){var a=Object(b.a)(z),n=!0,r=!1,o=void 0;try{for(var c,i=a[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var u=c.value;if(u._id===l)for(var m in t)u[m]=t[m]}}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}F(a),q()}else alert("Nothing changed")})).catch((function(e){console.log(e)}))}}},"Edit!"),r.a.createElement(E.a,{className:t.button,variant:"contained",color:"secondary",onClick:q},"Clear")))};var xe=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{container:!0,direction:"column",spacing:3,justify:"space-evenly",alignItems:"center"},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(ke,null)),r.a.createElement(u.a,{item:!0},r.a.createElement(u.a,{container:!0,spacing:3,justify:"space-evenly"},r.a.createElement(u.a,{item:!0},r.a.createElement(ye,null)),r.a.createElement(u.a,{item:!0},r.a.createElement(Ce,null))))))},Se=a(171);function Te(e){var t=e.component,a=Object(Se.a)(e,["component"]);return r.a.createElement(C,null,(function(e){var n=e.loggedIn;return r.a.createElement(i.b,Object.assign({render:function(e){return n?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}},a))}))}var Ne=Object(i.g)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));var Le=function(e){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(Ne,null),r.a.createElement(w,null,r.a.createElement(P,null,r.a.createElement(me,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/portfolio",component:I}),r.a.createElement(i.b,{path:"/about",component:_}),r.a.createElement(i.b,{path:"/contact",component:H}),r.a.createElement(i.b,{path:"/login",component:be}),r.a.createElement(Te,{path:"/admin",component:xe}),r.a.createElement(i.b,{path:"/",component:B})),r.a.createElement(q,null)))))};var Pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.38b0fbfb.chunk.js.map