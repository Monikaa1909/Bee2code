<script setup>

defineProps({
  typeOfData: String,
  pokemonData: Array,
})

</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500/75">
    <!-- Główne okno dialogowe -->
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-96 h-full sm:w-96 text-center">
      <!-- Kontener z przewijaniem -->
      <div class="overflow-y-auto max-h-[75vh]">
        <p class="text-lg font-bold mb-4">{{ typeOfData }}</p>
        <p v-for="data in pokemonData" :key="data" class="mb-4">
          {{ data }}
        </p>
      </div>
      <!-- Przycisk zamykania -->
      <button @click="$emit('closeModal')"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Zamknij</button>
    </div>
  </div>
</template>