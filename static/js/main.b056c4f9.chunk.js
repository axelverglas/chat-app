(this.webpackJsonpchat_app_project=this.webpackJsonpchat_app_project||[]).push([[0],{328:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(38),n=a.n(c),r=a(2),i=a(29),l=(a(328),a(23)),o=a(6),u=a(16),j=a.n(u),d=a(5),m=a.n(d),b=a(3),p=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),i=r[0],u=r[1],d=Object(s.useState)(""),p=Object(o.a)(d,2),h=p[0],g=p[1],x=function(){var e=Object(l.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"7c083b61-2560-4544-a60a-cdcf1f39d80c","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,m.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),g(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),g("Oops, informations incorrect !");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("h1",{className:"title",children:"Chat Application"}),Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Nom d'utilisateur",required:!0}),Object(b.jsx)("input",{type:"password",value:i,onChange:function(e){return u(e.target.value)},className:"input",placeholder:"Mot de passe",required:!0}),Object(b.jsx)("div",{align:"center",children:Object(b.jsx)("button",{type:"submit",className:"button",children:Object(b.jsx)("span",{children:"Connexion"})})})]}),Object(b.jsx)("h1",{children:h})]})})},h=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(b.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(b.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},g=function(e){var t,a,s=e.lastMessage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(b.jsxs)("div",{className:"message-row",children:[n&&Object(b.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(b.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(b.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},x=a(332),O=a(333),v=function(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1],r=e.chatId,l=e.creds,u=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(i.t)(l,r,{text:t})};return Object(b.jsxs)("form",{className:"message-form",onSubmit:u,children:[Object(b.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(i.p)(e,r)},onSubmit:u}),Object(b.jsx)("label",{htmlFor:"upload-button",children:Object(b.jsx)("span",{className:"image-button",children:Object(b.jsx)(x.a,{className:"picture-icon"})})}),Object(b.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(i.t)(l,r,{files:e.target.value,text:""})}}),Object(b.jsx)("button",{type:"submit",className:"send-button",children:Object(b.jsx)(O.a,{className:"send-icon"})})]})},f=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],i=function(e,t){return n.people.map((function(a,s){return a.last_read===e.id&&Object(b.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(s))}))};return n?Object(b.jsxs)("div",{className:"chat-feed",children:[Object(b.jsxs)("div",{className:"chat-title-container",children:[Object(b.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(b.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],l=s===n.sender.username;return Object(b.jsxs)("div",{style:{width:"100%"},children:[Object(b.jsx)("div",{className:"message-block",children:l?Object(b.jsx)(h,{message:n}):Object(b.jsx)(g,{message:n,lastMessage:c[r]})}),Object(b.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?"0px":"68px"},children:i(n,l)})]},"msg_".concat(a))}))}(),Object(b.jsx)("div",{style:{height:"100px"}}),Object(b.jsx)("div",{className:"message-form-container",children:Object(b.jsx)(v,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):Object(b.jsx)("div",{})},N=function(){return localStorage.getItem("username")?Object(b.jsx)(i.d,{height:"100vh",projectID:"7c083b61-2560-4544-a60a-cdcf1f39d80c",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(b.jsx)(f,Object(r.a)({},e))}}):Object(b.jsx)(p,{})};n.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[330,1,2]]]);
//# sourceMappingURL=main.b056c4f9.chunk.js.map