<script setup lang="ts">
import { menus } from './menus';

const online = useOnline();
// 卡片数据
const cards = ref<HomeCardItem[]>(menus);
</script>

<template>
  <div class="home">
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
        <div class="card-grid">
          <NuxtLink v-for="card in cards" :key="card.id" class="card" :to="`${card.route}`">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
          </NuxtLink>
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
<style scoped>
.home{
  overflow: auto;
  height: 100vh;
  width: 100vw;
  padding: 10px;
}
.card-grid {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 20px;
  /* height: 100vh; */
  overflow: auto;
  padding: 10px;
  
}

.card {
  width: 100%;
  max-width: 300px;
  padding: 20px;
  margin: 10px;
  background-color: #f7f6f4;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2); /* 半透明的白色背景 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 轻微的阴影 */
  backdrop-filter: blur(10px) saturate(150%); /* 玻璃模糊效果 */
  -webkit-backdrop-filter: blur(10px) saturate(150%); /* 支持 Safari */
  color: #333;
  text-align: center;
  font-family: Arial, sans-serif;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card h2 {
  margin: 0 0 10px;
  font-size: 24px;
  color: #303030;
}

.card p {
  text-align: left;
  font-size: 16px;
  color: #454141;
}
</style>
