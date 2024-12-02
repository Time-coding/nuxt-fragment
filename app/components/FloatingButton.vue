<template>
  <button @click="goHome" class="floating-button">Back</button>
</template>

<script setup>
  // 获取 Nuxt 路由实例
  const router = useRouter();

  // 跳转到首页
  const goHome = () => {
    router.push('/'); // 使用 router.push('/') 跳转到首页
  };
</script>

<style scoped>
  .floating-button {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #42b983;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
    z-index: 99999;
    opacity: 0.5;
  }

  .floating-button:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  .floating-button svg {
    width: 24px;
    height: 24px;
    color: white;
  }
</style>
