<template>
    <div class="home-cell">
      <div class="top">
        <div class="tag item-box">
          今日热点
        </div>
      </div>

      <div class="center">
        <div class="center-left">
          <div class="item-box">
            <div class="title">在往事中幼稚--小时候那些朦朦胧胧的性</div>
            <div class="desc">上初中后，我变成了个不和女生说话的人。在往事中幼稚--小时候那些朦朦胧胧的性，上初中后，我变成了个不和女生说话的人。</div>
          </div>
        </div>

        <div class="center-right">
          <div class="thumbnail"></div>
        </div>
      </div>

      <div class="bottom">
        <div class="item-box">
          <div class="author">
            <i></i><span>狄飞惊</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home-cell",

        props: {
          item: {
            default: '',
          }
        }
    }
</script>

<style lang="less" scoped>
  .home-cell {
    border-top: 10px solid #f5f5f5;
  }

  .item-box {
    margin-left: 15px;
  }

  .top {
    margin: 5px 0 5px;

    .tag {
      font-size: 11px;
    }
  }

  .center {
    display: flex;

    .center-left {
      width: 70%;

      .title {
        font-size: 17px;
      }

      .desc {
        font-size: 12px;
        color: #929292;
        vertical-align: bottom;
        margin-top: 5px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }

    .center-right  {

      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      .thumbnail {
        width: 80px;
        height: 80px;
        background: yellow;
        vertical-align: bottom;
        /*background-image: url("../../../assets/images/qrcode.png");*/
      }
    }
  }

  .bottom {
    margin-bottom: 5px;
    span {
      font-size: 12px;
      color: #929292;
    }
  }


</style>
