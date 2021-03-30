<template>
 <tab-bar class="product-bar">
   <tab-bar-item path="/shop" class="product-bar-item">
     <img src="@/assets/image/detail/shop.svg" alt="" slot="item-icon">
     <img src="@/assets/image/detail/shop_active.svg" alt="" slot="item-icon-active">
     <div slot="item-text">Shop</div>
   </tab-bar-item>


   <tab-bar-item path="/save" class="product-bar-item">
     <img src="@/assets/image/detail/customer_service.svg" alt="" slot="item-icon">
     <img src="@/assets/image/detail/customer_service_active.svg" alt="" slot="item-icon-active">
     <div slot="item-text">Customer</div>
   </tab-bar-item>

   <tab-bar-item path="/customer-service" class="product-bar-item">
     <img src="@/assets/image/commons/collect.svg" alt="" slot="item-icon">
     <img src="@/assets/image/commons/collect_active.svg" alt="" slot="item-icon-active">
     <div slot="item-text">Save</div>
   </tab-bar-item>

   <tab-bar-item>
     <div class="cart" slot="item-text" @click ="addToCart">Add to Cart</div>
   </tab-bar-item>

   <tab-bar-item path="/purchase">
     <div class='purchase' slot="item-text">Buy</div>
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

.product-bar {
  height: 70px;
  z-index: 200;
}

.product-bar-item {
  padding-bottom: 5px;
}

.cart {
  background-color: yellow;
  text-align: center;
  line-height: 60px;
  color: black;
}

.purchase {
  background-color: #ff8196;
  text-align: center;
  line-height: 60px;
  color: white;
}
</style>