<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods" />
      <detail-goods-info :detail="productDetail" :description="description" />
      <goods-list :goods="recommends"/>
    </scroll>

    <detail-button-bar @addCart="addCart"/>

  </div>
</template>

<script>

import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";
import Scroll from "@/components/common/scroll/Scroll";

import {getProductDetailInfo, GoodsInfo} from '@/network/home/detail';
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";
import DetailGoodsInfo from "@/views/detail/childComponents/DetailGoodsInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailButtonBar from "@/views/detail/childComponents/DetailButtonBar";

export default {
  name: "Detail",
  data() {
    return {
      asin: null,
      topImages: [],
      goods: {},
      productDetail: [],
      description: [],
      recommends: []
      }
  },
  created() {
    this.asin = this.$route.params.asin;
    getProductDetailInfo(this.asin).then(res => {

       this.topImages = res.data.product.images;
       this.goods = new GoodsInfo(res.data.product);
       this.productDetail = res.data.product.variants[0].images;
       this.description = res.data.product.description.split('*');
       this.recommends = res.data.sponsored_products;

    })
  },
  methods: {

    addCart() {
      const product = {};

      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desct = this.goods.description;
      product.price = this.goods.price;
      product.asin = this.asin;
      product.count = 1;

      this.$store.commit('addCart', product);

      // for (let item of this.$store.state.cartList) {
      //   console.log(item);
      // }

    }
  },
  components: {
    DetailButtonBar,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailGoodsInfo,
    GoodsList

  }

}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    background-color: white;
    height: 100vh;
  }

  .detail-nav-bar {
    position: relative;
    z-index: 10;
    background: white;
    padding-top: 10px;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>