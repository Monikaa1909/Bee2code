<script setup>

import { ref, computed } from 'vue'
import TopNav from '../components/TopNav.vue'
import AchievementElement from '@/components/AchievementElement.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'

const isDarkMode = ref(false)

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

      <div id="startSection" class="w-full pt-24">
        <div
          class="h-[540px] w-full bg-[url('.././assets/start_here_photo.png')] bg-cover bg-center flex flex-col items-center justify-center gap-5 shadow-big-box">
          <img class="w-96" src=".././assets/logo.png" />
          <p class="text-white font-regular text-4xl tracking-5 text-center text-shadow-md">We program the future with the
            precision of bees!</p>
        </div>
        <div class="flex flex-col sm:flex-row items-center justify-center mx-auto gap-10 transform -translate-y-20">
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

      <div id="whatSection" class="w-full mx-auto flex flex-col items-center justify-center gap-10 pt-4">
        <WhatWeDo :is-left="false">
          <template v-slot:part1>Expertise Rooted in the Origins of IT</template>
          <template v-slot:part2>TECHNOLOGIES AND PROGRAMMING</template>
          <template v-slot:part3>At Bee2code, we are proficient in nearly all key programming technologies. We combine decades of experience with the latest trends in software development. Our team grows alongside the evolution of IT, delivering solutions based on the most up-to-date programming languages. See how we can support your project!</template>
        </WhatWeDo>
        <WhatWeDo :is-left="true">
          <template v-slot:part1>From Concept to Final Solution</template>
          <template v-slot:part2>APPLICATION DESIGN</template>
          <template v-slot:part3>At bee2code, we excel at creating applications from scratch. This allows us to apply our expertise right from the conceptualization and design stages. We choose tools tailored to each project, from UML diagrams to user stories, adapting to the needs of both large-scale and smaller applications. Trust us to bring your idea to life!</template>
        </WhatWeDo>
        <WhatWeDo :is-left="false">
          <template v-slot:part1>Crafting Solutions for Every Device</template>
          <template v-slot:part2>RESPONSIVE WEB DESIGN</template>
          <template v-slot:part3>At bee2code, we ensure our solutions work seamlessly on both desktop and mobile devices. We collaborate with UX experts to deliver exceptional user experiences. Whenever possible, we also offer native versions of mobile applications. We create websites and apps that adapt to users' needs—anytime, anywhere!</template>
        </WhatWeDo>
      </div>

      <div id="whoSection" class="flex items-center justify-center h-screen bg-gray-600 bg-opacity-50 w-full">
        <div class="text-center text-white px-4">
          <h2 class="text-3xl font-bold">Komponent 3</h2>
          <RouterLink to="/pocemons">Home</RouterLink>
          <p class="mt-4 text-lg">To trzecia część strony, również wyśrodkowana.</p>
        </div>
      </div>
    </div>

  </div>

</template>
