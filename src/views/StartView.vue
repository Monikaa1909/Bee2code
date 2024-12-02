<script setup>

import { ref, computed } from 'vue'
import TopNav from '../components/TopNav.vue'
import WhoWeAre_1 from '@/components/WhoWeAre_1.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import StartHere from '@/components/StartHere.vue'
import WhoWeAre_2 from '@/components/WhoWeAre_2.vue'
import BeeInspired from '@/components/BeeInspired.vue'
import ContactUs from '@/components/ContactUs.vue'

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
    <TopNav @toggle-dark-mode="toggleDarkMode" @change-section="changeSection" :is-dark-mode="isDarkMode"
      :section="section" />
    <div class="pt-16">
      <StartHere id="startSection"></StartHere>
      <WhatWeDo id="whatSection"/>
      <WhoWeAre_1 id="whoSection"/>
      <WhoWeAre_2></WhoWeAre_2>
      <BeeInspired/>
      <ContactUs id="contactSection"/>
    </div>

  </div>

</template>
