<template>
    <div class="home-page">
      <m-search-header>
        <img slot="search-box-left" src="../../assets/images/search.png" alt="">
        <span slot="search-box-center">{{placeholder}}</span>
        <img slot="search-box-right" src="../../assets/images/qrcode.png" alt="">
        <img slot="search-header-right-item" src="../../assets/images/chat.png" alt="">
      </m-search-header>

      <div class="content">
        <scroll ref="scroll"
                :data="items">
          <div class="nav">
            <div>豆瓣时间</div>
            <div>市集</div>
            <div>书店</div>
            <div>豆瓣视频</div>
          </div>

          <ul>
            <li class="list-item" v-for="item in items" :key="item">
              <home-cell :item="item"></home-cell>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
</template>

<script>
    import mSearchHeader from "../../components/SearchHeader"
    import scroll from '../../components/scroll/scroll'
    import HomeCell from './comp/HomeCell'
    export default {
        data() {
          return {
            placeholder:"影视 图书 唱片 小组 舞台剧等",
            items: []
          }
        },
        name: 'home',
        components: {
          mSearchHeader,
          scroll,
          HomeCell
        },
        created() {
          for (let i = 0; i < 50; i++) {
            this.items.push(i);
          }
        }
    }
</script>

<style lang="less" scoped>
  .home-page {

  }

  .content {
    position: absolute;
    top: 64px;
    bottom: 55px;//tabbar 高度
    left: 0;
    right: 0;
  }

  .nav {
    display: flex;
    height: 30px;
    div {
      width: 100px;
      height: 100%;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 13px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .list-item {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
