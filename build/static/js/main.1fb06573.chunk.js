(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(18),a=t.n(c),r=t(9),u=t(6),o=t(3),s=t(2),i=t(5),l=t.n(i),b="/api/persons",m=function(){return l.a.get(b).then((function(e){return e.data}))},j=function(e){return l.a.post(b,e).then((function(e){return e.data}))},d=function(e,n){return l.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},f=function(e){return l.a.delete("".concat(b,"/").concat(e))},h=t(0),O=function(e){var n=e.searchTerm,t=e.callback;return Object(h.jsxs)("div",{children:["filter shown with ",Object(h.jsx)("input",{value:n,onChange:t})]})},v=function(e){var n=e.newPerson,t=e.onNameChange,c=e.onNumberChange,a=e.onFormSubmit;return Object(h.jsxs)("form",{onSubmit:a,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:n.name,onChange:t})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:n.number,onChange:c})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},x=function(e){var n=e.persons,t=e.deleteHandler;return n.map((function(e){return Object(h.jsxs)("p",{children:[e.name," ",e.number,Object(h.jsx)("button",{onClick:function(n){return t(e)},children:"Delete"})]},e.name)}))},p=function(e){var n=e.message,t=e.className;return null===n?null:Object(h.jsx)("div",{className:t,children:n})},w=function(){var e=Object(s.useState)([{name:"Arto Hellas",number:"040-1234567"}]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(s.useState)({name:"",number:""}),i=Object(o.a)(a,2),l=i[0],b=i[1],w=Object(s.useState)(""),g=Object(o.a)(w,2),C=g[0],N=g[1],k=Object(s.useState)(null),S=Object(o.a)(k,2),T=S[0],y=S[1],D=Object(s.useState)(null),H=Object(o.a)(D,2),P=H[0],E=H[1],F=t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(s.useEffect)((function(){m().then((function(e){c(e)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),null!==P&&Object(h.jsx)(p,{message:P,className:"success"}),null!==T&&Object(h.jsx)(p,{message:T,className:"error"}),Object(h.jsx)(O,{searchTerm:C,callback:function(e){N(e.target.value)}}),Object(h.jsx)(v,{newPerson:l,onNameChange:function(e){b(Object(u.a)(Object(u.a)({},l),{},{name:e.target.value}))},onNumberChange:function(e){b(Object(u.a)(Object(u.a)({},l),{},{number:e.target.value}))},onFormSubmit:function(e){e.preventDefault(),t.some((function(e){return e.name===l.name}))?function(){var e=t.findIndex((function(e){return e.name===l.name})),n=t[e];window.confirm("Replace number for ".concat(n.name,"?"))&&d(n.id,l).then((function(n){var a=Object(r.a)(t);a[e]=n,c(a),b({name:"",number:""}),E("Number changed for ".concat(n.name)),window.setTimeout(E,3e3,null)})).catch((function(e){y("".concat(l.name," was already deleted from the server")),c(t.filter((function(e){return e.name!==l.name}))),b({name:"",number:""}),window.setTimeout(y,3e3,null)}))}():j(l).then((function(e){c(t.concat(e)),b({name:"",number:""}),E("".concat(e.name," successfully added")),window.setTimeout(E,3e3,null)}))}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(x,{persons:F,deleteHandler:function(e){window.confirm("Delete ".concat(e.name,"?"))&&f(e.id).then((function(){var n=Object(r.a)(t),a=n.indexOf(e);n.splice(a,1),c(n)}))}})]})};t(42);a.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1fb06573.chunk.js.map