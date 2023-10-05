<script setup lang="ts">
import { useDark, useToggle, onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { windowStore } from "@/stores/windowStores";
import BaseModal from "./BaseModal.vue";
import ModalCopyPaste from "./ModalCopyPaste.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const webCopyPaste = ref(null);

onClickOutside(webCopyPaste, () => (windowStore.CopyPasteWindow = false));
</script>

<template>
  <nav>
    <div ref="navbar" class="fixed left-0 right-0 top-0 z-10">
      <div
        class="flex items-center justify-between bg-backgroundLight/60 px-3 py-2 backdrop-blur-[10px] dark:bg-backgroundDark/60"
      >
        <a
          href="#home"
          class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-2xl text-textLight text-transparent hover:scale-110 md:text-3xl lg:text-4xl"
          >BetterSrch</a
        >
        <!-- Navbar links -->
        <div
          class="flex justify-center divide-x divide-solid divide-black/50 dark:divide-white/50"
        >
          <!-- Light/Dark mode button -->
          <div class="flex justify-center">
            <button
              @click="toggleDark()"
              class="button-transition mr-2 hover:scale-110 lg:mr-4"
            >
              <!-- Moon icon -->
              <Transition name="slide-up" mode="out-in">
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 stroke-blue-500 md:h-7 md:w-7 lg:h-8 lg:w-8"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  ></path>
                </svg>
                <!-- Sun icon -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 stroke-yellow-400 md:h-7 md:w-7 lg:h-8 lg:w-8"
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
          </div>

          <div class="flex justify-center">
            <!-- Button links modal button -->
            <button
              @click="windowStore.showCopyPasteModal()"
              class="button-transition ml-2 hover:scale-110 dark:ml-3 lg:ml-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 stroke-textLight dark:stroke-textDark md:h-7 md:w-7 lg:h-8 lg:w-8"
              >
                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                <rect x="1" y="3" width="22" height="5"></rect>
                <line x1="10" y1="12" x2="14" y2="12"></line>
              </svg>
            </button>

            <!-- Color customization button -->
            <button class="button-transition ml-2 hover:scale-110 lg:ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6 stroke-textLight dark:stroke-textDark md:h-7 md:w-7 lg:h-8 lg:w-8"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <Transition name="fade">
    <BaseModal v-show="windowStore.CopyPasteWindow">
      <Transition name="bounce">
        <ModalCopyPaste ref="webCopyPaste" v-if="windowStore.CopyPasteWindow" />
      </Transition>
    </BaseModal>
  </Transition>
</template>

<style scoped>
.bounce-enter-from,
.bounce-leave-to {
  scale: 0;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50%);
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
