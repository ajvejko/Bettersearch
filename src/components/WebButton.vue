<script setup lang="ts">
defineProps(["name", "homeURL", "searchURL"]);
</script>

<template>
  <button
    class="mr-2 mt-4 rounded-xl border-2 border-black bg-black/5 px-2 pb-0.5 font-bold text-textLight shadow-[0_0px_5px_rgba(0,0,0,0.25)] hover:bg-black/10 active:shadow-black dark:border-white dark:bg-white/5 dark:text-textDark dark:hover:bg-white/10 dark:active:shadow-white"
  >
    {{ name }}
  </button>
</template>
