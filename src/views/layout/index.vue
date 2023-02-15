<template>
  <div class="layout-page">
    
    <div class="main">
    <AsideView></AsideView>
    <router-view />
    </div>
  </div>
</template>

<script>
import AsideView from "./component/AsideView"
export default {
  name: "LayOut",
  components: {
    AsideView
  }
}
</script>

<style lang="less" scoped>
.layout-page {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/image/abstract.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 60%;
    height: 80%;
    position: relative;
    background-color: rgb(223, 244, 244);
    opacity: 0.7;
    padding-left: 4.8%;
    box-sizing: border-box;
    aside{
        width: 8%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
  }
}
</style>
