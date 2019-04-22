<template>
  <div class="wrapper bg_white">
     <scroller>
     <wxc-minibar 
                   :background-color="getMainColor()"
                   text-color="#FFFFFF"
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick">
                   <div slot="left">
                       <image :src="get_img_path('back.png')" style="height: 50px;width: 50px"></image>
                   </div>
                   <text style="font-size: 37px;color: white" slot="middle">我的团队</text>
                   <div slot="right"></div>
                   </wxc-minibar>
      <div class="about_out">
         <image class="null_logo" resize="cover" :src="get_img_path('null_logo.png')"></image>
         <div class='main_centent'>
            <text class='text_one'>{{textone}}</text>
        </div>
      </div>
    </scroller>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>

  import { WxcLoading,WxcCell,WxcMinibar } from 'weex-ui';
  import { RETURN_ICON } from '../../assets/js/type';
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    components: {WxcLoading,WxcCell,WxcMinibar},
    data: () => ({
        leftButton: RETURN_ICON,
        textone:'您还没有加入任何团队'
    }),
    computed: {
     
    },
    created () {
        var self= this;
    },
    methods:{  
     minibarLeftButtonClick () {
         event.dismissViewController("")
      },

    }  
  }
</script>

<style scoped>
   .toolbar_img{
        width: 40px;
        height: 40px;
    }
    .toolbar_text{
        font-size: 40px;
        color: white
    }
.about_out{
   width: 750px;
   justify-content: center;
   align-items: center;
}
.null_logo{
    width:150px;
    height: 150px;
    margin-top:120px;
    margin-bottom: 100px;
}
.main_centent{
    padding-top:20px;
    padding-left:40px;
    padding-right:30px
}
    .text_one{
    color:#3a3a3a;
    font-size: 28px;
    line-height: 55px;
}
.phone_image{
    width: 55px;
    height: 55px;
    margin-right: 20px;
}
.default_image{
    width: 90px;
    height: 90px;
    margin-right: 30px;
}
.personal_center{
    width: 750px;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
}
.exit_btn_out{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 10px;  
    margin-top: 15px;
    border-color:#000000;
    border-width: 1px;
}
.exit_btn{
    font-size: 30px
}
.user_name{
    font-size: 30px;
    margin-top: 15px
}
.personal_header{
    width: 750px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   padding-top: 80px;
   padding-bottom: 80px;

}
.personal_out{
    justify-content: center;
    align-items: center;
}
.user_logo{
    width:120px;
    height: 120px;
}

</style>
