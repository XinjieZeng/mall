<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>

import DetailNavBar from "@/views/detail/childComponents/DetailNavBar";

import {getProductDetailInfo} from '@/network/home/detail';
import DetailSwiper from "@/views/detail/childComponents/DetailSwiper";

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
    })
  },
  components: {
    DetailSwiper,
    DetailNavBar
  }

}
</script>

<style scoped>

</style>