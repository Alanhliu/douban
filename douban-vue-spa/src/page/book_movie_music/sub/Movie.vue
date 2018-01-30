<template>
    <div class="sub-movie">
      <scroll ref="scroll"
              :data="items">
        <div class="header">
          <img src="" alt="">
        </div>
        <section-header>

        </section-header>
        <swiper swipeid="swipe01" :autoplay="3000" paginationDirection="center">
          <div class="swiper-slide " slot="swiper-con"><img src="../../../assets/images/tabbar_item.png" alt=""></div>
          <div class="swiper-slide " slot="swiper-con"><img src="../../../assets/images/tabbar_item.png" alt=""></div>
          <div class="swiper-slide " slot="swiper-con"><img src="../../../assets/images/tabbar_item.png" alt=""></div>
        </swiper>

        <ul class="list-content">
          <li class="list-item" v-for="item in items">{{item}}</li>
        </ul>
      </scroll>
    </div>
</template>

<script>
    import scroll from '../../../components/scroll/scroll'
    import SectionHeader from '../comp/SectionHeader'
    import swiper from '../../../components/swiper/swiper'
    export default {
      name: "movie",
      components: {
        scroll,
        SectionHeader,
        swiper
      },
      data() {
        return {
          items: [],
        }
      },
      created() {
        for (let i = 0; i < 50; i++) {
          this.items.push(i);
        }
      },
    }
</script>

<style lang="less" scoped>
  .sub-movie {
    height: 400px;
  }

  .header {
    height: 40px;
    background: red;
  }
</style>
