"use strict";(self.webpackChunk_diary_spo_web=self.webpackChunk_diary_spo_web||[]).push([["800"],{5067:function(e,l,t){t.r(l),t.d(l,{default:function(){return f}});var n=t(2322),i=t(5147),o=t(2277),s=t(2784),r=t(3292),c=t(831),a=t(8143),u=t(128),d=t(6376);let h=e=>{localStorage.setItem("savedAds",JSON.stringify(e)),localStorage.setItem("lastFetchTime",String(Date.now()))},f=e=>{let{id:l}=e,[t,f]=(0,s.useState)(null),[x,j]=(0,s.useState)(!1),[v,y]=(0,s.useState)(!1),[C,b]=(0,u.D)();console.info("notifications",t);let S=()=>{j(!1),y(!0)},g=async e=>{j(!0);let l=localStorage.getItem("savedAds");if(!e&&l){f(JSON.parse(l));return}try{let{data:e}=await (0,c.bW)();if((0,r._y)(e,S,S,j,b),(0,r.k0)(e)){b({before:(0,n.jsx)(i.y,{fill:a.h7}),title:"Ошибка при попытке загрузить объявления",action:"Попробовать снова",onActionClick:()=>g(!0)});return}h(e),f(e)}finally{j(!1)}};return((0,s.useEffect)(()=>{let e=localStorage.getItem("savedAds");if(!e){g(!0);return}f(JSON.parse(e)),b({title:"Данные взяты из кеша",action:"Загрузить новые",onActionClick:()=>g(!0)})},[]),x)?(0,n.jsx)(o.ZCY,{children:(0,n.jsx)(o.$jN,{})}):(0,n.jsxs)(o.s_4,{nav:l,children:[(0,n.jsx)(d.Q9,{title:"Объявления"}),(0,n.jsx)(o.ZCY,{children:!!(null==t?void 0:t.length)&&(null==t?void 0:t.map(e=>{let{title:l,id:t,date:i,isForEmployees:s,isForParents:r,isForStudents:c,text:a}=e;return(0,n.jsx)(o.ZAu,{description:(0,n.jsxs)("div",{style:{display:"flex",gap:10},children:[s&&(0,n.jsx)(d.kd,{children:"Для работников"}),r&&(0,n.jsx)(d.kd,{color:"yellow-outline",children:"Для родителей"}),c&&(0,n.jsx)(d.kd,{color:"green-outline",children:"Для студентов"})]}),header:(0,n.jsx)(o.h4i,{mode:"tertiary",children:new Date(i).toLocaleDateString()}),children:(0,n.jsx)(o.Zbd,{mode:"shadow",children:(0,n.jsxs)(o.ZCY,{children:[(0,n.jsx)(o.Dxz,{level:"3",Component:"h3",children:l}),(0,n.jsx)(o.xvT,{children:a})]})})},t)}))}),!!(!(null==t?void 0:t.length)&&!v)&&(0,n.jsx)(o.VmN,{header:"Объявлений нет"}),v&&(0,n.jsx)(d._x,{onClick:()=>g(!0)}),C]})}},128:function(e,l,t){t.d(l,{V:()=>c,D:()=>u});var n=t("2322"),i=t("5147"),o=t("2277"),s=t("2784"),r=t("8143");let c=()=>{let[e,l]=(0,s.useState)(null);return[e,(0,s.useCallback)(()=>{l((0,n.jsx)(o.A9Q,{layout:"vertical",onClose:()=>l(null),before:(0,n.jsx)(i.y,{fill:r.h7}),subtitle:"Вы временно заблокированы. Если вы считаете, что это ошибка, то сообщите нам",children:"Слишком частые запросы"}))},[])]};var a=(0,t("7052").De)("Icon28InfoCircleOutline","info_circle_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="info_circle_outline_28"><path fill="currentColor" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4m.074 8c.237 0 .386.037.517.107q.196.106.302.302c.07.13.107.28.107.517v6.148c0 .237-.037.386-.107.517a.73.73 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.73.73 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-6.148c0-.237.037-.386.107-.517a.73.73 0 0 1 .302-.302c.13-.07.28-.107.517-.107zM14 7.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8" /></symbol>',28,28,!1,void 0);let u=()=>{let[e,l]=(0,s.useState)(null);return[e,(0,s.useCallback)(e=>e?(l((0,n.jsx)(o.A9Q,{layout:e.layout||"vertical",onClose:()=>l(null),before:e.before||(0,n.jsx)(a,{fill:r.zK}),offsetY:50,action:e.action,onActionClick:e.onActionClick,duration:e.duration,style:e.style,subtitle:e.subtitle,children:e.title})),null):(l(null),null),[])]}}}]);