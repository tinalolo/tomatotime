(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function s(t){return a.p+"js/"+({list:"list",settings:"settings"}[t]||t)+"."+{list:"09e18235",settings:"3cb6f76e"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=s(t);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(o["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/list"}},[t._v("清單")]),t._v(" | "),n("router-link",{attrs:{to:"/settings"}},[t._v("設定")])],1),n("keep-alive",[n("router-view")],1)],1)},s=[],a=n("2877"),u={},c=Object(a["a"])(u,i,s,!1,null,null,null),l=c.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v(t._s(t.currentfText))]),n("h2",[t._v(t._s(t.timetext))]),1!=t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.start}},[n("font-awesome-icon",{attrs:{icon:["fas","play"]}})],1):t._e(),1==t.status?n("b-btn",{attrs:{variant:"primary"},on:{click:t.pause}},[n("font-awesome-icon",{attrs:{icon:["fas","pause"]}})],1):t._e(),t.current.length>0&&t.todos.length>0?n("b-btn",{attrs:{variant:"primary"},on:{click:function(e){return t.finish(!0)}}},[n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]}})],1):t._e()],1)},p=[],h=(n("99af"),{data:function(){return{status:0,timer:0}},computed:{currentfText:function(){return this.current.length>0?this.current:this.todos.length>0?"點擊開始":"沒有事項"},timetext:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e," ")},alarm:function(){return this.$store.getters.alarm},timeleft:function(){return this.$store.getters.timeleft},current:function(){return this.$store.getters.current},todos:function(){return this.$store.getters.todos}},methods:{start:function(){var t=this;2===this.status?(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=0&&t.finish(!1)}),1e3)):this.todos.length>0&&(this.$store.commit("start"),this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=0&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src="./alarms/"+this.alarm,e.play()}this.todos.length>0?this.start():alert("結束")},pause:function(){clearInterval(this.timer),this.status=2}}}),v=h,g=Object(a["a"])(v,m,p,!1,null,null,null),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("404")])},y=[],k={},_=Object(a["a"])(k,w,y,!1,null,null,null),j=_.exports;r["default"].use(d["a"]);var O=[{path:"/",name:"Home",component:b,meta:{title:"番茄鐘"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 清單"}},{path:"*",name:"NotFound",component:j,meta:{title:"番茄鐘 | 404"}}],x=new d["a"]({routes:O});x.afterEach((function(t,e,n){document.title=t.meta.title}));var T=x,$=(n("a434"),n("b0c0"),n("2f62"));r["default"].use($["a"]);var S=parseInt("1500"),B=parseInt("300"),P=new $["a"].Store({state:{todos:[],timeleft:S,alarm:"alarm.mp3",current:"",isBreak:!1},getters:{alarm:function(t){return t.alarm},todos:function(t){return t.todos},alarmSelected:function(t){return t.alarmSelected},current:function(t){return t.current},timeleft:function(t){return t.timeleft},isBreak:function(t){return t.isBreak}},mutations:{selectAlarm:function(t,e){t.alarm=e},addTodo:function(t,e){t.todos.push({name:e,edit:!1,model:e})},dragTodo:function(t,e){t.todos=e},delTodo:function(t,e){t.todos.splice(e,1)},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},cancelTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},saveTodo:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},start:function(t){t.isBreak?t.current="休息一下":t.isBreak||(t.current=t.todos[0].name,t.todos.splice(0,1))},countdown:function(t){t.timeleft--},finish:function(t){t.todos.length>0&&(t.isBreak=!t.isBreak),t.current="",t.timeleft=t.isBreak?B:S}},actions:{},modules:{}}),E=n("ecee"),A=n("c074"),I=n("ad3d"),M=n("b76a"),N=n.n(M);E["c"].add(A["a"],A["c"],A["g"],A["h"],A["e"],A["d"],A["b"],A["f"]),r["default"].component("font-awesome-icon",I["a"]),r["default"].component("draggable",N.a),r["default"].config.productionTip=!1,new r["default"]({router:T,store:P,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.f14b5d57.js.map