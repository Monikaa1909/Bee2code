<template>
  <button @click="$emit('handleCompareButton')" class="text-white bg-custom-blue/50 hover:bg-custom-blue/70 py-1 px-2 rounded-md shadow-blue-sm">
    <p class="text-xs font-light"><slot></slot></p>
  </button>
</template>