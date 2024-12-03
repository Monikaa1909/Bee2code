<script setup>
import MyButton from './MyButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()


function seeExample() {
  router.push('/example/home')
}

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 px-2 sm:px-24 w-full pb-24">
    <p class="text-7xl font-extrabold tracking-20 text-center bg-gradient-to-r from-custom-blue to-custom-purple bg-clip-text text-transparent text-shadow-lg w-full break-words">
      BEE INSPIRED
    </p>
    <p class="text-3xl font-normal tracking-5 text-center dark:text-white break-words w-full">
      Check out an example of a previous project!
    </p>
    <MyButton @see-example="seeExample">SEE PROJECT</MyButton>
  </div>
</template>