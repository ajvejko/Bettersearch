<script setup lang="ts"></script>
<template>
  <!-- Background -->
  <div
    class="absolute top-0 -z-10 flex h-screen w-screen items-center justify-center"
  >
    <div
      class="absolute right-[35%] top-[25%] h-72 w-72 lg:h-96 lg:w-96 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
    <div
      class="animation-delay-4000 absolute top-[19%] h-72 w-72 lg:h-96 lg:w-96 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
    <div
      class="animation-delay-2000 absolute right-[45%] top-[25%] h-72 w-72 lg:h-96 lg:w-96 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
  </div>
</template>
