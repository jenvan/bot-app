(function(e){function t(t){for(var a,r,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return i.p+"asset/js/"+({}[e]||e)+"."+{"chunk-0a534952":"fbc4e7d6","chunk-14e2ab64":"0c27944a","chunk-1541a93c":"fd7bdd96","chunk-28992e0d":"cb1a5b57","chunk-32e2b466":"6e00e6ac","chunk-3ac9f25a":"ed5ff880","chunk-45aa275e":"eb2fe0b0","chunk-46eace40":"9e9efef2","chunk-51fb1f7c":"804575a4","chunk-542a984c":"db4b145f","chunk-74addd06":"6c6bfc19","chunk-7f7a7c6d":"f2a6d2b2","chunk-83248d3a":"e69c74fa","chunk-ba0a5118":"d30d055e"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0a534952":1,"chunk-14e2ab64":1,"chunk-1541a93c":1,"chunk-28992e0d":1,"chunk-32e2b466":1,"chunk-3ac9f25a":1,"chunk-45aa275e":1,"chunk-46eace40":1,"chunk-51fb1f7c":1,"chunk-542a984c":1,"chunk-74addd06":1,"chunk-7f7a7c6d":1,"chunk-83248d3a":1,"chunk-ba0a5118":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="asset/css/"+({}[e]||e)+"."+{"chunk-0a534952":"16fbbd1b","chunk-14e2ab64":"fbfa2a30","chunk-1541a93c":"3ca69512","chunk-28992e0d":"71a9574b","chunk-32e2b466":"9ff8897f","chunk-3ac9f25a":"a93c8bd6","chunk-45aa275e":"92b0e9c5","chunk-46eace40":"83f3f39c","chunk-51fb1f7c":"b3250e4c","chunk-542a984c":"c9285d8f","chunk-74addd06":"415ec9d2","chunk-7f7a7c6d":"f69208e4","chunk-83248d3a":"f2ea15e2","chunk-ba0a5118":"f41aefae"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===a||f===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===a||f===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://cdn.jsdelivr.net/gh/jenvan/bot-app@505fc6cf/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},1389:function(e,t,n){"use strict";n("7abd")},2824:function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["P"])("data-v-bcfa0d94");Object(a["z"])("data-v-bcfa0d94");var c={class:"container"},o={class:"subtitle"},u={class:"extra"};Object(a["x"])();var i=r((function(e,t,n,i,s,f){var l=Object(a["E"])("van-icon"),d=Object(a["E"])("van-nav-bar"),h=Object(a["E"])("van-sticky"),b=Object(a["E"])("van-col"),p=Object(a["E"])("van-row");return Object(a["w"])(),Object(a["f"])("div",c,[Object(a["O"])(Object(a["h"])(h,{onChange:t[2]||(t[2]=function(e){return i.state.isTop=!i.state.isTop})},{default:r((function(){return[Object(a["h"])(d,{class:["navbar",{notTop:!i.state.isTop}],title:i.state.isTop?"":n.title,border:!1,onClickLeft:f.onClickLeft,onClickRight:t[1]||(t[1]=function(t){return e.$emit("click-more")})},{left:r((function(){return[Object(a["O"])(Object(a["h"])("div",null,[Object(a["D"])(e.$slots,"back",{},(function(){return[Object(a["h"])(l,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["L"],!n.noback]])]})),right:r((function(){return[Object(a["D"])(e.$slots,"more",{},void 0,!0)]})),_:1},8,["class","title","onClickLeft"])]})),_:1},512),[[a["L"],0!=n.height]]),Object(a["h"])("div",{class:["page",{notTop:!i.state.isTop}],style:{background:n.bg}},[Object(a["h"])(a["c"],{name:"van-slide-down"},{default:r((function(){return[Object(a["O"])(Object(a["h"])(p,{justify:"space-between",align:"center",class:"head",style:{color:n.fg}},{default:r((function(){return[Object(a["h"])(b,{span:"16"},{default:r((function(){return[Object(a["h"])("div",{class:"title",style:{height:n.height,color:n.fg},onClick:t[3]||(t[3]=function(t){return e.$emit("click-title")})},[Object(a["g"])(Object(a["I"])(n.title)+" ",1),Object(a["h"])("div",o,Object(a["I"])(n.subtitle),1)],4)]})),_:1}),Object(a["h"])(b,{span:"8"},{default:r((function(){return[Object(a["h"])("div",u,[Object(a["D"])(e.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["L"],i.state.isTop&&0!=n.height]])]})),_:1}),Object(a["D"])(e.$slots,"default",{},void 0,!0)],6)])})),s={props:{title:String,subtitle:String,height:String,bg:String,fg:String,noback:{type:Boolean,default:!1}},setup:function(){var e=Object(a["A"])({isTop:!0});return{state:e}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}};n("3b0e");s.render=i,s.__scopeId="data-v-bcfa0d94";t["a"]=s},"3b0e":function(e,t,n){"use strict";n("f743")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"container"},c=Object(a["g"])("首页"),o=Object(a["g"])("功能"),u=Object(a["g"])("会员"),i=Object(a["g"])("我的");function s(e,t,n,s,f,l){var d=Object(a["E"])("router-view"),h=Object(a["E"])("van-icon"),b=Object(a["E"])("van-sticky"),p=Object(a["E"])("van-tabbar-item"),m=Object(a["E"])("van-tabbar");return Object(a["w"])(),Object(a["f"])(a["a"],null,[Object(a["h"])("div",r,[Object(a["h"])(d,null,{default:Object(a["N"])((function(e){var t=e.Component,n=e.route;return[Object(a["h"])(a["c"],{name:n.meta.transition?n.meta.transition:"fade"},{default:Object(a["N"])((function(){return[(Object(a["w"])(),Object(a["f"])(Object(a["G"])(t)))]})),_:2},1032,["name"])]})),_:1})]),Object(a["O"])(Object(a["h"])(b,{"offset-bottom":"120",position:"bottom"},{default:Object(a["N"])((function(){return[Object(a["h"])("div",{id:"service",onClick:t[1]||(t[1]=function(t){return e.$router.push("/contact")})},[Object(a["h"])(h,{name:"service",size:"24",color:"#FFF"})])]})),_:1},512),[[a["L"],e.$store.state.showSticky]]),Object(a["O"])(Object(a["h"])(m,{modelValue:s.active,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.active=e}),placeholder:"",route:""},{default:Object(a["N"])((function(){return[Object(a["h"])(p,{icon:"home-o",to:"/"},{default:Object(a["N"])((function(){return[c]})),_:1}),Object(a["h"])(p,{icon:"diamond-o",to:"/feature"},{default:Object(a["N"])((function(){return[o]})),_:1}),Object(a["h"])(p,{icon:"medal-o",to:"/vip"},{default:Object(a["N"])((function(){return[u]})),_:1}),Object(a["h"])(p,{icon:"contact",to:"/my"},{default:Object(a["N"])((function(){return[i]})),_:1})]})),_:1},8,["modelValue"]),[[a["L"],e.$store.state.showTabbar]])],64)}var f={setup:function(){var e=Object(a["B"])("home");return{active:e}}};n("1389");f.render=s;var l=f,d=n("5530"),h=n("53ca"),b=(n("ac1f"),n("5319"),n("5502")),p=n("0e44"),m=Object(b["a"])({plugins:[Object(p["a"])()],state:{showSticky:!1,showTabbar:!1,config:null,profile:null},getters:{authorized:function(e){return null!=e.profile&&"object"==Object(h["a"])(e.profile)&&("undefined"!=typeof e.profile.id&&"string"==typeof e.profile.authorization)},uid:function(e,t){return t.authorized?e.profile.id:0},mobile:function(e,t){return t.authorized?e.profile.mobile.replace(/^(\d+)(\d{4})(\d{4})$/,"$1****$3"):""},nickname:function(e,t){return t.authorized?""!=e.profile.nickname?e.profile.nickname:"币友"+e.profile.mobile.substr(-4):""}},mutations:{changeSticky:function(e,t){e.showSticky=t},changeTabbar:function(e,t){e.showTabbar=t},init:function(e,t){e.config=t},auth:function(e,t){e.profile="undefined"==typeof t["id"]?null:Object(d["a"])(Object(d["a"])({},e.profile),t)}},actions:{},modules:{}}),O=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1276"),n("6c02"));function g(e,t,n,r,c,o){var u=Object(a["E"])("van-empty"),i=Object(a["E"])("BaseLayout");return Object(a["w"])(),Object(a["f"])(i,null,{default:Object(a["N"])((function(){return[Object(a["h"])(u,{image:"error",description:"页面不存在"})]})),_:1})}var j=n("2824"),k={components:{BaseLayout:j["a"]}};k.render=g;var v=k,y=[{path:"/",name:"Home",component:function(){return n.e("chunk-45aa275e").then(n.bind(null,"bb51"))}},{path:"/quantize",name:"Quantize",component:function(){return n.e("chunk-7f7a7c6d").then(n.bind(null,"2169"))}},{path:"/entrust",name:"Entrust",component:function(){return n.e("chunk-ba0a5118").then(n.bind(null,"a60a"))}},{path:"/invite",name:"Invite",component:function(){return n.e("chunk-32e2b466").then(n.bind(null,"0c50"))}},{path:"/my",name:"My",component:function(){return n.e("chunk-83248d3a").then(n.bind(null,"4c41"))}},{path:"/my/profile",name:"MyProfile",component:function(){return n.e("chunk-46eace40").then(n.bind(null,"1c3d"))},meta:{requiresAuth:!0}},{path:"/my/exchange",name:"MyExchange",component:function(){return n.e("chunk-28992e0d").then(n.bind(null,"eb40"))},meta:{requiresAuth:!0}},{path:"/my/strategy/:action(create|modify|adjust|apply)+",name:"Strategy",component:function(){return n.e("chunk-3ac9f25a").then(n.bind(null,"7e00"))},props:function(e){return{action:e.params.action,id:e.query.id}},meta:{requiresAuth:!0}},{path:"/my/order",name:"MyOrder",component:function(){return n.e("chunk-14e2ab64").then(n.bind(null,"7d27"))},meta:{requiresAuth:!0}},{path:"/my/invite",name:"MyInvite",component:function(){return n.e("chunk-542a984c").then(n.bind(null,"d7c9"))},meta:{requiresAuth:!0}},{path:"/my/recent",name:"MyRecent",component:function(){return n.e("chunk-74addd06").then(n.bind(null,"73a9"))},meta:{requiresAuth:!0}},{path:"/vip",name:"MyVIP",component:function(){return n.e("chunk-0a534952").then(n.bind(null,"945a"))}},{path:"/:action(login|logout|register|changepassword|invite)+/:code?",name:"Passport",component:function(){return n.e("chunk-1541a93c").then(n.bind(null,"bc1a"))},props:function(e){return{action:e.params.action,code:e.params.code,redirect:e.query.redirect}}},{path:"/:page(feature|intro|guide|help|about|contact|terms)+",name:"Page",component:function(){return n.e("chunk-51fb1f7c").then(n.bind(null,"2048"))},props:!0},{path:"/:path*",component:v}],w=Object(O["a"])({history:Object(O["b"])(),routes:y});w.beforeEach((function(e,t){return e.meta.requiresAuth&&!m.getters.authorized?(console.warn("需要登录授权"),{path:"/login",query:{redirect:e.fullPath}}):(m.commit("changeTabbar",-1=="Passport|Strategy".indexOf(e.name)),!0)})),w.afterEach((function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length;e.meta.transitionName=n<a?"slide-right":"slide-left"}));var _=w,E=n("bc3a"),T=n.n(E),P=n("4328"),S=n.n(P),C=n("626a"),q=n("d6e4");T.a.defaults.baseURL="//data.huoshen.app/",T.a.interceptors.request.use((function(e){return"get"!=e.method&&Object(C["a"])({type:"loading",message:"请稍候 ...",duration:1e4,forbidClick:!0}),e.headers=Object.assign(e.headers,{"Content-Type":"application/x-www-form-urlencoded","x-requested-with":"xmlhttprequest"}),m.state.profile&&m.state.profile.authorization&&(e.headers["token"]=m.state.profile.authorization),e.paramsSerializer=function(e){return S.a.stringify(e,{arrayFormat:"repeat"})},e.transformRequest=[function(e,t){return S.a.stringify(e,{arrayFormat:"brackets"})}],e.url+=(e.url.indexOf("?")>-1?"&":"?")+"rnd="+Math.random(),e})),T.a.interceptors.response.use((function(e){return C["a"].clear(),200!==e.status||"number"!=typeof e.data.rtn?Object(q["a"])({type:"danger",message:"服务异常，请重试！"}):999==e.data.rtn?(Object(C["a"])("授权已失效"),_.push({path:"/login",query:{redirect:_.currentRoute.fullPath}})):0!=e.data.rtn?(Object(q["a"])({type:"danger",message:e.data.msg}),Promise.reject(e.data)):(e.data.msg.length>2&&Object(C["a"])(e.data.msg),Promise.resolve(e.data.data))}),(function(e){Object(q["a"])({type:"danger",message:"网络请求错误，请重试！"}),console.error("网络错误：",e)}));var x=T.a,L=n("b970"),A=(n("157a"),n("77ed")),N=n.n(A),$=(n("db43"),Object(a["e"])(l));$.config.globalProperties.http=x,$.use(m).use(_).use(L["a"]).use(N.a).mount("#app"),x.get("/config").then((function(e){m.commit("init",e)}))},"7abd":function(e,t,n){},db43:function(e,t,n){},f743:function(e,t,n){}});
//# sourceMappingURL=app.505c83be.js.map