<script setup>
import WhoWeAreElement from './WhoWeAreElement.vue';

</script>
<template>
  <div class="px-2 pb-24 sm:p-24 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mx-auto">
    <WhoWeAreElement>
      <template v-slot:header>SENIOR JAVA FULL-STACK DEVELOPERS</template>
      <template v-slot:main>
        Expert in building web applications, combining advanced knowledge of Java with front-end
        skills and experience in API design and Agile workflows
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>JAVA JUNIOR DEVELOPERS</template>
      <template v-slot:main>
        A motivated developer with a strong foundation in Java programming, eager to grow skills in building web applications. 
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>BACKEND DEVELOPERS</template>
      <template v-slot:main>
        Experienced in Java, API development, and database management, focusing on performance and scalability. Works well in Agile teams.
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>FRONT-END DEVELOPERS</template>
      <template v-slot:main>
        Skilled in JavaScript, HTML, CSS, and modern frameworks, creating responsive and user-friendly interfaces. Collaborates effectively in Agile teams.
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>JUNIOR FRONT-END DEVELOPERS</template>
      <template v-slot:main>
        Familiar with HTML, CSS, and JavaScript, with a focus on building responsive and interactive user interfaces. Eager to learn  in Agile teams.
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>JAVASCRIPT DEVELOPERS</template>
      <template v-slot:main>
        Proficient in JavaScript and modern frameworks, building dynamic web applications and efficient solutions.
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>TEAM LEADER / ARCHITECT</template>
      <template v-slot:main>
        Experienced in leading teams and designing scalable, high-performance architectures. Strong in ensuring alignment with business goals.
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>iOS DEVELOPERS</template>
      <template v-slot:main>
        Skilled in Swift and Objective-C, building high-quality, user-friendly iOS applications. Experienced with the full app development lifecycle and Agile workflows.
      </template>
    </WhoWeAreElement>
    <WhoWeAreElement>
      <template v-slot:header>ANDROID 
        DEVELOPERS</template>
      <template v-slot:main>
        Proficient in Kotlin and Java, developing robust and user-friendly Android applications. Experienced in the full development cycle and Agile methodologies.
      </template>
    </WhoWeAreElement>
  </div>
</template>