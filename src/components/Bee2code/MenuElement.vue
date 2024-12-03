<template>
  <div class="cursor-pointer font-sans flex flex-col justify-end items-center w-full group">
    <p class="text-base font-light text-white tracking-15 w-full text-center break-words"><slot></slot></p>
    <div class="w-full h-[0.7px] bg-gradient-to-r from-custom-blue to-custom-purple opacity-0 group-hover:opacity-100"></div>
  </div>
</template>