<script setup>

</script>

<template>
  <div class="backdrop-filter">
    <div class="container">
      <div class="frosted-glass">
        <h2>Frosted Glass Effect</h2>
        <p>
          backdrop-filter
          属性在某些老旧浏览器中不支持，请确保在现代浏览器中使用。
        </p>
        <p>
          backdrop-filter 应该与 rgba
          半透明色搭配，以呈现出磨砂效果，同时不影响中间文字的清晰度。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backdrop-filter {
  height: 90vh;
  width: 90vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
/* 父容器 */
.color-effect-container {
  position: relative;
  width: 300px;
  height: auto;
  overflow: hidden;
  display: inline-block;
}

/* 灰度图片 */
.color-effect {
  display: block;
  width: 100%;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

/* 伪元素遮罩效果 */
.color-effect-container::before {
  content: '';
  position: absolute;
  top: 0;
  right: 100%;
  width: 100%;
  height: 100%;
  background: url('https://dss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/860.jpg')
    center/cover no-repeat;
  filter: grayscale(0%);
  transition: right 1s ease;
}

/* 鼠标悬停时触发 */
.color-effect-container:hover::before {
  right: 0;
}
/* 背景容器 */
.container {
  width: 300px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
}

/* 磨砂玻璃效果的卡片 */
.frosted-glass {
  width: 300px;
  padding: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.2); /* 半透明的白色背景 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 轻微的阴影 */
  backdrop-filter: blur(10px) saturate(150%); /* 玻璃模糊效果 */
  -webkit-backdrop-filter: blur(10px) saturate(150%); /* 支持 Safari */
  color: #333;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* 标题和描述 */
.frosted-glass h2 {
  margin: 0;
  font-size: 24px;
}

.frosted-glass p {
  margin-top: 10px;
  font-size: 16px;
}
</style>
