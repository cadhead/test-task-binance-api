(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2a5468ca":"677624ff","chunk-2d20fa49":"e53d15ab"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2a5468ca":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2a5468ca":"17491ec9","chunk-2d20fa49":"31d6cfe0"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),c=n("289d"),u=(n("5abe"),new r["a"]),s=u,i=(n("96cf"),n("1da1")),l={getGlassBySymbol:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/depth?symbol=".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},subscribe:function(e){var t=new WebSocket("wss://stream.binance.com:9443/stream?streams=".concat(e.toLowerCase(),"@depth@1000ms"));return t}},f={install:function(e){Object.defineProperties(e.prototype,{$bus:{get:function(){return s}},$binanceAPI:{get:function(){return l}}})}},p=function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("SDK для взимодействия с биржей binance")]),r("p",{staticClass:"subtitle"},[t._v("Ориентировочное время выполнения 4-8 часов")]),r("div",{staticClass:"pt-6"},[r("navTabs",{attrs:{data:t.navTabsList},on:{switchTab:function(t){return e.navTabsList.current=t.name}}}),r("keep-alive",[r(t.currentTabComponent,{tag:"component"})],1)],1)])},d=[],h=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},[n("ul",e._l(e.data.items,(function(t,r){return n("li",{key:r,class:[{"is-active":e.data.current===t.name}],on:{click:function(n){return e.switchTab(t)}}},[n("a",[e._v(e._s(t.niceName))])])})),0)])}),m=[],b={props:["data"],methods:{switchTab:function(e){this.$emit("switchTab",e)}}},v=b,g=n("2877"),y=Object(g["a"])(v,h,m,!1,null,null,null),w=y.exports,k={name:"App",components:{navTabs:w,GlassState:function(){return n.e("chunk-2a5468ca").then(n.bind(null,"647e"))},DiffList:function(){return n.e("chunk-2d20fa49").then(n.bind(null,"b500"))}},data:function(){return{navTabsList:{items:[{name:"GlassState",niceName:"Стаканы"},{name:"DiffList",niceName:"Выбрать символ"}],current:"GlassState"}}},computed:{currentTabComponent:function(){return this.navTabsList.current}}},T=k,_=Object(g["a"])(T,p,d,!1,null,null,null),O=_.exports;r["a"].config.productionTip=!1,r["a"].use(f),r["a"].use(c["a"]),o.a.defaults.baseURL="https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v3/",new r["a"]({render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.fdca20af.js.map