<template>
<div class="back-top">
  <img src="@/assets/image/commons/back-to-top.svg" alt="backToTop"/>

</div>
</template>

<script>
export default {
  name: "BackToTopView",
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 70px;
    border: 2px solid white;
    border-radius: 100%;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
    background-color:white;

  }

  .back-top img {
    width: 30px;
    height: 30px;

  }

</style>