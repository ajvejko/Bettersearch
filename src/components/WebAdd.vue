<script setup lang="ts">
import BaseModal from "./BaseModal.vue";
import { windowStore } from "../stores/windowStores";
</script>

<template>
  <BaseModal>
    <div
      class="relative rounded-lg bg-backgroundLight px-3 py-3 text-center shadow-[0_0px_15px_rgba(0,0,0,0.7)]"
    >
      <button
        @click="windowStore.showAddWindow"
        class="close-button absolute right-0 top-0 rounded-lg border-black bg-white text-rose-600 shadow-[0_0px_10px_rgba(0,0,0,0.25)] shadow-black hover:shadow-rose-600 dark:border-white dark:bg-white/5 dark:active:shadow-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-rose-600"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="mt-2 font-bebas text-4xl text-textLight">Add a Website</div>
      <input type="text" />
    </div>
  </BaseModal>
</template>

<style>
.close-button {
  transform: translate(10px, -10px);
}
</style>
