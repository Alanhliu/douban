<template>

  <div class="find-mine-box">
    <find-mine-item :width="55" :title="'找电影'" :sub-title="'科幻/喜剧/悬疑'"></find-mine-item>
    <find-mine-item :width="45" :title="'我的影视'" :sub-title="'25部'"></find-mine-item>
  </div>
</template>

<script>
    import FindMineItem from './FindMineItem'
    export default {
        name: "fine-mine-box",
        components: {
          FindMineItem
        }
    }
</script>

<style lang="less" scoped>
  .find-mine-box {
    display: flex;
    border-bottom:1px solid #ededed;
    border-top:1px solid #ededed;
  }
</style>
