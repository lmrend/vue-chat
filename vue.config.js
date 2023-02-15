const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3333',
        pathRewrite: {
          '^/api': '' // 重写路径
          // '^/123': ''  // 比如/123/admin/being/classes/classInfo 会被替代成/admin/being/classes/classInfo
        }
      }
    }
  }
})
