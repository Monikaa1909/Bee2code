<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pokemonData1: {
    type: String,
    required: false
  },
  pokemonData2: {
    type: String,
    required: false
  }
})
</script>
<template>
  <form class="flex flex-row justify-between items-center gap-4 px-8">
    <label class="text-center text-sm font-semibold tracking-10 w-20">
      <slot></slot>
    </label>
    <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-64 lg:w-96">
      <input type="text"
        class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-base font-light tracking-10"
        :value="pokemonData1" readonly />
    </div>
    <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-64 lg:w-96">
      <input type="text"
        class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-base font-light tracking-10"
        :value="pokemonData2" readonly />
    </div>
  </form>
</template>