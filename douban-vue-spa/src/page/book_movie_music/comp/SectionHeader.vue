<template>
    <div class="section">
      <span class="left">今日推荐</span>
      <span class="right">全部11<i></i></span>
    </div>
</template>

<script>
    export default {
        name: "section-header"
    }
</script>

<style lang="less" scoped>
  .section {
    position: relative;
    height: 50px;
  }

  .left {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }

  .right {
    position: absolute;
    right: 10px;
    bottom: 10px;

    font-size: 13px;
    color: #9b9b9b;

    i {
      width: 15px;
      height: 15px;
      background-image: url("../../../assets/images/arrow-right.png");
    }
  }
</style>
