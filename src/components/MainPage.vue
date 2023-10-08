<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import WebTable from "./WebTable.vue";
import Background from "./Background.vue";
</script>

<template>
  <section id="home" class="h-screen">
    <h1
      class="pt-32 text-center font-bebas text-5xl text-textLight focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] dark:text-textDark md:text-6xl lg:text-7xl"
    >
      Search Better
    </h1>
    <SearchBar />
    <WebTable />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      class="absolute bottom-0 left-1/2 right-1/2 -z-10 h-6 w-6 animate-bounce stroke-textLight dark:stroke-textDark md:h-8 md:w-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
    <Background />
  </section>
</template>
