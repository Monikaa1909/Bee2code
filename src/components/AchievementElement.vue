<template>
  <div class="w-full max-w-[200px] sm:w-[200px] min-h-[200px] sm:h-[200px] px-1 bg-white rounded-2xl shadow-small-box dark:shadow-small-box-dark flex flex-col justify-center items-center hover:bg-custom-light-gray text-center">
    <p class="font-light text-4xl tracking-5 text-shadow-sm w-full break-words"><slot name="header"></slot></p>
    <p class="font-light text-base w-full break-words"><slot name="footer"></slot></p>
  </div>
</template>