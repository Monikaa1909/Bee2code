<template>
  <div class="w-full flex flex-col sm:flex-row items-center justify-center gap:0 sm:gap-2.5 sm:w-48 group cursor-pointer">
    <slot name="icon"></slot>
    <p class="text-center text-2xl text-white font-normal tracking-5 w-full break-words group-hover:font-semibold">
      <slot name="social"></slot>
    </p>
  </div>
</template>