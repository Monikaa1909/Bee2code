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
  <form class="flex flex-row justify-center items-center gap-10 sm:gap-4 px-4 sm:px-8 w-full">
    <label class="text-center text-[12px] sm:text-sm font-semibold tracking-0 sm:tracking-10 w-24">
      <slot></slot>
    </label>
    <div class="flex flex-col sm:flex-row w-full gap-1 sm:gap-4">
      <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-64 lg:w-96">
      <input type="text"
        class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-[12px] sm:text-base font-light tracking-0 sm:tracking-10 w-full"
        :value="pokemonData1" readonly />
    </div>
    <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-64 lg:w-96">
      <input type="text"
        class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-[12px] sm:text-base font-light tracking-0 sm:tracking-10 w-full"
        :value="pokemonData2" readonly />
    </div>
    </div>
  </form>
</template>