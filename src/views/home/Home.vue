<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="goods[currentType]" />
    <back-to-top-view @click.native="backClick" />
  </div>
</template>



<script>

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import BackToTopView from "@/components/content/backToTop/BackToTopView";

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
      scrollTop: 0,
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
      console.log('btnclick');
      this.scrollTop = document.body.scrollTop;
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
    padding-top: 44px;
  }

  .tab-control {
    position: sticky;
    top:44px;
    z-index:100;
    background-color: var(--color-background);
  }

</style>