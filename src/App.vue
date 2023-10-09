<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MainPage from "./components/MainPage.vue";
import TutorialPage from "./components/TutorialPage.vue";
import ModalTutorial from "./components/ModalTutorial.vue";
import BaseModal from "./components/BaseModal.vue";
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
  <Transition name="fade">
    <BaseModal v-show="windowStore.isFirstTime">
      <Transition name="bounce">
        <ModalTutorial v-if="windowStore.isFirstTime" />
      </Transition>
    </BaseModal>
  </Transition>
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

.bounce-enter-from,
.bounce-leave-to {
  scale: 0;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
</style>
