<script setup lang="ts">
defineProps(["name", "homeURL", "searchURL"]);
import { buttonStore } from "../stores/buttonStores";
</script>

<template>
  <button
    class="dark:bg-dark/5 mr-1 mt-2 rounded-xl border-2 border-black px-2 pb-0.5 font-bold text-textLight shadow-[0_0px_5px_rgba(0,0,0,0.25)] hover:bg-white/10 active:shadow-black dark:border-white dark:text-textDark dark:hover:bg-black/10 dark:active:shadow-white"
    :class="
      buttonStore.name === name
        ? 'bg-white/50 hover:bg-white/50 dark:bg-black/50 dark:hover:bg-black/50'
        : ''
    "
  >
    {{ name }}
  </button>
</template>
