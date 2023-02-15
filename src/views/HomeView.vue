<template>
  <div class="home-page">
    <div class="left">
      
    </div>
    <div class="right">
      <div v-if="false"></div>
      <div class="no-conversation" v-else>
        <img src="../assets//image/R-C.jpg" alt="" class="zw-picture">
        <!-- <span>打开新蓝领的窗户</span> -->
      </div>

    </div>
    <!-- <el-button @click="logout" type="pramry" >退出登录</el-button> -->

  </div>
</template>

<script>
/* import {getUserInfo} from '@/api/user' */
export default {
  name: 'HomeView',
  data() {
    return {
      userId: 11
    }
  },
  components: {
    
  },
  /* async mounted() {
    const result = await getUserInfo(this.userId)
    console.log(result)
  }, */
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('login')
    }
  }
}
</script>
<style lang="less" scoped>
.home-page{
  width: 100%;
  height: 100%;
  display: flex;
  .left{
    width: 30%;
    height: 100%;
    background-color: aliceblue;
  }
  .right{
    width: 70%;
    height: 100%;
    background-color: rgb(111, 162, 206);
    padding: 0;
    .no-conversation{
      width: 100%;
      height: 100%;
      position: relative;
      .zw-picture{
      width: 100%;
      height: 577px;
      opacity: .8;
      padding: 0px;

      
    }
    
    }
    .no-conversation::before{
        content: '打开蓝领的新窗户';
        display: block;
        position: absolute;
        width: 100%;
        height: 50px;
        top: 50%;
        left: 0;
        color: red;
        font-size: 20px;
        text-align: center;
      }
  }
}
</style>