<template>

    <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="item.title" @load="recommendImageLoad">
<!--          <p>{{item.rating}}</p>-->
        </a>
      </div>
    </div>


</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends:  {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    recommendImageLoad() {
      this.$emit('recommendImageLoad')

    }
  }
}
</script>

<style scoped>

.recommend {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 5px 0 0 0;
  border-bottom: 5px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item a {
  margin-bottom: 0;
}

.recommend-item p {
  margin-top: 1px;
}

.recommend-item img{
  width: 60px;
  height: 60px;
  margin-bottom: 0;
  border-radius: 100%;
  margin-top: 5px;
  cursor:pointer;

}

</style>