<script setup>

import AchievementElement from '@/components/Bee2code/AchievementElement.vue'

</script>

<template>
  <div class="w-full pt-24">
    <div
      class="h-[540px] w-full bg-[url('.././assets/start_here_photo.png')] bg-cover bg-center flex flex-col items-center justify-center gap-5 shadow-big-box">
      <img class="w-96" src="../.././assets/logo.png" />
      <p class="text-white font-regular text-4xl tracking-5 text-center text-shadow-md break-words w-full">We program the future with
        the
        precision of bees!</p>
    </div>
    <div class="w-full flex px-10 sm:px-10 flex-col sm:flex-row items-center justify-center sm:mx-auto gap-10 sm:min-gap-10 transform -translate-y-20">
      <AchievementElement>
        <template v-slot:header>20K</template>
        <template v-slot:footer>PROJECTS</template>
      </AchievementElement>
      <AchievementElement>
        <template v-slot:header>300</template>
        <template v-slot:footer>PROGRAMMERS</template>
      </AchievementElement>
      <AchievementElement>
        <template v-slot:header>20 YEARS</template>
        <template v-slot:footer>OF EXPIRIENCE</template>
      </AchievementElement>
    </div>
  </div>
</template>