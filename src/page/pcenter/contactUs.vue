<template>
  <div class="wrapper bg_gray">
     <scroller>
       <wxc-minibar 
                   :background-color="getMainColor()"
                   text-color="#FFFFFF">
                   <div slot="left">
                       <image :src="get_img_path('back.png')" style="height: 50px;width: 50px"></image>
                   </div>
                   <text style="font-size: 37px;color: white" slot="middle">商户巡检</text>
                   <div slot="right"></div>
                   </wxc-minibar>
      <div class="personal_out">

        <div class="personal_center">
         
            <div class="personal_info">
               <wxc-cell 
                    title="万事如意茶馆"
                    :has-arrow="true"
                    @wxcCellClicked="goAboutUs()"
                    :has-top-border="false">
                    <image class="phone_image"
                     slot="label"
                    :src="get_img_path('about_us.png')"
                    ></image>
                </wxc-cell>
                <wxc-cell 
                    title="路飞酒庄"
                    :has-arrow="true"
                    @wxcCellClicked="goDisclaimer()"
                    :has-top-border="false">
                    <image class="phone_image"
                     slot="label"
                    :src="get_img_path('declare.png')"
                    ></image>
                </wxc-cell>
                 <wxc-cell 
                    title="吉祥如意商行"
                    :has-arrow="true"
                    @wxcCellClicked="goDisclaimer()"
                    :has-top-border="false">
                    <image class="phone_image"
                     slot="label"
                    :src="get_img_path('declare.png')"
                    ></image>
                </wxc-cell>
            </div>
        </div>
        
      </div>
    </scroller>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import pcenterHeader from './pcenterHeader.vue'
  import { WxcLoading,WxcCell,WxcMinibar } from 'weex-ui';
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  const globalEvent = weex.requireModule('globalEvent');
  export default {
    components: {WxcLoading,pcenterHeader,WxcCell,WxcMinibar},
    data: () => ({
        fontSize: '15px',
        color: '#292b32',
        infoInData:"http://www.51bb8.com"
    }),
    computed: {
     
    },
    created () {
        var self= this;
    },
    methods:{  

        goDisclaimer(){
            event.openURL("index.js?#/disclaimer","免责声明","push");
        },
        goAboutUs () {
            event.openURL("index.js?#/aboutUs","关于我们","push");
        },
    }  
  }
</script>

<style scoped>
.label_out{
    flex-direction: row;
    justify-content: flex-start;
    align-items: center
}
.label_out_text{
    width: 220px;
    font-size: 28px
}
.personal_out{
    justify-content: center;
    align-items: center;
    width: 750px;
}
.personal_center{
    width: 750px;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
}
.personal_info{
    width: 750px;
    margin-top: 20px;
    margin-bottom: 200px
}
.phone_image{
    width: 40px;
    height: 40px;
    margin-right: 20px;
}
</style>
