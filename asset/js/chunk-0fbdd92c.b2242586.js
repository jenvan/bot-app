(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fbdd92c"],{"0db3":function(t,e,n){"use strict";n("a0a6")},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),c=n("825a"),i=n("d039"),o=n("ad6d"),s="toString",r=RegExp.prototype,l=r[s],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=s;(u||f)&&a(RegExp.prototype,s,(function(){var t=c(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in r)?o.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},"306f":function(t,e,n){"use strict";var a=n("7a23"),c=Object(a["P"])("data-v-4ce7b42a"),i=c((function(t,e,n,c,i,o){return Object(a["w"])(),Object(a["f"])("ul",{class:"card",style:{background:n.bg,color:n.fg}},[Object(a["h"])("li",{class:"slot",style:{fontSize:n.size}},[Object(a["D"])(t.$slots,"prepend",{},void 0,!0)],4),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["C"])(i.list,(function(t,e){return Object(a["w"])(),Object(a["f"])("li",{key:e,style:{fontSize:n.size}},Object(a["I"])(t),5)})),128)),Object(a["h"])("li",{class:"slot",style:{fontSize:n.size}},[Object(a["D"])(t.$slots,"default",{},void 0,!0)],4)],4)})),o=(n("a9e3"),n("159b"),n("ac1f"),n("1276"),n("d3b7"),n("25f0"),{props:{number:{type:[String,Number],default:0},fg:{type:String,default:"#666"},bg:{type:String,default:"transparent"},size:String},data:function(){return{list:[]}},mounted:function(){this.scroll()},watch:{number:function(t,e){this.scroll()}},methods:{scroll:function(){var t=this,e=[];this.number.toString().split("").forEach((function(t){e.push(t)}));var n=setInterval((function(){var a=e.length;if(0!=a){var c=e.pop();if(t.list[a-1]=c,"."!=c)var i=setInterval((function(){t.list[a-1]++,t.list[a-1]>=10&&(t.list[a-1]=0),t.list[a-1]==c&&clearInterval(i)}),30)}else clearInterval(n)}),100)}}});n("0db3");o.render=i,o.__scopeId="data-v-4ce7b42a";e["a"]=o},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),c=n("5899"),i="["+c+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),r=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:r(1),end:r(2),trim:r(3)}},7156:function(t,e,n){var a=n("861d"),c=n("d2bb");t.exports=function(t,e,n){var i,o;return c&&"function"==typeof(i=e.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&c(t,o),t}},a0a6:function(t,e,n){},a9e3:function(t,e,n){"use strict";var a=n("83ab"),c=n("da84"),i=n("94ca"),o=n("6eeb"),s=n("5135"),r=n("c6b6"),l=n("7156"),u=n("c04e"),f=n("d039"),b=n("7c73"),d=n("241c").f,h=n("06cf").f,p=n("9bf2").f,O=n("58a8").trim,j="Number",g=c[j],m=g.prototype,v=r(b(m))==j,y=function(t){var e,n,a,c,i,o,s,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=O(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+l}for(i=l.slice(2),o=i.length,s=0;s<o;s++)if(r=i.charCodeAt(s),r<48||r>c)return NaN;return parseInt(i,a)}return+l};if(i(j,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(v?f((function(){m.valueOf.call(n)})):r(n)!=j)?l(new g(y(e)),n,I):y(e)},_=a?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;_.length>x;x++)s(g,E=_[x])&&!s(I,E)&&p(I,E,h(g,E));I.prototype=m,m.constructor=I,o(c,j,I)}},b254:function(t,e,n){},eb40:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("5319"),n("d3b7"),n("25f0");var a=n("7a23"),c=Object(a["P"])("data-v-f668b86a");Object(a["z"])("data-v-f668b86a");var i=Object(a["g"])("设置"),o={class:"title"},s=Object(a["g"])("今日盈利"),r=Object(a["g"])("$"),l={class:"remark"},u={class:"title"},f=Object(a["g"])("累计盈利"),b=Object(a["g"])("$"),d={class:"remark"},h={class:"list"},p={class:"extend",style:{color:"#333"}},O={class:"head"},j={class:"head"},g={class:"form"},m=Object(a["h"])("label",null,"火币API访问密钥：",-1),v=Object(a["h"])("label",null,"同时进行的最大任务数：",-1),y={class:"slider-button"};Object(a["x"])();var E=c((function(t,e,n,E,I,_){var x=Object(a["E"])("van-icon"),k=Object(a["E"])("van-button"),C=Object(a["E"])("van-tag"),w=Object(a["E"])("number-roll"),F=Object(a["E"])("van-col"),S=Object(a["E"])("van-row"),N=Object(a["E"])("van-grid-item"),$=Object(a["E"])("van-grid"),L=Object(a["E"])("van-cell"),U=Object(a["E"])("van-cell-group"),z=Object(a["E"])("van-list"),A=Object(a["E"])("van-tab"),V=Object(a["E"])("van-tabs"),R=Object(a["E"])("van-pull-refresh"),T=Object(a["E"])("van-step"),M=Object(a["E"])("van-steps"),D=Object(a["E"])("van-action-bar-icon"),P=Object(a["E"])("van-action-bar-button"),B=Object(a["E"])("van-action-bar"),K=Object(a["E"])("van-popup"),G=Object(a["E"])("van-slider"),J=Object(a["E"])("van-dialog"),X=Object(a["E"])("BaseLayout");return Object(a["w"])(),Object(a["f"])(X,{title:"我的交易",subtitle:_.subtitle,bg:"linear-gradient(180deg, #06C, #FFF 60%, #FFF)",fg:"#FFE",onClickMore:_.onMore},{more:c((function(){return[Object(a["h"])(x,{name:"question-o",size:"large"})]})),extra:c((function(){return[Object(a["h"])(k,{icon:"setting",size:"small",style:{borderRadius:"10px 0 0 10px",opacity:.8},color:"#09F",onClick:_.onExtra},{default:c((function(){return[i]})),_:1},8,["style","onClick"])]})),default:c((function(){return[Object(a["h"])(R,{modelValue:E.state.refreshing,"onUpdate:modelValue":e[4]||(e[4]=function(t){return E.state.refreshing=t}),onRefresh:_.onChange},{default:c((function(){return[Object(a["h"])(S,{class:"stat",gutter:"2",justify:"space-around",align:"center"},{default:c((function(){return[Object(a["h"])(F,{span:"12"},{default:c((function(){return[Object(a["h"])("div",o,[Object(a["h"])(C,{size:"large",type:"success"},{default:c((function(){return[s]})),_:1})]),Object(a["h"])(w,{number:E.state.stat.today_profit,fg:"#F66",size:"24px"},{prepend:c((function(){return[r]})),_:1},8,["number"]),Object(a["h"])("div",l,"交易 "+Object(a["I"])(E.state.stat.today_num)+" 笔",1)]})),_:1}),Object(a["h"])(F,{span:"12"},{default:c((function(){return[Object(a["h"])("div",u,[Object(a["h"])(C,{size:"large",type:"success"},{default:c((function(){return[f]})),_:1})]),Object(a["h"])(w,{number:E.state.stat.all_profit,fg:"#F66",size:"24px"},{prepend:c((function(){return[b]})),_:1},8,["number"]),Object(a["h"])("div",d,"交易 "+Object(a["I"])(E.state.stat.all_num)+" 笔",1)]})),_:1})]})),_:1}),Object(a["h"])($,{class:"toolbar",border:!0,"column-num":4},{default:c((function(){return[Object(a["h"])(N,{icon:"fire-o",style:{color:"#F09"},text:"交易动态",to:"/my/recent"}),Object(a["h"])(N,{icon:"font-o",style:{color:"#F90"},text:"策略模板",to:"/my/strategy/modify"}),Object(a["h"])(N,{icon:"cash-back-record",style:{color:"#C6F"},text:"手动建仓",to:"/my/strategy/apply"}),Object(a["h"])(N,{icon:"after-sale",style:{color:"#69F"},text:"自动建仓",onClick:e[1]||(e[1]=function(e){return t.$toast("开通钻石会员可用")})})]})),_:1}),Object(a["h"])("div",h,[Object(a["h"])(V,{active:E.state.active,"onUpdate:active":e[3]||(e[3]=function(t){return E.state.active=t}),type:"card",color:"#09F","offset-top":"45",sticky:"",swipeable:"",animated:"",onChange:_.onChange},{default:c((function(){return[(Object(a["w"])(),Object(a["f"])(a["a"],null,Object(a["C"])({0:"未完成交易",1:"已完成交易"},(function(t,n){return Object(a["h"])(A,{key:n,title:t},{default:c((function(){return[Object(a["h"])(z,{loading:E.state.loading,"onUpdate:loading":e[2]||(e[2]=function(t){return E.state.loading=t}),finished:E.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:_.onLoad},{default:c((function(){return[(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["C"])(E.state.list,(function(t,e){return Object(a["w"])(),Object(a["f"])(U,{class:"block",border:!1,key:e,onClick:function(e){return _.onDetail(t)}},{default:c((function(){return[Object(a["h"])(L,{class:"dt",border:!1,title:t.ts},{extra:c((function(){return[Object(a["h"])("span",{style:{color:t.color}},"涨 "+Object(a["I"])(t.ratio)+" %，盈 "+Object(a["I"])(t.profit)+" U",5)]})),_:2},1032,["title"]),Object(a["h"])(L,{class:"item",border:!1,"icon-prefix":"icon-symbol",icon:t.symbol.toLowerCase(),title:t.symbol.toUpperCase()+" / USDT",value:"$"+t.amount},null,8,["icon","title","value"]),Object(a["h"])("div",p,"于 "+Object(a["I"])(t.dt)+" 建仓，共买入 "+Object(a["I"])(t.times)+" 次",1),Object(a["O"])(Object(a["h"])("div",{class:"extend"},"成本价："+Object(a["I"])(t.cost_price)+"，当前价："+Object(a["I"])(t.price),513),[[a["L"],9!=t.status]])]})),_:2},1032,["onClick"])})),128))]})),_:1},8,["loading","finished","onLoad"])]})),_:2},1032,["title"])})),64))]})),_:1},8,["active","onChange"])])]})),_:1},8,["modelValue","onRefresh"]),Object(a["h"])(K,{show:E.state.popup,"onUpdate:show":e[7]||(e[7]=function(t){return E.state.popup=t}),position:"bottom",transition:"van-slide-up",round:"",closeable:""},{default:c((function(){return[Object(a["h"])(L,{border:!1,"icon-prefix":"icon-symbol",icon:E.state.item.symbol.toLowerCase(),title:E.state.item.symbol.toUpperCase()+" / USDT",label:"盈利额："+E.state.detail.profit+" U ，盈利率："+(100*E.state.detail.ratio).toString().replace(/(\.\d\d)(\d+)$/,"$1")+" %"},null,8,["icon","title","label"]),Object(a["h"])(M,{class:"step",direction:"vertical",active:0},{default:c((function(){return[Object(a["O"])(Object(a["h"])(T,{class:"status"},{default:c((function(){return[Object(a["h"])("p",O,Object(a["I"])(_.status),1),Object(a["h"])("p",null,"成本价："+Object(a["I"])(E.state.detail.cost_price)+"，当前价："+Object(a["I"])(E.state.detail.price),1),Object(a["h"])("p",null,"补仓价："+Object(a["I"])(E.state.detail.fall_price)+"，止盈价："+Object(a["I"])(E.state.detail.rise_price),1)]})),_:1},512),[[a["L"],9!=E.state.item.status]]),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["C"])(E.state.detail.log,(function(t,e){return Object(a["w"])(),Object(a["f"])(T,{key:e},{default:c((function(){return[Object(a["h"])("p",j,Object(a["I"])(t.dt+" 「"+["清仓","建仓","加仓","补仓"][t.type]+"」"),1),Object(a["h"])("p",null,Object(a["I"])("数量："+t.num),1),Object(a["h"])("p",null,Object(a["I"])("单价："+t.price+"，总价："+t.amount),1)]})),_:2},1024)})),128))]})),_:1}),Object(a["h"])(B,null,{default:c((function(){return[Object(a["O"])(Object(a["h"])(D,{icon:"after-sale",text:"调整",to:"/my/strategy/adjust?id="+E.state.item.id},null,8,["to"]),[[a["L"],9!=E.state.item.status]]),Object(a["O"])(Object(a["h"])(D,{icon:"refund-o",text:"补仓",onClick:e[5]||(e[5]=function(t){return _.onOpt("append","按照策略补仓")})},null,512),[[a["L"],9!=E.state.item.status]]),Object(a["O"])(Object(a["h"])(D,{icon:"cash-back-record",text:"平仓",onClick:e[6]||(e[6]=function(t){return _.onOpt("clear","平仓")})},null,512),[[a["L"],9!=E.state.item.status]]),Object(a["h"])(P,{color:"#090",text:"再来一单",to:"/my/strategy/apply?id="+E.state.item.id},null,8,["to"])]})),_:1})]})),_:1},8,["show"]),Object(a["h"])(J,{show:E.state.dialog,"onUpdate:show":e[11]||(e[11]=function(t){return E.state.dialog=t}),showCancelButton:"",confirmButtonText:"设置",onConfirm:_.onConfig},{default:c((function(){return[Object(a["h"])("div",g,[m,Object(a["O"])(Object(a["h"])("input",{type:"text",placeholder:"Access Key","onUpdate:modelValue":e[8]||(e[8]=function(t){return E.state.config.ak=t})},null,512),[[a["K"],E.state.config.ak]]),Object(a["O"])(Object(a["h"])("input",{type:"test",placeholder:"Secret Key","onUpdate:modelValue":e[9]||(e[9]=function(t){return E.state.config.sk=t})},null,512),[[a["K"],E.state.config.sk]]),v,Object(a["h"])(G,{modelValue:E.state.config.num,"onUpdate:modelValue":e[10]||(e[10]=function(t){return E.state.config.num=t}),"active-color":"#ee0a24"},{button:c((function(){return[Object(a["h"])("div",y,Object(a["I"])(E.state.config.num),1)]})),_:1},8,["modelValue"])])]})),_:1},8,["show","onConfirm"])]})),_:1},8,["subtitle","onClickMore"])})),I=n("5530"),_=n("2824"),x=n("306f"),k={components:{BaseLayout:_["a"],NumberRoll:x["a"]},setup:function(){var t=Object(a["A"])({popup:!1,dialog:!1,stat:{},active:0,refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20,id:0,item:{},detail:{},config:{num:2}});return{state:t}},created:function(){this.onChange()},computed:{subtitle:function(){return"正在进行中交易共有 "+("undefined"!=typeof this.state.stat.working?this.state.stat.working:0)+" 笔"},status:function(){var t={0:"监控中",1:"正在交易",2:"正在判断补仓",3:"正在判断止盈",4:"调整中",5:"正在实时监控",6:"交易失败（请检查账户余额）",7:"超标挂起（只清仓不补仓）",8:"手动暂停",9:"交易完成"};return"undefined"!=typeof t[this.state.detail.status]?t[this.state.detail.status]:"未知"}},methods:{onMore:function(){console.log("Click more ...")},onExtra:function(){var t=this;this.$toast.loading(),this.http.get("/exchange/setup").then((function(e){t.state.config=Object(I["a"])(Object(I["a"])({},t.state.config),e),t.state.dialog=!0,t.$toast.clear()}))},onConfig:function(){this.http.post("/exchange/setup?config="+JSON.stringify(this.state.config))},onChange:function(){var t=this;this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad(),this.http.get("/exchange/summary?mine=1").then((function(e){return t.state.stat=e}))},onLoad:function(){var t=this;this.http.get("/exchange/tasklist?mine=1&finished="+this.state.active+"&offset="+this.state.offset+"&limit="+this.state.limit).then((function(e){for(var n in t.state.refreshing=!1,(0==e.length||e.length<t.state.limit)&&(t.state.finished=!0),t.state.loading=!1,t.state.offset+=e.length,e){var a=e[n];t.state.list.push(Object(I["a"])(Object(I["a"])({},a),{symbol:a.symbol.replace(/usdt$/,""),cost:a.cost.replace(/(\.\d\d)(\d+)$/,"$1"),amount:a.amount.replace(/(\.\d\d)(\d+)$/,"$1"),profit:a.profit.replace(/(\.\d\d)(\d+)$/,"$1"),ratio:(100*parseFloat(a.ratio)).toString().replace(/(\.\d\d)(\d+)$/,"$1"),color:a.ratio>0?"#090":"#F66"}))}}))},onDetail:function(t){var e=this;this.state.item=t,this.state.id=0,this.state.detail={},this.http.post("/exchange/taskdetail?id="+t.id).then((function(n){e.state.id=t.id,e.state.detail=n,e.state.popup=!0}))},onOpt:function(t,e){var n=this;this.$dialog.confirm({message:"确认要"+e+"吗?"}).then((function(){n.http.post("/exchange/tasksave?id="+n.state.id+"&action="+t).then((function(t){n.onDetail(n.state.item)}))}))}}};n("fd47");k.render=E,k.__scopeId="data-v-f668b86a";e["default"]=k},fd47:function(t,e,n){"use strict";n("b254")}}]);
//# sourceMappingURL=chunk-0fbdd92c.b2242586.js.map