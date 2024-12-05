<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pokemonData: {
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
    <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-96">
      <input type="text"
        class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-center text-lg font-light tracking-10"
        :value="pokemonData" readonly />
    </div>
  </form>
</template>