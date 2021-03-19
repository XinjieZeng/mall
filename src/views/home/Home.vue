<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @loadMore="loadMore">
      <home-swiper/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType]" />
    </scroll>
    <back-to-top-view @click.native="backClick" v-show="isShow"/>

<!--    <ul>-->
<!--      <li>dsfsfjskfjsklfjs</li>-->
<!--      <li>dsfsfjskfjsklfjs</li>-->
<!--      <li>dsfsfjskfjsklfjs</li>-->
<!--      <li>dsfsfjskfjsklfjs</li>-->
<!--      <li>dsfsfjskfjsklfjs</li>-->
<!--    </ul>-->

  </div>
</template>



<script>

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import BackToTopView from "@/components/content/backToTop/BackToTopView";
import Scroll from "@/components/common/scroll/Scroll";

import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import RecommendView from "@/views/home/childComponents/RecommendView";
import FeatureView from "@/views/home/childComponents/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeMultidata} from "@/network/home/home";


export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    BackToTopView,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList
  },
  data() {
    return {
      res: [],
      recommends: [],
      goods: {
        'pop': [],
        'news': [],
        'sell': [],
      },
      titles: ['流行', '新款', '精选'],
      currentType: 'pop',
      isShow: false,
    }
  },
  created() {
  this.getHomeMultiData();
  },
  methods: {
    getHomeMultiData() {
      getHomeMultidata()
       .then(res => {
         this.res = res.data.bestsellers;

         this.recommends = this.res.slice(6, 10);
         let pop = this.res.slice(0,20);
         let news = this.res.slice(10,30);
         let sell = this.res.slice(20,40);

         this.goods.pop.push(...pop);
         this.goods.news.push(...news);
         this.goods.sell.push(...sell);

       }).catch(err => {
         console.log(err);
      })
    },
    getHomeGoods(type) {
      this.goods[type].push(...this.goods[type]);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'news';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0);
      this.scrollTop = document.body.scrollTop;
    },
    contentScroll(position) {
      if (position.y <= -500) {
        this.isShow = true;
      }
      else {
        this.isShow = false;
      }

    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
      this.$refs.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
  }

  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .tab-control {
    position: sticky;
    top:44px;
    z-index:100;
    background-color: var(--color-background);
  }

  /*上面有个高度，下面有个高度*/
  /*办法1： 使用calc()*/
  /*.content {*/
  /*  margin-top: 44px;*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*}*/

  /*办法2： 使用绝对position absolute，把整个页面设为relative, 设置距离上面的距离和下面的距离*/
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left : 0;
    right: 0;
  }
</style>