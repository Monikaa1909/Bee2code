import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartView,
    },
    {
      path: '/pocemons',
      name: 'pocemons',
      component: () => import('../views/PocemonHomeView.vue'),
    },
  ],
})

export default router
