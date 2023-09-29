<script setup lang="ts">
import { ref } from "vue";
import { windowStore } from "../stores/windowStores";
import { buttonStore } from "../stores/buttonStores";

//creating reactive states for values from input
const name = ref(buttonStore.name);
const homeURL = ref(buttonStore.homeURL);
const searchURL = ref(buttonStore.searchURL);
</script>
<template>
  <form
    class="relative rounded-lg bg-backgroundLight px-4 py-3 text-center shadow-[0_0px_15px_rgba(0,0,0,0.7)] dark:bg-backgroundDark dark:shadow-white"
  >
    <button
      type="button"
      @click="
        buttonStore.deleteButton(name, homeURL, searchURL);
        windowStore.showModal();
      "
      class="absolute left-0 top-0 translate-x-[-40%] translate-y-[-40%] rounded-lg border-2 border-black bg-white text-rose-600 shadow-black hover:border-rose-600 active:border-rose-600 dark:border-white dark:bg-backgroundDark dark:hover:border-rose-600 dark:active:border-rose-600"
    >
      <!-- Trashbin icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 scale-75 stroke-rose-600"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path
          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        ></path>
      </svg>
    </button>

    <button
      type="button"
      @click="windowStore.showModal"
      class="absolute right-0 top-0 translate-x-[40%] translate-y-[-40%] rounded-lg border-2 border-black bg-white text-rose-600 shadow-black hover:border-rose-600 active:border-rose-600 dark:border-white dark:bg-backgroundDark dark:hover:border-rose-600 dark:active:border-rose-600"
    >
      <!-- X icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-rose-600"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    <div class="text-left">
      <h1
        class="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-center font-bebas text-4xl text-transparent"
      >
        Edit a Website
      </h1>
      <div class="relative mt-8">
        <input
          type="text"
          required
          v-model="name"
          class="input w-full border-b-2 bg-transparent font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:text-textDark dark:valid:border-white dark:focus:border-white"
        />
        <span
          class="title pointer-events-none absolute left-0 top-0 text-left font-bebas text-2xl text-textLight/60 dark:text-textDark/60"
        >
          Name:
        </span>
      </div>

      <div class="relative mt-8">
        <input
          type="text"
          required
          v-model="homeURL"
          class="input w-full border-b-2 bg-transparent font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:text-textDark dark:valid:border-white dark:focus:border-white"
        />
        <span
          class="title pointer-events-none absolute left-0 top-0 text-left font-bebas text-2xl text-textLight/60 dark:text-textDark/60"
        >
          Home URL:
        </span>
      </div>

      <div class="relative mt-8">
        <input
          type="text"
          required
          v-model="searchURL"
          class="input w-full border-b-2 bg-transparent font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:text-textDark dark:valid:border-white dark:focus:border-white"
        />
        <span
          class="title pointer-events-none absolute left-0 top-0 text-left font-bebas text-2xl text-textLight/60 dark:text-textDark/60"
        >
          Search ULR:
        </span>
      </div>
    </div>
    <button
      type="button"
      @click="
        buttonStore.editButton(name, homeURL, searchURL);
        windowStore.showModal();
      "
      class="translate-y-[80%] rounded-lg border-2 border-black bg-white px-3 font-bebas text-2xl text-rose-600 hover:border-rose-600 active:border-rose-600 dark:border-white dark:bg-backgroundDark dark:hover:border-rose-600 dark:active:border-rose-600"
    >
      Edit Button
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
