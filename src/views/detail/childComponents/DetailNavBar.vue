<template>
    <nav-bar >

      <div slot="left" class="back" @click="backToHome">
        <img alt="back"  src="@/assets/image/commons/back.svg">
      </div>
      <div slot="center" class="title">
        <div class="title-item"
             v-for="(item, index) in titles"
             :class="{active: index === currentIndex}"
              @click="titleClick(index)">
         {{item}}
        </div>
      </div>
    </nav-bar>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['Detail', 'Parameter','Review','Recommend'],
      currentIndex: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backToHome() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>

.back img{
  width: 30px;
  height: 30px;
  left : 0;
  margin-top: 8px;
}

.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);

}


</style>