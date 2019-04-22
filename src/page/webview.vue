<template>
    <div class="wrapper">
        <image class="close_content" resize="cover" :src="get_img_path('wx_close.png')"  @click="closeBack()"></image>
        <!-- <div :class="['toolbar', isipx?'t-ipx':'']">
            <div class="left">
                <text class="btnTxt iconfont"  @click="back">&#xe606;</text>
                <text class="btnTxt iconfont"  @click="close">&#xe68b;</text>
            </div>
            <text class="tlt">{{tlt}}</text>
            <div class="right">
                <text class="btnTxt iconfont" @click="reload">&#xe601;</text>
            </div>
        </div> -->
        <div :class="['webview-box', isipx?'web-ipx':'']">
         <web ref="wv" class="webview" :src="url" @error="error"></web>
        </div>
         <!-- <web style="width: 730px; height: 500px" src="http://www.baidu.com"></web> -->
    </div>
</template>
<script>
    const navigator = weex.requireModule('navigator')
    const webview = weex.requireModule('webview')
    const modal = weex.requireModule('modal')
    const event = weex.requireModule('event')
    import util from '../common/util'
    import loginHeader from './login/loginHeader.vue'

    export default {
      components: {loginHeader},
        date:{
            tlt:'',
            data:{title:""},
        },
         beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
        },
        created () {
            console.log('webPageURL...', weex.config.bundleUrl )
            util.initIconFont();

            let bundleUrl=weex.config.bundleUrl;
            // this.url=util.getUrlSearch(bundleUrl,'weburl')
            this.url="http://www.51bb8.com/web/policy.docx"
            // modal.toast({ message: weburl,  duration: 1 })

            // this.url=util.setBundleUrl(bundleUrl,weburl,true);
             this.tlt=util.getUrlSearch(bundleUrl,'title')

             modal.toast({ message: this.url,  duration: 1 })

            console.log('webPageURL', this.url )
        },
        computed:{
            isipx : function() {
                return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
            }
        },
        methods: {
            back (event) {
                webview.goBack(this.$refs.wv);
            },
            close (event) {
                navigator.pop({
                    animated:"true"
                });
            },
            reload (event) {
                webview.reload(this.$refs.wv)
            },
            error (event) {
               console.log('error', event)
            },
            closeBack(){
               this.jumpBack();
         }
        }
    }
</script>
<style scoped>
    .close_content{
        position: absolute;
        left: 40px;
        width: 60px;
        height: 60px;
        top:100px
    }
    .wrapper{
        position: absolute;
        left: 0;
        right:0;
        bottom: 0;
        top:0;
    }
    .iconfont {
        font-family:iconfont;
    }

    .toolbar{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        background-color: #fafafa;
        opacity: .99;
        z-index: 101;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .t-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .tlt{
        flex: 1;
        font-size: 36px;
        padding-top: 10px;
        color:#333;
        text-align: center;
    }
    .left,.right{
        height: 68px;
        width: 150px;
        padding-top:10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
    .left{
        justify-content: flex-start;
        padding-left: 20px;
    }
    .right{
        justify-content: flex-end;
        padding-right: 20px;
    }
    .btnTxt{
        font-size: 40px;
        width: 70px;
        color:#666;

        text-align: center;
    }
    .webview-box {
        position: absolute;
        width: 750px;
        top: 124px ;
        left: 0;
        right:0;
        bottom: 0;
    }
    .web-ipx{
        top:164px;
    }
    .webview{
        position: absolute;
        width: 750px;
        top: 0 ;
        left: 0;
        right:0;
        bottom: 0;
    }

</style>