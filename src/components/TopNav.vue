<script setup>

import ModeSwitcher from './ModeSwitcher.vue';
import NavText from './NavText.vue'

defineProps({
  isDarkMode: Boolean,
  section: String,
})

const emit = defineEmits()

const handleToggleDarkMode = () => {
  emit('notifyToggleDarkMode')
};

</script>

<template>
  <div class="fixed top-0 left-0 w-full sm:h-16 h-auto flex-wrap sm:flex-nowrap
    bg-gradient-to-r 
    from-[rgba(0,0,0,0.8)] from-0% 
    via-[rgba(0,0,0,0.6)] via-50% 
    to-[rgba(0,0,0,0.7)] to-100%
    z-20
    flex items-center justify-center sm:justify-between sm:pl-5 sm:pr-5 gap-5 px-2 py-2">
    <img @click="$emit('changeSection', 'startSection')" src=".././assets/Logo.png" class="max-h-[35px] sm:h-[35px] cursor-pointer" />
    <div class="lg:flex items-center justify-between w-full hidden">
      <NavText @click="$emit('changeSection', 'startSection')" :is-active="section === 'startSection'">START HERE
      </NavText>
      <NavText @click="$emit('changeSection', 'whatSection')" :is-active="section === 'whatSection'">WHAT WE DO?
      </NavText>
      <NavText @click="$emit('changeSection', 'whoSection')" :is-active="section === 'whoSection'">WHO WE ARE</NavText>
      <NavText @click="$emit('changeSection', 'contactSection')" :is-active="section === 'contactSection'">CONTACT US
      </NavText>
      <ModeSwitcher :is-dark-mode="isDarkMode" @toggle-dark-mode="handleToggleDarkMode" />
    </div>
    <div class="flex items-center justify-center lg:hidden">
      <svg width="53" height="45" viewBox="0 0 53 45" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 cursor-pointer hover:text-custom-light-gray"
        @click="$emit('toggleMenu')">
        <g filter="url(#filter0_d_125_628)">
          <path d="M10 10H43.3333M10 22.5H43.3333M10 35H43.3333" stroke="white" stroke-width="3" stroke-linecap="round"
            stroke-linejoin="round" shape-rendering="crispEdges" fill="currentColor" />
        </g>
        <defs>
          <filter id="filter0_d_125_628" x="0.5" y="0.5" width="52.3335" height="44" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_125_628" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_125_628" result="shape" />
          </filter>
        </defs>
      </svg>

      <ModeSwitcher :is-dark-mode="isDarkMode" @toggle-dark-mode="handleToggleDarkMode" />
    </div>
  </div>
</template>