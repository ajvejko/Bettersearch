<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { windowStore } from "@/stores/windowStores";
import { buttonStore } from "@/stores/buttonStores";
import { ref } from "vue";

const newButtonList = ref(localStorage.getItem("buttonList") || "[]");
const { copy, copied, isSupported } = useClipboard();

const changeButtonList = () => {
  if (newButtonList.value.trim() === "") {
    // Handle empty JSON data
    console.error("JSON data is empty, please paste the data.");
    return;
  }
  try {
    buttonStore.buttonList = JSON.parse(newButtonList.value);
    localStorage.setItem("buttonList", newButtonList.value);
    windowStore.showCopyPasteModal();
  } catch (error) {
    // Handle invalid JSON data
    console.error("Invalid JSON data", error);
  }
};
</script>
<template>
  <div
    class="relative w-3/4 max-w-lg rounded-lg bg-backgroundLight px-4 py-3 text-center shadow-[0_0px_15px_rgba(0,0,0,0.7)] dark:bg-backgroundDark dark:shadow-white md:w-1/2 lg:px-6"
  >
    <button
      type="button"
      v-if="isSupported"
      @click="copy(newButtonList)"
      class="absolute left-0 top-0 translate-x-[-40%] translate-y-[-40%] rounded-lg border-2 border-black bg-white text-rose-600 shadow-black hover:border-rose-600 active:border-rose-600 dark:border-white dark:bg-backgroundDark dark:hover:border-rose-600 dark:active:border-rose-600"
    >
      <!-- Copy icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 scale-75 stroke-primary md:h-8 md:w-8 lg:h-9 lg:w-9"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path
          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        ></path>
      </svg>
    </button>

    <button
      type="button"
      @click="windowStore.showCopyPasteModal()"
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
    <Transition name="bounce" mode="out-in">
      <h1
        v-if="!copied"
        class="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-4xl text-transparent md:text-5xl lg:mt-3 lg:text-6xl"
      >
        Copy & Paste
      </h1>
      <h1
        v-else
        class="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-4xl text-transparent md:text-5xl lg:mt-3 lg:text-6xl"
      >
        Copied the buttons!
      </h1>
    </Transition>
    <textarea
      rows="12"
      v-model="newButtonList"
      class="mt-3 w-full resize-none overflow-clip rounded-xl border bg-backgroundLight p-2 font-inter outline-none valid:border-black focus:border-black/50 dark:border-white/50 dark:bg-backgroundDark dark:text-textDark dark:valid:border-white dark:focus:border-white md:text-xl"
    ></textarea>
    <button
      type="button"
      @click="changeButtonList()"
      class="translate-y-[80%] rounded-lg border-2 border-black bg-white px-3 font-bebas text-2xl text-primary hover:border-primary active:border-primary dark:border-white dark:bg-backgroundDark dark:hover:border-primary dark:active:border-primary md:text-3xl lg:text-4xl"
    >
      Use new buttons
    </button>
  </div>
</template>

<style scoped>
.bounce-enter-from,
.bounce-leave-to {
  scale: 0;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: all 100ms ease;
}
</style>
