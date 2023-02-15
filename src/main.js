import Vue from 'vue'
import {Button,Form,FormItem,Input,Avatar,Message} from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Avatar)
Vue.prototype.$message = Message


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
