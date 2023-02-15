import axios from "axios";
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
let requests = axios.create({
    baseURL:'/api',
    timeout:5000
})
//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  const token = store.state.user.token
  if(token) {
    config.headers.Authorization = token
  }
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    return config;
  });
  
  //响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
  requests.interceptors.response.use(
    (res) => {
      //相应成功做的事情
      if(res.data.status === 1006 || res.data.status === 1005 || res.data.status === 1004 || res.data.status === 1003 || res.data.status === 1002) {
        Message({
          message: '请前往登录',
          type: 'warning',
          duration: 3000
        })
        router.push({
          name: 'login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }
      if(res.data.status == 500) {
        Message({
          message: '服务器错误，稍后重试',
          type: 'warning',
          duration: 3000
        })
      }
      return res.data;
    },
    (err) => {
      console.log(err)
      Message({
        message: '服务器响应数据失败',
        type: 'warning',
        duration: 3000
      })
    }
  );
  //最终需要对外暴露（不对外暴露外面模块没办法使用）
  //这里的代码是暴露一个axios实例
  export default requests;