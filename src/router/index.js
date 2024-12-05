import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'
import { usePokemonToCompareStore } from '@/stores/pokemonToCompareStore';

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
    {
      path: '/example/comparision',
      name: 'comparision',
      component: () => import('../views/PokemonComparisionView.vue'),
      beforeEnter: (to, from, next) => {
        const pokemonToCompareStore = usePokemonToCompareStore()
        console.log('before' + from.name == null)
        if (from.name == null) {
          next({
            path: '/example/home',
            query: { error: 'Select exactly 2 Pokémon to compare!' },
          })
        } else {
          next()
        }
      },
    },
  ],
})

export default router
