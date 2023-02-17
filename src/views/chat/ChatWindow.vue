<template>
  <div class="chat-window">
    <div class="top">
      <ChatHeader></ChatHeader>
    </div>
    <div class="message-container">
      <MessageList></MessageList>
    </div>
    <div class="input">
      <div class="footer-oporation">
        <i class="item iconfont icon-biaoqing"></i>
        <i class="item iconfont icon-icon" />
        <label for="upfile">
          <el-tooltip class="item" effect="dark" content="只能上传小于 2M 的文件" placement="bottom">
            <i class="item el-icon-folder">
              <input id="upfile" class="file-inp upload" type="file" title="选择文件" />
            </i>
          </el-tooltip>
        </label>
        <i class="item iconfont icon-020-videocallingapp" />
        <i class="item el-icon-phone-outline" />
      </div>
      <textarea ref="chatInp" class="textarea" maxlength="300" ></textarea>
      <el-button class="send">发送</el-button>
    </div>
  </div>
</template>

<script>
import ChatHeader from "./components/ChatHeader.vue"
import MessageList from "./components/MessageList.vue"
export default {
  name: "ChatWindow",
  components: {
    ChatHeader,
    MessageList
  }
}
</script>

<style lang="less" scoped>
.chat-window {
  width: 100%;
  height: 578px;
  border-left: 1px solid rgb(253, 253, 253);
  .top {
    width: 100%;
    height: 10%;
    border-bottom: 1px solid rgb(253, 253, 253);
  }
  .message-container {
    width: 100%;
    height: 60%;
  }
  .input {
    position: relative;
    width: 100%;
    height: 30%;
    padding: 5px 10px;
    border-top: 1px solid rgb(253, 253, 253);
    .footer-oporation {
      .item {
        margin-left: 10px;
        font-size: 20px;
        .upload {
          display: none;
          border: none;
        }
      }
    }
    .textarea {
      overflow-x: hidden;
      box-sizing: border-box;
      height: calc(100% - 30px);
      width: 100%;
      outline: none;
      border: none;
      padding: 0 10px;
      border: 0;
      border-radius: 5px;
      padding: 10px;
      font-size: 15px;
      resize: none;
      background-color: rgba(248, 245, 245, 0);
    }
    .send {
        width: 100px;
        border-radius: 10px;
      position: absolute;
      bottom: 15px;
      right: 20px;
      background-color: rgb(109, 222, 222);
    }
    .send:hover{
        background-color: rgb(141, 206, 206);
        color: rgb(38, 88, 88);
    }
  }
}
</style>
