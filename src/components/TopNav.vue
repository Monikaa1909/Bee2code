<script setup>

defineProps({
  isDarkMode: Boolean,
})

</script>
<template>
  <div class="fixed top-0 left-0 w-screen h-[100px] 
    bg-gradient-to-r 
    from-[rgba(21,90,252,0.8)] from-0% 
    via-[rgba(21,90,252,0.3)] via-50% 
    to-[rgba(110,60,255,0.5)] to-100% 
    z-20">
    <p class="text-center text-white py-4 dark:bg-green-500">Nagłówek na górze</p>
    <button @click="$emit('toggleDarkMode', 1)"
      class=" py-2 font-semibold text-sm rounded bg-blue-500 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-700 transition-colors duration-300">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </div>
</template>