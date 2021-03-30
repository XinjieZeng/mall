<template>
 <tab-bar>
   <tab-bar-item path="/shop">
     <img src="@/assets/image/detail/shop.svg" alt="" slot="item-icon">
     <img src="@/assets/image/detail/shop_active.svg" alt="" slot="item-icon-active">
     <div slot="item-text">店铺</div>
   </tab-bar-item>


   <tab-bar-item path="/save">
     <img src="@/assets/image/detail/customer_service.svg" alt="" slot="item-icon">
     <img src="@/assets/image/detail/customer_service_active.svg" alt="" slot="item-icon-active">
     <div slot="item-text">客服</div>
   </tab-bar-item>

   <tab-bar-item path="/customer-service">
     <img src="@/assets/image/commons/collect.svg" alt="" slot="item-icon">
     <img src="@/assets/image/commons/collect_active.svg" alt="" slot="item-icon-active">
     <div slot="item-text">收藏</div>
   </tab-bar-item>

   <tab-bar-item>
     <div class="cart" slot="item-text" @click ="addToCart">加入购物车</div>
   </tab-bar-item>

   <tab-bar-item path="/purchase">
     <div class='purchase' slot="item-text">购买</div>
   </tab-bar-item>

 </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
name: "DetailButtonBar",
  methods: {
    addToCart() {
      this.$emit('addCart');
    },
  },
  components: {TabBarItem, TabBar}

}
</script>

<style scoped>

.cart {
  background-color: yellow;
  text-align: center;
  line-height: 48px;
  color: black;
}

.purchase {
  background-color: #ff8196;
  line-height: 48px;
  text-align: center;
  color: white;
}
</style>