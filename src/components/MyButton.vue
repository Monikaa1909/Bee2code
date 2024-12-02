<template>
  <div @click="$emit('seeExample')" class="w-full sm:w-96 sm:h-14 cursor-pointer bg-gradient-to-r from-custom-blue to-custom-purple hover:from-[#1453D8] hover:to-[#542FBE] shadow-big-box rounded-3xl sm:rounded-full flex items-center justify-center">
    <p class="text-white text-3xl font-light hover:font-normal tracking-10 break-words w-full text-center">
      <slot></slot>
    </p>
  </div>
</template>