<template>
  <div>
    <nav-bar>
      <div slot="center" class="nav-bar">购物车 </div>
    </nav-bar>
    <div class="cart" v-for="item in this.$store.state.cartList" :key="item.asin">
      <div class="cart-list">
        <div> <img class='image' :src="item.image.link" alt="item.image" /> </div>
        <div class="list-item">
          <div>{{item.title}}</div>
          <div>{{item.description}}</div>

          <div class="other">
            <div class="price info">{{item.price.raw}}</div>
            <div class="count info"> X {{item.count}}</div>
          </div>


        </div>
      </div>

    </div>
  </div>

</template>

<script>
import CartListItem from "@/views/cart/CartListItem";
import NavBar from "@/components/common/navbar/NavBar";
export default {
name: "Cart",
  components: {NavBar, CartListItem}
}
</script>

<style scoped>

.nav-bar {
  background-color: var(--color-high-text);
  color: white;
  padding-left: 50px;
}

.cart {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;

}

.cart-list {
  padding-bottom: 5px;
  border-bottom: 2px solid #eeeeee;
  display: flex;
}

.list-item {
  flex: 1;
  margin-left: 10px;

}


.image {
  width: 100px;
  height: 150px;
}

.other {
  display: flex;
  margin-top: 30px;
}

.info {
  flex: 1;
}

.price {
  color: var(--color-high-text);
  font-size: 17px;
}

.count {
  right: 20px;
  text-align: center;
}
</style>