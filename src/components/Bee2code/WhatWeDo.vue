<script setup>

import WhatWeDoElement from './WhatWeDoElement.vue'

</script>

<template>
  <div class="w-full mx-auto flex flex-col items-center justify-center gap-10 pt-4 pb-24">
    <WhatWeDoElement :is-left="false">
      <template v-slot:part1>Expertise Rooted in the Origins of IT</template>
      <template v-slot:part2>TECHNOLOGIES AND PROGRAMMING</template>
      <template v-slot:part3>At Bee2code, we are proficient in nearly all key programming technologies. We combine
        decades of experience with the latest trends in software development. Our team grows alongside the evolution
        of
        IT, delivering solutions based on the most up-to-date programming languages. See how we can support your
        project!</template>
    </WhatWeDoElement>
    <WhatWeDoElement :is-left="true">
      <template v-slot:part1>From Concept to Final Solution</template>
      <template v-slot:part2>APPLICATION DESIGN</template>
      <template v-slot:part3>At bee2code, we excel at creating applications from scratch. This allows us to apply
        our
        expertise right from the conceptualization and design stages. We choose tools tailored to each project, from
        UML
        diagrams to user stories, adapting to the needs of both large-scale and smaller applications. Trust us to
        bring
        your idea to life!</template>
    </WhatWeDoElement>
    <WhatWeDoElement :is-left="false">
      <template v-slot:part1>Crafting Solutions for Every Device</template>
      <template v-slot:part2>RESPONSIVE WEB DESIGN</template>
      <template v-slot:part3>At bee2code, we ensure our solutions work seamlessly on both desktop and mobile
        devices. We
        collaborate with UX experts to deliver exceptional user experiences. Whenever possible, we also offer native
        versions of mobile applications. We create websites and apps that adapt to users' needs—anytime,
        anywhere!</template>
    </WhatWeDoElement>
  </div>
</template>
