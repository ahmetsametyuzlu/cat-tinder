(this.webpackJsonpcatnip=this.webpackJsonpcatnip||[]).push([[0],{30:function(t,e,c){},32:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),i=(c(30),c(9)),o=c(3),j=c(4),l=c.n(j),u=c(24),d=c(10),h=c(11),b=(c(32),c(1));function O(){var t=Object(n.useState)([]),e=Object(h.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(!0),s=Object(h.a)(r,2),o=s[0],j=s[1],O=Object(n.useState)(!1),p=Object(h.a)(O,2),g=p[0],x=p[1];return Object(n.useEffect)((function(){fetch("https://api.thecatapi.com/v1/categories").then((function(t){return t.json()})).then(function(){var t=Object(d.a)(l.a.mark((function t(e){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map((function(t){return fetch("https://api.thecatapi.com/v1/images/search?limit=1&category_ids=".concat(t.id)).then((function(t){return t.json()})).then(function(){var e=Object(d.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u.a)(Object(u.a)({},t),{},{image:c[0]}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})));case 2:return c=t.sent,t.next=5,a(c);case 5:return t.next=7,j(!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,x(!0);case 3:return t.next=5,j(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),o?Object(b.jsx)("div",{className:"loading",children:"Loading..."}):g?Object(b.jsx)("div",{className:"error",children:"Error while loading categories. Please try again later!"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"page-home",children:[Object(b.jsx)("p",{children:"Select a category"}),Object(b.jsx)("div",{className:"category-list",children:c.map((function(t){var e;return Object(b.jsx)(i.b,{to:"/category/".concat(t.id),style:{backgroundImage:'url("'.concat(null===(e=t.image)||void 0===e?void 0:e.url,'")')},children:Object(b.jsx)("span",{children:t.name})},String(t.id))}))})]})})}var p=c(12),g="CATS_LOAD",x="CATS_CLEAR",f="CAT_PET",m="CAT_NO_PET",v="CAT_SKIP",y=function(t){return t.catSwipe};c(39);function N(){var t=Object(p.b)(),e=Object(o.f)(),c=Object(o.g)().categoryId,a=Object(n.useState)(!0),r=Object(h.a)(a,2),s=r[0],i=r[1],j=Object(n.useState)(!1),u=Object(h.a)(j,2),O=u[0],N=u[1],w=Object(p.c)(y),S=Object(n.useState)(0),k=Object(h.a)(S,2),_=k[0],E=k[1],C=Object(n.useState)(),I=Object(h.a)(C,2),P=I[0],T=I[1];Object(n.useEffect)((function(){t({type:x}),fetch("https://api.thecatapi.com/v1/categories").then((function(t){return t.json()})).then(function(){var t=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.find((function(t){return String(t.id)===String(c)})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(!0);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),fetch("https://api.thecatapi.com/v1/images/search?limit=10&category_ids=".concat(c)).then((function(t){return t.json()})).then(function(){var e=Object(d.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g,payload:c}),e.next=3,i(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var t=Object(d.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,N(!0);case 3:return t.next=5,i(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[c]);var D=function(){_===w.length-1?e.push("/stats/".concat(c)):E(_+1)};return c?s?Object(b.jsx)("div",{className:"loading",children:"Loading..."}):O?Object(b.jsx)("div",{className:"error",children:"Error while loading cats. Please try again later!"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"page-category",children:[P?Object(b.jsxs)("div",{className:"category-title",children:["> ",P.name]}):null,Object(b.jsx)("p",{children:"Would you pet it? "}),Object(b.jsxs)("div",{className:"cat",children:[Object(b.jsx)("div",{className:"cat-image",style:{backgroundImage:'url("'.concat(w[_].cat.url,'")')}}),Object(b.jsxs)("div",{className:"cat-process",children:[_+1," of ",w.length]}),Object(b.jsxs)("div",{className:"cat-action",children:[Object(b.jsxs)("button",{onClick:function(){var e;t((e=w[_].cat.id,{type:m,payload:{id:e}})),D()},className:"cat-action-pet-no",children:[Object(b.jsx)("img",{src:"/img/action/DontPet.svg",alt:""}),Object(b.jsx)("span",{children:"Don't pet it!"})]}),Object(b.jsxs)("button",{onClick:function(){var e;t((e=w[_].cat.id,{type:v,payload:{id:e}})),D()},className:"cat-action-skip",children:[Object(b.jsx)("img",{src:"/img/action/Skip.svg",alt:""}),Object(b.jsx)("span",{children:"Skip it!"})]}),Object(b.jsxs)("button",{onClick:function(){var e;t((e=w[_].cat.id,{type:f,payload:{id:e}})),D()},className:"cat-action-pet",children:[Object(b.jsx)("img",{src:"/img/action/Pet.svg",alt:""}),Object(b.jsx)("span",{children:"Pet it!"})]})]})]})]})}):Object(b.jsx)("div",{className:"error",children:"Not Found"})}c(40);function w(){var t=Object(o.g)().categoryId,e=Object(p.c)(y),c=e.filter((function(t){return!0===t.status})).length,n=e.filter((function(t){return!1===t.status})).length,a=e.filter((function(t){return null===t.status})).length;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"page-stats",children:[Object(b.jsx)("div",{className:"stats-title",children:"> Stats"}),Object(b.jsxs)("p",{children:["Cats seen: ",e.length]}),Object(b.jsxs)("div",{className:"stats",children:[Object(b.jsxs)("div",{className:"stat-no-pet",children:[Object(b.jsx)("div",{className:"stat-image",children:Object(b.jsx)("img",{src:"/img/action/DontPet.svg",alt:""})}),Object(b.jsxs)("div",{className:"stat-detail",children:[Object(b.jsx)("strong",{children:n}),Object(b.jsx)("span",{children:"Cats you didn't pet"})]})]}),Object(b.jsxs)("div",{className:"stat-skip",children:[Object(b.jsx)("div",{className:"stat-image",children:Object(b.jsx)("img",{src:"/img/action/Skip.svg",alt:""})}),Object(b.jsxs)("div",{className:"stat-detail",children:[Object(b.jsx)("strong",{children:a}),Object(b.jsx)("span",{children:"Cats you skipped"})]})]}),Object(b.jsxs)("div",{className:"stat-pet",children:[Object(b.jsx)("div",{className:"stat-image",children:Object(b.jsx)("img",{src:"/img/action/Pet.svg",alt:""})}),Object(b.jsxs)("div",{className:"stat-detail",children:[Object(b.jsx)("strong",{children:c}),Object(b.jsx)("span",{children:"Cats you pet"})]})]})]}),Object(b.jsxs)("div",{className:"stats-action",children:[Object(b.jsx)(i.b,{to:"/category/".concat(t),children:"Restart In Same Category"}),Object(b.jsx)(i.b,{to:"/",children:"Select New Category"})]})]})})}c(41);var S=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("img",{src:"/img/logo/Logo.svg",alt:"Pet"})})}),Object(b.jsx)("main",{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/stats/:categoryId(\\d+)",children:Object(b.jsx)(w,{})}),Object(b.jsx)(o.a,{path:"/category/:categoryId(\\d+)",children:Object(b.jsx)(N,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(O,{})})]})})]})},k=c(20),_=c(16),E=[];var C=Object(k.a)({catSwipe:function(){var t,e,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return[];case g:return Object(_.a)(n.payload.map((function(t){return{cat:t,status:void 0}})));case f:return e=(t=Object(_.a)(c)).findIndex((function(t){return t.cat.id===n.payload.id})),t[e].status=!0,t;case v:return e=(t=Object(_.a)(c)).findIndex((function(t){return t.cat.id===n.payload.id})),t[e].status=null,t;case m:return e=(t=Object(_.a)(c)).findIndex((function(t){return t.cat.id===n.payload.id})),t[e].status=!1,t;default:return c}}}),I=Object(k.b)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p.a,{store:I,children:Object(b.jsx)(S,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.ae2093a1.chunk.js.map