<script setup>

defineProps({
  isActive: Boolean,
  required: true,
})

</script>

<template>
  <div class="w-[150px] font-sans flex flex-col justify-end items-center group">
    <p class="text-base font-light text-white tracking-15"><slot></slot></p>
    <div class="w-full h-[0.7px] bg-gradient-to-r from-custom-blue to-custom-purple opacity-0 group-hover:opacity-100" :class="{'opacity-100': isActive}"></div>
  </div>
</template>