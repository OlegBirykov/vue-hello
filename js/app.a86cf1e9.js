(function(e){function t(t){for(var n,d,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)d=i[l],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&f.push(r[d][0]),r[d]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);a&&a(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=d(d.s=o[0]))}return e}var n={},r={app:0},c=[];function d(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=e,d.c=n,d.d=function(e,t,o){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(o,n,function(t){return e[t]}.bind(null,n));return o},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=s;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"01f2":function(e,t,o){"use strict";o("43af")},"32d1":function(e,t,o){},"43af":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=o("cf05"),c=o.n(r),d={class:"todo-app"},i=Object(n["e"])("img",{alt:"Vue logo",src:c.a},null,-1),s={key:1};function u(e,t,o,r,c,u){var a=Object(n["k"])("TodoInput"),l=Object(n["k"])("TodoList");return Object(n["i"])(),Object(n["d"])("div",d,[i,Object(n["e"])("h3",null,"Задания: "+Object(n["l"])(c.toDoses.length),1),Object(n["g"])(a,{addTodoItem:c.addTodoItem},null,8,["addTodoItem"]),c.toDoses.length>0?(Object(n["i"])(),Object(n["c"])(l,{key:0,TodoListItems:c.toDoses,DoneUndone:c.doneUndoneItem},null,8,["TodoListItems","DoneUndone"])):(Object(n["i"])(),Object(n["d"])("p",s,"Добавьте первое задание"))])}o("d81d"),o("b0c0"),o("e9c4");var a={class:"todo-list"};function l(e,t,o,r,c,d){var i=Object(n["k"])("TodoListItem");return Object(n["i"])(),Object(n["d"])("ul",a,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["j"])(c.listItems,(function(e,t){return Object(n["i"])(),Object(n["c"])(i,{key:t,TodoListItem:e,DoneUndoneX:o.DoneUndone},{default:Object(n["n"])((function(){return[Object(n["f"])(Object(n["l"])(e),1)]})),_:2},1032,["TodoListItem","DoneUndoneX"])})),128))])}var f={class:"todo-list__item"};function p(e,t,o,r,c,d){return Object(n["i"])(),Object(n["d"])("li",f,[Object(n["e"])("div",{class:Object(n["h"])({"todo-list__item--cross":c.done})},Object(n["l"])(c.message),3),Object(n["e"])("button",{onClick:t[0]||(t[0]=function(e){return c.doneUndoneItem(),o.DoneUndoneX(c.id,c.done)})},Object(n["l"])(!0===c.done?"✕":"✔"),1)])}var m={name:"TodoListItem",props:{TodoListItem:Object,DoneUndoneX:Function,DeleteItemX:Function},data:function(){var e=this;return{message:this.TodoListItem.name,done:this.TodoListItem.done,id:this.TodoListItem.id,doneUndoneItem:function(){e.done=!e.done}}},methods:{},created:function(){console.log(this.DoneUndoneX)}},b=(o("b687"),o("d959")),O=o.n(b);const j=O()(m,[["render",p]]);var I=j,h={name:"TodoList",props:{TodoListItems:Array,DoneUndone:Function,DeleteItem:Function},data:function(){return{listItems:this.TodoListItems,DoneUndone_:this.DoneUndone}},created:function(){},components:{TodoListItem:I}};o("d4cf");const v=O()(h,[["render",l]]);var T=v,g={class:"todo-list__input"};function D(e,t,o,r,c,d){return Object(n["i"])(),Object(n["d"])("div",g,[Object(n["o"])(Object(n["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.todoItem=e}),onKeypress:t[1]||(t[1]=Object(n["p"])((function(e){return o.addTodoItem(c.todoItem),d.clearInput()}),["enter"])),placeholder:"Введите задание..."},null,544),[[n["m"],c.todoItem,void 0,{trim:!0}]]),Object(n["e"])("button",{onClick:t[2]||(t[2]=function(e){return o.addTodoItem(c.todoItem),d.clearInput()})},"добавить")])}var y={name:"TodoInput",props:{addTodoItem:Function},data:function(){return{todoItem:""}},methods:{clearInput:function(){this.todoItem=""}}};const w=O()(y,[["render",D]]);var L=w,U={name:"App",data:function(){var e=this;return{toDoses:[],addTodoItem:function(t){if(t.length>0){var o=new Date;e.toDoses.push({id:o.getTime(),name:t,done:!1})}},doneUndoneItem:function(t,o){e.toDoses=e.toDoses.map((function(e){var n=e.id,r=e.name,c=e.done;return t===n?{id:n,name:r,done:o}:{id:n,name:r,done:c}}))}}},watch:{toDoses:function(e,t){console.log(e,t),window.localStorage.setItem("localToDoses",JSON.stringify(e))}},mounted:function(){var e=window.localStorage.getItem("localToDoses");console.log(this.toDoses),JSON.parse(e)&&(this.toDoses=JSON.parse(e))},components:{TodoList:T,TodoInput:L},created:function(){}};o("01f2");const _=O()(U,[["render",u]]);var k=_;Object(n["b"])(k).mount("#app")},"5a33":function(e,t,o){},b687:function(e,t,o){"use strict";o("32d1")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d4cf:function(e,t,o){"use strict";o("5a33")}});
//# sourceMappingURL=app.a86cf1e9.js.map