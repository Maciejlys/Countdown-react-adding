(this["webpackJsonpcountdown-react"]=this["webpackJsonpcountdown-react"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":"0","name":"Example timer","dueDate":"Dec 5, 2025","dueTime":"12:00:00"}]')},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(7),r=n.n(s),i=(n(15),n(3)),o=(n(16),n(10)),j=function(e,t){var n=(new Date).getTime(),c=function(e,t){return new Date(e+" "+t).getTime()}(e,t)-n;return[Math.floor(c/864e5),Math.floor(c%864e5/36e5),Math.floor(c%36e5/6e4),Math.floor(c%6e4/1e3)]},u=(n(17),n(1)),d=function(){return Object(u.jsxs)("div",{className:"loading",children:[Object(u.jsx)("div",{className:"loader"}),Object(u.jsx)("h1",{children:"Loading"})]})},l=(n(19),function(e){var t=e.id,n=(e.name,e.dueDate),a=e.dueTime,s=Object(c.useState)([0,0,0,0]),r=Object(i.a)(s,2),o=r[0],l=r[1],b=Object(c.useState)(!0),m=Object(i.a)(b,2),O=m[0],x=m[1],h=Object(c.useState)(!1),f=Object(i.a)(h,2),v=f[0],N=f[1];Object(c.useEffect)((function(){x(!0);var e=setInterval((function(){l((function(){x(!1);var t=j(n,a);return t.map((function(t){t<0?(N(!0),clearInterval(e)):N(!1)})),t}))}),1e3);return function(){return clearInterval(e)}}),[t,a,n]);var g=Object(i.a)(o,4),p=g[0],S=g[1],y=g[2],C=g[3];return O?Object(u.jsx)(d,{}):v?Object(u.jsx)("span",{className:"up",children:"The time is up!"}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"timers",children:[Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("header",{className:"big-text",children:p}),Object(u.jsx)("footer",{className:"small-text",children:"days"})]}),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("header",{className:"big-text",children:S}),Object(u.jsx)("footer",{className:"small-text",children:"hours"})]}),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("header",{className:"big-text",children:y}),Object(u.jsx)("footer",{className:"small-text",children:"minutes"})]}),Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsx)("header",{className:"big-text",children:C}),Object(u.jsx)("footer",{className:"small-text",children:"seconds"})]})]})})}),b=(n(20),function(e){var t=e.counters,n=e.index;return Object(u.jsxs)("section",{className:"mid",children:[Object(u.jsx)("div",{className:"name",children:Object(u.jsx)("h2",{children:t[n].name})}),Object(u.jsx)("div",{className:"counter",children:Object(u.jsx)(l,Object(o.a)({},t[n]))})]})}),m=n(4),O=(n(21),n(22),n(8)),x=n(9),h=function(e){var t=Date.parse(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),c=new Intl.DateTimeFormat("en",{month:"short"}).format(t),a=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(c," ").concat(a,", ").concat(n)},f=function(e){var t=e.counters,n=e.removeCounter,a=e.addCounter,s=Object(c.useState)(!1),r=Object(i.a)(s,2),o=r[0],j=r[1],d=Object(c.useState)("Example"),l=Object(i.a)(d,2),b=l[0],f=l[1],v=Object(c.useState)("Dec 5, 2025"),N=Object(i.a)(v,2),g=N[0],p=N[1],S=Object(c.useState)("12:00:00"),y=Object(i.a)(S,2),C=y[0],I=y[1];return Object(u.jsxs)("div",{className:"overlay",children:[Object(u.jsx)("div",{className:"center-overlay",children:t.map((function(e){return Object(u.jsxs)("div",{className:"single-counter",children:[Object(u.jsx)("h4",{children:e.name}),Object(u.jsx)("button",{className:"btn-add",onClick:function(){return n(e.id)},children:Object(u.jsx)(O.a,{className:"btn-delete"})},e.id)]},e.id)}))}),Object(u.jsx)("div",{className:"btn-add-container",children:Object(u.jsx)("button",{className:"btn-add",onClick:function(){return j(!o)},children:Object(u.jsx)(x.a,{className:"add"})})}),o&&Object(u.jsx)("div",{className:"overlay",children:Object(u.jsxs)("form",{className:"center-overlay inputs",onSubmit:function(e){e.preventDefault();var n={id:"".concat(t.length),name:"".concat(b),dueDate:"".concat(h(g)),dueTime:"".concat(C)};j(!1),a(n)},children:[Object(u.jsx)("h1",{children:"Add your countdown:"}),Object(u.jsx)("div",{className:"input-txt",children:Object(u.jsx)("input",{type:"text",onChange:function(e){return f(e.target.value)},placeholder:"Name",maxLength:25,autoFocus:!0})}),Object(u.jsx)("input",{type:"date",onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("input",{type:"time",onChange:function(e){return I(e.target.value)}}),Object(u.jsx)("div",{className:"add-container",children:Object(u.jsx)("button",{type:"submit",className:"btn-add",children:Object(u.jsx)(m.a,{className:"add"})})})]})})]})},v=function(e){var t=e.counters,n=e.removeCounter,a=e.addCounter,s=Object(c.useState)(!1),r=Object(i.a)(s,2),o=r[0],j=r[1];return Object(u.jsxs)("div",{className:"btn-add-container",children:[Object(u.jsx)("button",{className:"btn-add",onClick:function(){return j(!o)},children:Object(u.jsx)(m.b,{className:"add"})}),o?Object(u.jsx)(f,{addCounter:a,removeCounter:n,counters:t||[]}):Object(u.jsx)(u.Fragment,{})]})},N=(n(23),function(e){var t=e.names,n=e.setIndex,c=e.current;return Object(u.jsxs)("nav",{className:"nav",children:[Object(u.jsx)("div",{className:"line"}),t.map((function(e,t){return Object(u.jsx)("button",{className:"btn ".concat(t===c&&"active-btn"),onClick:function(){return n(t)},children:e},t)}))]})}),g=n(5),p=function(e){return e.map((function(e){return e.name}))},S=function(){var e=JSON.parse(localStorage.getItem("data")||"{}");return"[]"===JSON.stringify(e)?(localStorage.setItem("data",JSON.stringify(g)),g):e};var y=function(){var e=Object(c.useState)(g),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([""]),r=Object(i.a)(s,2),o=r[0],j=r[1],l=Object(c.useState)(0),m=Object(i.a)(l,2),O=m[0],x=m[1],h=Object(c.useState)(!0),f=Object(i.a)(h,2),y=f[0],C=f[1];return Object(c.useEffect)((function(){j(p(S())),a(S()),setTimeout((function(){C(!1)}),1500)}),[]),Object(u.jsxs)("main",{children:[Object(u.jsx)("main",{className:"load ".concat(!y&&"loaded"),children:Object(u.jsx)(d,{})}),Object(u.jsx)(N,{names:o,setIndex:x,current:O}),Object(u.jsx)(b,{counters:n||[],index:O}),Object(u.jsx)(v,{addCounter:function(e){var t=n;t.push(e),localStorage.setItem("data",JSON.stringify(t)),j(p(S()))},counters:n||[],removeCounter:function(e){var t=n.filter((function(t){return t.id!==e}));localStorage.setItem("data",JSON.stringify(t)),a(S()),j(p(S()))}})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.35d408bd.chunk.js.map