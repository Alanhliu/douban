<template>
    <div class="page">
      <m-header>
        <span slot="header-center-item">书影音</span>
        <img @click="onChatClick" slot="header-right-item1" src="../../assets/images/chat_green.png" alt="">
        <img @click="onSearchClick" slot="header-right-item2" src="../../assets/images/search_green.png" alt="">
      </m-header>

      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">电影</mt-tab-item>
        <mt-tab-item id="2">电视</mt-tab-item>
        <mt-tab-item id="3">综艺</mt-tab-item>
        <mt-tab-item id="4">读书</mt-tab-item>
        <mt-tab-item id="5">同城</mt-tab-item>
        <mt-tab-item id="6">音乐</mt-tab-item>
      </mt-navbar>

      <div>
        <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
      </div>

      <!-- tabcontainer -->
      <!--<mt-tab-container v-model="selected">-->
        <!--<mt-tab-container-item id="1">-->
          <!--<mt-cell v-for="n in 20" :title="'内容 ' + n" :key="n"/>-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="2">-->
          <!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="3">-->
          <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="4">-->
          <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="5">-->
          <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
        <!--</mt-tab-container-item>-->
        <!--<mt-tab-container-item id="6">-->
          <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
        <!--</mt-tab-container-item>-->
      <!--</mt-tab-container>-->

      <div class="test" ref="wrapper">
        <mt-cell v-for="n in 20" :title="'内容 ' + n" :key="n"/>
      </div>

    </div>

</template>

<script>
    import NormalHeader from "../../components/NormalHeader";
    import { Navbar, TabItem ,Cell} from 'mint-ui';
    import BScroll from "better-scroll";
    export default {
        name: 'book-movie-music',
        data() {
          return {
            selected: 1
          }
        },
        components: {
          'mHeader': NormalHeader,
          'mtNavbar': Navbar,
          'mtTabItem': TabItem,
          'mtCell':Cell
        },
        methods: {
          onSearchClick: function () {

          },
          onChatClick: function () {

          }
        },
        created() {

        },
        mounted() {


        //即定时器 20ms
        this.$nextTick(() => {
          //$refs绑定元素
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
              //开启点击事件 默认为false
              click:true
            })
            // console.log(this.scroll)
          }else if(!this.$refs.wrapper){
            return
          }
          else{
            this.scroll.refresh()
          }
        })
      }
    }
</script>

<style lang="less" scoped>
  .test {
    height: 400px;
  }
</style>
