<template>
    <div class="page">
      <m-header>
        <span slot="header-center-item">书影音</span>
        <img @click="onChatClick" slot="header-right-item1" src="../../assets/images/chat_green.png" alt="">
        <img @click="onSearchClick" slot="header-right-item2" src="../../assets/images/search_green.png" alt="">
      </m-header>

      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="Movie">电影</mt-tab-item>
        <mt-tab-item id="TV">电视</mt-tab-item>
        <mt-tab-item id="3">综艺</mt-tab-item>
        <mt-tab-item id="4">读书</mt-tab-item>
        <mt-tab-item id="5">同城</mt-tab-item>
        <mt-tab-item id="6">音乐</mt-tab-item>
      </mt-navbar>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

</template>

<script>
    import NormalHeader from "../../components/NormalHeader";
    import { Navbar, TabItem ,Cell} from 'mint-ui';
    import Movie from "./sub/Movie";
    import TV from "./sub/TV";

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
          'mMovie': Movie,
          'mTV': TV
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

        },
        watch: {
          selected: function () {
            console.log(this.selected);
            this.$router.push({name:this.selected});
          }
        }
    }
</script>

<style lang="less" scoped>

</style>
