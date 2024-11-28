<script setup>
</script>
<template>
  <NuxtLink class="container" to="/">
    <h1>Hello, Nuxt Fragment</h1>
  </NuxtLink>
</template>

<style>
.container {
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 90px;
}
h1::after {
  content: 'Hello, Nuxt Fragment';
  position: absolute;
  left: 0;
  color: #000;
  transform: translate(-60px, 15px) scaleY(0.5) skew(50deg);
  z-index: -1;
  filter: blur(2px);
  mask: linear-gradient(transparent, #000);
}
</style>
