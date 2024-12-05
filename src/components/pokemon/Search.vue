<script setup>

import { ref, watch } from 'vue'

const searchQuery = ref('')
const emit = defineEmits()

watch(searchQuery, () => {
  emit('update:modelValue', searchQuery.value)
})

</script>
<template>
  <div class="bg-gradient-to-r from-custom-blue to-custom-purple p-[0.7px] rounded-md w-full sm:w-96">
    <input type="text" v-model="searchQuery" class="p-2 bg-[#111111] rounded-md focus:outline-none sm:w-full text-lg font-light tracking-10"
      placeholder="Search for pokemon by name..." />
  </div>
</template>