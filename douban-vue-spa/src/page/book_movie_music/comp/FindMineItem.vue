<template>
    <div class="find-mine-item" :style="findMineItemStyle">
      <div class="item-box left-box">
        <div class="icon" :style="iconStyle"></div>
      </div>

      <div class="item-box center-box">
        <div class="title">{{title}}</div>
        <div class="sub-title">{{subTitle}}</div>
      </div>

      <div class="item-box right-box">
        <div class="arrow"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "find-mine-item",

        data() {
          return {
            findMineItemStyle: {
              width: this.$props.width+'%'
            },
            iconStyle: {
              backgroundImage:'url('+this.$props.icon+')',
            }
          }
        },

        props: {
          width: {
            default: 50,
            type: Number
          },
          icon: {
            default: "",
            type: String
          },
          title: {
            type: String
          },
          subTitle: {
            type: String
          }
        }
    }
</script>

<style lang="less" scoped>

  .find-mine-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .item-box {

  }

  .center-box {
    margin-left: 10px;
  }

  .right-box {
    position: absolute;
    right: 15px;
  }

  .icon {
    margin-left: 10px;
    width: 30px;
    height: 30px;
    background: red;
  }
  .title {
    font-size: 13px;
  }
  .sub-title {
    font-size: 11px;
    color: #969696;
  }
  .arrow {
    width: 15px;
    height: 15px;
    background: red;
    /*background-image: url("");*/
  }
</style>
