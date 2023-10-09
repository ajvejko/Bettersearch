<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MainPage from "./components/MainPage.vue";
import TutorialPage from "./components/TutorialPage.vue";
import ModalTutorial from "./components/ModalTutorial.vue";
import { buttonStore } from "./stores/buttonStores";
import { windowStore } from "./stores/windowStores";
import { onMounted } from "vue";

//Everytime site loads, sets the list value from localStorage
onMounted(() => {
  buttonStore.buttonList = JSON.parse(
    localStorage.getItem("buttonList") || "[]",
  );

  windowStore.isFirstTime = JSON.parse(
    localStorage.getItem("isFirstTime") || "true",
  );
});
</script>

<template>
  <ModalTutorial v-if="windowStore.isFirstTime" />
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
