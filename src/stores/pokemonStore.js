import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemonToCompare: [], 
  }),
  actions: {
    setPokemonToCompare(pokemon) {
      if (this.pokemonToCompare.length < 2) {
        this.pokemonToCompare.push(pokemon)
      }
    },
    removePokemonFromCompare(pokemon) {
      this.pokemonToCompare = this.pokemonToCompare.filter(p => p.id !== pokemon.id);
    },
    clearPokemonToCompare() {
      this.pokemonToCompare = []
    },
  },
})
