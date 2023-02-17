<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
// common.less
*::-webkit-scrollbar{
    width: 10px;
    // height: 10px; // 高度写不写，都不影响，因为会根据内容的长度自动计算
}

*::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
}

// 兼容Firefox、IE
*{
    scrollbar-width: 10px;
    scrollbar-base-color: green;
    scrollbar-track-color: red;
    scrollbar-arrow-color: blue;
}

</style>
