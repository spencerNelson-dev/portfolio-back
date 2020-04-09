(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{182:function(e,t,a){e.exports=a(293)},187:function(e,t,a){},195:function(e,t){},197:function(e,t){},235:function(e,t){},236:function(e,t){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=(a(187),a(16)),i=a(43),u=a(6),m={uriBase:"",authRoute:"/api/v1/auth",projectsRoute:"/api/v1/projects",usersRoute:"/api/v1/users",textsRoute:"/api/v1/texts",messagesRoute:"/api/v1/messages"},s=[{_id:0,title:"Task Manager",text:"I've created a simple task app and added Google signin using OAuth2. The front end is created in React.js and the backend is run on Node.js with a MongoDB database. The sight utilized authentication and authorization.",liveLink:"https://sn-todo.herokuapp.com",gitHubLinks:["https://github.com/spencerNelson-dev/to-do-ui","https://github.com/spencerNelson-dev/to-do-api"],imgSrc:"task-tracker.png"}],d=function(){return fetch("".concat(m.uriBase).concat(m.projectsRoute),{method:"GET"}).then((function(e){if(!e.ok)throw new Error("Could not get all projects");return e.json()})).then((function(e){return e===[]?s:e})).catch((function(e){return console.log(e),s}))},f=r.a.createContext(),E=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),s=i[0],E=i[1],p=Object(n.useState)([]),h=Object(u.a)(p,2),v=h[0],b=h[1];return Object(n.useEffect)((function(){0===o.length&&d().then((function(e){l(e)})),0===s.length&&fetch("".concat(m.uriBase).concat(m.projectsRoute,"/img"),{method:"Get"}).then((function(e){if(!e.ok)throw new Error("Could not get image file names");return e.json()})).then((function(e){E(e)})).catch((function(e){console.log(e),E([])})),0===v.length&&fetch("".concat(m.uriBase).concat(m.textsRoute),{method:"GET"}).then((function(e){if(!e.ok)throw new Error("Failed to fetch texts.");return e.json()})).then((function(e){b(e)})).catch((function(e){console.log(e),E([])}))}),[s.length,o.length,v.length]),r.a.createElement(f.Provider,{value:{projects:o,setProjects:l,images:s,setImages:E,texts:v,setTexts:b}},e.children)},p=(f.Consumer,a(335)),h=a(339),v=a(342),b=a(340),g=a(341),j=a(343),y=a(84),O=function(e){var t=Object(n.useContext)(f).texts;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,spacing:5,justify:"center"},r.a.createElement(p.a,{item:!0,xs:10},r.a.createElement(h.a,{raised:!0},r.a.createElement(b.a,null,r.a.createElement(g.a,{component:"img",alt:"Hot air balloons",height:"140",image:"".concat(m.uriBase,"/public/images/about.jpg"),title:"Who is Spencer Nelson"}),r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Spencer Nelson"),r.a.createElement(y.a,{variant:"body2",color:"textPrimary",component:"p"},function(e){var a="",n=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var i=l.value;i.location===e&&(a=i.text)}}catch(u){r=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}("MainPage-Introduction"))),r.a.createElement(v.a,null,r.a.createElement(j.a,{size:"small",color:"primary",component:c.b,to:"/about"},"More About Me")))))))},x=a(32),k=a(344),C=a(163),w=a.n(C),S=r.a.createContext(),T=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),m=i[0],s=i[1];return Object(n.useEffect)((function(){var e=window.localStorage.getItem("token");if(e){var t=w.a.decode(e);Date.now().valueOf()/1e3>=t.exp?(alert("You have been logged out due to inactivity."),l(!1),window.localStorage.removeItem("token")):(s(e),l(!0))}}),[]),r.a.createElement(S.Provider,{value:{loggedIn:o,setLoggedIn:l,token:m,writeToken:function(e){window.localStorage.setItem("token",e),s(e),l(!0)}}},e.children)},P=S.Consumer,N=Object(k.a)({root:{maxWidth:345,minWidth:345,margin:16,display:"flex",flexDirection:"column",justifyContent:"space-between"},media:{height:140}});var B=function(e){var t=N(),a=Object(n.useContext)(S),o=a.loggedIn,l=a.token,c=Object(n.useState)(e.card._id),i=Object(u.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:t.root,raised:!0},r.a.createElement(g.a,{className:t.media,image:"".concat(m.uriBase,"/public/images/").concat(e.card.imgSrc),title:"Contemplative Reptile"}),r.a.createElement(b.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.card.title),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},e.card.text)),r.a.createElement(v.a,null,""!==e.card.liveLink?r.a.createElement(j.a,{href:e.card.liveLink,size:"small",color:"primary"},"Live Site"):null,e.card.gitHubLinks!==[]?e.card.gitHubLinks.map((function(e,t){return r.a.createElement(j.a,{key:e,href:e,color:"primary"},"GitHub ".concat(t+1))})):null,o?r.a.createElement(j.a,{onClick:function(){fetch("".concat(m.uriBase).concat(m.projectsRoute,"/").concat(e.card._id),{method:"DELETE",headers:{Authorization:"Bearer ".concat(l),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Could not delete object");return e.json()})).then((function(t){if(1===t.deletedCount){var a,n=Object(x.a)(e.projects),r=!0,o=!1,l=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var m=c.value;m._id===i&&(a=n.indexOf(m))}}catch(s){o=!0,l=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw l}}n.splice(a,1),e.setProjects(n)}else alert("Not Authorized")})).catch((function(e){console.log(e)}))},color:"secondary"},"Delete"):null)))};function L(e){var t=Object(n.useContext)(f),a=t.projects,o=t.setProjects;return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(p.a,{container:!0,justify:"center",spacing:3,alignItems:"stretch"},function(e,t){for(var a=[],n=0;n<e.length&&n<3;n++)a.push(e[n]);return a}(a).map((function(e){return r.a.createElement(p.a,{key:e._id,item:!0,component:function(){return r.a.createElement(B,{key:e._id,card:e,projects:a,setProjects:o})}})}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(j.a,{variant:"contained",color:"secondary",component:c.b,to:"/portfolio"},"View All Projects")))}var I=function(e){var t=Object(n.useContext)(f),a=t.projects,o=t.setProjects;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(p.a,{container:!0,justify:"center",spacing:3},a.map((function(e){return r.a.createElement(p.a,{key:e._id,item:!0,component:function(){return r.a.createElement(B,{key:e._id,card:e,setProjects:o,projects:a})}})}))))),r.a.createElement("br",null),r.a.createElement("br",null))},A=a(173);var _=function(e){var t=Object(n.useContext)(f).texts,a=Object(n.useState)([]),o=Object(u.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),d=s[0],E=s[1],v=function(e,a){if(t.length>0&&0===l.length){var n="",r=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var m=i.value;m.location===e&&(n=m.text)}}catch(d){o=!0,c=d}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}var s=n.split("\n\n");s.length>1&&a(s)}};return v("About-Introduction",c),v("About-Mission",E),r.a.createElement("div",null,r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,xs:12,style:{margin:32}},r.a.createElement(A.a,{elevation:6},r.a.createElement(h.a,null,r.a.createElement(g.a,{component:"img",alt:"Hot air balloons",height:"140",image:"".concat(m.uriBase,"/public/images/about.jpg"),title:"Who is Spencer Nelson"}),r.a.createElement(b.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Introduction"),l.map((function(e){return r.a.createElement(y.a,{style:{margin:10},key:e,variant:"body2",color:"textPrimary",component:"p"},e)})),r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Mission"),d.map((function(e){return r.a.createElement(y.a,{style:{margin:10},key:e,variant:"body2",color:"textPrimary",component:"p"},e)}))))))))},z=a(357);var R=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],E=Object(n.useState)(""),p=Object(u.a)(E,2),h=p[0],v=p[1],b=Object(n.useContext)(f).texts,g=function(){l(""),d(""),v("")};return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3,style:{padding:16,margin:16}},function(e){var t="",a=!0,n=!1,r=void 0;try{for(var o,l=b[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var c=o.value;c.location===e&&(t=c.text)}}catch(i){n=!0,r=i}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return t}("ContactMe")),r.a.createElement(A.a,{elevation:3,style:{padding:16,margin:16}},r.a.createElement("div",null,r.a.createElement(z.a,{required:!0,label:"Name",value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{required:!0,label:"Email",value:s,onChange:function(e){return d(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{required:!0,multiline:!0,label:"Message",fullWidth:!0,value:h,onChange:function(e){return v(e.target.value)}})),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){""!==o&&""!==s&&""!==h||alert("Please fill out name, email and message");null===s.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)&&alert("Please enter a valid email");var e=new Date,t={name:o,email:s,message:h,date:e,app:"Portfolio"};fetch("".concat(m.uriBase).concat(m.messagesRoute),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok||alert("Message failed to send"),e.json()})).then((function(e){alert("Message sent!"),g()})),console.log(t)}},"Send Message"),r.a.createElement(j.a,{variant:"contained",color:"secondary",style:{float:"right"},onClick:g},"Clear")),r.a.createElement("br",null),r.a.createElement("br",null))},M=a(347),H=a(348),W=a(164),D=a.n(W),F=a(165),q=a.n(F),G=Object(k.a)({root:{width:500}});var J=function(e){var t=G();return r.a.createElement("div",null,r.a.createElement(M.a,{showLabels:!0,className:t.root},r.a.createElement(H.a,{component:c.b,to:"/login",label:"Spencer Nelson",icon:r.a.createElement(D.a,null)}),r.a.createElement(H.a,{href:"https://templateflip.com/",target:"_blank",rel:"noopener noreferrer",label:"templateflip.com",icon:r.a.createElement(q.a,null)})))},U=a(349),$=a(350),V=a(351),Y=a(170),K=a.n(Y),Q=a(359),X=a(346),Z=a(294),ee=a(352),te=a(353),ae=a(166),ne=a.n(ae),re=a(168),oe=a.n(re),le=a(169),ce=a.n(le),ie=a(167),ue=a.n(ie),me=Object(k.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));var se=function(e){var t=me(),a=Object(n.useState)(!1),o=Object(u.a)(a,2),l=o[0],i=o[1],m=Object(n.useContext)(S),s=m.loggedIn,d=m.setLoggedIn,f=function(){i(!l)};return r.a.createElement("div",null,r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{position:"fixed"},r.a.createElement($.a,null,r.a.createElement(V.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:f},r.a.createElement(K.a,null)),r.a.createElement(y.a,{variant:"h6",className:t.title},"Spencer Nelson ",s?r.a.createElement(c.b,{to:"/admin"},"Admin"):null,s?r.a.createElement(j.a,{onClick:function(){window.localStorage.removeItem("token"),d(!1)}},"Log Out"):null),r.a.createElement(j.a,{color:"inherit",component:c.b,to:"/"},"Home"),r.a.createElement(j.a,{color:"inherit",component:c.b,to:"/portfolio"},"Portfolio"),r.a.createElement(j.a,{color:"inherit",component:c.b,to:"/about"},"About"),r.a.createElement(j.a,{color:"inherit",component:c.b,to:"/contact"},"Contact"))),r.a.createElement($.a,null)),r.a.createElement("div",null,r.a.createElement(Q.a,{open:l,onClose:f},r.a.createElement("div",{className:t.list,role:"presentation"},r.a.createElement(X.a,null,["Home","Portfolio","About","Contact"].map((function(e,t){return r.a.createElement(Z.a,{button:!0,onClick:f,component:c.b,to:"/".concat(e.toLowerCase()),key:e},r.a.createElement(ee.a,null,function(e){var t;switch(e){case"Home":t=r.a.createElement(ne.a,null);break;case"Portfolio":t=r.a.createElement(ue.a,null);break;case"About":t=r.a.createElement(oe.a,null);break;case"Contact":t=r.a.createElement(ce.a,null)}return t}(e)),r.a.createElement(te.a,{primary:e}))})))))))},de=a(360),fe=a(355),Ee=a(171),pe=a.n(Ee),he=a(354),ve=Object(k.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function be(e){var t=ve(),a=Object(n.useState)(""),o=Object(u.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),d=s[0],f=s[1],E=Object(n.useContext)(S).writeToken;return r.a.createElement("div",null,r.a.createElement(he.a,{component:"main",maxWidth:"xs"},r.a.createElement(fe.a,null),r.a.createElement("div",{className:"".concat(t.paper)},r.a.createElement(de.a,{className:t.avatar},r.a.createElement(pe.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:function(e){return f(e.target.value)}}),r.a.createElement(j.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){fetch("".concat(m.uriBase).concat(m.authRoute,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:d})}).then((function(e){if(!e.ok)throw new Error("Login Failed");return e.json()})).then((function(t){""!==t?E(t):alert("Incorrect email and password!"),c(""),f(""),e.history.push("/admin")}))}},"Sign In"))))}var ge=a(356),je=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var ye=function(e){var t=je(),a=Object(n.useState)(""),o=Object(u.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),d=s[0],E=s[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),v=h[0],b=h[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),O=y[0],k=y[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),T=w[0],P=w[1],N=Object(n.useContext)(f),B=N.images,L=N.projects,I=N.setProjects,_=Object(n.useContext)(S).token;return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3,style:{padding:16}},r.a.createElement("h3",null,"Create Project"),r.a.createElement("div",{className:t.root},r.a.createElement(z.a,{required:!0,label:"Title",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{required:!0,multiline:!0,label:"Text",value:d,onChange:function(e){return E(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{label:"Live Link",value:v,onChange:function(e){return b(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{label:"GitHub Links",multiline:!0,value:O,onChange:function(e){return k(e.target.value)},helperText:"multiple links seperated with commas"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,{select:!0,value:T,onChange:function(e,t){P(t.key)},helperText:"Please select an image"},B.map((function(e){return r.a.createElement(ge.a,{key:e,value:e},e)})))),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault();var t={title:l,text:d,liveLink:v,gitHubLinks:O,imgSrc:T};fetch("".concat(m.uriBase).concat(m.projectsRoute),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(_)},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Could not get projects");return e.json()})).then((function(e){var t=Object(x.a)(L);t.push(e),I(t),c(""),E(""),b(""),k(""),P("")})).catch((function(e){alert(e)}))}},"Create!")))},Oe=a(345);var xe=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useContext)(S).token,i=Object(n.useContext)(f),s=i.images,d=i.setImages;return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3},r.a.createElement("div",{style:{margin:30}},r.a.createElement("h3",null,"Upload Image"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("file",o),t.append("filename",o.name),fetch("".concat(m.uriBase).concat(m.projectsRoute,"/img/upload"),{method:"POST",headers:{Authorization:"Bearer ".concat(c)},body:t}).then((function(e){if(!e.ok)throw new Error("Failed to upload file");return e.json()})).then((function(e){if(alert(e),"File Uploaded!"===e){var t=Object(x.a)(s);t.push(o.name),d(t)}l("")})).catch((function(e){alert(e)}))}},r.a.createElement(Oe.a,{type:"file",onChange:function(e){return l(e.target.files[0])},inputProps:{"aria-label":"description"}}),r.a.createElement(j.a,{type:"submit"},"Upload")))))},ke=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},button:{float:"right"}}}));var Ce=function(e){var t=ke(),a=Object(n.useState)(""),o=Object(u.a)(a,2),l=o[0],c=o[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),d=s[0],E=s[1],p=Object(n.useState)(""),h=Object(u.a)(p,2),v=h[0],b=h[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),O=y[0],k=y[1],C=Object(n.useState)(""),w=Object(u.a)(C,2),T=w[0],P=w[1],N=Object(n.useState)(""),B=Object(u.a)(N,2),L=B[0],I=B[1],_=Object(n.useState)({}),R=Object(u.a)(_,2),M=R[0],H=R[1],W=Object(n.useContext)(f),D=W.images,F=W.projects,q=W.setProjects,G=Object(n.useContext)(S).token,J=function(){c(""),E(""),b(""),k(""),P(""),I(""),H({})};return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3,style:{padding:16}},r.a.createElement("h3",null,"Edit Project"),r.a.createElement("div",{className:t.root},r.a.createElement(z.a,{select:!0,value:l,onChange:function(e,t){var a=!0,n=!1,r=void 0;try{for(var o,l=F[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;i._id===t.key&&(c(t.key),E(i.title),b(i.text),k(i.liveLink),P(i.gitHubLinks),I(i.imgSrc),H(i))}}catch(u){n=!0,r=u}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}},helperText:"Please select a project"},F.map((function(e){return r.a.createElement(ge.a,{key:e._id,value:e._id},e.title)}))),r.a.createElement("br",null),r.a.createElement(z.a,{required:!0,label:"Title",value:d,onChange:function(e){return E(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{required:!0,multiline:!0,label:"Text",value:v,onChange:function(e){return b(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{label:"Live Link",value:O,onChange:function(e){return k(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(z.a,{label:"GitHub Links",multiline:!0,value:T,onChange:function(e){return P(e.target.value)},helperText:"multiple links seperated with commas"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,{select:!0,value:L,onChange:function(e,t){I(t.key)},helperText:"Please select an image"},D.map((function(e){return r.a.createElement(ge.a,{key:e,value:e},e)})))),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){if(""===l)alert("No project selected to edit."),J();else{var e={_id:l,title:d,text:v,liveLink:O,gitHubLinks:Array.isArray(T)?T:T.replace(/[\s\n]/g,"").split(","),imgSrc:L},t={};for(var a in M)"__v"!==a&&e[a]!==M[a]&&(t[a]=e[a]);fetch("".concat(m.uriBase).concat(m.projectsRoute,"/").concat(l),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(G)},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Failed to patch");return e.json()})).then((function(e){if(1===e.nModified){var a=Object(x.a)(F),n=!0,r=!1,o=void 0;try{for(var c,i=a[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var u=c.value;if(u._id===l)for(var m in t)u[m]=t[m]}}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}q(a),J()}else alert("Nothing changed")})).catch((function(e){console.log(e)}))}}},"Edit!"),r.a.createElement(j.a,{className:t.button,variant:"contained",color:"secondary",onClick:J},"Clear")))};var we=function(e){var t=Object(n.useContext)(f).texts,a=Object(n.useState)(""),o=Object(u.a)(a,2),l=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{select:!0,value:l,onChange:function(a,n){c(n.key);var r=function(e){var a={},n=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var i=l.value;i.location===e&&(a.text=i.text,a.id=i._id)}}catch(u){r=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(n.key);e.setEditTextId(r.id),e.setEditText(r.text)},helperText:"Select a text."},t.map((function(e){return r.a.createElement(ge.a,{id:e._id,key:e.location,value:e.location},e.location)}))))};var Se=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1],E=Object(n.useContext)(S).token,p=Object(n.useContext)(f),h=p.texts,v=p.setTexts;return r.a.createElement("div",{style:{minWidth:300}},r.a.createElement(A.a,{elevation:3,style:{padding:16}},r.a.createElement("h3",null,"Edit Texts"),r.a.createElement(we,{setEditText:l,setEditTextId:d}),r.a.createElement("br",null),r.a.createElement(z.a,{required:!0,multiline:!0,label:"Text",value:o,fullWidth:!0,onChange:function(e){return l(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(j.a,{variant:"contained",color:"primary",onClick:function(){fetch("".concat(m.uriBase).concat(m.textsRoute,"/").concat(s),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E)},body:JSON.stringify({text:o})}).then((function(e){if(!e.ok)throw new Error("Failed to patch");return e.json()})).then((function(e){if(1===e.nModified){var t=Object(x.a)(h),a=!0,n=!1,r=void 0;try{for(var l,c=t[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var i=l.value;i._id===s&&(i.text=o)}}catch(u){n=!0,r=u}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}v(t),alert("Changes Saved")}else alert("Nothing changed")}))}},"Save")))};var Te=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],l=a[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),s=i[0],d=i[1],f=Object(n.useContext)(S).token,E=function(){};return r.a.createElement("div",null,r.a.createElement(A.a,{elevation:3,style:{padding:16}},r.a.createElement("div",null,r.a.createElement("h2",null,"Messages")),r.a.createElement("div",null,o?r.a.createElement("div",null,r.a.createElement("ul",null,s.map((function(e){return r.a.createElement("li",{key:e._id},"".concat(new Date(e.date).toLocaleDateString(),"||").concat(e.email,"||").concat(e.name,"||").concat(e.message,"||").concat(e.app),r.a.createElement("button",{onClick:E},"DELETE"))})))):null),r.a.createElement("div",null,r.a.createElement(j.a,{onClick:function(){fetch("".concat(m.uriBase).concat(m.messagesRoute),{method:"GET",headers:{Authorization:"Bearer ".concat(f),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Could not get messages");return e.json()})).then((function(e){console.log(e),d(e),l(!0)})).catch((function(e){console.log(e)}))},variant:"contained",color:"primary"},"Show Messages"))))};var Pe=function(e){return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,direction:"column",spacing:3,justify:"space-evenly",alignItems:"center"},r.a.createElement(p.a,{item:!0,xs:6},r.a.createElement(xe,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(p.a,{container:!0,spacing:3,justify:"space-evenly"},r.a.createElement(p.a,{item:!0},r.a.createElement(ye,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(Ce,null)),r.a.createElement(p.a,{item:!0},r.a.createElement(Se,null)))),r.a.createElement(p.a,{item:!0},r.a.createElement(Te,null))))},Ne=a(172);function Be(e){var t=e.component,a=Object(Ne.a)(e,["component"]);return r.a.createElement(P,null,(function(e){var n=e.loggedIn;return r.a.createElement(i.b,Object.assign({render:function(e){return n?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}},a))}))}var Le=Object(i.g)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));var Ie=function(e){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(Le,null),r.a.createElement(T,null,r.a.createElement(E,null,r.a.createElement(se,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/portfolio",component:I}),r.a.createElement(i.b,{path:"/about",component:_}),r.a.createElement(i.b,{path:"/contact",component:R}),r.a.createElement(i.b,{path:"/login",component:be}),r.a.createElement(Be,{path:"/admin",component:Pe}),r.a.createElement(i.b,{path:"/",component:L})),r.a.createElement(J,null)))))};var Ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[182,1,2]]]);
//# sourceMappingURL=main.4c4c46b4.chunk.js.map