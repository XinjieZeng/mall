<template>
  <div class="tab-bar-item" @click="select">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activateColor">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    activeColor: {
      type: String,
      default: 'red'
    },
    path: {
      type: String,
      default() {
        return "";
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activateColor() {
      console.log()
      return this.isActive? {color: this.activeColor}: {}
    }
  },
  methods: {
    select() {
      if (this.path !== null && this.path !== "") {
        this.$router.push(this.path);
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 60px;
  text-align: center;
  font-size: 14px;

}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 10px;
  vertical-align: middle;
}
</style>