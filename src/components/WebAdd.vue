<script setup lang="ts">
import { ref } from "vue";
import { windowStore } from "../stores/windowStores";
import { buttonStore } from "../stores/buttonStores";

//creating reactive states for values from input
const name = ref("");
const homeURL = ref("");
const searchURL = ref("");
</script>

<template>
  <form
    class="relative max-w-lg rounded-lg bg-backgroundLight px-4 py-3 text-center shadow-[0_0px_15px_rgba(0,0,0,0.7)] dark:bg-backgroundDark dark:shadow-white md:w-1/2 lg:px-6"
  >
    <button
      type="button"
      @click="windowStore.showModal"
      class="absolute right-0 top-0 translate-x-[40%] translate-y-[-40%] rounded-lg border-2 border-black bg-white shadow-black hover:border-primary active:border-primary dark:border-white dark:bg-backgroundDark dark:hover:border-primary dark:active:border-primary"
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
      class="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-4xl text-transparent md:text-5xl lg:mt-3 lg:text-6xl"
    >
      Add a Website
    </h1>
    <div class="mt-8 text-left">
      <div class="relative">
        <input
          type="text"
          required
          v-model="name"
          class="input w-full border-b-2 bg-transparent font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:text-textDark dark:valid:border-white dark:focus:border-white md:text-xl"
        />
        <span
          class="title pointer-events-none absolute left-0 top-0 text-left font-bebas text-2xl text-textLight/60 dark:text-textDark/60 md:text-3xl lg:text-3xl"
        >
          Name:
        </span>
      </div>

      <div class="relative mt-8 md:mt-9">
        <input
          type="text"
          required
          v-model="homeURL"
          class="input w-full border-b-2 bg-transparent font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:text-textDark dark:valid:border-white dark:focus:border-white md:text-xl"
        />
        <span
          class="title pointer-events-none absolute left-0 top-0 text-left font-bebas text-2xl text-textLight/60 dark:text-textDark/60 md:text-3xl"
        >
          Home URL:
        </span>
      </div>

      <div class="relative mt-8 md:mt-9">
        <input
          type="text"
          required
          v-model="searchURL"
          class="input w-full border-b-2 bg-transparent font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:text-textDark dark:valid:border-white dark:focus:border-white md:text-xl"
        />
        <span
          class="title pointer-events-none absolute left-0 top-0 text-left font-bebas text-2xl text-textLight/60 dark:text-textDark/60 md:text-3xl"
        >
          Search ULR:
        </span>
      </div>
    </div>
    <button
      type="button"
      @click="
        buttonStore.addButton(name, homeURL, searchURL);
        windowStore.showModal;
      "
      class="translate-y-[80%] rounded-lg border-2 border-black bg-white px-3 font-bebas text-2xl text-primary hover:border-primary active:border-primary dark:border-white dark:bg-backgroundDark dark:hover:border-primary dark:active:border-primary md:text-3xl lg:text-4xl"
    >
      Add Button
    </button>
  </form>
</template>

<style scoped>
.title {
  transition: 0.5s;
  transform: translate(0%, -10%);
}

.input:focus ~ .title,
.input:valid ~ .title {
  @apply text-textLight dark:text-textDark;
  transform: translate(0%, -75%);
}
</style>
