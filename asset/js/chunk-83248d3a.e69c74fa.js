(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83248d3a"],{"0ff0":function(t,e,c){},"4c41":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),o=Object(n["P"])("data-v-dfd409b0");Object(n["z"])("data-v-dfd409b0");var i={class:"content"};Object(n["x"])();var r=o((function(t,e,c,r,l,a){var u=Object(n["E"])("van-button"),s=Object(n["E"])("van-icon"),b=Object(n["E"])("van-cell"),d=Object(n["E"])("van-grid-item"),h=Object(n["E"])("van-grid"),f=Object(n["E"])("van-col"),O=Object(n["E"])("van-row"),j=Object(n["E"])("van-cell-group"),p=Object(n["E"])("BaseLayout");return Object(n["w"])(),Object(n["f"])(p,{title:a.title,subtitle:a.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",onClickTitle:a.onTitle,noback:""},{extra:o((function(){return[Object(n["O"])(Object(n["h"])(u,{icon:"edit",style:{width:"80px",borderRadius:"10px 0 0 10px",color:"#000"},color:"#F6F6F6",onClick:a.onTitle},null,8,["onClick"]),[[n["L"],t.authorized]])]})),default:o((function(){return[Object(n["h"])("div",i,[Object(n["h"])(b,{class:"vip",style:{color:a.vip.color},border:!1,title:a.vip.name,value:"会员等级及权益",to:"/vip",center:"","is-link":""},{icon:o((function(){return[Object(n["h"])(s,{name:"vip-card",size:"40",color:a.vip.color,style:{marginRight:"10px"}},null,8,["color"])]})),_:1},8,["style","title"]),Object(n["h"])(h,{class:"toolbar",border:!1},{default:o((function(){return[Object(n["h"])(d,{icon:"gold-coin-o",style:{color:"#3C6"},text:"交易管理",to:"/my/exchange"}),Object(n["h"])(d,{icon:"balance-list-o",style:{color:"#F69"},text:"我的订单",to:"/my/order"}),Object(n["h"])(d,{icon:"cluster-o",style:{color:"#993"},text:"我的邀请",to:"/my/invite"}),Object(n["h"])(d,{icon:"question-o",style:{color:"#F90"},text:"帮助中心",to:"/help"})]})),_:1}),Object(n["O"])(Object(n["h"])(O,{class:"toolbar",gutter:"10",align:"center",justify:"space-around"},{default:o((function(){return[Object(n["h"])(f,{class:"icon",span:"12"},{default:o((function(){return[Object(n["h"])(b,{title:"钱包",label:"$ 0",class:"card",center:"",onClick:e[1]||(e[1]=function(e){return t.$toast("稍后开放")})},{extra:o((function(){return[Object(n["h"])(s,{name:"paid",color:"#69F",size:"40"})]})),_:1})]})),_:1}),Object(n["h"])(f,{class:"icon",span:"12"},{default:o((function(){return[Object(n["h"])(b,{title:"卡券",label:"领取和兑换",class:"card",center:"",onClick:e[2]||(e[2]=function(e){return t.$toast("暂不支持")})},{extra:o((function(){return[Object(n["h"])(s,{name:"coupon-o",color:"#F6F",size:"40"})]})),_:1})]})),_:1})]})),_:1},512),[[n["L"],t.authorized]]),Object(n["h"])(j,{class:"menu"},{default:o((function(){return[Object(n["h"])(b,{class:"item",icon:"service",title:"联系客服",to:"/contact",center:"","is-link":""}),Object(n["h"])(b,{class:"item",icon:"fire",title:"关于我们",to:"/about",center:"","is-link":""}),Object(n["h"])(b,{class:"item",icon:"diamond",title:"服务条款",to:"/terms",center:"","is-link":""}),Object(n["h"])(b,{class:"item",icon:"upgrade",title:"检测更新",value:"VER: 1.2.2105011",center:"","is-link":"",onClick:e[3]||(e[3]=function(e){return t.$toast("已是最新版")})})]})),_:1})])]})),_:1},8,["title","subtitle","onClickTitle"])})),l=c("5530"),a=c("5502"),u=c("2824"),s={components:{BaseLayout:u["a"]},computed:Object(l["a"])(Object(l["a"])({level:function(){return this.authorized?0:-1},title:function(){return this.authorized?this.nickname:"登录 / 注册"},subtitle:function(){return this.authorized?"UID: "+this.uid:"立即登录 马上有钱"},vip:function(){var t={"-1":{name:"未开通会员",color:"#CCC"},0:{name:"精英卡",desc:"免费",color:"#0FF"},1:{name:"银卡会员",color:"#FFF"},2:{name:"金卡会员",color:"#FF0"},3:{name:"白金卡会员",color:"#0FF"},4:{name:"钻石卡会员",color:"#0F0"}};return"undefined"!=typeof t[this.level]?t[this.level]:t[0]}},Object(a["d"])(["profile"])),Object(a["b"])(["authorized","uid","nickname"])),methods:{onTitle:function(){this.$router.push(this.authorized?"/my/profile":"/login")}}};c("5e02");s.render=r,s.__scopeId="data-v-dfd409b0";e["default"]=s},"5e02":function(t,e,c){"use strict";c("0ff0")}}]);
//# sourceMappingURL=chunk-83248d3a.e69c74fa.js.map