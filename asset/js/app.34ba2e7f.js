(function(e){function t(t){for(var r,c,u=t[0],i=t[1],d=t[2],l=0,s=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(s.length)s.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"asset/js/"+({}[e]||e)+"."+{"chunk-0dd8554b":"933bd23c","chunk-1e7d0db3":"4f7c6d84","chunk-3526903e":"8a5f3b92","chunk-3f4bfa06":"bdad2416","chunk-46d109d9":"8f8b0b22","chunk-4748c948":"5de44745","chunk-490ccbd6":"8e9d654e","chunk-50d42d80":"cb10a753","chunk-575c10d5":"07c3fed7","chunk-60bff932":"ad4ecdbf","chunk-6e1e524c":"65db3a3f","chunk-6e7573e0":"32303d8a","chunk-6e75de88":"c4e53ec2","chunk-7206bb7d":"85a13701","chunk-b1fb117a":"bc0d09d9","chunk-d8e43b8c":"98b3666d","chunk-ecea5b56":"ae64e52e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0dd8554b":1,"chunk-1e7d0db3":1,"chunk-3526903e":1,"chunk-3f4bfa06":1,"chunk-46d109d9":1,"chunk-4748c948":1,"chunk-490ccbd6":1,"chunk-50d42d80":1,"chunk-575c10d5":1,"chunk-60bff932":1,"chunk-6e1e524c":1,"chunk-6e7573e0":1,"chunk-6e75de88":1,"chunk-7206bb7d":1,"chunk-b1fb117a":1,"chunk-d8e43b8c":1,"chunk-ecea5b56":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="asset/css/"+({}[e]||e)+"."+{"chunk-0dd8554b":"5b03e305","chunk-1e7d0db3":"cb68a85b","chunk-3526903e":"d23350f8","chunk-3f4bfa06":"e894245c","chunk-46d109d9":"d86812ed","chunk-4748c948":"31c87eb2","chunk-490ccbd6":"80ea2efd","chunk-50d42d80":"24154208","chunk-575c10d5":"cfbc0fa6","chunk-60bff932":"1234ffca","chunk-6e1e524c":"d92df043","chunk-6e7573e0":"499c119e","chunk-6e75de88":"91c630eb","chunk-7206bb7d":"38104aaa","chunk-b1fb117a":"34c723ef","chunk-d8e43b8c":"3e15a88c","chunk-ecea5b56":"19a18b06"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var d=o[u],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===a))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){d=s[u],l=d.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2824:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["P"])("data-v-45e5416e");Object(r["z"])("data-v-45e5416e");var a={class:"container"},o={class:"subtitle"},u={class:"extra"};Object(r["x"])();var i=c((function(e,t,n,i,d,l){var s=Object(r["E"])("van-icon"),f=Object(r["E"])("van-nav-bar"),h=Object(r["E"])("van-sticky"),b=Object(r["E"])("van-col"),p=Object(r["E"])("van-row");return Object(r["w"])(),Object(r["f"])("div",a,[Object(r["O"])(Object(r["h"])(h,{onChange:t[2]||(t[2]=function(e){return i.state.isTop=!i.state.isTop})},{default:c((function(){return[Object(r["h"])(f,{class:["navbar",{notTop:!i.state.isTop}],title:i.state.isTop?"":n.title,border:!1,onClickLeft:l.onClickLeft,onClickRight:t[1]||(t[1]=function(t){return e.$emit("click-more")})},{left:c((function(){return[Object(r["O"])(Object(r["h"])("div",null,[Object(r["D"])(e.$slots,"back",{},(function(){return[Object(r["h"])(s,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[r["L"],!n.noback]])]})),right:c((function(){return[Object(r["D"])(e.$slots,"more",{},void 0,!0)]})),_:1},8,["class","title","onClickLeft"])]})),_:1},512),[[r["L"],0!=n.height]]),Object(r["h"])("div",{class:["page",{notTop:!i.state.isTop}],style:{background:n.bg}},[Object(r["h"])(r["c"],{name:"van-slide-down"},{default:c((function(){return[Object(r["O"])(Object(r["h"])(p,{justify:"space-between",align:"center",class:"head",style:{color:n.fg}},{default:c((function(){return[Object(r["h"])(b,{span:"16"},{default:c((function(){return[Object(r["h"])("div",{class:"title",style:{height:n.height,color:n.fg},onClick:t[3]||(t[3]=function(t){return e.$emit("click-title")})},[Object(r["g"])(Object(r["I"])(n.title)+" ",1),Object(r["h"])("div",o,Object(r["I"])(n.subtitle),1)],4)]})),_:1}),Object(r["h"])(b,{span:"8"},{default:c((function(){return[Object(r["h"])("div",u,[Object(r["D"])(e.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[r["L"],i.state.isTop&&!n.notitle&&0!=n.height]])]})),_:1}),Object(r["D"])(e.$slots,"default",{},void 0,!0)],6)])})),d={props:{notitle:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String,noback:{type:Boolean,default:!1}},setup:function(){var e=Object(r["A"])({isTop:!0});return{state:e}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}};n("5e76");d.render=i,d.__scopeId="data-v-45e5416e";t["a"]=d},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("1da1"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),a={id:"container"},o=Object(c["g"])("首页"),u=Object(c["g"])("功能"),i=Object(c["g"])("会员"),d=Object(c["g"])("我的");function l(e,t,n,r,l,s){var f=Object(c["E"])("router-view"),h=Object(c["E"])("van-icon"),b=Object(c["E"])("van-sticky"),p=Object(c["E"])("van-tabbar-item"),m=Object(c["E"])("van-tabbar");return Object(c["w"])(),Object(c["f"])(c["a"],null,[Object(c["h"])("div",a,[Object(c["h"])(f,null,{default:Object(c["N"])((function(e){var t=e.Component,n=e.route;return[Object(c["h"])(c["c"],{name:n.meta.transition?n.meta.transition:"fade"},{default:Object(c["N"])((function(){return[(Object(c["w"])(),Object(c["f"])(Object(c["G"])(t)))]})),_:2},1032,["name"])]})),_:1})]),Object(c["O"])(Object(c["h"])(b,{"offset-bottom":"120",position:"bottom"},{default:Object(c["N"])((function(){return[Object(c["h"])("div",{id:"service",onClick:t[1]||(t[1]=function(t){return e.$router.push("/contact")})},[Object(c["h"])(h,{name:"service",size:"24",color:"#FFF"})])]})),_:1},512),[[c["L"],e.$store.state.showSticky]]),Object(c["O"])(Object(c["h"])(m,{modelValue:r.active,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.active=e}),placeholder:"",route:""},{default:Object(c["N"])((function(){return[Object(c["h"])(p,{icon:"home-o",to:"/"},{default:Object(c["N"])((function(){return[o]})),_:1}),Object(c["h"])(p,{icon:"diamond-o",to:"/feature"},{default:Object(c["N"])((function(){return[u]})),_:1}),Object(c["h"])(p,{icon:"medal-o",to:"/vip"},{default:Object(c["N"])((function(){return[i]})),_:1}),Object(c["h"])(p,{icon:"contact",to:"/my"},{default:Object(c["N"])((function(){return[d]})),_:1})]})),_:1},8,["modelValue"]),[[c["L"],e.$store.state.showTabbar]])],64)}var s={setup:function(){var e=Object(c["B"])("home");return{active:e}}};n("ddd4");s.render=l;var f=s,h=n("5530"),b=n("53ca"),p=(n("ac1f"),n("5319"),n("5502")),m=n("0e44"),g=Object(p["a"])({plugins:[Object(m["a"])()],state:{showSticky:!1,showTabbar:!1,config:null,profile:null},getters:{authorized:function(e){return null!=e.profile&&"object"==Object(b["a"])(e.profile)&&("undefined"!=typeof e.profile.id&&"string"==typeof e.profile.authorization)},uid:function(e,t){return t.authorized?e.profile.id:0},mobile:function(e,t){return t.authorized?e.profile.mobile.replace(/^(\d+)(\d{4})(\d{4})$/,"$1****$3"):""},nickname:function(e,t){return t.authorized?""!=e.profile.nickname?e.profile.nickname:"币友"+e.profile.mobile.substr(-4):""},account:function(e,t){return t.authorized&&e.profile.account?e.profile.account:"TSjYANND5eSA83uZRWvpJXx8sYDMFgJppS"},balance:function(e,t){return t.authorized&&e.profile.balance?parseFloat(e.profile.balance.replace(/(\.\d\d)(\d+)$/,"$1")):0},level:function(e,t){return t.authorized&&e.profile.level||0}},mutations:{changeSticky:function(e,t){e.showSticky=t},changeTabbar:function(e,t){e.showTabbar=t},init:function(e,t){e.config=t},auth:function(e,t){e.profile="undefined"==typeof t["id"]?null:Object(h["a"])(Object(h["a"])({},e.profile),t)}},actions:{},modules:{}}),O=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1276"),n("6c02"));function j(e,t,n,r,a,o){var u=Object(c["E"])("van-empty"),i=Object(c["E"])("BaseLayout");return Object(c["w"])(),Object(c["f"])(i,null,{default:Object(c["N"])((function(){return[Object(c["h"])(u,{image:"error",description:"页面不存在"})]})),_:1})}var k=n("2824"),v={components:{BaseLayout:k["a"]}};v.render=j;var y=v,w=[{path:"/",name:"Home",component:function(){return n.e("chunk-6e7573e0").then(n.bind(null,"bb51"))}},{path:"/quantize",name:"Quantize",component:function(){return n.e("chunk-575c10d5").then(n.bind(null,"2169"))}},{path:"/entrust",name:"Entrust",component:function(){return n.e("chunk-490ccbd6").then(n.bind(null,"a60a"))}},{path:"/invite",name:"Invite",component:function(){return n.e("chunk-6e1e524c").then(n.bind(null,"0c50"))}},{path:"/my",name:"My",component:function(){return n.e("chunk-ecea5b56").then(n.bind(null,"4c41"))}},{path:"/my/profile",name:"MyProfile",component:function(){return n.e("chunk-46d109d9").then(n.bind(null,"1c3d"))},meta:{requiresAuth:!0}},{path:"/my/wallet",name:"MyWallet",component:function(){return n.e("chunk-b1fb117a").then(n.bind(null,"30d8"))},meta:{requiresAuth:!0}},{path:"/my/:action(deposit|withdrawal)+",name:"MyWalletCash",component:function(){return n.e("chunk-1e7d0db3").then(n.bind(null,"f65c"))},props:function(e){return{action:e.params.action}},meta:{requiresAuth:!0}},{path:"/my/exchange",name:"MyExchange",component:function(){return n.e("chunk-7206bb7d").then(n.bind(null,"eb40"))},meta:{requiresAuth:!0}},{path:"/my/strategy/:action(create|modify|adjust|apply)+",name:"MyExchangeStrategy",component:function(){return n.e("chunk-0dd8554b").then(n.bind(null,"6130"))},props:function(e){return{action:e.params.action,id:e.query.id}},meta:{requiresAuth:!0}},{path:"/my/plan",name:"MyExchangePlan",component:function(){return n.e("chunk-d8e43b8c").then(n.bind(null,"2175"))},meta:{requiresAuth:!0}},{path:"/my/order",name:"MyOrder",component:function(){return n.e("chunk-50d42d80").then(n.bind(null,"7d27"))},meta:{requiresAuth:!0}},{path:"/my/invite",name:"MyInvite",component:function(){return n.e("chunk-3526903e").then(n.bind(null,"d7c9"))},meta:{requiresAuth:!0}},{path:"/my/recent",name:"MyRecent",component:function(){return n.e("chunk-4748c948").then(n.bind(null,"73a9"))},meta:{requiresAuth:!0}},{path:"/vip",name:"MyVIP",component:function(){return n.e("chunk-6e75de88").then(n.bind(null,"945a"))}},{path:"/:action(login|logout|register|changepassword|invite)+/:code?",name:"Passport",component:function(){return n.e("chunk-3f4bfa06").then(n.bind(null,"bc1a"))},props:function(e){return{action:e.params.action,code:e.params.code,redirect:e.query.redirect}}},{path:"/:page(feature|intro|guide|help|about|contact|terms)+",name:"Page",component:function(){return n.e("chunk-60bff932").then(n.bind(null,"2048"))},props:!0},{path:"/:path*",component:y}],E=Object(O["a"])({history:Object(O["b"])(),routes:w});E.beforeEach((function(e,t){return e.meta.requiresAuth&&!g.getters.authorized?(console.warn("需要登录授权"),{path:"/login",query:{redirect:e.fullPath}}):(g.commit("changeTabbar",-1=="Passport|Strategy".indexOf(e.name)),!0)})),E.afterEach((function(e,t){var n=e.path.split("/").length,r=t.path.split("/").length;e.meta.transitionName=n<r?"slide-right":"slide-left"}));var _=E,P=n("bc3a"),S=n.n(P),T=n("4328"),x=n.n(T),q=n("626a"),C=n("d6e4");S.a.defaults.baseURL="//data.huoshen.app/",S.a.interceptors.request.use((function(e){return"get"!=e.method&&Object(q["a"])({type:"loading",message:"请稍候 ...",duration:1e4,forbidClick:!0}),e.headers=Object.assign(e.headers,{"Content-Type":"application/x-www-form-urlencoded","x-requested-with":"xmlhttprequest"}),g.state.profile&&g.state.profile.authorization&&(e.headers["token"]=g.state.profile.authorization),e.paramsSerializer=function(e){return x.a.stringify(e,{arrayFormat:"repeat"})},e.transformRequest=[function(e,t){return x.a.stringify(e,{arrayFormat:"brackets"})}],e.url+=(e.url.indexOf("?")>-1?"&":"?")+"rnd="+Math.random(),e})),S.a.interceptors.response.use((function(e){return q["a"].clear(),200!==e.status||"number"!=typeof e.data.rtn?Object(C["a"])({type:"danger",message:"服务异常，请重试！"}):999==e.data.rtn?(Object(q["a"])("授权已失效"),_.push({path:"/login",query:{redirect:_.currentRoute.fullPath}})):0!=e.data.rtn?(Object(C["a"])({type:"danger",message:e.data.msg,duration:1e4}),Promise.reject(e.data)):(e.data.msg.length>2&&Object(q["a"])(e.data.msg),Promise.resolve(e.data.data))}),(function(e){Object(C["a"])({type:"danger",message:"网络请求错误，请重试！"}),console.error("网络错误：",e)}));var $=S.a,A=n("b970"),z=(n("157a"),n("77ed")),L=n.n(z),M=(n("db43"),n("e6a9")),N=n.n(M),B=Object(c["e"])(f);function D(){console.log("init"),$.get("/config").then((function(e){return g.commit("init",e)})),g.getters.authorized&&$.get("/user/profile").then((function(e){return g.commit("auth",e)}))}function F(e){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N()().toClipboard(t);case 2:this.$toast("已复制到剪贴板");case 3:case"end":return e.stop()}}),e,this)}))),R.apply(this,arguments)}B.use(g).use(_).use(A["a"]).use(L.a).mount("#app"),B.config.globalProperties.$http=$,B.config.globalProperties.$init=D,B.config.globalProperties.$copy=F,D()},"5e76":function(e,t,n){"use strict";n("cf1d")},a5de:function(e,t,n){},cf1d:function(e,t,n){},db43:function(e,t,n){},ddd4:function(e,t,n){"use strict";n("a5de")}});
//# sourceMappingURL=app.34ba2e7f.js.map