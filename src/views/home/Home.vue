<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control
     :titles="titles"
     class="tab-control"
     @tabClick="tabClick"
     ref="tabControl1" v-show="isTabFixed"></tab-control>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @loadMore="loadMore">
      <home-swiper @imageLoad="imageLoad" />
      <recommend-view :recommends="recommends" @recommendImageLoad="imageLoad"/>
      <feature-view/>
      <tab-control
       :titles="titles"
       @tabClick="tabClick"
       ref="tabControl2"></tab-control>
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
import {debounce} from "@/components/utils/utils";


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
      tabOffsetTop: 0,
      isTabFixed: false,
    }
  },
  created() {
  this.getHomeMultiData();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);

    //监听item 图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      // this.$refs.scroll && this.$refs.scroll.refresh();
      refresh();

    })

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

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0);
      this.scrollTop = document.body.scrollTop;
    },
    contentScroll(position) {
      //1,  determine if back to top icon is shown
      if (position.y <= -500) {
        this.isShow = true;
      }
      else {
        this.isShow = false;
      }

      // 2. determine if position of tabControl should be fixed
      if (-position.y > this.tabOffsetTop) {
        this.isTabFixed = true;
      }
      else {
        this.isTabFixed = false;
      }

    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    imageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      if (this.tabOffsetTop < this.$refs.tabControl2.$el.offsetTop) {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 100;*/
  }

  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .tab-control {
    /*top:44px;*/
    /*z-index:100;*/

    position: relative;
    z-index: 100;
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