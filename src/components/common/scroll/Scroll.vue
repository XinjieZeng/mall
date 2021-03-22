<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: "Scroll",
  scroll: null,
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //通过这样的方法拿，不确定拿到的是哪个元素，class='wrapper'
    //document.querySelector('wrapper')
    //1. create better scroll, probetype
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click:true,
      observeDOM: true,
    });



    // listen the position of scroll
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
      });

    }

    //listen the pull up event
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('loadMore');
      });
    }


  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
}
</script>

<style scoped>

</style>