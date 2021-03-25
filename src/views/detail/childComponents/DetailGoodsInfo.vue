<template>
  <div  class="goods-info">
    <div>
      <ul class="description">
        <li v-for="item in description">{{item}}</li>
      </ul>
    </div>

    <ul class="image-list">
      <li v-for="item in detail"><img class="images" :src="item.link" /></li>
    </ul>

    <div class="other">
      <div class="other-info">价格说明</div>
      <div class="other-desc">商品的专柜价，吊牌价，正品零售价，厂商指导或该商品的层级展示过的商品售价等，并非原价，仅供参考。</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detail: {
      type: Array,
      default() {
        return [];
      }
    },
    description: {
      type: Array,
      default() {
        return [];
      }
    },
  }
}
</script>

<style scoped>

.goods-info {
  background-color: white;
}
.description {
  font-size: 11px;
  list-style: none;
  padding-left: 10px;
}
.images{
  margin-left: 0;
  width: 100%;
  height: 700px;
  overflow: hidden;
}

.image-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.other {
  height: 80px;
  margin-bottom: 50px;
  border-bottom: 2px solid #eeeeee;
}

.other-info {
  color: var(--color-high-text);
  font-size: 14px;
  padding: 5px 0 0 5px;
}

.other-desc {
  font-size: 13px;
  padding: 5px 0 0 5px;
}
</style>