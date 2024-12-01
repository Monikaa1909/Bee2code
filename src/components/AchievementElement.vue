<template>
  <div class="w-[200px] h-[200px] bg-white rounded-2xl shadow-small-box dark:shadow-small-box-dark flex flex-col justify-center items-center hover:bg-custom-light-gray">
    <p class="font-light text-4xl tracking-5 text-shadow-sm"><slot name="header"></slot></p>
    <p class="font-light text-base"><slot name="footer"></slot></p>
  </div>
</template>