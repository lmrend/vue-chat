import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/chat'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login')
  },
  {
    path: '/chat',
    name: 'layout',
    component: () => import('@/views/layout'),
    redirect:'/chat/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/AboutView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
