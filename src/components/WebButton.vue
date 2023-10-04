<script setup lang="ts">
import { buttonStore } from "../stores/buttonStores";
import { windowStore } from "@/stores/windowStores";

const props = defineProps(["name", "homeURL", "searchURL", "index"]);
</script>

<template>
  <button
    class="dark:bg-dark/5 selected mr-2 mt-2 rounded-xl border-2 border-black px-2 pb-0.5 font-inter font-bold text-textLight shadow-[0_0px_5px_rgba(0,0,0,0.25)] hover:bg-white/10 active:shadow-black dark:border-white dark:text-textDark dark:hover:bg-black/10 dark:active:shadow-white md:text-lg"
    :class="[
      buttonStore.index == index
        ? '!dark:border-primary scale-[105%] !border-primary'
        : '',
      windowStore.EditMode ? '!dark:text-primary !text-primary' : '',
    ]"
    @click="
      [
        windowStore.EditMode
          ? windowStore.showEditModal(name, homeURL, searchURL, index)
          : buttonStore.toggleButton(name, homeURL, searchURL, index),
      ]
    "
  >
    {{ name }}
  </button>
</template>

<style scoped>
.selected {
  transition: all ease 300ms;
}
</style>
