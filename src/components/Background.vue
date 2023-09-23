<script setup lang="ts"></script>
<template>
  <!-- Background -->
  <div
    class="relative top-0 -z-10 flex h-screen w-screen items-center justify-center bg-background"
  >
    <div
      class="animate-blob absolute right-[33%] h-72 w-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
    <div
      class="animation-delay-4000 animate-blob absolute top-1/4 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
    <div
      class="animation-delay-2000 animate-blob absolute right-[50%] h-72 w-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl filter"
    ></div>
  </div>
</template>
