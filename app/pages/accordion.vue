<template>
  <div class="draggable-list-page">
    <div class="accordion-carousel">
      <!-- 动态渲染面板 -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="panel"
        :style="{ backgroundImage: `url(${image.url})` }"
        :data-title="image.title"
        @click="navigateHome"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface PanelImage {
    url: string;
    title: string;
  }

  // 使用 Nuxt 的路由功能
  const router = useRouter();

  // 点击导航回首页
  const navigateHome = () => {
    router.push('/');
  };

  // 图片数组，用于渲染面板
  const images: PanelImage[] = [
    { url: 'https://picsum.photos/seed/city/600/400', title: 'City' },
    { url: 'https://picsum.photos/seed/forest/600/400', title: 'Forest' },
    { url: 'https://picsum.photos/seed/mountain/600/400', title: 'Mountain' },
    { url: 'https://picsum.photos/seed/ocean/600/400', title: 'Ocean' }
  ];

  // 引用面板元素
  const panels = ref<NodeListOf<HTMLDivElement>>();
  let lastHoveredPanel: HTMLDivElement | null = null;

  // 鼠标进入时的处理函数
  const handleMouseEnter = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement;
    lastHoveredPanel = target;

    // 当前面板宽度扩大
    target.style.width = '600px';

    // 其他面板宽度缩小
    panels.value?.forEach(panel => {
      if (panel !== target) {
        panel.style.width = '40px';
      }
    });
  };

  // 鼠标离开时的处理函数
  const handleMouseLeave = () => {
    panels.value?.forEach(panel => {
      if (panel !== lastHoveredPanel) {
        panel.style.width = '40px';
      }
    });

    // 保持最后悬浮的面板展开
    if (lastHoveredPanel) {
      lastHoveredPanel.style.width = '600px';
    }
  };

  // 在组件挂载时，添加事件监听
  onMounted(() => {
    panels.value = document.querySelectorAll('.panel');

    panels.value?.forEach(panel => {
      panel.addEventListener('mouseenter', handleMouseEnter);
      panel.addEventListener('mouseleave', handleMouseLeave);
    });
  });

  // 在组件卸载时，清除事件监听
  onBeforeUnmount(() => {
    panels.value?.forEach(panel => {
      panel.removeEventListener('mouseenter', handleMouseEnter);
      panel.removeEventListener('mouseleave', handleMouseLeave);
    });
  });
</script>

<style scoped>
  .draggable-list-page {
    background: linear-gradient(45deg, red, yellow);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .accordion-carousel {
    display: flex;
    width: 1000px;
    height: 400px;
    gap: 20px;
    /* 每个面板之间的间距 */
    overflow: hidden;
  }

  .panel {
    width: 40px;
    /* 默认宽度 */
    height: 100%;
    /* 使面板填满容器的高度 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:
      width 0.5s ease,
      box-shadow 0.3s ease;
    /* 平滑过渡效果 */
    position: relative;
    cursor: pointer;
  }

  .panel:nth-child(1) {
    width: 600px;
  }
</style>
