<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="../../assets/images/tabbar_item.png">
        tab1
      </mt-tab-item>
      <mt-tab-item id="BookMovieMusic">
        <img slot="icon" src="../../assets/images/tabbar_item.png">
        tab2
      </mt-tab-item>
      <mt-tab-item id="Broadcast">
        <img slot="icon" src="../../assets/images/tabbar_item.png">
        tab3
      </mt-tab-item>
      <mt-tab-item id="Group">
        <img slot="icon" src="../../assets/images/tabbar_item.png">
        tab4
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <img slot="icon" src="../../assets/images/tabbar_item.png">
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    import {Tabbar,TabItem} from 'mint-ui'
    export default {
        name: 'Main',
        data(){
         return { selected: 'Home'}
        },
        components: {
          mtTabbar: Tabbar,
          mtTbaItem: TabItem
        },
        watch: {
          selected: function (val,oldVal) {
            console.log(val);
            this.$router.push({name: val});
          }
        }
    }
</script>

<style lang="less" scoped>

</style>
