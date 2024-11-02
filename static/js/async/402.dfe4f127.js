"use strict";(self.webpackChunk_diary_spo_web=self.webpackChunk_diary_spo_web||[]).push([["402"],{5426:function(e,t,l){l.r(t),l.d(t,{default:()=>Y});var n=l("2322"),r=l("2277");function s(e){let t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}let a={};function o(){return a}function i(e,t){let l=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,n=s(e),r=n.getDay();return n.setDate(n.getDate()+((r<l?-7:0)+6-(r-l))),n.setHours(23,59,59,999),n}function c(e,t){let l=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,n=s(e),r=n.getDay();return n.setDate(n.getDate()-((r<l?7:0)+r-l)),n.setHours(0,0,0,0),n}var d=l("2784"),u=l("3292");let h=e=>{if(!e||!(null==e?void 0:e.length))return[];let t=new Map;for(let l of e){let e=new Date(l.date).toLocaleDateString("ru");if(!!l.lessons)for(let n of l.lessons){if(!n.name||!n.gradebook)continue;let l=t.get(e)||[];for(let e of n.gradebook.tasks||[])!l.some(t=>t.task.id===e.id)&&l.push({lessonName:n.name,task:e});t.set(e,l)}}return Array.from(t.entries())};var v=l("7694"),m=l("5905"),g=l("8143");let f=e=>{let{day:t,lessonGrades:l}=e;if(!l.length)return;let s=(0,v.fB)(),{setData:a}=(0,m.M)(),o=async(e,t)=>{a({data:e,lessonName:t}),await s.showModal(g.HA)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.h4i,{mode:"secondary",className:"recentMarks",children:t}),(0,n.jsx)("div",{className:"flex",children:l.map(e=>{let{lessonName:t,task:l}=e;return(0,n.jsx)("div",{className:"marksWrapper flex",children:(0,n.jsx)(r.uBF,{onClick:()=>o(l,t),className:"markWrapper",children:(0,n.jsx)(u.vc,{bottom:(0,u.aS)(t,18),mark:(0,u.pX)(l)})})},"".concat(t,"_").concat(l.id))})})]},t)},x=e=>{let{lessonsState:t,shouldReverse:l}=e,s=h(t);return l&&s.reverse(),(0,n.jsx)(r.Z66,{showArrows:!0,getScrollToLeft:e=>e-120,getScrollToRight:e=>e+120,children:(0,n.jsx)("div",{className:"recentMarks__wrapper",children:s.map(e=>{let[t,l]=e;return(0,n.jsx)(f,{day:t,lessonGrades:l},t)})})})};var p=l("831"),S=l("128");let y=()=>{let[e,t]=(0,d.useState)(!1),[l,n]=(0,d.useState)(!1),[r,s]=(0,S.V)(),[a,o]=(0,d.useState)(null),[i,c]=(0,S.D)();return{getActualUserLessons:async(e,l)=>{t(!0),n(!1),localStorage.setItem("currentDate",e.toString());try{let r=await (0,p.Ql)(e,l);if((0,u._y)(r,()=>{t(!1),n(!0)},s,t,c),(0,u.k0)(r))return;o(r.data),localStorage.setItem("lastLessonsFetchTime",Date.now().toString()),localStorage.setItem("savedLessons",JSON.stringify(r.data))}finally{t(!1)}},isLoading:e,isError:l,rateSnackbar:r,data:a,snackbar:i,showSnackbar:c,setData:o}};var j=l("6376");let w=e=>{let{id:t,children:l,...s}=e,{panel:a,panelsHistory:o}=(0,v.g5)(),i=(0,v.fB)();if(!a){(0,u.t1)();return}return(0,n.jsx)(r.G7x,{id:t,history:o,activePanel:a,onSwipeBack:()=>i.back(),...s,children:(0,n.jsxs)(r.s_4,{nav:t,children:[(0,n.jsx)(j.Q9,{title:"Главная"}),l]})})},D=(e,t)=>"\n  ".concat(e.getDate(),"\n  ").concat(e.toLocaleString("ru-RU",{month:"long"}).slice(0,3),"\n    -\n    ").concat(t.getDate(),"\n    ").concat(t.toLocaleString("ru-RU",{month:"long"}).slice(0,3));var k=l("7052"),b=(0,k.De)("Icon16ArrowLeftOutline","arrow_left_outline_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="arrow_left_outline_16"><path fill-rule="evenodd" d="M6.47 3.22a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69a.75.75 0 0 1 0 1.5H4.56l2.97 2.97a.75.75 0 1 1-1.06 1.06L2.22 8.53a.75.75 0 0 1 0-1.06z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0),N=(0,k.De)("Icon16ArrowRightOutline","arrow_right_outline_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="arrow_right_outline_16"><path fill-rule="evenodd" d="M9.53 12.78a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.69L8.47 4.28a.75.75 0 0 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0);let _=(e,t,l,n,r)=>{let[s,a]=(0,d.useState)(0),[o,i]=(0,d.useState)(null),c=(o,i)=>{localStorage.setItem("isCurrent",JSON.stringify(!1)),l(!1);let c=new Date(e),d=new Date(t);if(s>0){let e=s*("prev"===o?-7:7);c.setDate(c.getDate()+e),d.setDate(d.getDate()+e),a(0)}else"prev"===o?(c.setDate(c.getDate()-7),d.setDate(d.getDate()-7)):"next"===o&&(c.setDate(c.getDate()+7),d.setDate(d.getDate()+7));i(c,d),n(c),r(d)};return{handleButtonClick:(e,t)=>{a(e=>e+1),o&&clearTimeout(o),i(window.setTimeout(()=>{c(e,t),a(0)},500))}}},C={month:"short",day:"numeric",year:"numeric"},I=e=>{let{handleGetLesson:t,startDate:l,endDate:s,showSnackbar:a,setStartDate:o,setEndDate:u}=e,[h,v]=(0,d.useState)(!1),{handleButtonClick:m}=_(l,s,v,o,u),g=new Date;(0,d.useEffect)(()=>{let e=c(l),t=c(g),n=e.toLocaleString("default",C);if(n===t.toLocaleString("default",C)){localStorage.setItem("isCurrent",JSON.stringify(!0)),localStorage.setItem("currentDate",l.toString()),v(!0);return}localStorage.setItem("isCurrent",JSON.stringify(!1)),localStorage.setItem("currentDate",l.toString()),v(!1)},[l,g]);let f=async()=>{let e=c(g),n=c(l),r=i(g),s=e.toLocaleString("default",C);if(s===n.toLocaleString("default",C)){a({title:"Вы уже на текущей неделе"}),localStorage.setItem("isCurrent",JSON.stringify(!0)),v(!0);return}try{t(e,r),o(e),u(r),localStorage.setItem("isCurrent",JSON.stringify(!0)),v(!0)}catch(e){console.error(e)}};return(0,n.jsxs)(r.hE2,{style:{alignItems:"center",position:"relative",color:"var(--vkui--color_stroke_accent_themed)"},gap:"s",children:[(0,n.jsx)(r.hU,{"aria-label":"Prev",onClick:()=>m("prev",t),children:(0,n.jsx)(b,{})}),(0,n.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(r.zxk,{size:"m",mode:"secondary",onClick:()=>f(),disabled:h,children:"Домой"}),(0,n.jsx)(j.P7,{tooltipContent:"Вернёт вас на текущую неделю"})]}),(0,n.jsx)(r.hU,{"aria-label":"Next",onClick:()=>m("next",t),children:(0,n.jsx)(N,{})})]})},L=e=>{let t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},O=e=>{let t=new Date(e);return t.toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"})};var T=l("9344");let M=(e,t)=>{let[l,n]=e.split(":").map(Number);if(Number.isNaN(l)||Number.isNaN(n)||l<0||l>23||n<0||n>59||!t)return null;let r=new Date(t);return r.setHours(l),r.setMinutes(n),r},A=(e,t,l)=>{let n=(l.getTime()-e.getTime())/6e4;if(n>90||e>t)return null;if(e<l)return"".concat(Math.floor(n)," мин до начала");if(e<t){let l=(t.getTime()-e.getTime())/6e4;return"".concat(Math.floor(l)," мин до конца")}return""},R={margin:"5px 0",display:"inline-block",padding:"3px 5px",borderRadius:"5px"},z=e=>{let{lessonDate:t,startTime:l,endTime:r}=e;if(!t||!l||!r)return null;let s=new Date,a=M(r,t),o=M(l,t);if(!a||!o)return null;let i=A(s,a,o);if(!i)return null;let c=30>Number.parseInt(i,10)?g.Dv:g.Rl,d={...R,border:"1px solid ".concat(c),color:c};return(0,n.jsx)("div",{style:d,children:i})},B=e=>{let{cabinetName:t,gradebook:l,lessonDate:r,startTime:s,endTime:a}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"lessonSubtitle",children:[(0,u.n$)(t)&&(0,n.jsx)(u.kd,{color:"red",children:" ДО"}),(null==l?void 0:l.lessonType)&&(0,n.jsx)(u.kd,{children:T.Kl[null==l?void 0:l.lessonType]}),(null==l?void 0:l.absenceType)&&(0,n.jsx)(u.kd,{color:T.kO[null==l?void 0:l.absenceType],children:T.a9[null==l?void 0:l.absenceType]})]}),s&&a&&(0,n.jsx)(z,{lessonDate:r,startTime:s,endTime:a})]})},F=e=>{var t,l,s,a,o,i,c,d;let{lessonDate:h,lesson:v,handleLessonClick:m}=e,{name:g,endTime:f,startTime:x,timetable:p,gradebook:S}=v;if(!g)return;let y=x?"".concat(x," — ").concat(f,", каб. ").concat((0,u.n$)(null==p?void 0:null===(t=p.classroom)||void 0===t?void 0:t.name)?"ДО":null==p?void 0:null===(l=p.classroom)||void 0===l?void 0:l.name):"Нет данных",w=(null==p?void 0:p.teacher)?"".concat(null===(s=p.teacher)||void 0===s?void 0:s.lastName," ").concat(null===(a=p.teacher)||void 0===a?void 0:a.firstName[0],"."):"Не указан";return(null==p?void 0:null===(o=p.teacher)||void 0===o?void 0:o.middleName)&&(w+=" ".concat(null===(d=p.teacher)||void 0===d?void 0:d.middleName[0],".")),(0,n.jsx)(r.qXk,{className:"lesson",onClick:()=>m(g,f,x,p,S),subhead:(0,n.jsx)("div",{children:y}),subtitle:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"lessonSubtitle",children:[(0,n.jsx)(B,{cabinetName:null==p?void 0:null===(i=p.classroom)||void 0===i?void 0:i.name,gradebook:S,lessonDate:h,startTime:x,endTime:f}),(0,n.jsx)("div",{className:"lessonMarks",children:null==S?void 0:null===(c=S.tasks)||void 0===c?void 0:c.map((e,t)=>(e.isRequired||(0,u.pX)(e))&&(0,n.jsx)(j.vc,{mark:(0,u.pX)(e),size:"s"},t))})]}),(0,n.jsx)("div",{children:w})]}),children:g},x)},H=e=>{let{lessonDayOfWeek:t,formattedLessonDate:l,displayDayStyles:s,displayDay:a}=e;return(0,n.jsxs)(r.h4i,{mode:"secondary",aside:a&&(0,n.jsx)(r.wFM,{style:s,children:a}),children:[t," ",l]})},J=e=>{var t,l;let{lesson:s}=e,a=(0,v.fB)(),{setData:o}=(0,m.H)(),i=(e,t,l,n,r)=>{let s=d.toISOString();o({name:e,endTime:t,startTime:l,timetable:n,gradebook:r,tasks:null==r?void 0:r.tasks,lessonId:s}),a.showModal(g.gI)},c=new Date,d=new Date(s.date),u=O(s.date),h=d.toLocaleString("ru",{weekday:"long"});if("воскресенье"===h)return;let f=L(d),x={color:f?g.zK:void 0,padding:"3px 5px",borderRadius:"5px",border:"1px solid ".concat(f?g.zK:g.pF)},p=c>d,S=null===(t=s.lessons)||void 0===t?void 0:t.map(e=>{var t;return(0,n.jsx)(F,{lessonDate:d,lesson:e,handleLessonClick:i},null!==(t=e.lessonId)&&void 0!==t?t:e.startTime)});return(0,n.jsx)(r.Zbd,{className:"lessonCard",children:(0,n.jsx)(r.ZAu,{header:(0,n.jsx)(H,{lessonDayOfWeek:h,formattedLessonDate:u,displayDayStyles:x,displayDay:f?"Сегодня":p?"День завершён":void 0}),children:(null===(l=s.lessons)||void 0===l?void 0:l.length)?S:(0,n.jsx)(r.VmN,{children:"Пар нет"})})},s.date.toString())},U=e=>{let{lessonsState:t}=e;return(0,n.jsx)(r.gy,{style:{overflowY:"auto"},size:"l",spaced:!0,children:(null==t?void 0:t.length)&&t.map((e,t)=>(0,n.jsx)(J,{lesson:e},"".concat(e.date,"_").concat(t)))})},Y=e=>{var t;let{id:l}=e,s=new Date,a=new Date(null!==(t=localStorage.getItem("currentDate"))&&void 0!==t?t:""),o=a&&a.getFullYear()>=2023?a:s,[h,v]=(0,d.useState)(i(o)),[m,g]=(0,d.useState)(c(o)),{getActualUserLessons:f,isLoading:p,isError:S,rateSnackbar:j,data:k,showSnackbar:b,setData:N,snackbar:_}=y(),C=async()=>f(m,h);(0,d.useEffect)(()=>{let e=localStorage.getItem("savedLessons");if(!e||(0,u.yy)("lastLessonsFetchTime")){C();return}b({layout:"vertical",action:"Загрузить новые",onActionClick:C,title:"Данные взяты из кеша"}),N(JSON.parse(e))},[]);let L=D(m,h),O=(null==k?void 0:k.length)&&!(null==k?void 0:k.some(e=>{var t;return null===(t=e.lessons)||void 0===t?void 0:t.some(e=>{var t,l;return null===(l=e.gradebook)||void 0===l?void 0:null===(t=l.tasks)||void 0===t?void 0:t.some(e=>e.mark)})})),T=(0,n.jsx)(I,{handleGetLesson:f,showSnackbar:b,endDate:h,startDate:m,setEndDate:v,setStartDate:g}),M=(0,u.dC)(x),A=(0,u.dC)(U),R=(0,n.jsxs)(r.h4i,{mode:"secondary",children:["Оценки за неделю ",O&&"отсутствуют"]});return S?(0,n.jsx)(u._x,{onClick:C}):(0,n.jsx)(w,{id:l,children:(0,n.jsxs)(r.t8j,{onRefresh:C,isFetching:p,children:[(0,n.jsxs)(r.ZCY,{children:[(0,n.jsx)(r.ZAu,{header:R,children:(0,n.jsx)(M,{lessonsState:k,shouldShowSpinner:p,shouldReverse:!0})}),(0,n.jsx)(u.n4,{id:"ScheduleGroup",mode:"screen",children:(0,n.jsx)(r.ZAu,{header:(0,n.jsx)(r.h4i,{aside:T,mode:"secondary",style:{alignItems:"center"},children:L}),children:(0,n.jsx)(A,{shouldShowSpinner:p,lessonsState:k})})})]}),_,j]})})}},128:function(e,t,l){l.d(t,{V:()=>i,D:()=>d});var n=l("2322"),r=l("5147"),s=l("2277"),a=l("2784"),o=l("8143");let i=()=>{let[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)(()=>{t((0,n.jsx)(s.A9Q,{layout:"vertical",onClose:()=>t(null),before:(0,n.jsx)(r.y,{fill:o.h7}),subtitle:"Вы временно заблокированы. Если вы считаете, что это ошибка, то сообщите нам",children:"Слишком частые запросы"}))},[])]};var c=(0,l("7052").De)("Icon28InfoCircleOutline","info_circle_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="info_circle_outline_28"><path fill="currentColor" d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4m.074 8c.237 0 .386.037.517.107q.196.106.302.302c.07.13.107.28.107.517v6.148c0 .237-.037.386-.107.517a.73.73 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.73.73 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517v-6.148c0-.237.037-.386.107-.517a.73.73 0 0 1 .302-.302c.13-.07.28-.107.517-.107zM14 7.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8" /></symbol>',28,28,!1,void 0);let d=()=>{let[e,t]=(0,a.useState)(null);return[e,(0,a.useCallback)(e=>e?(t((0,n.jsx)(s.A9Q,{layout:e.layout||"vertical",onClose:()=>t(null),before:e.before||(0,n.jsx)(c,{fill:o.zK}),offsetY:50,action:e.action,onActionClick:e.onActionClick,duration:e.duration,style:e.style,subtitle:e.subtitle,children:e.title})),null):(t(null),null),[])]}}}]);