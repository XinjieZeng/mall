<template>
  <div>
    <div class="goods">
      <goods-list-item v-for="item in goods" :goods-items="item"></goods-list-item>
    </div>
  </div>


</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return[];
      }
    },
  }, components: {
    GoodsListItem
  }
}
</script>

<style scoped>

.recommends {
  color: var(--color-high-text);
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}

 .goods {
   display: flex;
   /*according to width to put the number of content in a line*/
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 2px;
   margin-bottom: 10px;
 }


</style>