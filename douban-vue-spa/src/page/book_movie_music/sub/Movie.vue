<template>
    <div class="sub-movie">
      <scroll ref="scroll"
              :data="items">

        <div class="header">
          <img src="" alt="">
        </div>

        <section-header></section-header>

        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
          <!-- slides -->
          <swiper-slide v-for="item in recommend_items">
            <recommend-card
              :card_tag=item.card_tag
              :card_desc=item.card_desc>
            </recommend-card>
          </swiper-slide>
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
    import RecommendCard from '../comp/RecommendCard'

    export default {
      name: "movie",
      components: {
        scroll,
        SectionHeader,
        RecommendCard
      },
      data() {
        return {
          items: [],
          swiperOption: {
            slidesPerView: 1.8,
            spaceBetween: 10,
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
          recommend_items: [
            {"card_tag":"闪光时刻","card_desc":"大雪纷飞的圣丹斯，2018年第一批爆款佳片火热出炉！"},
            {"card_tag":"缤纷盘点","card_desc":"二月将映新片盘点！告诉你春节档电影哪家强"},
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
    margin-top: 4px;
    height: 400px;
  }

  .header {
    height: 40px;
    background: red;
  }
</style>
