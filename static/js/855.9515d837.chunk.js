"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[855],{3855:function(e,r,s){s.r(r),s.d(r,{default:function(){return gr}});var t=s(1413),i=s(5671),o=s(3144),n=s(136),a=s(5716),l=s(2791),c=s(7781),u=s(364),d=s(9271),f=s(1304),_=function(e){return{type:f.EM,payload:{status:e}}},m="Profile_root__Bto6X",p="Profile_content__PDB7C",h="Profile_timeline__8LTU9",v="Profile_items__dpQ1r",x="Profile_imgAndTextarea__FB-BM",j="Profile_postForm__pkE04",b="ProfileInfo_root__-01hY",g="ProfileInfo_profileCover__fjmDW",N="ProfileInfo_profileContent__Lui8V",P="ProfileInfo_profileAvatar__U0BPj",k="ProfileInfo_profileAvatar__img__9VHa+",Z="ProfileInfo_fileInput__HJjoc",F="ProfileInfo_fileInputLabel__qQfGu",S="ProfileInfo_fileInputIcon__Zfn8L",y="ProfileInfo_userStatus__mDeVW",C="ProfileInfo_profileInfo__hyr4t",A="ProfileInfo_profileInfo__title__umLsj",I="ProfileInfo_profileInfo__description__NI79e",w=s(1528),D=s(9464),L=s(885),M="ProfileStatus_root__K4sQq",B="ProfileStatus_status__AXP6U",U="ProfileStatus_input__XpA+J",E=s(184),O=function(e){var r=e.status,s=e.updateUserStatus,t=(0,l.useState)(!1),i=(0,L.Z)(t,2),o=i[0],n=i[1],a=(0,l.useState)(r),c=(0,L.Z)(a,2),u=c[0],d=c[1];return(0,E.jsx)("div",{className:M,children:o?(0,E.jsx)("div",{children:(0,E.jsx)("input",{className:U,onChange:function(e){d(e.currentTarget.value)},value:u,onBlur:function(){n(!1),s(u)},autoFocus:!0})}):(0,E.jsx)("p",{className:B,onDoubleClick:function(){n(!0)},children:r||"No Status"})})},T=s(1813);var H=s.p+"static/media/icon-edit.1eeae1f4fdc99797976b21afb2d76001.svg",J=function(e){var r=e.profile,s=e.status,t=e.isOwner,i=e.updateUserStatus,o=e.savePhoto;if(!r)return(0,E.jsx)(D.p,{});return(0,E.jsxs)("div",{className:b,children:[(0,E.jsx)("div",{children:(0,E.jsx)("img",{className:g,src:w,alt:"profile-cover"})}),(0,E.jsxs)("div",{className:N,children:[(0,E.jsxs)("div",{className:P,children:[(0,E.jsx)("img",{className:k,src:r.photos.large||T,alt:"profile-avatar-8"}),t&&(0,E.jsxs)("label",{htmlFor:"mainPhotoInput",className:F,children:[(0,E.jsx)("input",{id:"mainPhotoInput",type:"file",onChange:function(e){e.target.files&&o(e.target.files[0])},className:Z}),(0,E.jsx)("img",{className:S,src:H,alt:"edit-icon"})]}),(0,E.jsx)("div",{className:y})]}),(0,E.jsxs)("div",{className:C,children:[(0,E.jsx)("h1",{className:A,children:r.fullName}),(0,E.jsx)("p",{className:I,children:r.aboutMe}),(0,E.jsx)(O,{status:s,updateUserStatus:i})]})]})]})},V={},Y="Post_root__dW6m5",G="Post_text__PLCYh",W="Post_likes__iPpMQ",X="Post_likesIcon__9cyAT",q="Post_likesCount__edRYc",z={root:"PostHeader_root__-BK6H",user:"PostHeader_user__P5fho",user__image:"PostHeader_user__image__lO1Bo",user__avatar:"PostHeader_user__avatar__BEzcj",user__Name:"PostHeader_user__Name__wHHTG"};var Q=s.p+"static/media/icon-more.1bb396989f806e6d727107c508fbe248.svg",R="AvatarAndFullName_user__0BQe-",K="AvatarAndFullName_user__image__LYoup",$="AvatarAndFullName_user__avatar__uYuEJ",ee="AvatarAndFullName_user__Name__1Qd0-",re=function(e){var r=e.image,s=e.fullName;return(0,E.jsxs)("div",{className:R,children:[(0,E.jsx)("div",{className:K,children:(0,E.jsx)("img",{className:$,src:r||T,alt:"user-avatar"})}),(0,E.jsx)("span",{className:ee,children:s})]})},se=function(e){var r=e.showMore,s=void 0===r||r,t=e.profile;return t?(0,E.jsxs)("div",{className:z.root,children:[(0,E.jsx)(re,{image:t.photos.large,fullName:t.fullName}),s&&(0,E.jsx)("div",{className:z.iconBlock,children:(0,E.jsx)("img",{className:z.icon,src:Q,alt:"more-icon"})})]}):(0,E.jsx)(D.p,{})},te=s(9898),ie=function(e){var r=e.profile;return(0,E.jsxs)("div",{className:Y,children:[(0,E.jsx)(se,{profile:r}),(0,E.jsx)("div",{className:G,children:e.post.message}),(0,E.jsxs)("div",{className:W,children:[(0,E.jsx)("img",{className:X,src:te.Z,alt:"icon-likes"}),(0,E.jsx)("span",{className:q,children:e.post.likesCount})]})]})},oe=l.memo((function(e){var r=e.posts,s=e.profile,t=r.map((function(e){return(0,E.jsx)(ie,{post:e,profile:s},e.id)}));return(0,E.jsx)("div",{className:V.timeline,children:(0,E.jsx)("div",{className:V.posts,children:t})})})),ne="Sidebar_root__aCei4",ae={root:"About_root__xIYiC"},le="ProfileData_root__1zyBk",ce="ProfileData_items__jd33t",ue="ProfileData_item__4NTgv",de="ProfileData_iconBlock__EKDIW",fe="ProfileData_iconImage__daBWX",_e="ProfileData_info__dpKRM",me="ProfileData_editButton__VBMDt",pe="ProfileData_contacts__yuOna",he="ProfileData_contact__0jgpl",ve="ProfileContact_root__Zau4y",xe="ProfileContact_iconBlock__xH+d0",je="ProfileContact_iconImage__Di3MF",be="ProfileContact_link__VOX9Y",ge=function(e){var r=e.title,s=e.value,t=e.icon;return(0,E.jsxs)("li",{className:ve,children:[t&&(0,E.jsx)("div",{className:xe,children:(0,E.jsx)("a",{href:s||"#",target:"_blank",rel:"noreferrer",children:(0,E.jsx)("img",{className:je,src:t,alt:"".concat(r,"-icon")})})}),(0,E.jsx)("p",{children:(0,E.jsx)("a",{className:be,href:s||"#",target:"_blank",rel:"noreferrer",children:s})})]})};var Ne=s.p+"static/media/icon-skills.0b5d14bae1373d7f21231949796e6502.svg",Pe=s(6775);var ke=s.p+"static/media/icon-facebook.7563b79c888e2539cfd4f821b5510010.svg";var Ze=s.p+"static/media/icon-looking.29f10c7226c3270e77a6a3bca00335be.svg";var Fe=s.p+"static/media/icon-vk.63d486febab3638ea146e8458abc9e08.svg";var Se=s.p+"static/media/icon-instagram.c1a46f0ec5c2080bfbd8a03555a331ed.svg";var ye=s.p+"static/media/icon-youtube.c132599030471e734cec434984321369.svg",Ce=s(677);var Ae=s.p+"static/media/icon-twitter.973b98b9dbbfd443cb8f1b272cc2d4bf.svg";var Ie=s.p+"static/media/icon-github.da22fb741c6b8fb713c7d40d73204520.svg";var we=s.p+"static/media/icon-mainLink.ee97887f4a161a024eedb6aa9fdefdfe.svg",De=function(e){var r={aboutMe:te.Z,lookingForAJob:Ze,lookingForAJobDescription:Ne,contacts:Pe.Z,facebook:ke,website:Ce.Z,vk:Fe,twitter:Ae,instagram:Se,youtube:ye,github:Ie,mainLink:we},s=e.profile,t=e.isOwner,i=e.activateEditMode;return(0,E.jsxs)("div",{className:le,children:[(0,E.jsxs)("ul",{className:ce,children:[(0,E.jsxs)("li",{className:ue,children:[(0,E.jsx)("div",{className:de,children:(0,E.jsx)("img",{className:fe,src:r.aboutMe,alt:"aboutMe-icon"})}),(0,E.jsx)("div",{children:"About me:"}),(0,E.jsx)("div",{className:_e,children:null===s||void 0===s?void 0:s.aboutMe})]}),(0,E.jsxs)("li",{className:ue,children:[(0,E.jsx)("div",{className:de,children:(0,E.jsx)("img",{className:fe,src:r.lookingForAJob,alt:"lookingForAJob-icon"})}),(0,E.jsx)("div",{children:"Looking for a job:"}),(0,E.jsx)("div",{className:_e,children:null!==s&&void 0!==s&&s.lookingForAJob?"Yes":"No"})]}),(null===s||void 0===s?void 0:s.lookingForAJobDescription)&&(0,E.jsxs)("li",{className:ue,children:[(0,E.jsx)("div",{className:de,children:(0,E.jsx)("img",{className:fe,src:r.lookingForAJobDescription,alt:"lookingForAJobDescription-icon"})}),(0,E.jsx)("div",{children:"Skills:"}),(0,E.jsx)("div",{className:_e,children:null===s||void 0===s?void 0:s.lookingForAJobDescription})]}),(null===s||void 0===s?void 0:s.contacts)&&(0,E.jsxs)("li",{className:pe,children:[(0,E.jsxs)("div",{className:ue,children:[(0,E.jsx)("div",{className:de,children:(0,E.jsx)("img",{className:fe,src:r.contacts,alt:"contacts-icon"})}),(0,E.jsxs)("div",{children:["Contacts:",Object.values(s.contacts).every((function(e){return!e}))&&(0,E.jsx)("b",{children:" No contacts"})]})]}),(0,E.jsx)("div",{children:(0,E.jsx)("ul",{className:he,children:Object.entries(s.contacts).map((function(e){var s=(0,L.Z)(e,2),t=s[0],i=s[1];return i&&(0,E.jsx)(ge,{title:t,value:i,icon:r[t]},t)}))})})]})]}),t&&(0,E.jsx)("button",{className:me,onClick:function(){i()},children:"Edit"})]})},Le=s(704),Me="ProfileDataForm_root__gr5V4",Be="ProfileDataForm_formContainer__Id5Rg",Ue="ProfileDataForm_formItems__ecqiM",Ee="ProfileDataForm_checkboxContainer__nhSMb",Oe="ProfileDataForm_checkbox__d0MaU",Te="ProfileDataForm_contacts__4nvVK",He="ProfileDataForm_saveButton__FcF5r",Je=s(5032),Ve=s(5800),Ye=(0,Le.Z)({form:"edit-profile"})((function(e){var r=e.profile,s=e.handleSubmit,t=e.error;return(0,E.jsx)("form",{className:Be,onSubmit:s,children:(0,E.jsxs)("div",{className:Me,children:[(0,E.jsxs)("div",{className:Ue,children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("b",{children:"Full name"}),": ",null===r||void 0===r?void 0:r.fullName,(0,Ve.Gr)("Full name","fullName",[],Ve.II)]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("b",{children:"About me"}),": ",null===r||void 0===r?void 0:r.aboutMe,(0,Ve.Gr)("About me","aboutMe",[],Ve.gx)]}),(0,E.jsxs)("div",{className:Ee,children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("b",{children:"Looking for a job"}),": ",null!==r&&void 0!==r&&r.lookingForAJob?"Yes":"No"]}),(0,Ve.Gr)("","lookingForAJob",[],Ve.II,{type:"checkbox",className:Oe})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("b",{children:"My professional skills"}),": ",null===r||void 0===r?void 0:r.lookingForAJobDescription,(0,Ve.Gr)("My professional skills","lookingForAJobDescription",[],Ve.gx)]}),(null===r||void 0===r?void 0:r.contacts)&&(0,E.jsxs)("div",{className:Te,children:[(0,E.jsx)("b",{children:"Contacts:"})," ",Object.keys(r.contacts).map((function(e){return(0,E.jsxs)("div",{children:[(0,E.jsx)("b",{children:e}),": ",(0,Ve.Gr)(e,"contacts."+e,[],Ve.II)]},e)}))]})]}),(0,E.jsx)("button",{className:He,children:"Save"}),t&&(0,E.jsx)("div",{className:Je.Z.formSummaryError,children:t})]})})})),Ge=function(e){var r=e.profile,s=e.isOwner,t=e.updateProfile,i=(0,l.useState)(!1),o=(0,L.Z)(i,2),n=o[0],a=o[1];return r?(0,E.jsxs)("div",{className:ae.root,children:[(0,E.jsx)("h4",{className:ae.sidebar__title,children:"About"}),n?(0,E.jsx)(Ye,{profile:r,onSubmit:function(e){t(e).then((function(){return a(!1)}))},initialValues:r}):(0,E.jsx)(De,{profile:r,isOwner:s,activateEditMode:function(){a(!0)}})]}):(0,E.jsx)(D.p,{})},We={root:"Friends_root__SqnWV",friendsHeader:"Friends_friendsHeader__wPsTj",friendsCount:"Friends_friendsCount__ELJid",seeAll:"Friends_seeAll__+XkwX",items:"Friends_items__gJbcc",friendsButton:"Friends_friendsButton__isHWY"},Xe="Friend_item__USsMi",qe="Friend_img__dfi6L",ze="Friend_userName__mwLv9",Qe=s(1523),Re=function(e){var r=e.friend;return(0,E.jsx)(Qe.OL,{to:"/profile/".concat(r.id),children:(0,E.jsx)("li",{children:(0,E.jsxs)("div",{className:Xe,children:[(0,E.jsx)("img",{className:qe,src:r.photos.large||T,alt:"avatar-friend"}),(0,E.jsx)("span",{className:ze,children:r.name})]})},r.id)})},Ke=function(e){var r=e.users,s=(0,l.useState)(!1),t=(0,L.Z)(s,2),i=t[0],o=t[1],n=function(){return o(!i)},a=i?r:r.slice(0,6);return(0,E.jsxs)("div",{className:We.root,children:[(0,E.jsxs)("div",{className:We.friendsHeader,children:[(0,E.jsxs)("div",{className:We.titleAndCount,children:[(0,E.jsx)("h4",{children:"Friends"}),(0,E.jsxs)("div",{className:We.friendsCount,children:[r.length," Friends"]})]}),(0,E.jsx)("div",{className:We.seeAll,children:i?(0,E.jsx)("button",{onClick:n,children:"Hide friends"}):(0,E.jsx)("button",{onClick:n,children:"See all"})})]}),(0,E.jsx)("ul",{className:We.items,children:a.map((function(e){return(0,E.jsx)(Re,{friend:e},e.id)}))}),i?(0,E.jsx)("button",{onClick:n,className:We.friendsButton,children:"Hide friends"}):(0,E.jsx)("button",{onClick:n,className:We.friendsButton,children:"See all"})]})},$e=function(e){var r=e.state,s=e.profile,t=e.isOwner,i=e.updateProfile,o=e.users;return(0,E.jsxs)("div",{className:ne,children:[(0,E.jsx)(Ge,{about:r.about,profile:s,isOwner:t,updateProfile:i}),(0,E.jsx)(Ke,{users:o})]})},er=s(6139),rr="PostForm_root__cn+aG",sr="PostForm_textarea__Kye9q",tr="PostForm_buttonBlock__dLMNE",ir="PostForm_button__bLB9S",or=s(5210),nr=(0,or.D)(10),ar=(0,Le.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,E.jsx)("div",{className:rr,children:(0,E.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,E.jsx)(er.Z,{component:Ve.gx,className:sr,name:"newPostText",placeholder:"What's Your Mind ?",validate:[or.C,nr]}),(0,E.jsx)("div",{className:tr,children:(0,E.jsx)("button",{className:ir,children:"Add post"})})]})})})),lr=function(e){var r=e.profile,s=e.status,t=e.profilePage,i=e.isOwner,o=e.updateUserStatus,n=e.addPost,a=e.savePhoto,l=e.updateProfile,c=e.users;return(0,E.jsx)("div",{className:m,children:(0,E.jsxs)("div",{className:p,children:[(0,E.jsx)(J,{isOwner:i,profile:r,status:s,updateUserStatus:o,savePhoto:a}),(0,E.jsxs)("div",{className:v,children:[(0,E.jsxs)("div",{className:h,children:[(0,E.jsx)("div",{className:j,children:(0,E.jsxs)("div",{className:x,children:[(0,E.jsx)(se,{profile:r,showMore:!1}),(0,E.jsx)(ar,{onSubmit:function(e){n(e.newPostText)}})]})}),(0,E.jsx)(oe,{profile:r,posts:t.posts})]}),(0,E.jsx)($e,{state:t.sidebar,profile:r,isOwner:i,updateProfile:l,users:c})]})]})})},cr=s(5861),ur=s(7757),dr=s.n(ur),fr=s(2423),_r=(fr.Z.arrayInsert,fr.Z.arrayMove,fr.Z.arrayPop,fr.Z.arrayPush,fr.Z.arrayRemove,fr.Z.arrayRemoveAll,fr.Z.arrayShift,fr.Z.arraySplice,fr.Z.arraySwap,fr.Z.arrayUnshift,fr.Z.autofill,fr.Z.blur,fr.Z.change,fr.Z.clearAsyncError,fr.Z.clearFields,fr.Z.clearSubmit,fr.Z.clearSubmitErrors,fr.Z.destroy,fr.Z.focus,fr.Z.initialize,fr.Z.registerField,fr.Z.reset,fr.Z.resetSection,fr.Z.setSubmitFailed,fr.Z.setSubmitSucceeded,fr.Z.startAsyncValidation,fr.Z.startSubmit,fr.Z.stopAsyncValidation,fr.Z.stopSubmit),mr=(fr.Z.submit,fr.Z.touch,fr.Z.unregisterField,fr.Z.untouch,fr.Z.updateSyncWarnings,fr.Z.updateSyncErrors,s(7174)),pr=s(6460),hr=function(e){return function(){var r=(0,cr.Z)(dr().mark((function r(s){var t;return dr().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,mr.FZ.getProfile(e);case 2:t=r.sent,s((i=t,{type:f.cF,payload:{profile:i}}));case 4:case"end":return r.stop()}var i}),r)})));return function(e){return r.apply(this,arguments)}}()},vr=s(2932),xr=s(3449),jr=s(1573),br=function(e){(0,n.Z)(s,e);var r=(0,a.Z)(s);function s(){return(0,i.Z)(this,s),r.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=String(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile(),this.props.getUsers(1,10,{term:"",friend:!0})}},{key:"componentDidUpdate",value:function(e,r,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,E.jsx)(lr,(0,t.Z)((0,t.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,updateProfile:this.props.updateProfile,users:this.props.users}))}}]),s}(l.Component),gr=(0,c.qC)((0,u.$j)((function(e){return{profilePage:e.profilePage,profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth,users:(0,jr.Rf)(e)}}),{addPost:function(e){return{type:f.QB,payload:{newPostText:e}}},getUserProfile:hr,getUserStatus:function(e){return function(){var r=(0,cr.Z)(dr().mark((function r(s){var t;return dr().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,mr.FZ.getStatus(e);case 2:t=r.sent,s(_(t));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var r=(0,cr.Z)(dr().mark((function r(s){return dr().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,mr.FZ.updateStatus(e);case 2:r.sent.resultCode===pr.A.SUCCESS&&s(_(e));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},savePhoto:function(e){return function(){var r=(0,cr.Z)(dr().mark((function r(s){var t;return dr().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,mr.FZ.savePhoto(e);case 2:(t=r.sent).resultCode===pr.A.SUCCESS&&s((i=t.data.photos,{type:f.z3,payload:{photos:i}}));case 4:case"end":return r.stop()}var i}),r)})));return function(e){return r.apply(this,arguments)}}()},updateProfile:function(e){return function(){var r=(0,cr.Z)(dr().mark((function r(s,t){var i,o;return dr().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=t().auth.userId){r.next=4;break}return console.warn("userId not found in the state"),r.abrupt("return");case 4:return r.next=6,mr.FZ.updateProfile(e);case 6:if((o=r.sent).resultCode!==pr.A.SUCCESS){r.next=11;break}s(hr(i)),r.next=13;break;case 11:return s(_r("edit-profile",{_error:o.messages[0]||"Incorrect data"})),r.abrupt("return",Promise.reject(o.messages[0]));case 13:case"end":return r.stop()}}),r)})));return function(e,s){return r.apply(this,arguments)}}()},getUsers:xr.Zw}),d.EN,vr.F)(br)},5800:function(e,r,s){s.d(r,{II:function(){return p},gx:function(){return m},Gr:function(){return h}});var t=s(1413),i=s(5987),o=(s(2791),s(6139)),n="FormsControls_formControl__C25l1",a="FormsControls_error__yTVwP",l="FormsControls_errorMessage__FPdre",c="FormsControls_createFieldRoot__713+W",u="FormsControls_createFieldText__+EwTk",d=s(184),f=["input","meta","FormType"],_=function(e){var r=e.input,s=e.meta,o=e.FormType,c=(0,i.Z)(e,f),u=s.touched&&s.error,_="".concat(n," ").concat(u?a:"");return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)(o,(0,t.Z)((0,t.Z)({},r),c)),u&&(0,d.jsx)("div",{className:l,children:s.error})]})},m=function(e){var r=Object.assign({},e);return(0,d.jsx)(_,(0,t.Z)((0,t.Z)({},r),{},{FormType:"textarea"}))},p=function(e){var r=Object.assign({},e);return(0,d.jsx)(_,(0,t.Z)((0,t.Z)({},r),{},{FormType:"input"}))};function h(e,r,s,i,n){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)(o.Z,(0,t.Z)({placeholder:e,name:r,validate:s,component:i,className:null===n||void 0===n?void 0:n.className},n))," ",(0,d.jsxs)("label",{className:u,children:[" ",a," "]})]})}},2932:function(e,r,s){s.d(r,{F:function(){return u}});var t=s(1413),i=s(5987),o=(s(2791),s(364)),n=s(9271),a=s(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,o.$j)(c)((function(r){r.isAuth;var s=(0,i.Z)(r,l);return r.isAuth?(0,a.jsx)(e,(0,t.Z)({},s)):(0,a.jsx)(n.l_,{to:"/login"})}))}},5210:function(e,r,s){s.d(r,{C:function(){return t},D:function(){return i}});var t=function(e){return e?void 0:"Field is required"},i=function(e){return function(r){if(r.length>e)return"Max length is ".concat(e," symbols")}}},5032:function(e,r){r.Z={wrapper:"Login_wrapper__8AHJ8",root:"Login_root__Od7qV",loginInput:"Login_loginInput__1mteg",testLoginInfo:"Login_testLoginInfo__0zyKD",title:"Login_title__o6kjX",loginForm:"Login_loginForm__Hfrz3",loginCheckbox:"Login_loginCheckbox__lDelY",loginCheckboxText:"Login_loginCheckboxText__jgVLo",formSummaryError:"Login_formSummaryError__RQPu8",blink1:"Login_blink1__BMxif",link:"Login_link__rXTUS",loginButton:"Login_loginButton__FGhM5"}},1528:function(e,r,s){e.exports=s.p+"static/media/profile-cover.97a7b2bf6505f2dc1883.jpg"}}]);
//# sourceMappingURL=855.9515d837.chunk.js.map