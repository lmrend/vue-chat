<template>
  <aside class="aside">
    <div class="avatar">
      <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span class="name">姓名大萨达撒发给</span>
    </div>
    <div class="nav-list" :data-info='infoNum'>
      <span to="/chat" class="nav-item" :class="navindex == index ? 'itemactive' : ''" v-for="(item,index) in navList" :key="index" @click="active(index,item.path)">
        <i :class="item.icon"></i>
        {{ item.title }}</span>
    </div>
  </aside>
</template>

<script>


export default {
  name: "AsideView",
  data() {
    return {
        navList:[
            {
                title:'消息',path:'/chat',icon: 'el-icon-chat-dot-round'
            },
            {
                title:'日历',path: '/chat/test',icon: 'el-icon-chat-dot-round'
            },
            {
                title:'日历',path: '/chat/test',icon: 'el-icon-chat-dot-round'
            },
            {
                title:'日历',path: '/chat/test',icon: 'el-icon-chat-dot-round'
            },
        ],
        navindex: 0,
        infoNum: '0',
    }
  },
  methods:{
    active(index,path) {
        this.$router.push(path)
        this.navindex = index
    }
  }
}
</script>
<style lang="less" scoped>
.aside {
  background-color: rgb(141, 206, 206);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  font-size: 15px;
  color: hsl(0, 0%, 0%);
  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 13%;
    .name{
        display: inline-block;
        width: 50px;
        overflow: hidden;
        cursor: pointer;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
  }
  .nav-list{
    .nav-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin-top: 10px;
        
        border-radius: 10%;
        font-size: 12px;
        i{
            font-size: 20px;
        }
    }
    .nav-item:nth-of-type(1)::after{
        content: '00';
        display: block;
        width: 20px;
        height: 15px;
        border-radius: 40%;
        position: absolute;
        top: 95px;
        left: 39px;
        background-color: hsl(0, 89%, 52%);
        color: #fefcfc;
        text-align: center;
    }
    .itemactive{
        background-color: rgb(63, 200, 177);
    }
  }
}
</style>
