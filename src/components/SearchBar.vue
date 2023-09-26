<script setup lang="ts">
import { ref } from "vue";
import { buttonStore } from "@/stores/buttonStores";

const input = ref("");
const search = (): void => {
  console.log("Here");
  //Check if nothing is selected and input is empty
  if (!buttonStore.name && !input.value.trim()) {
    console.log("First check");
    return;
    //Check if something is selected and input is empty
  } else if (buttonStore.name && !input.value.trim()) {
    console.log("Second check");
    window.open(buttonStore.homeURL, "_self");
  } else {
    console.log("Third check");
    console.log(buttonStore.name + input.value);
    window.open(buttonStore.searchURL + input.value, "_self");
  }
};
</script>
<template>
  <div class="mx-auto mt-10 w-[80%]">
    <div class="flex">
      <input
        autofocus
        type="search"
        v-model="input"
        @keyup.enter="search"
        placeholder="Search the web"
        class="input-search w-full rounded-l-full border-2 border-r-0 border-black/80 bg-white/60 px-5 py-2 text-xl text-textLight outline-none placeholder:font-inter placeholder:text-textLight focus:bg-white/90 dark:border-white/50 dark:bg-black/50 dark:text-textDark dark:placeholder:text-textDark dark:focus:bg-black/70"
      />
      <button
        class="search-button items-center rounded-r-full border-y-2 border-r-2 border-black/80 bg-white/60 px-3 dark:border-white/50 dark:bg-black/50"
      >
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
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.input-search:focus ~ .search-button {
  @apply bg-white/90 dark:bg-black/70;
}
</style>
