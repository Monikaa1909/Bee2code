<script setup>
import Comparison from '@/components/pokemon/Comparison.vue'
import Modal from '@/components/pokemon/Modal.vue'
import Search from '@/components/pokemon/Search.vue'

import { ref, onMounted, computed, watch } from 'vue'

const isModalOpen = ref(false)
const typeOfData = ref('')
const pokemonData = ref([])

function openModal(newTypeOfData, newPokemonData) {
  isModalOpen.value = true
  typeOfData.value = newTypeOfData
  pokemonData.value = newPokemonData
}

const closeModal = () => {
  isModalOpen.value = false
}

const currentPage = ref(1)
const pokemon = ref([])
const loading = ref(false)
const searchQuery = ref('')

const loadPokemon = async (page) => {
  console.log("Wywołanie load pokemons")
  if (page < 1) return
  loading.value = true
  const offset = (page - 1) * 20

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    const data = await response.json()

    pokemon.value = await Promise.all(data.results.map(async (pokemon) => {
      const pokemonData = await fetch(pokemon.url).then(res => res.json())

      const types = pokemonData.types.map(t => t.type.name.toUpperCase())
      const abilities = pokemonData.abilities.map(a => a.ability.name.toUpperCase())
      const imageUrl = pokemonData.sprites.front_default

      return {
        name: pokemon.name.toUpperCase(),
        types,
        abilities,
        image: imageUrl,
      }
    }))
  } catch (error) {
    console.error('Error while fetching data', error)
  } finally {
    loading.value = false
    currentPage.value = page
  }
}

onMounted(() => {
  loadPokemon(currentPage.value)
})

const filteredPokemon = computed(() => {
  return pokemon.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const isNextPage = ref(true)

watch(filteredPokemon, (newFilteredPokemon) => {
  if (newFilteredPokemon.length < 20) {
    isNextPage.value = false
  }
  else isNextPage.value = true
})

const pokemonToCompare = ref([])

function addPokemonToCompare(pokemon) {
  if (pokemonToCompare.value.length >= 2) return 
  else pokemonToCompare.value.push(pokemon)
}

function deletePokemonToCompare(pokemon) {
  const index = pokemonToCompare.value.findIndex(p => p.name === pokemon.name);
  if (index !== -1) { 
    pokemonToCompare.value.splice(index, 1)
  }
}

function compare() {
  console.log("Porównaj")
}

</script>

<template>
  <div class="bg-[#111111] relative h-full w-full p-4 sm:p-24 text-white">

    <Comparison @compare="compare" @delete-pokemon="deletePokemonToCompare"  :pokemon-to-compare="pokemonToCompare">
        <template v-slot:counter>{{ pokemonToCompare.length }}</template>
    </Comparison>
      
    <p class="p-24 text-5xl font-extrabold tracking-20 text-center bg-gradient-to-r from-custom-blue to-custom-purple bg-clip-text text-transparent text-shadow-blue-sm w-full break-words pb-24">
      WATCH AND COMPARE POKEMON
    </p>

    <div class="w-full flex items-center justify-between pb-12">
      <Search v-model:modelValue="searchQuery"/>
    </div>

    

    <!-- Pagination -->
    <div class="pagination mb-4">
      <button @click="loadPokemon(currentPage - 1)" :disabled="currentPage === 1 || loading">
        Poprzednia
      </button>
      <span>Strona {{ currentPage }}</span>
      <button @click="loadPokemon(currentPage + 1)" :disabled="loading || !isNextPage">
        Następna
      </button>
    </div>

    
    <!-- Tabela Pokémonów -->
    <table class="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th class="border px-4 py-2">NAMES</th>
          <th class="border px-4 py-2">TYPES</th>
          <th class="border px-4 py-2">ABILITIES</th>
          <th class="border px-4 py-2">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pokemon in filteredPokemon" :key="pokemon.name">
          <td>{{ pokemon.name }}
            <img class="":src="pokemon.image"/>
          </td>
          <td @click="openModal('ALL TYPES', pokemon.types)">{{ pokemon.types[0] }} {{ pokemon.types.length - 1 }}</td>
          <td @click="openModal('ALL ABILITIES', pokemon.abilities)">{{ pokemon.abilities[0] }} {{
            pokemon.abilities.length - 1 }}</td>
          <td>
            <button>szczegóły</button>
            <button id="comparasion3" @click="addPokemonToCompare(pokemon)">dodaj pokemona</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Modal @close-modal="closeModal" :type-of-data="typeOfData" :pokemon-data="pokemonData" v-if="isModalOpen"></Modal>

  </div>
</template>
