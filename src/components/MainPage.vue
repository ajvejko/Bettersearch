<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import WebTable from "./WebTable.vue";
</script>

<template>
  <h1
    class="mt-32 text-center font-bebas text-5xl md:text-6xl text-textLight focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] dark:text-textDark"
  >
    Search Better
  </h1>
  <SearchBar />
  <WebTable />
</template>
