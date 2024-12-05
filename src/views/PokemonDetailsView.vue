<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PokemonForm from '@/components/pokemon/PokemonForm.vue';

const route = useRoute()

const pokemon = ref(null)

const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = response.data

    pokemon.value = {
      name: data.name.toUpperCase(),
      image: data.sprites.front_default,
      types: data.types.map(t => t.type.name.toUpperCase()).join(', '),
      abilities: data.abilities.map(a => a.ability.name.toUpperCase()).join(', '),
      height: data.height + ' DELIMETERS',
      weight: data.weight + 'HECTOGRAMS',
      stats: data.stats.map(stat => ({
        stat: stat.stat.name.toUpperCase(),
        value: String(stat.base_stat)
      })),
      moves: data.moves.slice(0, 10).map(move => move.move.name.toUpperCase()).join(', '),
    }
  } catch (error) {
    console.error('Error while fetching data', error)
  }
}

const fetchEvolutionChain = async (speciesUrl) => {
  try {
    const speciesResponse = await axios.get(speciesUrl)
    const evolutionChainUrl = speciesResponse.data.evolution_chain.url
    const evolutionResponse = await axios.get(evolutionChainUrl)
    return evolutionResponse.data.chain
  } catch (error) {
    console.error('Error fetching evolution chain', error)
  }
}
onMounted(() => {
  const pokemonId = route.params.id
  fetchPokemonDetails(pokemonId)
})
</script>

<template>
  <div
    class="bg-[#111111] relative min-h-screen h-full w-full p-4 md:p-24 xl:p-64 text-white flex  justify-center items-center">
    <div class="w-full flex flex-col justify-start items-center gap-2" v-if="pokemon">
      <PokemonForm :pokemon-data="pokemon.name">Name</PokemonForm>
      <PokemonForm :pokemon-data="pokemon.types">Types</PokemonForm>
      <PokemonForm :pokemon-data="pokemon.height">Height</PokemonForm>
      <PokemonForm :pokemon-data="pokemon.height">Weight</PokemonForm>
      <PokemonForm :pokemon-data="pokemon.abilities">Abilities</PokemonForm>
      <PokemonForm v-for="stat in pokemon.stats" :pokemon-data="stat.value">{{ stat.stat }}</PokemonForm>
      <form class="flex flex-row justify-between items-center gap-4 px-8">
        <label class="text-center text-sm font-semibold tracking-10 w-20">
          Moves
        </label>
        <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-96">
          <textarea type="text"
          
            class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-lg font-light tracking-10 min-h-40 word-break"
            :value="pokemon.moves" readonly></textarea>
        </div>
      </form>

      <img :src="pokemon.image" alt="Pokemon Image" />
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
