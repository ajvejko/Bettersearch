<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MainPage from "./components/MainPage.vue";
import TutorialPage from "./components/TutorialPage.vue";
import { buttonStore } from "./stores/buttonStores";
import { onMounted } from "vue";

//Everytime site loads, sets the list value from localStorage
onMounted(() => {
  buttonStore.buttonList = JSON.parse(
    localStorage.getItem("buttonList") || "[]",
  );
});
</script>

<template>
  <Navbar />
  <MainPage />
  <TutorialPage />
</template>

<style>
body {
  @apply overflow-x-hidden bg-backgroundLight dark:bg-backgroundDark;
}

html {
  scroll-behavior: smooth;
}

.button-transition {
  transition: all ease 300ms;
}
</style>
