<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="red">
      <img src="@/assets/image/tabbar/home/home.svg" alt="" slot="item-icon">
      <img src="@/assets/image/tabbar/home/home-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="red">
      <img src="@/assets/image/tabbar/category/category.svg" alt="" slot="item-icon" >
      <img src="@/assets/image/tabbar/category/category-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">类型</div>
    </tab-bar-item >
    <tab-bar-item path="/cart" active-color="red">
      <img src="@/assets/image/tabbar/cart/cart.svg" alt="" slot="item-icon">
      <img src="@/assets/image/tabbar/cart/cart-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="red">
      <img src="@/assets/image/tabbar/profile/profile.svg" alt="" slot="item-icon">
      <img src="@/assets/image/tabbar/profile/profile-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar,
  }
}
</script>

<style scoped>
</style>