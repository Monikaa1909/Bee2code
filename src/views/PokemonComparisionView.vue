<script setup>

import { usePokemonToCompareStore } from '@/stores/pokemonToCompareStore'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ComparasionForm from '@/components/pokemon/ComparasionForm.vue';
const pokemonToCompareStore = usePokemonToCompareStore()
const pokemonToCompare = ref(pokemonToCompareStore.pokemonToCompare) 

const pokemon1 = ref([])
const pokemon2 = ref([])

const fetchPokemonsDetails = async (id1, id2) => {
  try {
    const [response1, response2] = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id1}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id2}`)
    ]);

    const pokemonData = [response1.data, response2.data]

    pokemon1.value = {
      name: pokemonData[0].name.toUpperCase(),
      image: pokemonData[0].sprites.front_default,
      types: pokemonData[0].types.map(t => t.type.name.toUpperCase()).join(', '),
      abilities: pokemonData[0].abilities.map(a => a.ability.name.toUpperCase()).join(', '),
      height: pokemonData[0].height + ' DELIMETERS',
      weight: pokemonData[0].weight + 'HECTOGRAMS',
      stats: pokemonData[0].stats.map(stat => ({
        stat: stat.stat.name.toUpperCase(),
        value: String(stat.base_stat)
      })),
      moves: pokemonData[0].moves.slice(0, 10).map(move => move.move.name.toUpperCase()).join(', '),
      imageFront: pokemonData[0].sprites.other['official-artwork'].front_default,
    }

    pokemon2.value = {
      name: pokemonData[1].name.toUpperCase(),
      image: pokemonData[1].sprites.front_default,
      types: pokemonData[1].types.map(t => t.type.name.toUpperCase()).join(', '),
      abilities: pokemonData[1].abilities.map(a => a.ability.name.toUpperCase()).join(', '),
      height: pokemonData[1].height + ' DELIMETERS',
      weight: pokemonData[1].weight + 'HECTOGRAMS',
      stats: pokemonData[1].stats.map(stat => ({
        stat: stat.stat.name.toUpperCase(),
        value: String(stat.base_stat)
      })),
      moves: pokemonData[1].moves.slice(0, 10).map(move => move.move.name.toUpperCase()).join(', '),
      imageFront: pokemonData[1].sprites.other['official-artwork'].front_default,
    }
  } catch (error) {
    console.error('Error while fetching data', error)
  }
}

const fetchAndDisplayTwoPokemons = async () => {
  if (pokemonToCompare.value.length === 2) {
    await fetchPokemonsDetails(pokemonToCompare.value[0].id, pokemonToCompare.value[1].id)
  }
}

onMounted(() => {
  fetchAndDisplayTwoPokemons()
})

</script>

<template>
  <div class="bg-[#111111] relative min-h-screen h-full w-full p-4 md:p-24 xl:px-64 text-white flex flex-col justify-center items-center gap-4">

    <div class="w-full flex flex-row justify-center items-center gap-4" v-if="pokemon1 && pokemon2">
      <img class="w-36" :src="pokemon1.imageFront"/>
      <p
      class="text-5xl font-extrabold tracking-20 text-center bg-gradient-to-r from-custom-blue to-custom-purple bg-clip-text text-transparent text-shadow-blue-sm  break-words" >
      VS
    </p>
      <img class="w-36" :src="pokemon2.imageFront"/>
    </div>

    <div class="w-full flex flex-col justify-start items-center gap-2" v-if="pokemonToCompare.length > 0">
      <ComparasionForm :pokemon-data-1="pokemon1.name" :pokemon-data-2="pokemon2.name">Name</ComparasionForm>
      <ComparasionForm :pokemon-data-1="pokemon1.types" :pokemon-data-2="pokemon2.types">Types</ComparasionForm>
      <ComparasionForm :pokemon-data-1="pokemon1.height" :pokemon-data-2="pokemon2.height">Height</ComparasionForm>
      <ComparasionForm :pokemon-data-1="pokemon1.weight" :pokemon-data-2="pokemon2.weight">Weight</ComparasionForm>
      <ComparasionForm :pokemon-data-1="pokemon1.abilities" :pokemon-data-2="pokemon2.abilities">Abilities</ComparasionForm>
      <form class="flex flex-row justify-between items-center gap-4 px-8">
        <label class="text-center text-sm font-semibold tracking-10 w-20">
          Moves
        </label>
        <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-64 lg:w-96">
          <textarea type="text"
          
            class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-lg font-light tracking-10 min-h-40 word-break"
            :value="pokemon1.moves" readonly></textarea>
        </div>
        <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-64 lg:w-96">
          <textarea type="text"
          
            class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-lg font-light tracking-10 min-h-40 word-break"
            :value="pokemon2.moves" readonly></textarea>
        </div>
      </form>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>