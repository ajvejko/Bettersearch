<script setup lang="ts">
import { ref, watch } from "vue";
import { buttonStore, focusInput } from "@/stores/buttonStores";

const input = ref("");
const searchInput = ref<HTMLElement | null>(null);

// Focus input when button is clicked
watch(focusInput, () => {
  searchInput.value?.focus();
});

// Searching function
const search = (): void => {
  // Check if nothing is selected and input is empty
  if (!buttonStore.name && !input.value.trim()) {
    return;
    // Check if something is selected and input is empty
  } else if (buttonStore.name && !input.value.trim()) {
    window.open(buttonStore.homeURL, "_self");
  } else {
    window.open(buttonStore.searchURL + input.value, "_self");
  }
};
</script>
<template>
  <div class="mt-10 flex justify-center">
    <input
      autofocus
      type="search"
      v-model="input"
      ref="searchInput"
      @keyup.enter="search"
      placeholder="Search the web"
      class="input-search w-2/3 max-w-3xl rounded-l-full border-2 border-r-0 border-black/80 bg-white/60 px-5 py-2 text-xl text-textLight outline-none placeholder:font-inter placeholder:text-textLight focus:bg-white/90 dark:border-white/50 dark:bg-black/50 dark:text-textDark dark:placeholder:text-textDark dark:focus:bg-black/70 md:text-2xl lg:w-1/2"
    />
    <button
      @click="search"
      class="search-button items-center rounded-r-full border-y-2 border-r-2 border-black/80 bg-white/60 px-3 dark:border-white/50 dark:bg-black/50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="button-transition h-6 w-6 stroke-primary hover:scale-110 md:h-7 md:w-7 lg:h-8 lg:w-8"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.input-search:focus ~ .search-button {
  @apply bg-white/90 dark:bg-black/70;
}
</style>
