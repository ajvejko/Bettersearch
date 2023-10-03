<script setup lang="ts"></script>
<template>
  <!-- Background -->
  <div class="flex absolute top-0 -z-10 h-screen w-screen">
    <div
      class="absolute right-1/2 top-[25%] h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter lg:h-96 lg:w-96"
    ></div>
    <div
      class="animation-delay-4000 absolute right-[45%] top-[19%] h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-2xl filter lg:h-96 lg:w-96"
    ></div>
    <div
      class="animation-delay-2000 absolute left-1/2 top-[25%] h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl filter lg:h-96 lg:w-96"
    ></div>
  </div>
</template>
