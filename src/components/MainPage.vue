<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import WebTable from "./WebTable.vue";
import BackgroundMainPage from "./BackgroundMainPage.vue";
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
    <BackgroundMainPage />
  </section>
</template>
