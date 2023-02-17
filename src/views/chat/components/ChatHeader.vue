<template>
  <div class="chat-header">
    <div class="header-name">
        <span>这是名字ss</span>
    </div>
    <div class="header-operation">
        <span v-if="true">
            <el-tooltip class="item" effect="dark" content="发起视频通话" placement="bottom">
              <i class="operation-item iconfont icon-020-videocallingapp" ></i>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="发起语音通话" placement="bottom">
              <i class="operation-item el-icon-phone-outline" ></i>
            </el-tooltip>
        </span>
        <i class="operation-item el-icon-menu" title="设置" ></i>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ChatHeader'
}
</script>

<style lang="less" scoped>
.chat-header{
    height: 57.8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 20px;
    .header-operation{
        .operation-item{
            margin-left: 20px;
            font-size: 20px;
        }
    }
}
</style>