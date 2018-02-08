<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <mt-tabbar v-model="selected">
      <mt-tab-item v-for="(item,index) in tabs" :id="item.id" :key="index">
        <img slot="icon" :src="item.active?item.tab_selected_img:item.tab_img">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    import {Tabbar,TabItem} from 'mint-ui'
    export default {
        name: 'Main',
        data(){
         return {
           selected: 'Home',
           tabs: [{
             id: 'Home',
             name: '首页',
             tab_img: require('../../assets/images/ic_tab_home_gray@2x.png'),
             tab_selected_img: require('../../assets/images/ic_tab_home@2x.png'),
             active: true
           },{
             id: 'BookMovieMusic',
             name: '书影音',
             tab_img: require('../../assets/images/ic_tab_subject_gray@2x.png'),
             tab_selected_img: require('../../assets/images/ic_tab_subject@2x.png'),
             active: false
           },{
             id: 'Broadcast',
             name: '广播',
             tab_img: require('../../assets/images/ic_tab_timeline_gray@2x.png'),
             tab_selected_img: require('../../assets/images/ic_tab_timeline@2x.png'),
             active: false
           },{
             id: 'Group',
             name: '小组',
             tab_img: require('../../assets/images/ic_tab_group_gray@2x.png'),
             tab_selected_img: require('../../assets/images/ic_tab_group@2x.png'),
             active: false
           },{
             id: 'Mine',
             name: '我的',
             tab_img: require('../../assets/images/profile_normal@2x.png'),
             tab_selected_img: require('../../assets/images/profile_active@2x.png'),
             active: false
           }]
         }
        },
        methods: {
          getItemById(id) {
            const f = item => item.id === id;
            return this.tabs.find(f);
          },
          changeItemStatus(valItem,oldItem) {
            valItem.active = true;
            oldItem.active = false;
          }
        },
        components: {
          mtTabbar: Tabbar,
          mtTbaItem: TabItem
        },
        watch: {
          selected: function (val,oldVal) {

            var valItem = this.getItemById(val);
            var oldItem = this.getItemById(oldVal);

            this.changeItemStatus(valItem,oldItem);

            this.$router.push({name: val});
          }
        }
    }
</script>

<style lang="less" scoped>

</style>
