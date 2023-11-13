<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen bg-gray-900">
    <div class="flex flex-col w-70 p-4 bg-gray-800 overflow-y-auto flex-shrink-0">
      <div class="flex justify-between items-center mb-4 relative">
        <label class="flex justify-between items-center relative block w-full" for="a0rcwoxipeg"><svg
                                                                                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                                                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                                                   class=" h-4 w-4 text-gray-400 absolute top-1/2 right-auto left-4 transform -translate-y-1/2 -translate-x-2.5"
                                                                                                 >
                                                                                                   <circle cx="11" cy="11" r="8" />
                                                                                                   <path d="m21 21-4.3-4.3" />
                                                                                                 </svg>
          <input
            aria-label="Search"
            class="rounded-md p-2 w-full bg-gray-900 h-7 text-xs outline-none ring-0 focus:ring-1 ring-gray-500 hover:bg-gray-700 pl-8 transition-all duration-300"
            placeholder="Search" type="search"
          ></label>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-medium text-gray-100 mb-2">
          Tags
        </h3>
        <div class="flex flex-wrap gap-2">
          <a class="text-xs font-medium text-gray-300 hover:text-gray-200" href="#" rel="ugc">
            #Tag 1
          </a><a class="text-xs font-medium text-gray-300 hover:text-gray-200" href="#" rel="ugc">
            #Tag 2
          </a><a class="text-xs font-medium text-gray-300 hover:text-gray-200" href="#" rel="ugc">
            #Tag 3
          </a>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-medium text-gray-100 mb-2">
          Categories
        </h3>
        <div class="flex flex-wrap gap-2">
          <a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Category 1
          </a><a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Category 2
          </a><a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Category 3
          </a>
        </div>
      </div>
      <div>
        <h3 class="text-lg font-medium text-gray-100 mb-2">
          Moods
        </h3>
        <div class="flex flex-wrap gap-2">
          <a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Happy
          </a><a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Sad
          </a><a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Excited
          </a><a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
            Calm
          </a>
        </div>
      </div>
    </div>
    <div class="flex-grow p-4 bg-gray-900 overflow-y-auto">
      <h1 class="text-lg font-semibold text-gray-100 mb-2">
        All
      </h1>
      <h2 class="text-xs text-gray-400 mb-6">
        #Tag 1, #Tag 2
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="block relative group p-4 rounded-lg shadow-sm bg-gray-800 hover:bg-gray-800/75 cursor-pointer" rel="ugc">
          <svg
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class=" h-4 w-4 text-gray-400 absolute top-2 right-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          </svg>
          <p class="mb-4 text-gray-100 pr-8">
            This is a slightly longer phrase for the first card. It is meant to be more descriptive and unique.
          </p>
          <div class="flex flex-wrap gap-2">
            <a
              class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#"
              rel="ugc"
            >
              #Tag 1
            </a>
            <a class="text-xs font-medium text-gray-400 hover:text-gray-300" href="#" rel="ugc">
              #Tag 2
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: var(--color-background, #030303);
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-foreground, #fbfbfb);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
