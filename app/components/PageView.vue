<script setup lang="ts">
  const { data } = await useFetch('/api/pageview');

  const time = useTimeAgo(() => data.value?.startAt || 0);
</script>

<template>
  <div class="text-container">
    <span>{{ data?.pageview }}</span>
    page views since
    <span>{{ time }}</span>
  </div>
</template>

<style scoped>
  .text-container {
    background: #ccc;
    height: 100px;
    color: #ccc;
    font-size: 60px;
  }

  .text-container:first-child {
    /*表示选择父元素的第一个子元素*/
    text-shadow:
      1px 1px 1px #000,
      -1px -1px 1px #fff;
  }

  .text-container:last-child {
    /*表示选择父元素的最后一个子元素*/
    text-shadow:
      -1px -1px 1px #000,
      1px 1px 1px #fff;
  }
</style>
