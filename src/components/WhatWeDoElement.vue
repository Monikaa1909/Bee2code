<script setup>

defineProps({
  isLeft: Boolean,
})

</script>

<template>
  <div class="flex flex-col gap-2.5 px-8 sm:px-24 w-full" :class="{ 'items-end': isLeft }">
    <p class="text-base font-semibold tracking-30 text-custom-dark-gray dark:text-white break-words w-full">
      <slot name="part1"></slot>
    </p>
    <p id="targetP"
      class="text-3xl font-semibold tracking-20 bg-clip-text text-transparent bg-gradient-to-r from-custom-blue to-custom-purple text-shadow-sm break-words w-full">
      <slot name="part2"></slot>
    </p>
    <p class="text-base font-light tracking-10 text-justify text-custom-dark-gray dark:text-white break-words w-full">
      <slot name="part3"></slot>
    </p>
  </div>
</template>