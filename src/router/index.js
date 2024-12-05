import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'

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
    {
      path: '/example/details/:id',
      name: 'details',
      component: () => import('../views/PokemonDetailsView.vue'),
    },
  ],
})

export default router
