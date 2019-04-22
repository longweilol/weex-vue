<template>
    <div class="main_out">
      <wxc-minibar :background-color="getMainColor()"
                   text-color="#FFFFFF"
                   :left-button="leftButton"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick">
                   <div slot="left">
                   </div>
                   <text style="font-size: 37px;color: white" slot="middle">地推</text>
                   <image :src="get_img_path('me.png')" @click="goAboutUs()" slot="right" style="height: 50px;width: 50px"></image>
                   </wxc-minibar>

        <div class="main_content">
          <div class="main_rows">
            <div class="main_item"  @click="inMerInspection()">
                <image :src="get_img_path('mer_inspection.png')" class="item_image"></image>
                <text class="item_text">商户巡检</text>
            </div>
            <div class="main_item">
                <image :src="get_img_path('mer_expand.png')" class="item_image"></image>
                <text class="item_text">商户拓展</text>
          </div>
        </div>
        <div class="main_rows">
            <div class="main_item">
                <image :src="get_img_path('statis_report.png')" class="item_image"></image>
                <text class="item_text">统计报告</text>
            </div>
            <div class="main_item">
                <image :src="get_img_path('my_earn.png')" class="item_image"></image>
                <text class="item_text">我的收益</text>
          </div>
        </div>
        <div class="main_rows">
            <div class="main_item">
                <image :src="get_img_path('work_locus.png')" class="item_image"></image>
                <text class="item_text">工作轨迹</text>
            </div>
            <div class="main_item">
                <image :src="get_img_path('plan_management.png')" class="item_image"></image>
                <text class="item_text">计划管理</text>
          </div>
        </div>
      </div>
      <div class="main_banners">
      <slider class="slider size" auto-play="true" interval="3000">
        <div v-for="post in posts">
          <image class="size" resize="cover" :src="post.pic" @load="onload" ></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
      </div>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  const stream = weex.requireModule('stream') || {};
  import { WxcMinibar } from 'weex-ui';
  import { RETURN_ICON } from '../../assets/js/type';
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    data: () => ({
      leftButton: RETURN_ICON,
        posts: [],
        loading: true,
        requestData:{
          category:""
        }
    }),
    components: { WxcMinibar },
    created: function() {
      const self = this;
      self.requestData.category = "appIndexTop"
         apis.requireBannerList(self.requestData,function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    self.posts = res.data.ads;
                 }else{
                    modal.toast({message:res.respond.msg,duration:1});
                }
                
            });
    },
    methods: {
      onload: function(e) {
        
      },
      goAboutUs () {
          event.openURL("index.js?#/aboutUs","关于我们","push");
      },
      inMerInspection () {
          event.openURL("index.js?#/inspection","","push");
      },
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  };
</script>
<style scoped>
  .main_out{
    
  }
  .main_content{
    flex: 4;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }
  .main_banners{
    flex: 1;
    justify-content: center;
    align-items: center
  }
  .main_rows{
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    width: 730px;
  }
  .main_item{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 350px;
    border-radius: 10px;
    background-color: white;
    margin: 10px;
  }
  .main_item:active{
    background-color: #F5F5F5;
  }
  .item_image{
    width: 120px;
    height: 120px;
  }
  .item_text{
    font-size: 28px;
    color: black;
    margin-top: 22px;
  }

  .loading-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }
  .loading {
    width: 60px;
    height: 60px;
  }
  .size {
    width: 750px;
    height: 200px;
  }
  .slider {
    position: relative;
  }
  .author {
    padding: 5px 10px;
    position: absolute;
    right: 0px;
    bottom: 65px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .source {
    padding: 5px 10px;
    position: absolute;
    right: 0px;
    bottom: 10px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60px;
    background-color: rgba(0, 0, 0, 0);
    item-color: #ddd;
    item-selected-color:#0056d3;
  }
</style>
