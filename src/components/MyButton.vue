<template>
  <div @click="$emit('seeExample')" class="w-full sm:w-96 sm:h-14 cursor-pointer bg-custom-dark-gray dark:bg-black  shadow-big-box  flex items-center justify-center">
    <p class="text-white text-2xl font-light hover:font-normal tracking-10 break-words w-full text-center">
      <slot></slot>
    </p>
  </div>
</template>