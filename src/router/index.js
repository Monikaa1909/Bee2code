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
      path: '/example/home',
      name: 'pokemons',
      component: () => import('../views/PokemonHomeView.vue'),
    },
  ],
})

export default router
