<template>
  <div class="wrap">
    <ul class="list">
      <li class="item active"><img src="../../../assets/image/banner/banner1.jpeg" @load="imageLoad"></li>
      <li class="item"><img src="../../../assets/image/banner/banner2.png" @load="imageLoad"></li>
      <li class="item"><img src="@/assets/image/banner/banner3.jpeg" @load="imageLoad"></li>
    </ul>

    <ul class="pointList">
      <li class="point active" data-index="0" @click="jump(0)"></li>
      <li class="point" data-index="1" @click="jump(1)"></li>
      <li class="point" data-index="1" @click="jump(2)"></li>
    </ul>

  </div>

</template>

<style scoped>

.wrap {
  width: 100%;
  height: 250px;
  display: flex;

  position: relative;

}

.list {
  width: 800px;
  height: 250px;
  padding-top: 0;
  margin-top: 0;
  list-style: none;
  position: relative;
  padding-left: 0;

}

.item {
  width: 100%;
  height: 250px;
  color: white;
  font-size: 50px;
  position:absolute;
  opacity: 0;
  transition: all .8s;

}

.item img {
  margin-top: 0;
  width: 100%;
  height: 250px;
}
.item.active {
  opacity: 1;
  z-index: 10;

}

.pointList {
  padding-left: 0;
  list-style: none;
  position: absolute;
  right: 20px;
  bottom: 5px;
  z-index:1000;

}

.point {
  width: 13px;
  height: 13px;
  background-color: rgba(0,0,0,0.6);
  border-radius: 100%;
  float: left;
  margin-right: 10px;
  margin-bottom: 0;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.6);
  cursor:pointer;
}

.point.active {
  background-color: rgba(255, 255, 255, 0.6);
}


</style>


<script>


export default {
  name: "HomeSwiper",
  data() {
    return {
      items: document.getElementsByClassName('item'),
      points: document.getElementsByClassName('point'),
      index: 0,
      time:0,
      isLoad: false,
    }
  },
  methods: {
    clearActive() {
      for(let i = 0; i < this.items.length; i++) {
        this.items[i].className = 'item';
        this.points[i].className = 'point';
      }
    },
    goIndex() {
      this.clearActive();
      this.points[this.index].className='point active';
      this.items[this.index].className='item active';
    },
    goNext() {
      if (this.index < 2) {
        this.index ++;
      }
      else {
        this.index = 0;
      }

      this.goIndex();

    },
    goPre() {
      if (this.index === 0) {
        this.index = this.size - 1;
      }
      else {
        index --;
      }
      this.goIndex();
    },
    jump(index) {
      this.index = index;
      this.goIndex();
      this.time = 0;
    },
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('imageLoad');
      }

      this.isLoad = true;
    }
  },
  mounted() {
    setTimeout(() => {
      this.time ++;
      if (this.time === 20) {
        this.goNext();
        this.time = 0;
      }
    }, 100)
  }
}
</script>

