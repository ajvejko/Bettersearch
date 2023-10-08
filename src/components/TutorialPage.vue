<script setup lang="ts"></script>
<template>
  <section
    id="tutorial"
    class="relative h-screen text-textLight dark:text-textDark"
  >
    <div class="m-auto max-w-6xl">
      <h1
        class="pt-32 text-center font-bebas text-5xl focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] md:text-6xl lg:text-7xl"
      >
        Tutorial
      </h1>
      <div class="ml-5 mt-10 md:ml-10">
        <span
          class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-3xl text-transparent md:text-4xl lg:text-5xl"
        >
          How this site works?
        </span>
        <ul class="ml-5 max-w-sm list-outside list-disc lg:text-lg">
          <li>
            <p class="font-inter text-textLight dark:text-textDark">
              This site lets you choose your own shortcuts to use sites already
              existing search engines.
            </p>
          </li>
          <li>
            <p class="mt-5 font-inter">
              To see if you can use this on your site use the sites earch
              feature and look at the URL.
              <span class="font-bold underline">Look at this example:</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="mt-10 text-center">
        <h3 class="font-bebas text-3xl text-red-500 md:text-4xl lg:text-5xl">Youtube</h3>
        <div class="mt-1 font-bebas text-xl font-bold md:text-2xl lg:text-3xl">
          Home URL:
          <span class="font-inter text-base font-normal underline md:text-lg lg:text-xl"
            >https://www.youtube.com</span
          >
        </div>
        <div class="mt-1 font-bebas text-xl font-bold md:text-2xl lg:text-3xl">
          Search URL:
          <span class="font-inter text-base font-normal underline md:text-lg lg:text-xl"
            >https://www.youtube.com/results?search_query=</span
          >
        </div>
      </div>
      <p class="mt-14 text-center md:text-lg lg:text-xl">
        This is all the site does.<br />
        Now go and enjoy better searching with<br />
        <span
          class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text font-bebas text-3xl text-transparent md:text-4xl lg:text-5xl"
          >Better Search</span
        >!
      </p>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 flex justify-center border-t pb-1 pt-2 text-center lg:text-lg font-inter"
    >
      Want to checkout the source code? ->
      <a
        href="https://github.com/ajvejko/Bettersearch"
        class="button-transition ml-2 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 stroke-textLight dark:stroke-textDark md:h-8 md:w-8 lg:h-9 lg:w-9"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
      </a>
    </div>
  </section>
</template>
