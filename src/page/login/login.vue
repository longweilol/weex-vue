<template>
  <div class="wrapper bg_white">
    <scroller  show-scrollbar="false">
      <loginHeader  :data="data" v-show="isshow"></loginHeader> 
      <div class="login_out bg_white">
    
        <image :class="[isIPhoneX?'bb8_logo':'default_bb8_logo']" resize="cover" :src="get_img_path('login_biwei.png')"></image>
          <div class="input_wrapper">  
                <input onchange="onchangeUserNumber" class="input bg_gray" type="text" placeholder="请输入用户名/手机号/邮箱" value="" v-model="userNumber"/>  
                <image class="input_img" :src="get_img_path('mobile.png')"></image>  
            </div>  
            <div class="input_wrapper">  
                <input onchange="onchangeUserPassword" class="input bg_gray" type="password" placeholder="请输入密码" value="" v-model="userPassword"/>  
                <image class="input_img" :src="get_img_path('password.png')"></image>  
            </div>  
             <div :class="[isAndroid?'android_input_wrapper':'input_wrapper']">  
                <!--<text class="input-forget" >注册</text>  -->
                <div :class="[isAndroid?'android_register_out':'input_fastlogin_out']">
                  <div class="register_out">
                    <text class="input_register color1"  @click="jump('/fastLogin')">快速登录</text>
                  </div>
               </div>
               <div :class="[isAndroid?'android_register_out':'input_register_out']">
                  <div class="register_out">
                    <text class="input_register color1"  @click="jump('/register')">注册 /</text>
                    <text class="input_register color1"  @click="findPassword()"> 忘记密码?</text>
                  </div>
               </div>
            </div>  


            <div class="input_wrapper">  
                <div class="input_login" @click="login()">  
                    <text class="input_login_text color1">登录</text>  
                </div>  
            </div>  
    
       
        <!--<wxc-button text="登录" class="btn_login" :text-style="textStyle">@click="jump('/webview')"</wxc-button>-->
        <div :class="[isIPhoneX?'login_footer':'login_footer_default']">
             <div class="login_bb8_out">
             <image class="login_bb8" resize="cover" :src="get_img_path('login_bb8.png')"></image>
             </div>
            <div class="footer_out" @click="openProtocol()">
                <text class="color2 small_text">登录即同意</text>
                <text class="color1 small_text" >《隐私权政策》</text>
            </div>
         </div>
      </div>
        <wxc-loading :show="isShowLoad"
                 :type="type"
                 :loading-text="loadingText"
                 :interval="interval"></wxc-loading>
   </scroller>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import loginHeader from './loginHeader.vue'
  import { WxcLoading,WxcButton } from 'weex-ui'
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    components: {WxcLoading,loginHeader,WxcButton},
    data: () => ({
        fontSize: '15px',
        color: '#292b32',
        userNumber:'',  
        userPassword:'',
        data:{title:"登录"},
        isshow:false,
        isShowLoad:false,
        loginData:{},
        interval: 0,
        type: 'default',
        loadingText: '加载中'
    }),
    computed: {
      textStyle () {
        const { fontSize, color } = this;
        const customStyle = {};
        if (fontSize) {
          customStyle.fontSize = fontSize;
        }
        if (color) {
          customStyle.color = color;
        }
        return {
          fontSize, color
        }
      },
      isIPhoneX () {
        return util.env.isIPhoneX()
      },
      user () {
        return {userId:"fengfeng",created:"20180215",karma:"xfjdllgmmdd",about:"42523252"}
      }
    },
    created () {
        this.isshow=true;
    },
    mounted(){
    
    },
    methods:{  
        isAndroid () {
            return util.env.isAndroid()
        },
        openLocalWebView(url){
            event.openWebView(url,"隐私权政策");
        },
        onchangeUserNumber:function (event) {  
            this.userNumber = event.value;  
        },  
        onchangeUserPassword:function (event) {  
            this.userPassword = event.value;  
        },  
        /*找回密码*/  
        findPassword:function () {  
            this.$router.push({path:"/modifySendCode",query:{"title":"忘记密码"}})
        },  
        openProtocol:function () {  
             this.$router.push({path:"/loginDisclaimer",query:{"title":"免责申明"}})
        },  
        /*注册*/  
        register:function () {  
            this.$router.push({ path: '/home' })
            // this.$vm('toast').$emit('toast','Hello,注册暂时未开发，后续我们会进行完善。');  
        },  
        //获取cookie
        getCookie: function (cname) {
            var name = cname + "=";
            var ca = weex.document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        /*处理登录*/  
        login: function () {  
            var self = this;
         
            if(this.userNumber.length < 1){  
                modal.toast({ message:'请输入手机号'});
                return;  
            }else if(this.userPassword.length < 1){  
                modal.toast({ message:'请输入密码'});
                return;  
            }  
            self.isShowLoad = true;
            apis.requireLogin({
                "account" : self.userNumber,
                "password" : self.userPassword, 
               
            },function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    modal.toast({ message:'登录成功',duration:0.5});
                    self.loginData = res.data;
                     event.isLoginGlobalEvent("login",true);
                     event.dismissViewController("");
                    //    modal.toast({message:weex.document.cookie,duration:1});
                    // console.log("ooo")
                    // console.log("ooo"+weex.document.cookie)
                    // //  self.getCookie("bb8_login_token");
                    // console.log("getCookie"+ self.getCookie("bb8_login_token"));
                    //  modal.toast({ message: self.getCookie("bb8_login_token")});
                    // if(event.dismissViewController("") != undefined){
                    //     event.isLoginGlobalEvent("login",true);
                    //     // event.dismissViewController("");
                       
                    // }
                    console.log(res.data)
                }else{
                    modal.toast({message:res.respond.msg,duration:1});
                }
                
            });
        }  
    }  
  }
</script>

<style scoped>
.small_text{
    font-size: 24px
}
.login_footer_default{
    width:750px;
    position:fixed;
    bottom:50px;
    left: 0;right: 0;
    z-index: 10;
    text-align:center;
    font-size: 18px;
}
.login_footer{
    width:750px;
    position:fixed;
    bottom:150px;
    left: 0;right: 0;
    z-index: 10;
    text-align:center;
    font-size: 18px;
}
.btn_login{
    background-color:#ffe45f;
    margin-top: 50px
}
.login_out {
    width:750px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.bb8_logo{
    width:120px;
    height: 58px;
    margin-top:120px;
    margin-bottom: 160px;
}
.default_bb8_logo{
    width:120px;
    height: 58px;
    margin-top:100px;
    margin-bottom: 130px;
}
.login_bb8{
   width: 240px;
   height: 50px;
}
.login_title{
    padding-top: 30px
}
.input_wrapper{  
    width: 650px;  
    margin-left: 100px;  
    margin-right: 100px;  
    margin-bottom: 40px;  
}  
.android_input_wrapper{
    width: 650px;  
    margin-left: 100px;  
    margin-right: 100px;  
    margin-bottom: 40px;  
    flex-direction:row;
    justify-content:space-between;

}
.input {  
    height: 85px;  
    width: 650px;  
    padding-left: 70px;  
    padding-top: 15px;  
    padding-bottom: 15px;  
    border-color: #eeeeef;  
    border-radius:10px;  
    outline: none;  
    font-size: 28px;
    placeholder-color:#c2c2c2
}  
.input_img{  
    position: absolute;  
    top:21px;  
    left: 18px;  
    width:40px;  
    height: 40px;  
}  
.input_login{  
    height: 85px;  
    width: 650px;  
    border-radius: 10px;  
    margin-top: 80px;  
    background-color: #ffe45f;
}
.input_login:active{  
    background-color: #FFED93;
}    
.input_login_text{  
    height: 85px;  
    width: 650px;  
    text-align: center;  
    line-height: 85px;  
    font-size: 30px
  
}  
.login_text{
    font-size: 30px
}
.input_forget{  
    position: absolute;  
    left: 30px;  
}  
.input_register_out{
    position: absolute;  
    left: 10px;  
    height:40px;
    font-size: 24px;
}
.input_fastlogin_out{
    position: absolute;  
    right: 10px;  
    height:40px;
    font-size: 24px;
}
.input_register{

    font-size: 30px;
}
.register_out{
   flex-direction:row;
   justify-content:center;
}
.footer_out{
   flex-direction:row;
   justify-content:center;
   width: 750px;
   height: 40px;
}
.login_bb8_out{
   flex-direction:row;
   justify-content:center;
   margin-bottom: 50px;
}
</style>
