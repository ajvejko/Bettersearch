<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle, onClickOutside } from "@vueuse/core";
import { windowStore } from "../stores/windowStores";

const show = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);
const navbar = ref(null);

// On click outside of navbar, close the menu using VueUse
onClickOutside(navbar, () => (show.value = false));
</script>

<template>
  <nav>
    <div
      ref="navbar"
      class="fixed left-0 right-0 top-0 z-10"
      :class="windowStore.AddWindow ? 'z-0' : ''"
    >
      <div
        class="flex justify-between bg-backgroundLight/60 px-6 py-2 backdrop-blur-[10px] dark:bg-backgroundDark/60"
      >
        <a
          href="#home"
          class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-2xl text-textLight text-transparent md:text-2xl"
          >BetterSearch</a
        >
        <!-- Light/Dark mode button -->
        <div class="itesm-center flex justify-center">
          <button @click="toggleDark()" class="mr-3">
            <!-- Moon icon -->
            <Transition name="slide-up" mode="out-in">
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
                class="stroke-blue-500 hover:stroke-blue-700"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                ></path>
              </svg>
              <!-- Sun icon -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="stroke-yellow-400 hover:stroke-yellow-500"
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
            </Transition>
          </button>

          <!-- Navigation menu button -->
          <button
            @click="show = !show"
            class="text-xl dark:text-textDark md:text-2xl"
          >
            <!-- Hamburger menu icon -->
            <svg
              v-if="!show"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="21" y1="10" x2="7" y2="10"></line>
              <line x1="21" y1="6" x2="3" y2="6"></line>
              <line x1="21" y1="14" x2="3" y2="14"></line>
              <line x1="21" y1="18" x2="7" y2="18"></line>
            </svg>
            <!-- X icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <!-- Navigation options -->
      <Transition name="slide-fade">
        <div
          v-if="show"
          class="mt-3 flex flex-col bg-backgroundLight/90 px-3 pb-3 text-right dark:bg-backgroundDark/90"
        >
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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
