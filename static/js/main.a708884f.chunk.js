(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,a){t.exports={App:"App_App__2qWrp",title:"App_title__-f7u2"}},21:function(t,e,a){t.exports={label:"Filter_label__trUPt",input:"Filter_input__2nZ9k"}},37:function(t,e,a){},6:function(t,e,a){t.exports={formWrapper:"ContactForm_formWrapper__1pkGp",form:"ContactForm_form__2slBL",label:"ContactForm_label__3aY5l",input:"ContactForm_input__2Y6m9",button:"ContactForm_button__12NZn"}},64:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),o=(a(37),a(17)),u=a.n(o),l=a(22),i=a(6),b=a.n(i),p=a(18),j=a(8),d=a.n(j),f=a(3),m=a(11),h=a.n(m);h.a.defaults.baseURL="https://61fbcfbb3f1e34001792c612.mockapi.io";var O=Object(f.c)("contacts/fetchContacts",function(){var t=Object(p.a)(d.a.mark((function t(e,a){var n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.prev=1,t.next=4,h.a.get("/contacts");case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),n(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),x=Object(f.c)("contacts/addContact",function(){var t=Object(p.a)(d.a.mark((function t(e,a){var n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.prev=1,t.next=4,h.a.post("/contacts",e);case 4:return c=t.sent,r=c.data,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),n(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),v=Object(f.c)("contacts/deleteContact",function(){var t=Object(p.a)(d.a.mark((function t(e,a){var n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.rejectWithValue,t.prev=1,t.next=4,h.a.delete("/contacts/".concat(e));case 4:return c=t.sent,r=c.data.id,t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),n(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),_={addContacts:x,deleteContacts:v,fetchContacts:O},C=a(5),N=a(15),w=function(t){return t.contacts.items},k=function(t){return t.contacts.filter},y=Object(N.a)([w,k],(function(t,e){var a=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(a)}))})),g=a(1);var A=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),o=s[0],u=s[1],i=Object(C.c)(w),p=Object(C.b)(),j=function(t){switch(t.target.name){case"name":c(t.target.value);break;case"phone":u(t.target.value);break;default:return}},d=function(){c(""),u("")};return Object(g.jsx)("div",{className:b.a.formWrapper,children:Object(g.jsxs)("form",{className:b.a.form,onSubmit:function(t){if(t.preventDefault(),i.find((function(t){return t.name.toLowerCase()===a.toLowerCase()})))return alert("This contact has already been added to the list");p(_.addContacts({name:a,phone:o})),d()},children:[Object(g.jsxs)("label",{className:b.a.label,children:["Name",Object(g.jsx)("input",{className:b.a.input,value:a,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:j})]}),Object(g.jsxs)("label",{className:b.a.label,children:["Number",Object(g.jsx)("input",{className:b.a.input,type:"tel",value:o,name:"phone",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:j})]}),Object(g.jsx)("button",{className:b.a.button,children:"Add contact"})]})})},L=a(9),F=a.n(L),W=function(){var t=Object(C.c)(y),e=Object(C.b)();return Object(n.useEffect)((function(){e(_.fetchContacts())}),[e]),Object(g.jsx)("div",{className:F.a.listWrapper,children:Object(g.jsx)("ul",{className:F.a.list,children:t.map((function(t){var a=t.name,n=t.phone,c=t.id;return Object(g.jsxs)("li",{className:F.a.item,children:[Object(g.jsxs)("p",{className:F.a.text,children:[a,":"]}),Object(g.jsx)("p",{className:F.a.text,children:n}),Object(g.jsx)("button",{className:F.a.button,type:"button",onClick:function(){return e(_.deleteContacts(c))},children:"Delete"})]},c)}))})})},Z=a(21),z=a.n(Z),S=Object(f.b)("contacts/filter");var V=function(){var t=Object(C.c)(k),e=Object(C.b)();return Object(g.jsxs)("label",{className:z.a.label,children:["Find contacts by name",Object(g.jsx)("input",{className:z.a.input,type:"text",name:"name",value:t,onChange:function(t){return e(S(t.target.value))}})]})};var J,Y=function(){return Object(g.jsxs)("div",{className:u.a.App,children:[Object(g.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(g.jsx)(A,{}),Object(g.jsx)("h2",{className:u.a.title,children:"Contacts"}),Object(g.jsx)(V,{}),Object(g.jsx)(W,{})]})},B=a(7),D=a(32),E=a(4),G=_.addContacts,P=_.deleteContacts,T=_.fetchContacts,U=Object(f.d)([],(J={},Object(B.a)(J,T.fulfilled,(function(t,e){return e.payload})),Object(B.a)(J,G.fulfilled,(function(t,e){var a=e.payload;return[].concat(Object(D.a)(t),[a])})),Object(B.a)(J,P.fulfilled,(function(t,e){var a=e.payload;return t.filter((function(t){return t.id!==a}))})),J)),q=Object(f.d)("",Object(B.a)({},S,(function(t,e){return e.payload}))),I=Object(E.b)({items:U,filter:q}),M=Object(f.a)({reducer:{contacts:I},devTools:!1});s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(C.a,{store:M,children:Object(g.jsx)(Y,{})})}),document.getElementById("root"))},9:function(t,e,a){t.exports={item:"ContactList_item__2m4Ab",text:"ContactList_text__rJGzV",button:"ContactList_button__1jp4Y"}}},[[64,1,2]]]);
//# sourceMappingURL=main.a708884f.chunk.js.map