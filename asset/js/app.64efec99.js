(function(e){function t(t){for(var a,r,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return i.p+"asset/js/"+({}[e]||e)+"."+{"chunk-0fbdd92c":"b2242586","chunk-3526903e":"8a5f3b92","chunk-3aca5a2f":"4a37006b","chunk-3ba1332e":"30bf86c8","chunk-413e6120":"9dbd3409","chunk-4b667436":"c5238c23","chunk-5a76b96f":"01d23231","chunk-61001850":"a97cabfe","chunk-66dc4b64":"7fb15d62","chunk-6ededd0e":"dc715603","chunk-700e994c":"c27b829e","chunk-76cea5e2":"5484a1c9","chunk-a0f56828":"a881bdff","chunk-ced324be":"7b85b664","chunk-ed6a4b44":"1f73aada","chunk-4e8116a3":"751616b9","chunk-7f3c4b84":"4d7155a5"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0fbdd92c":1,"chunk-3526903e":1,"chunk-3aca5a2f":1,"chunk-3ba1332e":1,"chunk-413e6120":1,"chunk-4b667436":1,"chunk-5a76b96f":1,"chunk-61001850":1,"chunk-66dc4b64":1,"chunk-6ededd0e":1,"chunk-700e994c":1,"chunk-76cea5e2":1,"chunk-a0f56828":1,"chunk-ced324be":1,"chunk-4e8116a3":1,"chunk-7f3c4b84":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="asset/css/"+({}[e]||e)+"."+{"chunk-0fbdd92c":"4edeb5f6","chunk-3526903e":"d23350f8","chunk-3aca5a2f":"a93c8bd6","chunk-3ba1332e":"bda61ea8","chunk-413e6120":"ee971eb3","chunk-4b667436":"b3250e4c","chunk-5a76b96f":"ff3359b9","chunk-61001850":"83f3f39c","chunk-66dc4b64":"82ea7cf4","chunk-6ededd0e":"ba206d0b","chunk-700e994c":"27af0dfe","chunk-76cea5e2":"3bea4cd4","chunk-a0f56828":"6998a326","chunk-ced324be":"25735db0","chunk-ed6a4b44":"31d6cfe0","chunk-4e8116a3":"0402bf5c","chunk-7f3c4b84":"024b3259"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===a||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://cdn.jsdelivr.net/gh/jenvan/bot-app@88d80579/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2824:function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["P"])("data-v-45e5416e");Object(a["z"])("data-v-45e5416e");var c={class:"container"},o={class:"subtitle"},u={class:"extra"};Object(a["x"])();var i=r((function(e,t,n,i,l,s){var d=Object(a["E"])("van-icon"),f=Object(a["E"])("van-nav-bar"),h=Object(a["E"])("van-sticky"),b=Object(a["E"])("van-col"),p=Object(a["E"])("van-row");return Object(a["w"])(),Object(a["f"])("div",c,[Object(a["O"])(Object(a["h"])(h,{onChange:t[2]||(t[2]=function(e){return i.state.isTop=!i.state.isTop})},{default:r((function(){return[Object(a["h"])(f,{class:["navbar",{notTop:!i.state.isTop}],title:i.state.isTop?"":n.title,border:!1,onClickLeft:s.onClickLeft,onClickRight:t[1]||(t[1]=function(t){return e.$emit("click-more")})},{left:r((function(){return[Object(a["O"])(Object(a["h"])("div",null,[Object(a["D"])(e.$slots,"back",{},(function(){return[Object(a["h"])(d,{name:"arrow-left",size:"large"})]}),{},!0)],512),[[a["L"],!n.noback]])]})),right:r((function(){return[Object(a["D"])(e.$slots,"more",{},void 0,!0)]})),_:1},8,["class","title","onClickLeft"])]})),_:1},512),[[a["L"],0!=n.height]]),Object(a["h"])("div",{class:["page",{notTop:!i.state.isTop}],style:{background:n.bg}},[Object(a["h"])(a["c"],{name:"van-slide-down"},{default:r((function(){return[Object(a["O"])(Object(a["h"])(p,{justify:"space-between",align:"center",class:"head",style:{color:n.fg}},{default:r((function(){return[Object(a["h"])(b,{span:"16"},{default:r((function(){return[Object(a["h"])("div",{class:"title",style:{height:n.height,color:n.fg},onClick:t[3]||(t[3]=function(t){return e.$emit("click-title")})},[Object(a["g"])(Object(a["I"])(n.title)+" ",1),Object(a["h"])("div",o,Object(a["I"])(n.subtitle),1)],4)]})),_:1}),Object(a["h"])(b,{span:"8"},{default:r((function(){return[Object(a["h"])("div",u,[Object(a["D"])(e.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[a["L"],i.state.isTop&&!n.notitle&&0!=n.height]])]})),_:1}),Object(a["D"])(e.$slots,"default",{},void 0,!0)],6)])})),l={props:{notitle:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String,noback:{type:Boolean,default:!1}},setup:function(){var e=Object(a["A"])({isTop:!0});return{state:e}},methods:{onClickLeft:function(){return"function"==typeof this.$slots.back?this.$emit("click-back"):(console.log("<<< BACK"),this.$router.back())}}};n("5e76");l.render=i,l.__scopeId="data-v-45e5416e";t["a"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"container"},c=Object(a["g"])("首页"),o=Object(a["g"])("功能"),u=Object(a["g"])("会员"),i=Object(a["g"])("我的");function l(e,t,n,l,s,d){var f=Object(a["E"])("router-view"),h=Object(a["E"])("van-icon"),b=Object(a["E"])("van-sticky"),p=Object(a["E"])("van-tabbar-item"),m=Object(a["E"])("van-tabbar");return Object(a["w"])(),Object(a["f"])(a["a"],null,[Object(a["h"])("div",r,[Object(a["h"])(f,null,{default:Object(a["N"])((function(e){var t=e.Component,n=e.route;return[Object(a["h"])(a["c"],{name:n.meta.transition?n.meta.transition:"fade"},{default:Object(a["N"])((function(){return[(Object(a["w"])(),Object(a["f"])(Object(a["G"])(t)))]})),_:2},1032,["name"])]})),_:1})]),Object(a["O"])(Object(a["h"])(b,{"offset-bottom":"120",position:"bottom"},{default:Object(a["N"])((function(){return[Object(a["h"])("div",{id:"service",onClick:t[1]||(t[1]=function(t){return e.$router.push("/contact")})},[Object(a["h"])(h,{name:"service",size:"24",color:"#FFF"})])]})),_:1},512),[[a["L"],e.$store.state.showSticky]]),Object(a["O"])(Object(a["h"])(m,{modelValue:l.active,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.active=e}),placeholder:"",route:""},{default:Object(a["N"])((function(){return[Object(a["h"])(p,{icon:"home-o",to:"/"},{default:Object(a["N"])((function(){return[c]})),_:1}),Object(a["h"])(p,{icon:"diamond-o",to:"/feature"},{default:Object(a["N"])((function(){return[o]})),_:1}),Object(a["h"])(p,{icon:"medal-o",to:"/vip"},{default:Object(a["N"])((function(){return[u]})),_:1}),Object(a["h"])(p,{icon:"contact",to:"/my"},{default:Object(a["N"])((function(){return[i]})),_:1})]})),_:1},8,["modelValue"]),[[a["L"],e.$store.state.showTabbar]])],64)}var s={setup:function(){var e=Object(a["B"])("home");return{active:e}}};n("ddd4");s.render=l;var d=s,f=n("5530"),h=n("53ca"),b=(n("ac1f"),n("5319"),n("5502")),p=n("0e44"),m=Object(b["a"])({plugins:[Object(p["a"])()],state:{showSticky:!1,showTabbar:!1,config:null,profile:null},getters:{authorized:function(e){return null!=e.profile&&"object"==Object(h["a"])(e.profile)&&("undefined"!=typeof e.profile.id&&"string"==typeof e.profile.authorization)},uid:function(e,t){return t.authorized?e.profile.id:0},mobile:function(e,t){return t.authorized?e.profile.mobile.replace(/^(\d+)(\d{4})(\d{4})$/,"$1****$3"):""},nickname:function(e,t){return t.authorized?""!=e.profile.nickname?e.profile.nickname:"币友"+e.profile.mobile.substr(-4):""},balance:function(e,t){return t.authorized?e.profile.balance.replace(/(\.\d\d)(\d+)$/,"$1"):0},level:function(e,t){return t.authorized&&e.profile.level||0}},mutations:{changeSticky:function(e,t){e.showSticky=t},changeTabbar:function(e,t){e.showTabbar=t},init:function(e,t){e.config=t},auth:function(e,t){e.profile="undefined"==typeof t["id"]?null:Object(f["a"])(Object(f["a"])({},e.profile),t)}},actions:{},modules:{}}),O=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1276"),n("6c02"));function g(e,t,n,r,c,o){var u=Object(a["E"])("van-empty"),i=Object(a["E"])("BaseLayout");return Object(a["w"])(),Object(a["f"])(i,null,{default:Object(a["N"])((function(){return[Object(a["h"])(u,{image:"error",description:"页面不存在"})]})),_:1})}var j=n("2824"),k={components:{BaseLayout:j["a"]}};k.render=g;var v=k,y=[{path:"/",name:"Home",component:function(){return n.e("chunk-76cea5e2").then(n.bind(null,"bb51"))}},{path:"/quantize",name:"Quantize",component:function(){return n.e("chunk-ced324be").then(n.bind(null,"2169"))}},{path:"/entrust",name:"Entrust",component:function(){return n.e("chunk-700e994c").then(n.bind(null,"a60a"))}},{path:"/invite",name:"Invite",component:function(){return Promise.all([n.e("chunk-ed6a4b44"),n.e("chunk-4e8116a3")]).then(n.bind(null,"0c50"))}},{path:"/my",name:"My",component:function(){return n.e("chunk-3ba1332e").then(n.bind(null,"4c41"))}},{path:"/my/profile",name:"MyProfile",component:function(){return n.e("chunk-61001850").then(n.bind(null,"1c3d"))},meta:{requiresAuth:!0}},{path:"/my/wallet",name:"MyWallet",component:function(){return n.e("chunk-5a76b96f").then(n.bind(null,"30d8"))},meta:{requiresAuth:!0}},{path:"/my/:action(deposit|withdrawal)+",name:"MyWalletCash",component:function(){return Promise.all([n.e("chunk-ed6a4b44"),n.e("chunk-7f3c4b84")]).then(n.bind(null,"f65c"))},props:function(e){return{action:e.params.action}},meta:{requiresAuth:!0}},{path:"/my/exchange",name:"MyExchange",component:function(){return n.e("chunk-0fbdd92c").then(n.bind(null,"eb40"))},meta:{requiresAuth:!0}},{path:"/my/strategy/:action(create|modify|adjust|apply)+",name:"Strategy",component:function(){return n.e("chunk-3aca5a2f").then(n.bind(null,"7e00"))},props:function(e){return{action:e.params.action,id:e.query.id}},meta:{requiresAuth:!0}},{path:"/my/order",name:"MyOrder",component:function(){return n.e("chunk-a0f56828").then(n.bind(null,"7d27"))},meta:{requiresAuth:!0}},{path:"/my/invite",name:"MyInvite",component:function(){return n.e("chunk-3526903e").then(n.bind(null,"d7c9"))},meta:{requiresAuth:!0}},{path:"/my/recent",name:"MyRecent",component:function(){return n.e("chunk-6ededd0e").then(n.bind(null,"73a9"))},meta:{requiresAuth:!0}},{path:"/vip",name:"MyVIP",component:function(){return n.e("chunk-413e6120").then(n.bind(null,"945a"))}},{path:"/:action(login|logout|register|changepassword|invite)+/:code?",name:"Passport",component:function(){return n.e("chunk-66dc4b64").then(n.bind(null,"bc1a"))},props:function(e){return{action:e.params.action,code:e.params.code,redirect:e.query.redirect}}},{path:"/:page(feature|intro|guide|help|about|contact|terms)+",name:"Page",component:function(){return n.e("chunk-4b667436").then(n.bind(null,"2048"))},props:!0},{path:"/:path*",component:v}],w=Object(O["a"])({history:Object(O["b"])(),routes:y});w.beforeEach((function(e,t){return e.meta.requiresAuth&&!m.getters.authorized?(console.warn("需要登录授权"),{path:"/login",query:{redirect:e.fullPath}}):(m.commit("changeTabbar",-1=="Passport|Strategy".indexOf(e.name)),!0)})),w.afterEach((function(e,t){var n=e.path.split("/").length,a=t.path.split("/").length;e.meta.transitionName=n<a?"slide-right":"slide-left"}));var _=w,E=n("bc3a"),P=n.n(E),T=n("4328"),S=n.n(T),q=n("626a"),C=n("d6e4");P.a.defaults.baseURL="//data.huoshen.app/",P.a.interceptors.request.use((function(e){return"get"!=e.method&&Object(q["a"])({type:"loading",message:"请稍候 ...",duration:1e4,forbidClick:!0}),e.headers=Object.assign(e.headers,{"Content-Type":"application/x-www-form-urlencoded","x-requested-with":"xmlhttprequest"}),m.state.profile&&m.state.profile.authorization&&(e.headers["token"]=m.state.profile.authorization),e.paramsSerializer=function(e){return S.a.stringify(e,{arrayFormat:"repeat"})},e.transformRequest=[function(e,t){return S.a.stringify(e,{arrayFormat:"brackets"})}],e.url+=(e.url.indexOf("?")>-1?"&":"?")+"rnd="+Math.random(),e})),P.a.interceptors.response.use((function(e){return q["a"].clear(),200!==e.status||"number"!=typeof e.data.rtn?Object(C["a"])({type:"danger",message:"服务异常，请重试！"}):999==e.data.rtn?(Object(q["a"])("授权已失效"),_.push({path:"/login",query:{redirect:_.currentRoute.fullPath}})):0!=e.data.rtn?(Object(C["a"])({type:"danger",message:e.data.msg}),Promise.reject(e.data)):(e.data.msg.length>2&&Object(q["a"])(e.data.msg),Promise.resolve(e.data.data))}),(function(e){Object(C["a"])({type:"danger",message:"网络请求错误，请重试！"}),console.error("网络错误：",e)}));var x=P.a,A=n("b970"),L=(n("157a"),n("77ed")),$=n.n(L),z=(n("db43"),Object(a["e"])(d));z.config.globalProperties.http=x,z.use(m).use(_).use(A["a"]).use($.a).mount("#app"),x.get("/config").then((function(e){m.commit("init",e)}))},"5e76":function(e,t,n){"use strict";n("cf1d")},a5de:function(e,t,n){},cf1d:function(e,t,n){},db43:function(e,t,n){},ddd4:function(e,t,n){"use strict";n("a5de")}});
//# sourceMappingURL=app.64efec99.js.map