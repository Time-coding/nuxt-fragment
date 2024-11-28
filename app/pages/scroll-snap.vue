<template>
    <div class="carousel">
      <div class="carousel-track" ref="carouselTrack">
        <div class="carousel-item" v-for="(item, index) in items" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  // 接收父组件传入的轮播数据，并设置默认值
  const props = defineProps({
    items: {
      type: Array,
      default: () => ['Default Slide 1', 'Default Slide 2', 'Default Slide 3'],
    },
  });
  
  // 引用滑动容器
  const carouselTrack = ref(null);
  
  // 自动播放逻辑
  const interval = 3000; // 自动切换间隔
  let autoPlayTimer;
  
  const startAutoPlay = () => {
    autoPlayTimer = setInterval(() => {
      if (carouselTrack.value) {
        const { scrollLeft, offsetWidth, scrollWidth } = carouselTrack.value;
  
        // 判断是否滚动到底部
        const nextScrollLeft =
          scrollLeft + offsetWidth >= scrollWidth ? 0 : scrollLeft + offsetWidth;
  
        // 滚动到下一个位置
        carouselTrack.value.scrollTo({
          left: nextScrollLeft,
          behavior: 'smooth',
        });
      }
    }, interval);
  };
  
  const stopAutoPlay = () => {
    clearInterval(autoPlayTimer);
  };
  
  // 在组件挂载时启动自动播放
  onMounted(() => {
    startAutoPlay();
  
    // 鼠标移入暂停，移出继续
    if (carouselTrack.value) {
      carouselTrack.value.addEventListener('mouseenter', stopAutoPlay);
      carouselTrack.value.addEventListener('mouseleave', startAutoPlay);
    }
  });
  
  // 在组件卸载时清除定时器
  onUnmounted(() => stopAutoPlay());
  </script>
  
  <style scoped>
  .carousel {
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-track {
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }
  
  .carousel-item {
    flex: 0 0 80%; /* 每个轮播项占视口 80% */
    height: 200px;
    background: #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .carousel-track::-webkit-scrollbar {
    display: none;
  }
  
  .carousel-track {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  