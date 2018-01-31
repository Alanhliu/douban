<template>
    <div class="box">
      <img class="pic" src="" alt="">
      <span class="tag">{{card_tag}}</span>
      <div class="text">
        <div>
          {{card_desc}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "recommend-card",
        props: {
          card_tag: {
            type: String,
          },
          card_desc: {
            type: String
          },
          card_img: {
            type: String
          }
        }
    }
</script>

<style lang="less" scoped>
    .box {
      position: relative;
      width: 200px;
      height: 180px;
      background: yellow;

      .pic {

      }
      .tag {
        position: absolute;
        left: 10px;
        bottom: 36%;
        background: white;
        font-size: 12px;
        height: 20px;
        border-radius: 5px;
        padding: 2px 3px 2px 3px;
      }
      .text {
        position: absolute;
        background: red;
        height: 35%;
        left: 0;
        bottom: 0;
        right: 0;

        div {
          padding: 5px 5px 0 5px;
          font-size: 15px;
          color: white;
        }
      }
    }
</style>
