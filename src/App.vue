<script setup lang="ts">
import Background from "./components/Background.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <Background />
</template>

<style>
body {
  @apply bg-backgroundLight dark:bg-backgroundDark;
}
</style>
