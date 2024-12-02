<script setup>
import SocialMedia from './SocialMedia.vue';

function redirectTo(link) {
  window.location.href = link
}

</script>

<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-between w-full h-auto md:h-44 px-2 sm:px-10 md:py-0 pt-20 gap-10 md:gap-40
      bg-gradient-to-r 
      from-[rgba(0,0,0,1)] from-0% 
      via-[rgba(0,0,0,0.5)] via-50% 
      to-[rgba(0,0,0,1)] to-100%
      shadow-small-box dark:shadow-small-box-dark"
  >
    <img class="max-h-10" src=".././assets/logo.png" />
    <div class="w-full flex flex-col sm:flex-row items-center justify-end gap-4">
      <SocialMedia @click="redirectTo('https://www.facebook.com/bee2code/')">
        <template v-slot:icon>
          <img class="h-12" src="./icons/fb_icon.svg" />
        </template>
        <template v-slot:social>
          Bee2code
        </template>
      </SocialMedia>
      <SocialMedia @click="redirectTo('https://www.facebook.com/bee2code/')">
        <template v-slot:icon>
          <img class="h-12" src="./icons/ig_icon.svg" />
        </template>
        <template v-slot:social>
          Bee2code
        </template>
      </SocialMedia>
    </div>
  </div>
</template>
