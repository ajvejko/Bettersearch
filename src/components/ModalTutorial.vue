<script setup lang="ts">
import { windowStore } from "@/stores/windowStores";

const closeTutorial = (): void => {
  windowStore.isFirstTime = false;
  localStorage.setItem("isFirstTime", "false");
};

const goToTutorial = (): void => {
  windowStore.isFirstTime = false;
  localStorage.setItem("isFirstTime", "false");
  window.location.href = "/#tutorial";
};
</script>
<template>
  <div
    class="relative w-3/4 max-w-lg rounded-lg bg-backgroundLight px-4 py-3 text-center shadow-[0_0px_8px_rgba(0,0,0,0.7)] dark:bg-backgroundDark dark:shadow-white md:w-1/2 lg:px-6"
  >
    <button
      type="button"
      @click="closeTutorial()"
      class="button-transition absolute right-0 top-0 translate-x-[40%] translate-y-[-40%] rounded-lg border-2 border-black bg-white shadow-black hover:scale-110 active:border-primary dark:border-white dark:bg-backgroundDark dark:active:border-primary"
    >
      <!-- X icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 stroke-primary md:h-8 md:w-8 lg:h-9 lg:w-9"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <h1
      class="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-4xl text-transparent md:text-5xl lg:mt-3"
    >
      Welcome!
    </h1>
    <div class="text-textLight dark:text-textDark lg:text-lg">
      <p class="mt-3">
        If you already know how to this site, you can close this window by
        clicking the <span class="font-bold text-red-500">X</span> button on the
        top-right corner.
      </p>
      <p class="mt-5">
        If you're new to this site, I recommend that you check out the tutorial
        section to learn how to use the features of this site.
      </p>
    </div>
    <button
      type="button"
      @click="goToTutorial()"
      class="button-transition translate-y-[80%] rounded-lg border-2 border-black bg-white px-3 font-bebas text-2xl text-primary hover:scale-110 active:border-primary dark:border-white dark:bg-backgroundDark dark:active:border-primary md:text-3xl"
    >
      To the tutorial!
    </button>
  </div>
</template>
