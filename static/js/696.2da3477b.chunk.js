"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[696],{696:function(e,s,a){a.r(s),a.d(s,{default:function(){return L}});var n=a(7781),r=a(364),t=a(1304),i=(a(2791),{root:"Dialogs_root__ZBxGL",messages:"Dialogs_messages__lkJAj",messages__items:"Dialogs_messages__items__pitjD"}),o="Message_root__Qd2uM",c="Message_message__Ic1yz",l=a(184),u=function(e){var s=e.message;return(0,l.jsx)("div",{className:o,children:(0,l.jsx)("div",{className:c,children:s})})},d=a(1523),m="DialogItems_root__zDccm",_="DialogItems_item__UFFv8",g="DialogItems_item__image__D53KK",x="DialogItems_item__avatar__2AYrr",h="DialogItems_userAndMessage__+0Ro3",j="DialogItems_item__userName__Nz0j0",f="DialogItems_userMessage__LV+Ef",v=function(e){var s=e.id,a=e.dialog,n="/dialogs/".concat(s);return(0,l.jsx)("div",{className:m,children:(0,l.jsx)(d.OL,{to:n,children:(0,l.jsxs)("li",{className:_,children:[(0,l.jsx)("div",{className:g,children:(0,l.jsx)("img",{className:x,src:a.avatar,alt:"contact-avatar"})}),(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("div",{className:j,children:"".concat(a.userFirstName," ").concat(a.userLastName)}),(0,l.jsx)("div",{className:f,children:"'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore'"})]})]})},a.id)})},N=a(6139),F=a(704),p="DialogsForm_root__VoJhg",D="DialogsForm_textareaButtonBlock__Y45Lw",y="DialogsForm_textarea__NQgS4",Z="DialogsForm_button__KLuPq",M=a(5800),b=a(5210),C=(0,b.D)(50),k=(0,F.Z)({form:"dialogsForm"})((function(e){return(0,l.jsx)("div",{className:p,children:(0,l.jsx)("form",{onSubmit:e.handleSubmit,children:(0,l.jsxs)("div",{className:D,children:[(0,l.jsx)(N.Z,{component:M.gx,name:"newMessageBody",placeholder:"Enter your Message",validate:[b.C,C],className:y}),(0,l.jsx)("button",{className:Z,children:"Send"})]})})})})),w=a(5181),I=a(2932),A=a(9271),L=(0,n.qC)((0,r.$j)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:function(e){return{type:t.ok,payload:{newMessageBody:e}}}}),A.EN,I.F)((function(e){var s=e.sendMessage,a=e.dialogsPage,n=a.dialogs,r=a.messages,t=(0,w.L)(1200),o=n.map((function(e){return(0,l.jsx)(v,{id:e.id,dialog:e},e.id)})),c=r.map((function(e){return(0,l.jsx)(u,{id:e.id,message:e.message},e.id)}));return(0,l.jsxs)("div",{className:i.root,children:[!t&&(0,l.jsx)("div",{className:i.dialogs__items,children:o}),(0,l.jsxs)("div",{className:i.messages,children:[(0,l.jsx)("div",{className:i.messages__items,children:c}),(0,l.jsx)(k,{onSubmit:function(e){s(e.newMessageBody)}})]})]})}))},5800:function(e,s,a){a.d(s,{II:function(){return x},gx:function(){return g},Gr:function(){return h}});var n=a(1413),r=a(5987),t=(a(2791),a(6139)),i="FormsControls_formControl__C25l1",o="FormsControls_error__yTVwP",c="FormsControls_errorMessage__FPdre",l="FormsControls_createFieldRoot__713+W",u="FormsControls_createFieldText__+EwTk",d=a(184),m=["input","meta","FormType"],_=function(e){var s=e.input,a=e.meta,t=e.FormType,l=(0,r.Z)(e,m),u=a.touched&&a.error,_="".concat(i," ").concat(u?o:"");return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)(t,(0,n.Z)((0,n.Z)({},s),l)),u&&(0,d.jsx)("div",{className:c,children:a.error})]})},g=function(e){var s=Object.assign({},e);return(0,d.jsx)(_,(0,n.Z)((0,n.Z)({},s),{},{FormType:"textarea"}))},x=function(e){var s=Object.assign({},e);return(0,d.jsx)(_,(0,n.Z)((0,n.Z)({},s),{},{FormType:"input"}))};function h(e,s,a,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)(t.Z,(0,n.Z)({placeholder:e,name:s,validate:a,component:r,className:null===i||void 0===i?void 0:i.className},i))," ",(0,d.jsxs)("label",{className:u,children:[" ",o," "]})]})}},2932:function(e,s,a){a.d(s,{F:function(){return u}});var n=a(1413),r=a(5987),t=(a(2791),a(364)),i=a(9271),o=a(184),c=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,t.$j)(l)((function(s){s.isAuth;var a=(0,r.Z)(s,c);return s.isAuth?(0,o.jsx)(e,(0,n.Z)({},a)):(0,o.jsx)(i.l_,{to:"/login"})}))}},5210:function(e,s,a){a.d(s,{C:function(){return n},D:function(){return r}});var n=function(e){return e?void 0:"Field is required"},r=function(e){return function(s){if(s.length>e)return"Max length is ".concat(e," symbols")}}}}]);
//# sourceMappingURL=696.2da3477b.chunk.js.map