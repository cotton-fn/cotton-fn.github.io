(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),u=a.n(r),c=(a(30),a(8)),i=a(9),m=a(12),o=a(10),s=a(13),d=a(4),E=a(6),h=a(41),p=a(42),v=(a(36),a(16)),b={lastId:1,data:[{id:0,name:"\u96fb\u6c17"}]},f=[],y=Object(E.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var a=e.lastId,n=(e.data,a+1);return{lastId:n,data:[].concat(Object(v.a)(e.data),[{id:n,name:t.name}])}}return e},payments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_PAYMENT":var a=t.data,n=a.year,l=a.month,r=a.values;return[].concat(Object(v.a)(e),[{year:n,month:l,values:r}])}return e}}),j=a(40),O=Object(d.b)(function(e){return{items:e.items}})(function(e){var t=e.items;return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(j.a,{to:"/"},"\u30db\u30fc\u30e0")),l.a.createElement("li",null,l.a.createElement(j.a,{to:"/edit"},"\u5149\u71b1\u8cbb\u5165\u529b")),l.a.createElement("li",null,"\u5149\u71b1\u8cbb\u4e00\u89a7\u25bc",l.a.createElement("ul",null,t.data.map(function(e,t){return l.a.createElement("li",{key:e.id},e.name)}))),l.a.createElement("li",null,l.a.createElement(j.a,{to:"/add"},"\u5149\u71b1\u8cbb\u8ffd\u52a0"))))}),g=Object(d.b)(function(e){return{items:e.items,payments:e.payments}})(function(e){return console.log(e),l.a.createElement("table",null,e.payments.map(function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",null,e.items.data[a].name),l.a.createElement("td",null,t.year," / ",t.month),l.a.createElement("td",null,t.values.map(function(e){return l.a.createElement("span",null,e)})))}))}),w=function(e){return l.a.createElement("div",null,l.a.createElement("h2",null,"\u307b\u30fc\u3080"),l.a.createElement(g,null))},k=a(23),S=a(7),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={values:e.items.data.map(function(){return""})},a.handleValueChange=a.handleValueChange.bind(Object(S.a)(Object(S.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(S.a)(Object(S.a)(a))),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleValueChange",value:function(e,t){var a=e.target.value,n=(parseInt(a),this.state.values.slice());n[t]=a,this.setState(Object(k.a)({},this.state,{values:n}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onEditSubmit(this.state.values)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("ul",null,this.props.items.data.map(function(t,a){return l.a.createElement("li",{key:t.id},l.a.createElement("label",null,t.name,l.a.createElement("input",{name:t.id,type:"text",value:(e.state.values[t.id]||"").toString(),onChange:function(a){return e.handleValueChange(a,t.id)}}),"\u5186"))})),l.a.createElement("input",{type:"submit",value:"\u4fdd\u5b58"}),l.a.createElement("input",{type:"button",value:"\u623b\u308b"}))}}]),t}(n.Component),D=Object(d.b)(function(e){return{items:e.items}},function(e){return{onEditSubmit:function(t){e({type:"EDIT_PAYMENT",data:{year:2019,month:1,values:t}})}}})(I),C=function(){return l.a.createElement("div",{className:"edit-page"},l.a.createElement("h2",null,"\u5149\u71b1\u8cbb\u5165\u529b"),l.a.createElement("div",null,"<< 2019\u5e74 1\u6708 >>"),l.a.createElement(D,null))},T=Object(d.b)()(function(e){var t,a=e.dispatch;return l.a.createElement("div",null,l.a.createElement("h2",null,"\u5149\u71b1\u8cbb\u8ffd\u52a0"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value.length>0&&a({type:"ADD_ITEM",name:t.value}),t.value=""}},l.a.createElement("input",{type:"text",ref:function(e){t=e}}),l.a.createElement("input",{type:"submit",value:"\u8ffd\u52a0"})))}),A=Object(E.c)(y),x=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{store:A},l.a.createElement(h.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(O,null),l.a.createElement(p.a,{path:"/",exact:!0,component:w}),l.a.createElement(p.a,{path:"/edit",component:C}),l.a.createElement(p.a,{path:"/add",component:T}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.291e27d4.chunk.js.map