<script setup>
import Modal from '@/components/pokemon/Modal.vue'
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
  if (page < 1) return
  loading.value = true
  const offset = (page - 1) * 20

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    const data = await response.json()

    pokemon.value = await Promise.all(data.results.map(async (pokemon) => {
      const pokemonData = await fetch(pokemon.url).then(res => res.json())

      const types = pokemonData.types.map(t => t.type.name)
      const abilities = pokemonData.abilities.map(a => a.ability.name)

      return {
        name: pokemon.name,
        types,
        abilities,
      }
    }))
  } catch (error) {
    console.error('Error while fetching data', error)
  } finally {
    loading.value = false
    currentPage.value = page
  }
};

onMounted(() => {
  loadPokemon(currentPage.value)
})

watch(searchQuery, () => {
  currentPage.value = 1
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
  if (index !== -1) { // Sprawdź, czy Pokémon istnieje w tablicy
    pokemonToCompare.value.splice(index, 1); // Usuń jeden element od znalezionego indeksu
  }
}


</script>

<template>
  <div>
    <!-- Pole wyszukiwania -->
    <input type="text" v-model="searchQuery" class="mb-4 p-2 border rounded w-full"
      placeholder="Szukaj pokémona po nazwie..." />

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

    <div>
       <p>POKEMONY DO PORÓWNANIA: </p>
       <div v-for="pokemon in pokemonToCompare">
        <p>{{ pokemon.name }}</p>
        <button @click="deletePokemonToCompare(pokemon)">Usuń</button>
       </div>   
       <p>Łącznie: {{ pokemonToCompare.length }}</p>
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
          <td>{{ pokemon.name }}</td>
          <td @click="openModal('ALL TYPES', pokemon.types)">{{ pokemon.types[0] }} {{ pokemon.types.length - 1 }}</td>
          <td @click="openModal('ALL ABILITIES', pokemon.abilities)">{{ pokemon.abilities[0] }} {{
            pokemon.abilities.length - 1 }}</td>
          <td>
            <button>szczegóły</button>
            <button @click="addPokemonToCompare(pokemon)">dodaj pokemona</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Modal @close-modal="closeModal" :type-of-data="typeOfData" :pokemon-data="pokemonData" v-if="isModalOpen"></Modal>

  </div>
</template>
