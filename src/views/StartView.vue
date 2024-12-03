<script setup>

import { ref, computed, onMounted, onUnmounted } from 'vue'
import TopNav from '../components/TopNav.vue'
import WhoWeAre_1 from '@/components/WhoWeAre_1.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import StartHere from '@/components/StartHere.vue'
import WhoWeAre_2 from '@/components/WhoWeAre_2.vue'
import BeeInspired from '@/components/BeeInspired.vue'
import ContactUs from '@/components/ContactUs.vue'
import MenuElement from '@/components/MenuElement.vue'

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

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}

const section = ref('start')

function changeSection(targetSection) {
  section.value = targetSection
  showMenu.value = false

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


function handleResize() {
  const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches
  if (isLargeScreen) {
    showMenu.value = false;
  }
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<template>
  <div class="relative h-full w-full bg-cover bg-fixed text-custom-dark-gray" v-bind="backgroundStyle">
    <TopNav @notifyToggleDarkMode="toggleDarkMode" @toggle-menu="toggleMenu" @change-section="changeSection"
      :is-dark-mode="isDarkMode" :section="section" />
    <div v-if="showMenu" class="fixed top-24 sm:top-20 right-2 sm:right-2 left-1/2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 shadow-small-box dark:shadow-small-box-dark bg-gradient-to-r 
        from-[rgba(0,0,0,0.9)] from-0% 
        via-[rgba(0,0,0,0.8)] via-50% 
        to-[rgba(0,0,0,0.9)] to-100% z-30
        flex flex-col items-center justify-center py-2 px-12 gap-2 lg:hidden">
        <MenuElement @click="changeSection('startSection')">START HERE</MenuElement>
        <MenuElement @click="changeSection('whatSection')">WHAT WE DO</MenuElement>
        <MenuElement @click="changeSection('whoSection')">WHO WE ARE</MenuElement>
        <MenuElement @click="changeSection('contactSection')">CONTACT US</MenuElement>
    </div>
    <div class="w-full pt-16">
      <StartHere id="startSection"></StartHere>
      <WhatWeDo id="whatSection" />
      <WhoWeAre_1 id="whoSection" />
      <WhoWeAre_2></WhoWeAre_2>
      <BeeInspired />
      <ContactUs id="contactSection" @change-section="changeSection"/>
    </div>
  </div>
</template>
