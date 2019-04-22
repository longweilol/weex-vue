<template>
  <div class="wrapper bg_gray">
       <wxc-minibar 
                   :background-color="getMainColor()"
                   text-color="#FFFFFF">
                   <div slot="left">
                       <image :src="get_img_path('back.png')" style="height: 50px;width: 50px"></image>
                   </div>
                   <text style="font-size: 37px;color: white" slot="middle">商户巡检</text>
                   <div slot="right"></div>
                   </wxc-minibar>
      <div class="mer_out ">
        <div class="mer_center">
            <text class="mer_name">万事如意茶馆</text>
            <div class="flex_row">
                <div class="flex_column">
                    <text class="mer_status">进行中</text>
                    <text class="mer_date">2019-4-22</text>
                </div>
                <img class="next_icon" :src="nextIcon"/>
            </div>
        </div>
        <div class="mer_center">
            <text class="mer_name">吉祥如意商行</text>
            <div class="flex_row">
                <div class="flex_column">
                    <text class="mer_status" style="color:green">已完成</text>
                    <text class="mer_date">2019-4-22</text>
                </div>
                <img class="next_icon" :src="nextIcon"/>
            </div>
        </div>
        <div class="mer_center">
            <text class="mer_name">万事如意茶馆</text>
            <div class="flex_row">
                <div class="flex_column">
                    <text class="mer_status">进行中</text>
                    <text class="mer_date">2019-4-22</text>
                </div>
                <img class="next_icon" :src="nextIcon"/>
            </div>
        </div>
      </div>

  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import { WxcLoading,WxcCell,WxcMinibar } from 'weex-ui';
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  const globalEvent = weex.requireModule('globalEvent');
  import { NEXT_ICON } from '../../assets/js/type';
  export default {
    components: {WxcLoading,WxcCell,WxcMinibar},
    data: () => ({
        nextIcon:NEXT_ICON,
        fontSize: '15px',
        color: '#292b32',
        infoInData:"http://www.51bb8.com"
    }),
    created () {
        var self= this;
    },
    methods:{  
        inMerInfo () {
            event.openURL("index.js?#/aboutUs","","push");
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
.mer_out{
    justify-content: center;
    align-items: center;
    width: 750px;
}
.mer_center{
    width: 750px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
    border-bottom-color:#E2E2E2;
    border-bottom-width: 1px;
    margin-top: 10px;
    padding: 20px;
    background-color: white

}
.mer_center:active{
    background-color: #F5F5F5;
}
.flex_row{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.flex_column{
    flex-direction: column;
    justify-content: space-between;
    align-items: center
}
.mer_name{
    font-size: 33px;
    color: black;
}
.mer_status{
    font-size: 25px;
    color: orange;
}
.mer_date{
    margin-top: 10px;
    font-size: 25px;
    color: #999999
}
.next_icon{
    width: 20px;
    height: 20px;
    margin-left: 20px;
}
.mer_info{
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
