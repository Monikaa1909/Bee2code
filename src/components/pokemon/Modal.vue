<script setup>
import SmallButton from './SmallButton.vue';


defineProps({
  typeOfData: String,
  pokemonData: Array,
})

</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500/75 p-4">

    <div class="bg-[#111111] p-6 rounded-lg shadow-lg w-full max-w-96 sm:w-96 text-center flex flex-col items-center justify-center gap-4">

      <p class="bg-gradient-to-r from-custom-blue/50 to-custom-purple/50 shadow-blue-sm bg-opacity-50 rounded-lg p-2 w-full text-center text-sm font-semibold tracking-10">{{ typeOfData }}</p>
        <p v-for="data in pokemonData" :key="data" class="text-center text-lg font-light tracking-10">
          {{ data }}
        </p>
      
      <SmallButton class="w-32" @click="$emit('closeModal')">CLOSE</SmallButton>

    </div>
  </div>
</template>