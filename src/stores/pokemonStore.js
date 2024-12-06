import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemon: [], 
  }),
  actions: {
    setPokemon(pokemon) {
      this.pokemon = pokemon
    },
   
    clearPokemon() {
      this.pokemon = []
    },
  },
})
