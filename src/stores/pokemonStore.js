import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemon: [], 
  }),
  actions: {
    setPokemonToCompare(pokemon) {
      this.pokemon = pokemon
    },
   
    clearPokemonToCompare() {
      this.pokemon = []
    },
  },
})
