<template>
    <div class="search-header">
      <div class="search-header-left">
        <div class="search-box">
          <div class="search-header-item search-box-left">
            <slot name="search-box-left"></slot>
          </div>
          <div class="search-header-item search-box-center">
            <slot name="search-box-center"></slot>
          </div>
          <div class="search-header-item search-box-right">
            <slot name="search-box-right"></slot>
          </div>
        </div>
      </div>

      <div class="search-header-right">
        <div class="search-header-item search-header-right-box">
          <slot name="search-header-right-item"></slot>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "search-header",
        props: {
          searchBoxLeftImg: {
            type:String
          },
          searchBoxLeftText: {
            type:String
          },
          searchBoxRightImg: {
            type:String
          },
          searchBoxRightText: {
            type:String
          }
        }
    }
</script>

<style lang="less" scoped>

  .search-header {
    width: 100%;
    background: #42bb54;
    display: flex;
  }

  .search-header-left {
    width: 85%;
  }

  .search-header-right {
    width: 15%;
  }

  .search-header-item {
    //使img水平，垂直居中
    display:flex;
    align-items:center;
    justify-content:center;
    img {
      width: 20px;
      height: 20px;
    }
  }

  .search-header-right-box {
    height: 30px;
    margin: 26px 8px 8px 0;
    border-radius: 5px;
  }

  .search-box {
    position: relative;

    height: 30px;
    margin: 26px 8px 8px;
    background: white;
    border-radius: 5px;
  }

  .search-box-left {
    position: absolute;
    left: 0;
    height: 100%;
    width: 40px;
  }

  .search-box-right {
    position: absolute;
    right: 0;
    height: 100%;
    width: 40px;
  }

  .search-box-center {
    position: absolute;
    left: 50px;
    height: 100%;
    display:flex;
    align-items:center;
    span {
      font-size: 12px;
      color: grey;
    }
  }
</style>
