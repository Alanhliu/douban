<template>
  <div class="sub-tv">
    TV
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="item in recommend_items">

        <recommend-card
          :card_tag=item.card_tag
          :card_desc=item.card_desc>

        </recommend-card>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
    import RecommendCard from '../comp/RecommendCard'

    export default {
      name: "t-v",
      data() {
        return {
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
      components: {
        RecommendCard
      },
      methods: {
        callback() {
          console.log(1);
        }
      }
    }
</script>

<style lang="less" scoped>

</style>
