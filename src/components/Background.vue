<script setup lang="ts"></script>
<template>
  <!-- Background -->
  <div
    class="bg-background absolute top-0 -z-10 flex h-screen w-screen items-center justify-center"
  >
    <div
      class="absolute right-[33%] h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
    <div
      class="animation-delay-4000 absolute top-1/4 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
    <div
      class="animation-delay-2000 absolute right-[50%] h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
  </div>
</template>
