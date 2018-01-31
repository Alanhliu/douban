<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}" :style="{'text-align':paginationDirection}"></div>
  </div>
</template>
<script>
  import './js/swiper'
  export default {
    props: {
      swipeid: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: true
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      autoplay: {
        type: Number,
        default: 3000,
      },
      paginationType: {
        type: String,
        default: 'bullets'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      paginationDirection:{
        type:String,
        default:'center'
      }
    },
    mounted() {
      var self = this;
      new Swiper('.'+self.swipeid, {
        //循环
        loop: self.loop,
        //分页器
        pagination: '.swiper-pagination',
        //分页类型
        paginationType: self.paginationType, //fraction,progress,bullets
        //自动播放
        autoplay: self.autoplay,
        //方向
        direction: self.direction,
        //特效
        effect: self.effect, //slide,fade,coverflow,cube
        //用户操作swiper之后，是否禁止autoplay
        autoplayDisableOnInteraction : false,
      })
    }
  }


</script>
<style lang="less" scoped>
  .swiper-container {
    width: 350px;
    height: 200px;
    background: red;

    img {
      /*width: 100%;*/
    }
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }

</style>
