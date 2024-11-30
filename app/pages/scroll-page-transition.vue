<template>
  <div ref="wrapper" class="scroll-wrapper">
    <!-- 第一个页面 (page0) -->
    <div v-for="(item, i) in pages" :class="{ 'page': true, 'first-page': i === 0 }" :ref="el => refs[i] = el"
      :key="item.id">
      <div class="content">
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const pages = ref([
  { text: "page0", id: 0 },
  { text: "page1", id: 1 },
  { text: "page2", id: 2 },
  { text: "page3", id: 3 },
])
const scrollDistance = ref(0)  // 当前滚动的距离
const currentIndex = ref(0)
const refs = ref([])
const direction = ref("down")

const setRefsStyle = () => {
  const nextIndex = currentIndex.value + 1
  const prevIndex = currentIndex.value - 1;
  refs.value.forEach((el, index) => {
    if (el?.style) {
      if (index === currentIndex.value) {
        el.style.top = 0
        if (scrollDistance.value < 0 && index !== 0) {
          el.style.top = `${- scrollDistance.value}px`
          if (-scrollDistance.value >= window.innerHeight) {
            currentIndex.value = prevIndex;
            scrollDistance.value = 0;
          }
        }
      } else if (index === nextIndex) {
        // 处理向下滚动
        el.style.top = `${window.innerHeight - scrollDistance.value}px`
        if (scrollDistance.value >= window.innerHeight) {
          resetScroll(nextIndex)
        }
        if (scrollDistance.value < 0) {
          (nextIndex === 1) && (scrollDistance.value = 0);
        }
      } else if (index === prevIndex) {
        el.style.top = 0;
      } else if (index !== currentIndex.value) {
        el.style.top = `${window.innerHeight}px`
      }
    }
  })
}

const resetScroll = (newIndex) => {
  scrollDistance.value = 0
  currentIndex.value = newIndex
}

const onWheel = (event) => {
  const delta = event.deltaY
  scrollDistance.value += delta
  direction.value = delta > 0 ? "down" : "up"

  if (currentIndex.value >= refs.value.length) {
    scrollDistance.value = 0
    return
  }

  nextTick(() => {
    requestAnimationFrame(() => {
      setRefsStyle()
    })
  })
}

onMounted(() => {
  window.addEventListener('wheel', onWheel)

  nextTick(() => {
    refs.value.forEach((el, index) => {
      // 初始化页面位置
      el.style.top = index === 0 ? '0' : `${window.innerHeight}px`
      el.style.zIndex = index
    })
  })
})
</script>


<style scoped>
.scroll-wrapper {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: absolute;
  top: 100vh;
  left: 0;
  bottom: 0;
  right: 0;
}

.first-page {
  top: 0;
}

.page:nth-child(odd) {
  background-color: lightblue;
}

.page:nth-child(even) {
  background-color: lightcoral;
}

.content {
  text-align: center;
  z-index: 1;
}

.text {
  font-size: 3rem;
  font-weight: bold;
}
</style>
