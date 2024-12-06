<template>
  <button @click="$emit('handleCompareButton')" class="text-white bg-custom-blue/50 hover:bg-custom-blue/70 sm:py-1 sm:px-2 p-1 rounded-md shadow-blue-sm">
    <p class="text-[10px] sm:text-xs w-full break-words font-light"><slot></slot></p>
  </button>
</template>