<template>
  <swiper ref="mySwiper" :options="swiperOption">

    <swiper-slide v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img class='banner-img' :src='item.image' alt="item.title">
        </a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>


  </swiper>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'




export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    },
    swiperOption: {
      pagination: {
        el: '.swiper-pagination'
      },

    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    while(true) {

    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

.circle{	/*设置圆点位置*/
  position: absolute;/*给子元素设置绝对定位，相对于父元素*/
  left:30px;/*距离父元素内部的右边距离*/
  bottom:25px;/*距离父元素内部的上边距离*/
}
.circle a{	/*设置圆点样式*/
  display: inline-block;/*设置a链接为行内块，可以设置宽高，不换行*/
  width: 15px;
  height: 15px;
  border-radius: 50%;/*设置圆边，把方形变成圆形*/
  background: rgba(255,255,255,0.5);/*背景颜色设置不透明*/
  margin-right: 5px;/*设置每个a距离右边5px,圆点之间距离*/

}
.circle a:hover{	/*设置鼠标滑动时圆点样式*/
  background: #fff;/*圆点背景颜色*/
  border:2px solid red;/*圆点边框样式*/
  width: 11px;
  height: 11px;
  border-color:rgba(0,255,0,0.5) ;/*圆点边框不透明度*/
}


.banner-img {
  display: block;
  margin-left:auto;
  margin-right: auto;
  height: 200px;
  width: 70%;
}
</style>