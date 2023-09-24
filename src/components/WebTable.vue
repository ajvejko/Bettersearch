<script setup lang="ts">
import { windowStore } from "../stores/windowStores";
import WebAdd from "./WebAdd.vue";
</script>

<template>
  <div class="mx-auto w-[80%] text-center">
    <div class="mt-20 font-bebas text-4xl text-textLight dark:text-textDark">
      Websites:
    </div>
    <div class="flex flex-wrap justify-center">
      <button
        @click="windowStore.showAddWindow"
        class="mt-4 rounded-xl border-2 border-black bg-black/5 px-2 pb-0.5 font-bold text-rose-600 shadow-[0_0px_5px_rgba(0,0,0,0.25)] active:shadow-black dark:border-white dark:bg-white/5 dark:active:shadow-white"
      >
        +
      </button>
    </div>
  </div>
  <WebAdd v-if="windowStore.AddWindow" />
</template>
