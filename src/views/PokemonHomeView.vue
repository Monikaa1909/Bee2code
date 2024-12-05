<script setup>

import Comparison from '@/components/pokemon/Comparison.vue'
import Modal from '@/components/pokemon/Modal.vue'
import Search from '@/components/pokemon/Search.vue'
import SmallButton from '@/components/pokemon/SmallButton.vue'
import { usePokemonToCompareStore } from '@/stores/pokemonToCompareStore'
import { usePokemonStore } from '@/stores/pokemonStore'
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const pokemonToCompareStore = usePokemonToCompareStore()
const pokemonStore = usePokemonStore()

const router = useRouter()
const route = useRoute()

const isModalOpen = ref(false)
const typeOfData = ref('')
const pokemonData = ref([])
const currentPage = ref(1)
const loadedPokemon = ref([])
const loading = ref(false)
const searchQuery = ref('')
const isAlertOpen = ref(false)
const isNextPage = ref(true)

function openModal(newTypeOfData, newPokemonData) {
  isModalOpen.value = true
  typeOfData.value = newTypeOfData
  pokemonData.value = newPokemonData
}

const closeModal = () => {
  isModalOpen.value = false
}

const loadPokemon = async () => {
  loading.value = true

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1301`)
    const data = await response.json()

    loadedPokemon.value = await Promise.all(data.results.map(async (pokemon) => {
      const pokemonData = await fetch(pokemon.url).then(res => res.json())

      const id = pokemonData.id
      const types = pokemonData.types.map(t => t.type.name.toUpperCase())
      const abilities = pokemonData.abilities.map(a => a.ability.name.toUpperCase())
      const imageUrl = pokemonData.sprites.front_default

      return {
        id,
        name: pokemon.name.toUpperCase(),
        types,
        abilities,
        image: imageUrl,
      }
    }))

    pokemonStore.setPokemonToCompare(loadedPokemon.value)
  } catch (error) {
    console.error('Error while fetching data', error)
  } finally {
    loading.value = false
    currentPage.value = 1
  }
}

onMounted(() => {
  if (!pokemonStore.pokemon.length > 0) loadPokemon()
  else loadedPokemon.value = pokemonStore.pokemon

  if (route.query.error) {
    isAlertOpen.value = true /
      router.replace({ query: { ...route.query, error: undefined } })
  }
})

const filteredPokemon = computed(() => {
  return loadedPokemon.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const paginatedPokemon = computed(() => {
  return filteredPokemon.value.slice((currentPage.value - 1) * 20, (currentPage.value - 1) * 20 + 20)
})

watch(paginatedPokemon, (newFilteredPokemon) => {
  if (newFilteredPokemon.length < 20) {
    isNextPage.value = false
  }
  else isNextPage.value = true
})

watch(searchQuery, (newSearchQuery) => {
  currentPage.value = 1
})

function addPokemonToCompare(pokemon) {
  if (!isAddingActive(pokemon)) return
  else pokemonToCompareStore.setPokemonToCompare(pokemon)
}

function deletePokemonToCompare(pokemon) {
  pokemonToCompareStore.removePokemonFromCompare(pokemon)
}

function compare() {
  router.push(`/example/comparision`)
}

function isAddingActive(pokemon) {
  if (pokemonToCompareStore.pokemonToCompare.length === 2 || pokemonToCompareStore.pokemonToCompare.some(item => item.id === pokemon.id)) return false
  return true
}

function seeDetails(pokemon) {
  router.push(`/example/details/${pokemon.id}`)
}

function prevPage(page) {
  if (page < 1) return
  currentPage.value = page
}

function nextPage(page) {
  if (!isNextPage.value) return
  currentPage.value = page
}
</script>

<template>
  <div class="bg-[#111111] relative min-h-screen h-full w-full p-4 md:p-24 xl:px-64 text-white">

    <Comparison @compare="compare" @delete-pokemon="deletePokemonToCompare"
      :pokemon-to-compare="pokemonToCompareStore.pokemonToCompare">
      <template v-slot:counter>{{ pokemonToCompareStore.pokemonToCompare.length }}</template>
    </Comparison>

    <div @click="isAlertOpen = false" v-if="isAlertOpen"
      class="fixed inset-0 flex items-center justify-center bg-gray-500/75">
      <div
        class="bg-[#111111] p-6 rounded-lg shadow-lg w-full max-w-96 sm:w-96 text-center flex flex-col items-center justify-center gap-8">
        <p class="rounded-lg p-2 w-full text-center text-xl font-semibold tracking-10">
          OH NO!</p>
        <p class="text-center text-sm font-light tracking-10">
          YOU HAVE TRIED TO COMPARE, BUT FIRST YOU MUST SELECT TWO POKEMON!
        </p>
        <SmallButton class="w-32" @click="$emit('closeModal')">CLOSE</SmallButton>
      </div>
    </div>

    <p
      class="px-24 text-5xl font-extrabold tracking-20 text-center bg-gradient-to-r from-custom-blue to-custom-purple bg-clip-text text-transparent text-shadow-blue-sm w-full break-words pb-24">
      WATCH AND COMPARE POKEMON
    </p>

    <div class="w-full flex items-center justify-between pb-12">
      <Search v-model:modelValue="searchQuery" />
    </div>

    <div class="w-full flex flex-row justify-end items-center pb-2 gap-2">
      <SmallButton
        :class="{ 'bg-custom-dark-gray hover:bg-custom-dark-gray cursor-default shadow-none': currentPage === 1 || loading }"
        @click="prevPage(currentPage - 1)">PREV</SmallButton>
      <p class="text-sm font-light tracking-10">PAGE {{ currentPage }}</p>
      <SmallButton
        :class="{ 'bg-custom-dark-gray hover:bg-custom-dark-gray cursor-default shadow-none': loading || !isNextPage }"
        @click="nextPage(currentPage + 1)">NEXT</SmallButton>
    </div>

    <div
      class="grid grid-cols-4 w-full bg-gradient-to-r from-custom-blue/50 to-custom-purple/50 shadow-blue-sm bg-opacity-50 rounded-lg py-4">
      <div class="text-center text-sm font-semibold tracking-10">NAMES</div>
      <div class="text-center text-sm font-semibold tracking-10">TYPES</div>
      <div class="text-center text-sm font-semibold tracking-10">ABILITIES</div>
      <div class="text-center text-sm font-semibold tracking-10">ACTIONS</div>
    </div>

    <div v-for="pokemon in paginatedPokemon" :key="pokemon.name"
      class="grid grid-cols-4 items-center border-b-[0.7px] border-b-custom-blue/50">
      <div class="flex items-center justify-center gap-2">
        <img class="h-10 w-10" :src="pokemon.image" />
        <p class="text-center text-lg font-light tracking-10">{{ pokemon.name }}</p>
      </div>
      <div class="flex items-center justify-center gap-2">
        <p class="text-center text-lg font-light tracking-10 min-w-20">{{ pokemon.types[0] }}</p>
        <SmallButton :class="{ 'invisible': pokemon.types.length - 1 === 0 }"
          @click="openModal('ALL TYPES', pokemon.types)">+{{ pokemon.types.length - 1 }}</SmallButton>
      </div>
      <div class="flex items-center justify-center gap-2">
        <p class="text-center text-lg font-light tracking-10  min-w-40">{{ pokemon.abilities[0] }}</p>
        <SmallButton :class="{ 'invisible': pokemon.types.length - 1 === 0 }"
          @click="openModal('ALL ABILITIES', pokemon.abilities)">+{{ pokemon.abilities.length - 1 }}</SmallButton>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 py-2">
        <SmallButton @click="seeDetails(pokemon)" class="w-28">DETAILS</SmallButton>
        <button @click="addPokemonToCompare(pokemon)"
          :class="{ 'cursor-default bg-custom-dark-gray hover:bg-custom-dark-gray shadow-none': !isAddingActive(pokemon) }"
          class="comparasion3 w-28 bg-custom-blue/50 hover:bg-custom-blue/70 py-1 px-2 rounded-md shadow-blue-sm">
          <p class="text-xs font-light">
            ADD POKEMON
          </p>
        </button>
      </div>
    </div>

    <Modal @close-modal="closeModal" :type-of-data="typeOfData" :pokemon-data="pokemonData" v-if="isModalOpen"></Modal>
  </div>
</template>
