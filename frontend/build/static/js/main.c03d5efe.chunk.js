(this["webpackJsonpgrpc-dapp-front"]=this["webpackJsonpgrpc-dapp-front"]||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/logo.a22ecc3f.svg"},15:function(e,t,n){e.exports=n(46)},20:function(e,t,n){},37:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),u=(n(20),n(1)),l=n(2),i=n(13),s=n.n(i);n(37);function m(e){var t=e.authToken,n=Object(a.useState)(""),o=Object(u.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(!0),m=Object(u.a)(s,2),f=m[0],b=m[1],p=Object(a.useState)(0),d=Object(u.a)(p,2),v=d[0],h=d[1],j=Object(l.useLocalStorage)("pubkey"),O=Object(u.a)(j,2),g=O[0],E=O[1],y=Object(l.useLocalStorage)("qrURL"),k=Object(u.a)(y,2),S=(k[0],k[1]);Object(a.useEffect)((function(){T()}));var T=function(){b(!(t&&g&&c&&v>0))};return r.a.createElement("form",{className:"transfer-form",onSubmit:function(e){e.preventDefault();var n={from:g,toAddr:c,tokenAmount:v},a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)};fetch("/api/v0/transferToken",a).then((function(e){return e.json()})).then((function(e){return S(e)}))}},r.a.createElement("label",null,"Your Public address that you will use to sign the transaction:",r.a.createElement("input",{type:"text",value:g,name:"pubkey",onChange:function(e){return E(e.target.value)}})),r.a.createElement("label",null,"To address:",r.a.createElement("input",{type:"text",value:c,name:"toAddress",onChange:function(e){return i(e.target.value)}})),r.a.createElement("label",null,"Token amount:",r.a.createElement("input",{type:"number",step:"1",value:v,name:"token",onChange:function(e){return h(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Transfer token",disabled:f}))}var f=n(14),b=n.n(f);function p(){var e=Object(a.useState)("#FFFFFF"),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(l.useLocalStorage)("qrURL"),i=Object(u.a)(c,1)[0];Object(a.useEffect)((function(){o("#"+Math.floor(16777215*Math.random()).toString(16))}),[i]);var s={border:"solid 5px","border-color":n,padding:"2px"};return r.a.createElement("div",null,r.a.createElement("h2",null,"Scan following QR code to load transaction in your ethential wallet"),r.a.createElement("div",{style:s},r.a.createElement(b.a,{value:i,size:200,bgColor:"#ffffff",fgColor:"#000000",level:"L",includeMargin:!1,renderAs:"canvas"})))}function d(e){var t=e.authToken,n=Object(a.useState)(!0),o=Object(u.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(0),m=Object(u.a)(s,2),f=m[0],b=m[1],p=Object(l.useLocalStorage)("pubkey"),d=Object(u.a)(p,2),v=d[0],h=d[1],j=Object(l.useLocalStorage)("qrURL"),O=Object(u.a)(j,2),g=(O[0],O[1]);Object(a.useEffect)((function(){E()}));var E=function(){i(!t||!v)};return r.a.createElement("div",null,r.a.createElement("form",{className:"transfer-form",onSubmit:function(e){e.preventDefault();var n={pubkey:v,tokenAmount:f},a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)};fetch("/api/v0/swap",a).then((function(e){return e.json()})).then((function(e){return g(e)}))}},r.a.createElement("label",null,"Public address:",r.a.createElement("input",{type:"text",value:v,name:"pubkey",onChange:function(e){return h(e.target.value)}})),r.a.createElement("label",null,"Token amount:",r.a.createElement("input",{type:"text",value:f,name:"tokenAmount",onChange:function(e){return b(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Swap token",disabled:c})))}function v(e){var t=e.authToken,n=Object(l.useLocalStorage)("qrURL"),o=Object(u.a)(n,2),c=(o[0],o[1]),i=Object(a.useState)(!0),s=Object(u.a)(i,2),m=s[0],f=s[1],b=Object(a.useState)(0),p=Object(u.a)(b,2),d=p[0],v=p[1],h=Object(l.useLocalStorage)("pubkey"),j=Object(u.a)(h,2),O=j[0],g=j[1];Object(a.useEffect)((function(){E()}));var E=function(){f(!t||!O)};return r.a.createElement("div",null,r.a.createElement("form",{className:"transfer-form",onSubmit:function(e){e.preventDefault();var n={pubkey:O,tokenAmount:d},a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)};fetch("/api/v0/approve",a).then((function(e){return e.json()})).then((function(e){return c(e)}))}},r.a.createElement("label",null,"Public address:",r.a.createElement("input",{type:"text",value:O,name:"pubkey",onChange:function(e){return g(e.target.value)}})),r.a.createElement("label",null,"Token amount:",r.a.createElement("input",{type:"text",value:d,name:"tokenAmount",onChange:function(e){return v(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Approve manager to spend your tokens",disabled:m})))}function h(e){var t=e.authToken,n=Object(a.useState)(!0),o=Object(u.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(0),m=Object(u.a)(s,2),f=m[0],b=m[1],p=Object(l.useLocalStorage)("pubkey"),d=Object(u.a)(p,2),v=d[0],h=d[1];Object(a.useEffect)((function(){j()}));var j=function(){i(!t||!v)};return r.a.createElement("div",null,r.a.createElement("form",{className:"transfer-form",onSubmit:function(e){e.preventDefault();var n={pubkey:v},a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)};fetch("/api/v0/getTokenBalance",a).then((function(e){return e.json()})).then((function(e){b(e)}))}},r.a.createElement("label",null,"Public address:",r.a.createElement("input",{type:"text",value:v,name:"pubkey",onChange:function(e){return h(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Check balance",disabled:c})),r.a.createElement("p",null,f))}function j(){var e=Object(l.useLocalStorage)("qrURL"),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],f=i[1],b=Object(l.useLocalStorage)("pubkey"),j=Object(u.a)(b,1)[0];return Object(a.useEffect)((function(){o(""),fetch("/api/v0/genToken/123").then((function(e){return e.json()})).then((function(e){f(e.token)})).catch((function(e){return console.error(e)}))}),[]),Object(a.useEffect)((function(){}),[j]),r.a.createElement("div",{className:"container"},r.a.createElement(a.Fragment,null,r.a.createElement(m,{authToken:s}),r.a.createElement(v,{authToken:s}),r.a.createElement(d,{authToken:s}),r.a.createElement(h,{authToken:s}),n&&r.a.createElement(p,null)))}var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"})),r.a.createElement(a.Fragment,null,r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c03d5efe.chunk.js.map