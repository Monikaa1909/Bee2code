<script setup>

import PokemonToCompare from './PokemonToCompare.vue'
import { ref, onMounted, onUnmounted, defineProps, watch } from 'vue'

const props = defineProps({
  pokemonToCompare: {
    type: Array,
    required: false
  }
})

const emit = defineEmits(['compare', 'delete-pokemon'])

const isVisible = ref(false)
const isDeleting = ref(false)

const closeOnClickOutside = (event) => {
  if (isDeleting.value) {
    isDeleting.value = false
    if(props.pokemonToCompare.length > 1) return
  }

  const comparisonButton = document.getElementById('comparasion1')
  const comparisonButton2 = document.querySelectorAll('.comparasion3')

  if (
    comparisonButton &&
    comparisonButton2 &&
    !comparisonButton.contains(event.target) &&
    !Array.from(comparisonButton2).some(button => button.contains(event.target))
  ) {
    isVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})

function handleDeletePokemon(pokemon) {
  isDeleting.value = true
  if (props.pokemonToCompare.length == 1) isVisible.value = false 
  emit('delete-pokemon', pokemon)
}
</script>

<template>
  <button id="comparasion1" @click="isVisible = !isVisible" :disabled="pokemonToCompare.length === 0"
    :class="{ 'bg-custom-dark-gray': pokemonToCompare.length === 0, 'bg-gradient-to-r from-custom-blue/50 to-custom-purple/50 hover:from-custom-blue/70 hover:to-custom-purple/70 shadow-blue-sm': pokemonToCompare.length > 0, 'bg-gradient-to-r from-custom-blue/70 to-custom-purple/70': isVisible }"
    class="fixed top-4 right-4  py-2 px-4 rounded-lg  flex flex-row pb-2">
    <p class="text-base font-semibold tracking-10 pr-2">POKEMON TO COMPARE:</p>
    <p class="text-base font-semibold tracking-10 pr-2">
      <slot name="counter"></slot>
    </p>
  </button>

  <div v-show="isVisible" id=""
    class="fixed top-16 right-4 bg-gradient-to-r from-custom-blue/70 to-custom-purple/70 rounded-lg shadow-blue-sm flex flex-col gap-2 items-center justify-center py-2 px-4">
      <PokemonToCompare v-for="pokemon in pokemonToCompare" @delete-pokemon="handleDeletePokemon(pokemon)">
        <template v-slot:image><img :src="pokemon.image" class="h-10 w-10" /></template>
        <template v-slot:name>{{ pokemon.name }}</template>
      </PokemonToCompare>
  </div>
  <button v-show="isVisible && pokemonToCompare.length === 2" @click="$emit('compare')"
    class="fixed right-4 top-44 bg-gradient-to-r from-custom-blue/70 to-custom-purple/70 rounded-lg shadow-blue-sm flex items-center justify-center py-2 px-4">
    <p class="text-sm font-semibold tracking-5">COMPARE</p>
  </button>
</template>