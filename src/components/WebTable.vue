<script setup lang="ts">
import { ref } from "vue";
import { windowStore } from "../stores/windowStores";
import { onClickOutside } from "@vueuse/core";

import BaseModal from "./BaseModal.vue";
import WebAdd from "./WebAdd.vue";
import WebButton from "./WebButton.vue";
import { buttonStore } from "@/stores/buttonStores";

const webAdd = ref(null);
onClickOutside(webAdd, () => (windowStore.AddWindow = false));
</script>

<template>
  <div class="mx-auto w-[80%] text-center">
    <div class="mt-20 font-bebas text-4xl text-textLight dark:text-textDark">
      Websites:
    </div>
    <div class="flex flex-wrap justify-center">
      <WebButton
        v-for="(button, index) in buttonStore.buttonList"
        :name="button.name"
        :key="index"
        @toggle="
          buttonStore.toggleButton(
            button.name,
            button.homeURL,
            button.searchURL,
          )
        "
      />
      <button
        @click="windowStore.showAddWindow"
        class="mt-4 rounded-xl border-2 border-black bg-black/5 px-2 pb-0.5 font-bold text-rose-600 shadow-[0_0px_5px_rgba(0,0,0,0.25)] hover:bg-black/10 active:shadow-black dark:border-white dark:bg-white/5 dark:hover:bg-white/10 dark:active:shadow-white"
      >
        +
      </button>
    </div>
  </div>
  <!-- v-show so Transition component is not removed from DOM and so animation works -->
  <Transition name="fade">
    <BaseModal class="modal" v-show="windowStore.AddWindow">
      <Transition name="bounce">
        <WebAdd ref="webAdd" v-if="windowStore.AddWindow" />
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
  transition: all 0.5s ease;
}
</style>
