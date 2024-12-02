<script setup lang="ts">
  // import { appName } from '~/constants'

  // useHead({
  //   title: appName,
  // })
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  html,
  body,
  #__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: linear-gradient(45deg, rgb(249, 1, 1), #fceb01);
    overflow: hidden;
    min-width: 1000px;
  }

  html.dark {
    background: #222;
    color: white;
  }
</style>
