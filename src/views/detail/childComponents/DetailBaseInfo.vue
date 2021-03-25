<template>
<!--  check if the object is empty. Object.keys(key).length !== 0-->
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>

    <div>
      <span class="info-price"> {{goods.price.raw}} </span>
      <img class="icon" src="@/assets/image/commons/collect.svg" />
      <span> {{goods.rating}}</span>
    </div>

    <div class="info-other">
      <div>
        <img class="icon" src="@/assets/image/detail/return.svg" alt="security" />
        <div>安全交易</div>
      </div>

      <div>
        <img class="icon" src="@/assets/image/detail/transaction.svg" alt="return" />
        <div>退款</div>
      </div>

      <div>
        <img class="icon" src="@/assets/image/detail/delivery.svg" alt="return" />
        <div>72小时发货</div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>

.base-info {
  width: 100%;
  padding-left: 5px;
  border-bottom: 3px solid #eee;
}

.info-title {
  margin-top: 10px;
  font-size: 14px;
}

.info-price {
  margin-top: 10px;
  font-size: 20px;
  color: var(--color-high-text);
  margin-right:20px;
}

.info-other {
  margin-top: 10px;
  display: flex;
  height: 50px;
  margin-bottom: 10px;
}

.info-other div {
  font-size: 10px;
  flex: 1;
  text-align: center;
}

.icon {
  flex : 1;
  width: 20px;
  height: 20px;
  margin-top:10px;
}

</style>