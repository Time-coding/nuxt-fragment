<script lang="ts" setup>
  const route = useRoute();
</script>
<template>
  <main class="text-center">
    <FloatingButton v-if="route.path !== '/'" />
    <slot />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">[Default Layout]</div>
  </main>
</template>
