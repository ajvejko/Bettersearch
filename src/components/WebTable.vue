<script setup lang="ts">
import { ref } from "vue";
import { windowStore } from "../stores/windowStores";
import { onClickOutside } from "@vueuse/core";
import { buttonStore } from "@/stores/buttonStores";

import BaseModal from "./BaseModal.vue";
import WebAdd from "./WebAdd.vue";
import WebEdit from "./WebEdit.vue";
import WebButton from "./WebButton.vue";

const webAdd = ref(null);
const webEdit = ref(null);

onClickOutside(webEdit, () => (windowStore.EditWindow = false));
</script>

<template>
  
  <div class="mt-20 flex justify-center text-center">
    <h2
      class="font-bebas text-4xl text-textLight dark:text-textDark md:text-5xl lg:text-5xl"
    >
      <Transition name="fade" mode="out-in">
        <span v-if="!windowStore.EditMode">Websites</span>
        <span v-else>Editing...</span>
      </Transition>
    </h2>

    <!-- Edit button -->
    <button class="ml-1" @click="windowStore.switchEditMode">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 stroke-primary active:stroke-primary/30 md:h-7 md:w-7"
      >
        <path
          d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
        ></path>
        <path
          d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
        ></path>
      </svg>
    </button>
  </div>
  <div class="flex flex-wrap justify-center">
    <WebButton
      v-for="(button, index) in buttonStore.buttonList"
      :name="button.name"
      :key="index"
      @click="
        windowStore.EditMode
          ? windowStore.showModal(button.name, button.homeURL, button.searchURL)
          : buttonStore.toggleButton(
              button.name,
              button.homeURL,
              button.searchURL,
            )
      "
    />
    <button
      @click="windowStore.showModal()"
      class="mt-2 rounded-xl border-2 border-black bg-black/5 px-2 pb-0.5 font-bold text-primary shadow-[0_0px_5px_rgba(0,0,0,0.25)] hover:bg-black/10 active:shadow-black dark:border-white dark:bg-white/5 dark:hover:bg-white/10 dark:active:shadow-white"
    >
      +
    </button>
  </div>
  <!-- v-show so Transition component is not removed from DOM and so animation works -->
  <Transition name="fade">
    <BaseModal v-show="windowStore.AddWindow">
      <Transition name="bounce">
        <WebAdd ref="webAdd" v-if="windowStore.AddWindow" />
      </Transition>
    </BaseModal>
  </Transition>

  <Transition name="fade">
    <BaseModal v-show="windowStore.EditWindow">
      <Transition name="bounce">
        <WebEdit ref="webEdit" v-if="windowStore.EditWindow" />
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
</style>
