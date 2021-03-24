<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods" />
    <ul>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
      <li>sfsdfsdfsdf</li>
    </ul>
  </div>
</template>

<script>

import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";

import {getProductDetailInfo, GoodsInfo} from '@/network/home/detail';
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComponents/DetailBaseInfo";

export default {
  name: "Detail",
  data() {
    return {
      asin: null,
      topImages: [],
      goods: {},
      productDetail: {
        type: Object,
        default() {
          return null;
        }
      }
    }
  },
  created() {
    this.asin = this.$route.params.asin;
    getProductDetailInfo(this.asin).then(res => {

       this.topImages = res.data.product.images;
       this.goods = new GoodsInfo(res.data.product);
    })
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,

  }

}
</script>

<style scoped>

</style>