<script setup>
import BottomNav from './BottomNav.vue'

defineProps({
  section: String,
})

const emit = defineEmits()

const handleChangeSection = (section) => {
  emit('changeSection', section)
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <div
      class="bg-custom-light-gray md:h-80 w-[calc(100%-8px)] md:w-[664px] -mb-10 z-10 rounded-t-3xl shadow-small-box dark:shadow-small-box-dark">
      <div class="flex flex-col md:flex-row w-full h-full p-4 sm:p-10 gap-10 md:gap-10">
        <div class="flex-1 flex flex-col items-center justify-start gap-5 w-full">
          <p class="w-full break-words text-3xl font-semibold tracking-20">CONTACT US!</p>
          <p class="text-justify break-words w-full text-base font-light tracking-5">
            Write to us or let's meet in person at one of our offices. We will
            go through all stages together - from
            idea to implementation! Let's combine our passion, knowledge and experience together. We are waiting for
            you!
          </p>
        </div>
        <div class="flex-1 flex flex-col gap-5 items-center justify-start w-full">
          <div class="flex-1 flex flex-col items-center justify-start w-full">
            <p class="text-base font-normal tracking-5 break-words w-full">
              Bee2code sp. z o.o.
            </p>
            <p class="text-base font-light tracking-5 break-words w-full">
              ul. Chorzowska 50
            </p>
            <p class="text-base font-light tracking-5 break-words w-full">
              44-100 Gliwice
            </p>
            <p class="text-base font-light tracking-5 break-words w-full">
              kontakt: biuro (at) bee2code.com
            </p>
          </div>
          <div class="flex-1 flex flex-col items-center justify-start w-full">
            <p class="text-base font-normal tracking-5 break-words w-full">
              Biuro
            </p>
            <p class="text-base font-light tracking-5 break-words w-full">
              ul. Warszawska 107/2U
            </p>
            <p class="text-base font-light tracking-5 break-words w-full">
              15-201 Białystok
            </p>
            <p class="text-base font-light tracking-5 break-words w-full">
              kontakt: biuro (at) bee2code.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <BottomNav @change-section="handleChangeSection" />
  </div>
</template>