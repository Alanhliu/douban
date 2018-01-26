<template>
    <div class="page">
      <m-search-header>
        <img slot="search-box-left" src="../../assets/images/search.png" alt="">
        <span slot="search-box-center">{{placeholder}}</span>
        <img slot="search-box-right" src="../../assets/images/qrcode.png" alt="">
        <img slot="search-header-right-item" src="../../assets/images/chat.png" alt="">
      </m-search-header>
    </div>
</template>

<script>
  import mSearchHeader from "../../components/SearchHeader"
    export default {
        data() {
          return {
            placeholder:"影视 图书 唱片 小组 舞台剧等"
          }
        },
        name: 'home',
        components: {
          mSearchHeader
        }
    }
</script>

<style lang="less" scoped>

</style>
