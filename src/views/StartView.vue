<script setup>

import { ref, computed } from 'vue'
import TopNav from '../components/TopNav.vue'
import WhoWeAre_1 from '@/components/WhoWeAre_1.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import StartHere from '@/components/StartHere.vue'

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
isDarkMode.value = false

if (isDarkMode.value) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const backgroundStyle = computed(() => ({
  style: `background-image: url('${isDarkMode.value ? '/bg_dark.png' : '/bg_light.png'}')`,
}))

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const section = ref('start')

function changeSection(targetSection) {
  section.value = targetSection

  const target = document.getElementById(targetSection);
  if (target) {
    const offset = 64;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

</script>

<template>
  <div class="relative h-full w-full bg-cover bg-fixed text-custom-dark-gray" v-bind="backgroundStyle">
    <!-- <TopNav @toggle-dark-mode="toggleDarkMode" @change-section="changeSection" :is-dark-mode="isDarkMode"
      :section="section" /> -->
    <div class="pt-16">
      <StartHere id="startSection"></StartHere>
      <WhatWeDo id="whatSection"/>
      <WhoWeAre_1 id="whoSection"></WhoWeAre_1>

      <!-- <div class="flex items-center justify-center h-screen bg-gray-600 bg-opacity-50 w-full">
        <div class="text-center text-white px-4">
          <h2 class="text-3xl font-bold">Komponent 3</h2>
          <RouterLink to="/pocemons">Home</RouterLink>
          <p class="mt-4 text-lg">To trzecia część strony, również wyśrodkowana.</p>
        </div>
      </div> -->
    </div>

  </div>

</template>
