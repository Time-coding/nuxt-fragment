<template>
  <div class="carousel-wrapper" @click="goHome">
    <div class="carousel">
      <div
        class="carousel-item"
        v-for="(item, index) in items"
        :key="index"
        :style="{ backgroundColor: item.backgroundColor }"
      >
        <div class="carousel-text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'nuxt/app'; // 从 Nuxt 中导入 useRouter
  const items = [
    { backgroundColor: '#FF5733', text: 'Item 1 click go home' },
    { backgroundColor: '#33FF57', text: 'Item 2' },
    { backgroundColor: '#3357FF', text: 'Item 3' },
    { backgroundColor: '#FF33A1', text: 'Item 4' }
  ];
  // 获取 Nuxt 路由实例
  const router = useRouter();

  // 跳转到首页
  const goHome = () => {
    router.push('/'); // 使用 router.push('/') 跳转到首页
  };
</script>

<style scoped>
  .carousel-wrapper {
    position: relative;
    overflow: hidden;
    cursor: grab;
    /* 设置抓取的光标样式 */
    position: relative;
    overflow: hidden;
    cursor: grab;
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    width: 50%;
    margin: auto;
  }

  .carousel-wrapper:active {
    cursor: grabbing;
    /* 在按下时变为抓取状态 */
  }

  .carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    /* 启用横向滚动的吸附效果 */
    scroll-behavior: smooth;
    /* 平滑滚动 */
    width: 100%;
    /* 轮播图容器宽度 */
  }

  .carousel-item {
    min-width: 100%;
    /* 每个项目的宽度占满一整屏 */
    height: 300px;
    /* 项目的高度 */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    text-align: center;
    scroll-snap-align: center;
    /* 吸附到容器的中间 */
    transition: transform 0.3s ease;
  }

  .carousel-text {
    z-index: 1;
  }
</style>
