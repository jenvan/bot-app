(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66dc4b64"],{"03c5":function(e,t,n){"use strict";n("4ae0")},"4ae0":function(e,t,n){},bc1a:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),i=Object(c["P"])("data-v-dc90c614");Object(c["z"])("data-v-dc90c614");var a=Object(c["g"])("注册账号"),o=Object(c["g"])("下载 app"),u=Object(c["g"])("登录使用"),r=Object(c["g"])("发送验证码"),l=Object(c["h"])("br",null,null,-1),s={class:"extra"},d=Object(c["g"])("没有账号？"),b=Object(c["g"])("注册"),h=Object(c["g"])("忘记密码？"),O={class:"extra"},j=Object(c["g"])("已有账号？"),p=Object(c["g"])("登录"),f={class:"intro"};Object(c["x"])();var m=i((function(e,t,m,g,v,w){var _=Object(c["E"])("van-icon"),y=Object(c["E"])("van-image"),V=Object(c["E"])("van-step"),k=Object(c["E"])("van-steps"),F=Object(c["E"])("van-button"),L=Object(c["E"])("van-field"),E=Object(c["E"])("router-link"),S=Object(c["E"])("van-form"),x=Object(c["E"])("BaseLayout");return Object(c["w"])(),Object(c["f"])(x,{title:w.invite?"注册账号":w.title,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",height:w.invite?0:"60px",onClickBack:w.onBack},{back:i((function(){return[Object(c["h"])(_,{name:w.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]})),default:i((function(){return[Object(c["O"])(Object(c["h"])(y,{src:n("ec03")},null,8,["src"]),[[c["L"],w.invite]]),Object(c["O"])(Object(c["h"])(k,{class:"step"},{default:i((function(){return[Object(c["h"])(V,null,{default:i((function(){return[a]})),_:1}),Object(c["h"])(V,null,{default:i((function(){return[o]})),_:1}),Object(c["h"])(V,null,{default:i((function(){return[u]})),_:1})]})),_:1},512),[[c["L"],w.invite]]),Object(c["h"])(S,{class:"form",onSubmit:w.onSubmit,onFailed:w.onFailed},{default:i((function(){return[Object(c["O"])(Object(c["h"])(L,{modelValue:g.state.account,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.state.account=e}),name:"mobile",label:"手机号",placeholder:"请填写手机号",rules:[{required:"login"!=m.action,message:"支持大陆及港澳台手机号码"}]},{button:i((function(){return[Object(c["h"])(F,{size:"small",type:"primary",onClick:w.onSend},{default:i((function(){return[r]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","rules"]),[[c["L"],"login"!=m.action]]),Object(c["O"])(Object(c["h"])(L,{modelValue:g.state.sms,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.state.sms=e}),name:"vcode",label:"验证码",rules:[{required:"login"!=m.action,message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[c["L"],"login"!=m.action]]),Object(c["O"])(Object(c["h"])(L,{modelValue:g.state.account,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.state.account=e}),name:"username",label:"账号",placeholder:"login"==m.action?"手机号或用户名":"请填写用户名",rules:[{required:"login"==m.action,message:"用户名以字母开头且长度不小于5"}]},null,8,["modelValue","placeholder","rules"]),[[c["L"],"login"==m.action]]),Object(c["h"])(L,{modelValue:g.state.password,"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.state.password=e}),type:"password",name:"password",label:"密码",placeholder:"changepassword"==m.action?"请填写新的密码":"请填写密码",rules:[{required:!0,message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder"]),Object(c["O"])(Object(c["h"])(L,{modelValue:g.state.code,"onUpdate:modelValue":t[5]||(t[5]=function(e){return g.state.code=e}),name:"code",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[c["L"],"invite"==m.action]]),l,Object(c["h"])(F,{block:"",type:"primary","native-type":"submit"},{default:i((function(){return[Object(c["g"])(Object(c["I"])(w.title),1)]})),_:1}),Object(c["O"])(Object(c["h"])("div",s,[d,Object(c["h"])(E,{class:"register",to:"/register"},{default:i((function(){return[b]})),_:1}),Object(c["h"])(E,{class:"right",to:"/changepassword"},{default:i((function(){return[h]})),_:1})],512),[[c["L"],!w.invite&&"login"==m.action]]),Object(c["O"])(Object(c["h"])("div",O,[j,Object(c["h"])(E,{class:"login",to:"/login"},{default:i((function(){return[p]})),_:1})],512),[[c["L"],!w.invite&&"register"==m.action]])]})),_:1},8,["onSubmit","onFailed"]),Object(c["h"])("div",f,[Object(c["O"])(Object(c["h"])(y,{src:n("c869"),height:"1000px"},null,8,["src"]),[[c["L"],w.invite]])])]})),_:1},8,["title","height","onClickBack"])})),g=n("5530"),v=n("5502"),w=n("2824"),_={components:{BaseLayout:w["a"]},props:{action:{type:String,default:"login"},code:{type:String,default:""},redirect:{type:String,default:"/my"}},setup:function(){var e=Object(c["A"])({account:"",password:"Test123",code:"",sms:""});return{state:e}},created:function(){this.state.code=this.code},mounted:function(){if("logout"==this.action){var e=this;this.http.post("/user/"+this.action).then((function(t){e.auth(t),e.$router.push(e.redirect)}))}},computed:Object(g["a"])(Object(g["a"])({invite:function(){return"invite"==this.action},title:function(){var e=this.action,t={login:"登录",register:"注册",changepassword:"找回密码"};return this.invite?"注册":"undefined"==typeof t[e]?"登录":t[e]}},Object(v["d"])(["profile"])),Object(v["b"])(["authorized"])),methods:Object(g["a"])({onBack:function(){return this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.http.post("/user/verify?mobile="+this.state.account)},onSubmit:function(e){var t=this,n="invite"!=this.action?this.action:"register";/^\d+$/.test(this.state.account)&&delete e["username"]||delete e["mobile"],this.http.post("/user/"+n,e).then((function(e){t.auth(e),t.$router.push(t.redirect)}))},onFailed:function(e){this.$toast("请按要求填写表单"),console.error("表单提交失败",e)}},Object(v["c"])(["auth"]))};n("03c5");_.render=m,_.__scopeId="data-v-dc90c614";t["default"]=_},c869:function(e,t,n){e.exports=n.p+"asset/img/invite_intro.3b623efd.jpg"},ec03:function(e,t,n){e.exports=n.p+"asset/img/invite_title.984e4a7a.jpg"}}]);
//# sourceMappingURL=chunk-66dc4b64.7fb15d62.js.map