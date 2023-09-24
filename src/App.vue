<script setup lang="ts">
import Background from "./components/Background.vue";
import Navbar from "./components/Navbar.vue";
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <Navbar />
  <MainPage />
  <Background />
</template>

<style>
body {
  @apply bg-backgroundLight dark:bg-backgroundDark;
}
</style>
