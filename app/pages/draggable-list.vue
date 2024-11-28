<template>
    <div class="draggable-list-page">
      <div ref="listContainer" class="draggable-list">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          :id="`item-${item.id}`"
          class="draggable-item"
          :style="{
            transform: draggingIndex === index ? 'scale(1.05)' : '',
            opacity: draggingIndex === index ? '0.5' : '1',
          }"
          draggable="true"
          @dragstart="onDragStart(index)"
          @dragover.prevent
          @dragenter.prevent="onDragEnter(index)"
          @dragend="onDragEnd"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const items = ref([
    { id: 1, name: 'click go back' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ]);
  
  const draggingIndex = ref<number | null>(null);
  const initialPositions = new Map(); // Store initial positions for FLIP
  
  // Store initial positions for FLIP animation
  // 记录位置
  const captureInitialPositions = () => {
    initialPositions.clear();
    items.value.forEach((item) => {
      const element = document.getElementById(`item-${item.id}`);
      if (element) {
        const { top } = element.getBoundingClientRect();
        initialPositions.set(item.id, top);
      }
    });
  };
  
  // Apply FLIP animation with enhanced effects
  const applyFlipAnimation = () => {
    items.value.forEach((item) => {
      const element = document.getElementById(`item-${item.id}`);
      if (element) {
        const initialTop = initialPositions.get(item.id);
        const { top } = element.getBoundingClientRect();
        const deltaY = initialTop - top;
  
        element.style.transition = 'none';
        element.style.transform = `translateY(${deltaY}px)`; // Add scale effect
  
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            element.style.transition =
              'transform 1.2s cubic-bezier(0.25, 0.8, 0.25, 1)';
            element.style.transform = 'translateY(0)'; // Reset scale after transition
          });
        });
      }
    });
  };
  
  const onDragStart = (index: number) => {
    draggingIndex.value = index;
    captureInitialPositions(); // Capture positions at the start of drag
  };
  
  const onDragEnter = (index: number) => {
    if (draggingIndex.value === null || draggingIndex.value === index) return;
  
    const draggedItem = items.value[draggingIndex.value] as {id:number, name: string};
    items.value.splice(draggingIndex.value, 1);
    items.value.splice(index, 0, draggedItem);
    draggingIndex.value = index;
  
    nextTick(applyFlipAnimation); // Apply FLIP animation after DOM updates
  };
  
  const onDragEnd = () => {
    draggingIndex.value = null;
  };
  </script>
  
  <style scoped>
  .draggable-list-page {
    background: linear-gradient(45deg, red, yellow);
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .draggable-list {
    display: flex;
    margin: auto;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .draggable-item {
    padding: 10px;
    border: 1px solid #333;
    border-radius: 4px;
    width: 200px;
    background-color: #f0f0f0;
    cursor: grab;
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother easing */
  }
  
  .draggable-item:active {
    cursor: grabbing;
  }
  </style>
  