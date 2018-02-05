<template>
    <div class="normal-header">
      <div class="header-left-items header-items-box">
        <div class="header-item header-left-item">
          <slot name="header-left-item1"></slot>
        </div>
        <div class="header-item header-left-item">
          <slot name="header-left-item2"></slot>
        </div>
      </div>
      <div class="header-center-items header-items-box">
        <div class="header-item header-center-item">
          <slot name="header-center-item"></slot>
        </div>
      </div>
      <div class="header-right-items header-items-box">
        <div class="header-item  header-right-item">
          <slot name="header-right-item1"></slot>
        </div>
        <div class="header-item  header-right-item">
          <slot name="header-right-item2"></slot>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "normal-header"
    }
</script>

<style lang="less" scoped>
  .normal-header {
    width: 100%;
    background: white;
    display: flex;
    border-bottom:1px solid #ededed;
  }

  .header-items-box {
    height: 30px;
    margin: 25px 8px 8px 0;
  }

  .header-left-items {
    width: 35%;
  }

  .header-center-items {
    width: 30%;
  }

  .header-right-items {
    width: 35%;
  }

  .header-right-item {
    float: right;
    margin-right: 10px;
  }

  .header-left-item {
    float: left;
    margin-left: 10px;
  }

  .header-item {

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 15px;
    }
    font-size: 13px;
  }

</style>
