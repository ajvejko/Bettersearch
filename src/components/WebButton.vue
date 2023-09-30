<script setup lang="ts">
defineProps(["name", "homeURL", "searchURL"]);
import { buttonStore } from "../stores/buttonStores";
import { windowStore } from "@/stores/windowStores";
</script>

<template>
  <button
    class="dark:bg-dark/5 mr-2 mt-2 rounded-xl border-2 border-black px-2 pb-0.5 font-inter font-bold text-textLight shadow-[0_0px_5px_rgba(0,0,0,0.25)] hover:bg-white/10 active:shadow-black dark:border-white dark:text-textDark dark:hover:bg-black/10 dark:active:shadow-white md:text-lg"
    :class="[
      buttonStore.name === name ? '!dark:border-primary !border-primary' : '',
      windowStore.EditMode ? '!dark:text-primary !text-primary' : '',
    ]"
  >
    {{ name }}
  </button>
</template>
