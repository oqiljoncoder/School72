import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: '/',
      component: () => import('@/pages/Home.vue')
   },
   {
      path: '/main-page',
      component: () => import('@/pages/MainPage.vue')
   },
   {
      path: '/articles',
      component: () => import('@/pages/Articles.vue')
   }
]

export default createRouter({
   history: createWebHistory(),
   routes
})