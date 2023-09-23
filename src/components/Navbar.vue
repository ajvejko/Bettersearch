<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const show = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav>
    <div class="fixed left-0 right-0 top-0 z-10 border-b border-slate-900/10 dark:border-slate-400/10">
      <div
        class="bg-backgroundLight/60 flex justify-between px-6 py-3 backdrop-blur-[10px] dark:bg-backgroundDark/60"
      >
        <a
          href="#home"
          class="text-textLight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-2xl text-transparent md:text-2xl"
          >BetterSearch</a
        >
        <!-- Light/Dark mode button -->
        <div>
          <button @click="toggleDark()" class="mr-3">
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-blue-500"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            <svg
              v-if="!isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="stroke-yellow-400"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>

          <!-- Navigation menu button -->
          <button @click="show = !show" class="text-xl md:text-2xl">
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
              class="dark:text-textDark"
            >
              <line x1="21" y1="10" x2="7" y2="10"></line>
              <line x1="21" y1="6" x2="3" y2="6"></line>
              <line x1="21" y1="14" x2="3" y2="14"></line>
              <line x1="21" y1="18" x2="7" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <!-- Navigation options -->
      <Transition name="fade">
        <div v-if="show" class="mt-3 flex flex-col px-3 pb-3 text-right">
          <span class="mx-3 mt-1">
            <a
              @click="show = !show"
              href="#about"
              class="text-textLight hover:underline dark:text-textDark"
              >Save & Copy buttons</a
            >
          </span>
          <span class="mx-3 mt-1">
            <a
              @click="show = !show"
              href="#projects"
              class="text-textLight hover:underline dark:text-textDark"
              >Button order</a
            >
          </span>
          <span class="mx-3 mt-1">
            <a
              @click="show = !show"
              href="#contact"
              class="text-textLight hover:underline dark:text-textDark"
              >Customize colours</a
            >
          </span>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
