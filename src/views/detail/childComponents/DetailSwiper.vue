<template>
  <div class="detail-swiper">
    <ul class="list">
      <li v-for="(item, index) in topImages" class="item" :class="{active: index === currentIndex}">
        <img :src="item.link" alt="swiper"  />
      </li>
    </ul>

    <ul class="pointList">
      <li v-for="(item, index) in swiperButton" class="point" @click="jump(index)" :class="{active: index === currentIndex}">
        <span>{{item}}</span>
      </li>
    </ul>

  </div>


</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      swiperButton: ['', '', '',''],
      currentIndex: 0,
    }
  },
  methods: {
    clearActive() {
      for(let i = 0; i < this.topImages.length; i++) {
        this.topImages[i].className = 'item';
        // this.swiperButton[i].className = 'point';
      }
    },
    jump(index) {
      // console.log(index);
      // this.clearActive();
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>

.detail-swiper {
  width: 100%;
  height: 600px;
  display: flex;
  position: relative;
}

.list {
  width: 800px;
  height: 600px;
  padding-top: 0;
  margin-top: 0;
  list-style: none;
  position: relative;
  padding-left: 0;

}

.item {
  width: 100%;
  height: 600px;
  color: white;
  font-size: 50px;
  position:absolute;
  opacity: 0;
  transition: all .8s;

}

.item img {
  margin-top: 0;
  width: 100%;
  height: 600px;
  overflow: hidden;
}
.item.active {
  opacity: 1;
  z-index: 10;
}


.pointList {
  height: 10px;
  width: 100%;
  padding-left: 0;
  list-style: none;
  position: absolute;
  right: 20px;
  bottom: 5px;
  z-index:100;

}

.point {
  width: 13px;
  height: 13px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 100%;
  float: right;
  margin-right: 10px;
  margin-bottom: 0;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.6);
  cursor:pointer;
}

.point.active {
  background-color: rgba(0, 0, 0,0.8);
}


</style>