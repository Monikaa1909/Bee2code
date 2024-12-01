<script setup>

import NavText from './NavText.vue'
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
    z-20
    flex items-center justify-between pl-5 pr-10 py-5">
    <img src=".././assets/Logo.png" class="h-[50px]" />
    <NavText :is-active="true">START HERE</NavText>
    <NavText :is-active="true">WHAT WE DO?</NavText>
    <NavText :is-active="false">WHO WE ARE</NavText>
    <NavText :is-active="true">CONTACT US</NavText>
    <svg v-if="!isDarkMode" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="w-16 h-16 fill-current text-white hover:text-custom-light-gray" @click="$emit('toggleDarkMode')">
      <g filter="url(#filter0_d_68_697)">
        <path
          d="M35.4764 28.5C35.4764 32.3531 32.3528 35.4767 28.4997 35.4767C24.6465 35.4767 21.5229 32.3531 21.5229 28.5C21.5229 24.6468 24.6465 21.5233 28.4997 21.5233C32.3528 21.5233 35.4764 24.6468 35.4764 28.5Z"
          fill="currentColor" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M28.5 16C28.9816 16 29.3721 16.3905 29.3721 16.8721V18.0349C29.3721 18.5165 28.9816 18.907 28.5 18.907C28.0184 18.907 27.6279 18.5165 27.6279 18.0349V16.8721C27.6279 16.3905 28.0184 16 28.5 16ZM19.6612 19.6612C20.0017 19.3206 20.5539 19.3206 20.8945 19.6612L21.3513 20.118C21.6919 20.4585 21.6919 21.0107 21.3513 21.3513C21.0107 21.6919 20.4585 21.6919 20.118 21.3513L19.6612 20.8945C19.3206 20.5539 19.3206 20.0017 19.6612 19.6612ZM37.3385 19.6615C37.6791 20.002 37.6791 20.5542 37.3385 20.8948L36.8817 21.3516C36.5412 21.6922 35.989 21.6922 35.6484 21.3516C35.3078 21.011 35.3078 20.4588 35.6484 20.1183L36.1052 19.6615C36.4458 19.3209 36.9979 19.3209 37.3385 19.6615ZM16 28.5C16 28.0184 16.3905 27.6279 16.8721 27.6279H18.0349C18.5165 27.6279 18.907 28.0184 18.907 28.5C18.907 28.9816 18.5165 29.3721 18.0349 29.3721H16.8721C16.3905 29.3721 16 28.9816 16 28.5ZM38.093 28.5C38.093 28.0184 38.4835 27.6279 38.9651 27.6279H40.1279C40.6095 27.6279 41 28.0184 41 28.5C41 28.9816 40.6095 29.3721 40.1279 29.3721H38.9651C38.4835 29.3721 38.093 28.9816 38.093 28.5ZM35.6484 35.6484C35.989 35.3078 36.5412 35.3078 36.8817 35.6484L37.3385 36.1052C37.6791 36.4458 37.6791 36.9979 37.3385 37.3385C36.9979 37.6791 36.4458 37.6791 36.1052 37.3385L35.6484 36.8817C35.3078 36.5412 35.3078 35.989 35.6484 35.6484ZM21.3513 35.6487C21.6919 35.9893 21.6919 36.5415 21.3513 36.8821L20.8945 37.3388C20.5539 37.6794 20.0017 37.6794 19.6612 37.3388C19.3206 36.9983 19.3206 36.446 19.6612 36.1055L20.118 35.6487C20.4585 35.3081 21.0107 35.3081 21.3513 35.6487ZM28.5 38.093C28.9816 38.093 29.3721 38.4835 29.3721 38.9651V40.1279C29.3721 40.6095 28.9816 41 28.5 41C28.0184 41 27.6279 40.6095 27.6279 40.1279V38.9651C27.6279 38.4835 28.0184 38.093 28.5 38.093Z"
          fill="currentColor" />
      </g>
      <defs>
        <filter id="filter0_d_68_697" x="0" y="0" width="57" height="57" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_68_697" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_68_697" result="shape" />
        </filter>
      </defs>
    </svg>
    <svg v-else width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="w-16 h-16 fill-current text-white hover:text-custom-light-gray" @click="$emit('toggleDarkMode')">
      <g filter="url(#filter0_d_44_769)">
        <path
          d="M28.5 41C35.4035 41 41 35.4035 41 28.5C41 27.9216 40.1331 27.826 39.834 28.321C38.4111 30.6757 35.8269 32.25 32.875 32.25C28.3876 32.25 24.75 28.6124 24.75 24.125C24.75 21.1731 26.3243 18.5888 28.679 17.166C29.174 16.8668 29.0784 16 28.5 16C21.5964 16 16 21.5964 16 28.5C16 35.4035 21.5964 41 28.5 41Z"
          fill="currentColor" />
      </g>
      <defs>
        <filter id="filter0_d_44_769" x="0" y="0" width="57" height="57" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_769" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_769" result="shape" />
        </filter>
      </defs>
    </svg>


    <!-- <button @click="$emit('toggleDarkMode', 1)"
      class=" py-2 font-semibold text-sm rounded bg-blue-500 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-700 transition-colors duration-300">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button> -->
  </div>
</template>