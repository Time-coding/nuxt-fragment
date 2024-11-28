<template>
  <pre v-if="code" :class="'language-' + language">
    <code v-html="highlightedCode"></code>
  </pre>
</template>

<script setup lang="ts">
import { defineProps, watchEffect } from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'


// 定义组件的props
const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  }
})

// 变量用于存储高亮后的代码
let highlightedCode = ''

// 监听code变化并进行高亮处理
watchEffect(() => {
  if (props.code) {
    highlightedCode = Prism.highlight(props.code, Prism.languages[props.language], props.language)
  }
})
</script>

<style scoped>
pre {
  padding: 1em;
  background-color: #2d2d2d;
  border-radius: 4px;
  overflow: auto;
}

code {
  color: #f8f8f2;
  font-family: "Courier New", Courier, monospace;
}
</style>
