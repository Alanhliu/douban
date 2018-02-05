<template>
    <div class="sub-movie" ref="content">
      <scroll ref="scroll"
              :data="items">

        <!--年度电影-->
        <div class="header">
          <img src="" alt="">
        </div>

        <!--推荐header-->
        <section-header></section-header>

        <!--推荐横向滚动-->
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide :style="swiperSlideStyle" v-for="item in recommend_items" :key=item.id>
            <recommend-card
              :card_tag=item.card_tag
              :card_desc=item.card_desc>
            </recommend-card>
          </swiper-slide>
        </swiper>

        <!--找电影 & 我的影视-->
        <div class="find-mine-box">
          <find-mine-box></find-mine-box>
        </div>

        <ul class="list-content">
          <li class="list-item" v-for="item in items" :key=item>{{item}}</li>
        </ul>

      </scroll>

    </div>
</template>

<script>
    import scroll from '../../../components/scroll/scroll'
    import SectionHeader from '../comp/SectionHeader'
    import RecommendCard from '../comp/RecommendCard'
    import FindMineBox from '../comp/FindMineBox'

    export default {
      name: "movie",
      components: {
        scroll,
        SectionHeader,
        RecommendCard,
        FindMineBox
      },
      mounted() {
        // let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // this.$refs.content.style.height = h-64-44-60 +'px';
      },
      data() {
        return {
          items: [],
          swiperOption: {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
            loop: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },
          swiperSlideStyle: {
            width:'60%'
          },
          recommend_items: [
            {"id":1,"card_tag":"闪光时刻","card_desc":"大雪纷飞的圣丹斯，2018年第一批爆款佳片火热出炉！"},
            {"id":2,"card_tag":"缤纷盘点","card_desc":"二月将映新片盘点！告诉你春节档电影哪家强"},
            {"id":3,"card_tag":"缤纷盘点","card_desc":"二月将映新片盘点！告诉你春节档电影哪家强"},
            {"id":4,"card_tag":"缤纷盘点","card_desc":"二月将映新片盘点！告诉你春节档电影哪家强"},
            {"id":5,"card_tag":"缤纷盘点","card_desc":"二月将映新片盘点！告诉你春节档电影哪家强"},
          ]
        }
      },
      created() {
        for (let i = 0; i < 50; i++) {
          this.items.push(i);
        }
      },
      methods: {
        callback: function () {
          console.log(this.$ref.mySwiper.index);
        }
      }
    }
</script>

<style lang="less" scoped>
  .sub-movie {
    /*margin-top: 4px;*/
    /*height: 400px;*/

    position: absolute;
    top: 64+46+3px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .header {
    height: 40px;
    background: red;
  }

  .find-mine-box {
    margin-top: 30px;
    height: 55px;
  }

</style>
