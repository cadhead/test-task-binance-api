(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fa49"],{b500:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v(t._s(t.current))]),n("div",{staticClass:"box"},[n("p",{staticClass:"subtitle"},[t._v("Выберите символ: ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.current=e.target.multiple?n:n[0]}}},t._l(t.items,(function(e,r){return n("option",{key:r},[t._v(t._s(e))])})),0),n("ul",t._l(t.changes,(function(e,r){return n("li",{key:r},[t._v(" ["+t._s(e.date)+"] Символ изменён на "),n("span",{staticClass:"tag is-info"},[t._v(t._s(e.symbol))])])})),0)])])},s=[],a={data:function(){return{items:["BTCUSDT","BNBBTC","ETHBTC"],current:"BTCUSDT",changes:[]}},watch:{current:function(t){this.$bus.$emit("symbol",t),this.changes.push({symbol:t,date:(new Date).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric",timezone:"UTC",hour:"numeric",minute:"numeric",second:"numeric"})})}}},i=a,u=n("2877"),c=Object(u["a"])(i,r,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d20fa49.e53d15ab.js.map