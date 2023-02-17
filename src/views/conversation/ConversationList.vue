<template>
    <div class="conversation-list">
          <ConversationItem v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10,11,1,1]" :key="index"></ConversationItem>
    </div>
  </template>
  
  <script>
  import ConversationItem from './ConversationItem.vue'
  export default {
      name: 'ConversationList',
      components: {
          ConversationItem,
      }
  }
  </script>
  
  <style lang="less" scoped>
  .conversation-list{
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      
  }
/*   .conversation-list::-webkit-scrollbar {
    display: none;
        } */
        .conversation-list::-webkit-scrollbar-thumb{
    background: rgba(141, 206, 206,.1);
  }
  .conversation-list:hover::-webkit-scrollbar-thumb{
    background: rgb(141, 206, 206);
  }

  </style>