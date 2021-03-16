<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />

    <recommend-view :recommends="recommends"/>

  </div>
</template>



<script>

import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComponents/HomeSwiper";
import RecommendView from "@/views/home/childComponents/RecommendView";

import {getHomeMultidata} from "@/network/home/home";


export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      res: [],
      banners: [],
      recommends: []
    }
  },
  created() {
   getHomeMultidata()
    .then(res => {
      this.res = res.data.bestsellers;
      this.banners = this.res.slice(0, 5);
      console.log('banners: ', this.banners)
      this.recommends = this.res.slice(6, 10);

    }).catch(err => {
      console.log(res);
   })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>