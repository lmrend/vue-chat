<template>
  <div class="top-search">
    <input type="search" class="search" placeholder="请输入搜索内容"><i class="el-icon-search search-icon"></i>
    <span class="add-friend"><i class="el-icon-plus add"></i></span>
  </div>
</template>

<script>
export default {
    name: 'TopSearch'
}
</script>

<style lang="less" scoped>
.top-search{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 10px 10px 10px;
  border-bottom: 1px solid rgb(253, 253, 253);
  .search{
    width: 80%;
    height: 25px;
    border-radius: 5px;
    border: none;
    padding-left: 20px;
  }
  .search-icon{
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 26px;
    left: 16px;
  }
  input:focus{
    outline: none;
    border: 1px solid rgb(141, 206, 206);
    background-color: rgb(177, 236, 236);
    
  }
  .add-friend{
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: aliceblue;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    border-radius: 5px;
    vertical-align: middle;
    margin-left: 10px;
  }
  .add-friend:hover{
    background-color: rgb(146, 213, 213);
  }
}
</style>