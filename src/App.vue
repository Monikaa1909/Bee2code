<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue';
import TopNav from './components/TopNav.vue'

const isDarkMode = ref(false);

const backgroundStyle = computed(() => ({
  style: `background-image: url('${isDarkMode.value ? '/bg_dark.png' : '/bg_light.png'}')`,
}))

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

</script>

<template>
  <div class="relative h-full w-full bg-cover bg-fixed" v-bind="backgroundStyle">
    <TopNav @toggle-dark-mode="toggleDarkMode" :is-dark-mode="isDarkMode"/>
    <div class="pt-[100px]">

      <div class="flex items-center justify-center h-screen w-[1024px] mx-auto">
        <div class="text-center text-white">
          <h1 class="text-4xl font-bold">Pierwszy komponent</h1>
          <p class="mt-4 text-lg">Ten komponent jest wyśrodkowany na tle.</p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-800 bg-opacity-50 w-full">
        <div class="text-center text-white px-4">
          <h2 class="text-3xl font-bold">Komponent 2</h2>
          <p class="mt-4 text-lg">Kolejna część strony, która jest wyśrodkowana.</p>
        </div>
      </div>

      <div class="flex items-center justify-center h-screen bg-gray-600 bg-opacity-50 w-full">
        <div class="text-center text-white px-4">
          <h2 class="text-3xl font-bold">Komponent 3</h2>
          <p class="mt-4 text-lg">To trzecia część strony, również wyśrodkowana.</p>
        </div>
      </div>
    </div>

  </div>

</template>
