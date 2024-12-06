import { BehaviorSubject } from 'rxjs'

const pokemonToCompareSubject = new BehaviorSubject([])

const MAX_POKEMON_COUNT = 2

export const stateService = {

  getPokemonToCompare: () => pokemonToCompareSubject.getValue(),

  subscribeToPokemonToCompare: (callback) => pokemonToCompareSubject.subscribe(callback),

  addPokemonToCompare: (pokemon) => {
    const currentList = pokemonToCompareSubject.getValue()

    if (currentList.length >= MAX_POKEMON_COUNT) {
      console.warn('Nie można dodać więcej niż 2 Pokemonów.')
      return
    }

    pokemonToCompareSubject.next([...currentList, pokemon])
  },

  removePokemonFromCompare: (pokemonId) => {
    const updatedList = pokemonToCompareSubject.getValue().filter(p => p.id !== pokemonId);
    pokemonToCompareSubject.next(updatedList);
  },

  clearPokemonToCompare: () => {
    pokemonToCompareSubject.next([]);
  },
}
