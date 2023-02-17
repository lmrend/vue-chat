<template>
  <div class="conversation-item">
    <div class="lefg-avatar">
      <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div class="right-characters">
      <div class="right-top">
        <span class="name">即可洒好大夫按键坏束缚感</span>
        <span class="time">1202101</span>
      </div>
      <span class="record">大dasdas酒店房哈萨克和大家答复哈</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConversationList",
  components: {}
}
</script>

<style lang="less" scoped>
.conversation-item {
  width: 100%;
  height: 65px;
  padding: 5px;
  /* background-color: rgb(128, 181, 228); */
  display: flex;
  align-items: center;
  span {
    display: block;
  }
  .right-characters {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 50px;
    padding-left: 10px;
    
    justify-content: space-between;
    .right-top {
      display: flex;
      justify-content: space-between;
      .name {
        width: 135px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
        white-space: nowrap;
        color: rgb(12, 14, 13);
      }
      .time{
        margin-right: 10px;
        color: rgb(18, 14, 14);
      }
    }
    .record {
      width: 170px;
      height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 10px;
      color: rgb(116, 111, 111);
    }
  }
}
</style>
