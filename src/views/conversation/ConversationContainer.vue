<template>
  <div class="conversation-container">
    <div class="top">
        <TopSearch></TopSearch>
    </div>
    <div class="info-list" v-if="true">
        <ConversationList></ConversationList>
    </div>
    <div class="no-conversation" v-else>
        <span>你还没有与人聊天呢!</span>
    </div>
  </div>
</template>

<script>
import TopSearch from './TopSearch.vue'
import ConversationList from './ConversationList.vue'
export default {
    name: 'ConversationContainer',
    components: {
        TopSearch,
        ConversationList,
    }
}
</script>

<style lang="less" scoped>
.conversation-container{
    width: 100%;
    height: 100%;
    .top{
        width: 100%;
        height: 10%;
    }
    .info-list{
        width: 100%;
        height: 90%;
    }
    .no-conversation{
        width: 100%;
        height: 90%;
        text-align: center;
        padding-top: 30px;
    }
}
</style>
