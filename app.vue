<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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

html, body , #__nuxt{
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
