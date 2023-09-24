<script setup lang="ts"></script>
<template>
  <div class="mx-auto mt-10 w-[80%]">
    <div class="flex">
      <input
        autofocus
        placeholder="Search the web"
        class="placeholder:text-textLight w-full rounded-l-full border-2 border-backgroundDark/50 bg-white/60 px-5 py-3 text-xl outline-none backdrop-blur-xl dark:border-white/50 dark:bg-black/50 dark:placeholder:text-textDark"
      />
      <button
        class="items-center rounded-r-full border-y-2 border-r-2 border-black’/50 bg-white/60 px-3 backdrop-blur-xl dark:border-white/50 dark:bg-black/50 dark:stroke-textDark"
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
          class="stroke-textLight dark:stroke-textDark"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
    <div></div>
  </div>
</template>
