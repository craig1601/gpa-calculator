(this["webpackJsonpgpa-calc"]=this["webpackJsonpgpa-calc"]||[]).push([[0],{15:function(e,a,t){e.exports=t(28)},20:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r),s=(t(20),t(9)),u=t(2);var m=function(e){return l.a.createElement("nav",{className:"top-section navbar"},l.a.createElement("span",{className:"heading"},l.a.createElement("i",{className:"fas fa-calculator icon"}),"GPA Calculator"))},i=t(3),d=t(4),o=t(8),E=t.n(o);var b=function(e){var a=Object(n.useState)({subject:"",credits:"",grade:"",internals:"",style:"",endsem:"",marks:""}),t=Object(u.a)(a,2),r=t[0],c=t[1];function s(e){var a=e.target,t=a.name,n=a.value;e.preventDefault(),c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(i.a)({},t,n))}))}return l.a.createElement("div",{className:"create-area"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Subject",className:"subject basic",name:"subject",onChange:s,value:r.subject})),l.a.createElement("div",null,l.a.createElement("input",{placeholder:"Internals",className:"marks basic",name:"internals",onChange:s,value:r.internals}),l.a.createElement("input",{type:"text",placeholder:"Credits",className:"credits basic",name:"credits",onChange:s,value:r.credits})),l.a.createElement("button",{onClick:function(a){e.whenClicked(r),a.preventDefault(),c({subject:"",credits:"",grade:"",internals:""})}},l.a.createElement(E.a,null))))};var v=function(e){return l.a.createElement("div",{className:"gpa-table"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Marks"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"A+"),l.a.createElement("td",null,"90-100")),l.a.createElement("tr",null,l.a.createElement("td",null,"A"),l.a.createElement("td",null,"80-89")),l.a.createElement("tr",null,l.a.createElement("td",null,"B"),l.a.createElement("td",null,"70-79")),l.a.createElement("tr",null,l.a.createElement("td",null,"C"),l.a.createElement("td",null,"60-69")),l.a.createElement("tr",null,l.a.createElement("td",null,"D"),l.a.createElement("td",null,"50-59")),l.a.createElement("tr",null,l.a.createElement("td",null,"E"),l.a.createElement("td",null,"40-49")),l.a.createElement("tr",null,l.a.createElement("td",null,"F"),l.a.createElement("td",null,"<40")))))};var g=function(e){return l.a.createElement("div",{className:"subject-note",style:{backgroundColor:e.style}},l.a.createElement("div",null,"Subject: ",e.subject),l.a.createElement("div",null,"Marks: ",e.marks," (",Math.ceil(e.marks),")"),l.a.createElement("div",null,"Grade: ",e.grade),l.a.createElement("div",null,"Credits: ",e.credits),l.a.createElement("button",{className:"delete",onClick:function(){e.whenDelete(e.id)}},l.a.createElement("i",{className:"fas fa-trash-alt"})))};var p=function(e){var a=Object(n.useState)({subject:"",credits:"",grade:"",internals:"",style:"",endsem:"",marks:""}),t=Object(u.a)(a,2),r=t[0],c=t[1];function s(e){var a=e.target,t=a.name,n=a.value;e.preventDefault(),c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(i.a)({},t,n))}))}return l.a.createElement("div",{className:"create-area"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Lab Name",className:"subject basic",name:"subject",onChange:s,value:r.subject})),l.a.createElement("div",null,l.a.createElement("input",{placeholder:"Marks",className:"marks basic",name:"marks",onChange:s,value:r.marks}),l.a.createElement("input",{type:"text",placeholder:"Credits",className:"credits basic",name:"credits",onChange:s,value:r.credits})),l.a.createElement("button",{onClick:function(a){e.whenClicked(r),a.preventDefault(),c({subject:"",credits:"",grade:"",marks:""})}},l.a.createElement(E.a,null))))};var f=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),d=i[0],o=i[1],E=Object(n.useState)(""),f=Object(u.a)(E,2),h=f[0],k=f[1],j=Object(n.useState)(!0),y=Object(u.a)(j,2),N=y[0],C=y[1];function O(e){r((function(a){return t.filter((function(a,t){return t!==e}))}))}return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement("div",{className:"description top-section"},l.a.createElement("div",{className:"desc"},"End Sem marks = 0.5 x Internals + 2.5 x Previous GPA"),l.a.createElement("div",{className:"desc"},"GPA is calculated based on the following scheme"),l.a.createElement(v,null),N&&l.a.createElement("input",{id:"GPA",type:"text",placeholder:"Previous GPA",className:"prev-gpa",value:h,onChange:function(e){k(e.target.value)}}),N&&l.a.createElement(b,{whenClicked:function(e){e.endsem=.5*e.internals+2.5*h,e.marks=parseFloat(e.internals)+parseFloat(e.endsem);var a=Math.ceil(e.marks);a>=90?(e.grade="A+",e.style="blue"):a>=80?(e.grade="A",e.style="#06a94d"):a>=70?(e.grade="B",e.style="#90ee90"):a>=60?(e.grade="C",e.style="yellow"):a>=50?(e.grade="D",e.style="orange"):a>=40?(e.grade="E",e.style="grey"):(e.grade="F",e.style="red"),r((function(a){return[].concat(Object(s.a)(a),[e])}))}}),!N&&l.a.createElement(p,{whenClicked:function(e){var a=Math.ceil(e.marks);a>=90?(e.grade="A+",e.style="blue"):a>=80?(e.grade="A",e.style="#06a94d"):a>=70?(e.grade="B",e.style="#90ee90"):a>=60?(e.grade="C",e.style="yellow"):a>=50?(e.grade="D",e.style="orange"):a>=40?(e.grade="E",e.style="grey"):(e.grade="F",e.style="red"),r((function(a){return[].concat(Object(s.a)(a),[e])}))}}),l.a.createElement("p",null,l.a.createElement("a",{onClick:function(){C(!N)},className:"gpa-btn"},N?"Enter Lab Marks":"Enter Subject Marks")),l.a.createElement("div",{className:"all-subjects"},t.map((function(e,a){return l.a.createElement(g,{whenDelete:O,key:a,id:a,subject:e.subject,grade:e.grade,credits:e.credits,marks:e.marks,style:e.style})}))),l.a.createElement("div",{className:"gpa-calculate"},l.a.createElement("div",null,l.a.createElement("button",{className:"gpa-btn",onClick:function(){var e,a,n=0,l=0;t.forEach((function(t){switch(e=t.credits,t.grade){case"A+":a=10;break;case"A":a=9;break;case"B":a=8;break;case"C":a=7;break;case"D":a=6;break;case"E":a=5;break;case"F":a=0;break;default:a=0}n+=parseInt(e),l+=e*a})),o(l/n)}},"Calculate")),l.a.createElement("p",{className:"gpa"},"GPA: ",Math.round(100*(d+Number.EPSILON))/100," "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ba77669e.chunk.js.map