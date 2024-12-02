<template>
  <div class="relative flex justify-center w-full sm:w-56">
    <img class="h-16 w-auto absolute top-0 left-1/2 transform -translate-x-1/2" src=".././assets/logo_2.png" />

    <div
      class="bg-white w-full min-h-[64] sm:h-64 shadow-small-box dark:shadow-small-box-dark rounded-tl-3xl mt-10 pt-10 pb-5 px-2.5 flex flex-col justify-start items-center gap-2.5">
      <p class="text-center text-sm font-regular tracking-5 text-break">
        <slot name="header"></slot>
      </p>
      <div class="w-full h-[0.7px] bg-gradient-to-r from-custom-blue to-custom-purple"></div>
      <p class="text-center text-sm h-full font-light tracking-10 text-break flex items-center justify-center">
        <slot name="main"></slot>
      </p>
    </div>
  </div>
</template>