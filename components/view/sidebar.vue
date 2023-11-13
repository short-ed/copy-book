<template>
  <div class="flex flex-col h-full px-6 py-10 border-r dark:bg-zinc-900">
    <h2 class="text-2xl font-semibold mb-4">
      Filters
    </h2>
    <div class="mb-6">
      <h3 class="text-lg font-medium mb-2">
        Tags
      </h3>
      <div class="flex flex-wrap gap-2">
        <button class="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-6 px-2 py-0 rounded-md text-xs text-blue-500 border-blue-500">
          Tag 1
        </button>
        <button class="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-6 px-2 py-0 rounded-md text-xs text-blue-500 border-blue-500">
          Tag 2
        </button>
        <button class="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-6 px-2 py-0 rounded-md text-xs text-blue-500 border-blue-500">
          Tag 3
        </button>
      </div>
    </div>
    <div class="mb-6">
      <h3 class="text-lg font-medium mb-2">
        Categories
      </h3>
      <div class="flex gap-2">
        <a class="text-xs font-medium text-green-500 hover:underline" href="#">
          Category 1
        </a>
        <a class="text-xs font-medium text-green-500 hover:underline" href="#">
          Category 2
        </a>
        <a class="text-xs font-medium text-green-500 hover:underline" href="#">
          Category 3
        </a>
      </div>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-2">
        Moods
      </h3>
      <div class="flex gap-2">
        <a class="text-xs font-medium text-red-500 hover:underline" href="#">
          Happy
        </a>
        <a class="text-xs font-medium text-red-500 hover:underline" href="#">
          Sad
        </a>
        <a class="text-xs font-medium text-red-500 hover:underline" href="#">
          Excited
        </a>
      </div>
    </div>
  </div>
</template>
