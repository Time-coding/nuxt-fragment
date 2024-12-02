<template>
  <pre
    lang="zh-Hans-CN"
    data-previewers="color time"
    :data-prismjs-copy="props.copyText"
    :data-prismjs-copy-success="copySuccessText"
    :data-prismjs-copy-error="copyErrorText"
    :class="'hx-scroll preview-code normalize-whitespace ' + lineNumbers + ' language-' + props.type"
    :data-language="props.type"
  >
    <code :class="'language-'+ props.type" v-html="codeContent"></code>
  </pre>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue';
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-tomorrow.min.css';

  interface PreviewCodeProps {
    code: string;
    type?: string;
    isShowlineNumbers?: boolean;
    copyText?: string;
    copySuccessText?: string;
    copyErrorText?: string;
  }
  const props = withDefaults(defineProps<PreviewCodeProps>(), {
    code: '',
    type: 'markup',
    isShowlineNumbers: false,
    copyText: 'Copy',
    copySuccessText: 'Copied!',
    copyErrorText: 'User to press Ctrl+C'
  });
  const lineNumbers = computed(() => {
    return props.isShowlineNumbers ? 'line-numbers' : 'no-line-numbers';
  });

  // 防止type写错报错
  const codeContent = computed(() => {
    try {
      return Prism.highlight(props.code, Prism.languages[props.type], props.type);
    } catch (error) {
      console.log(error);
    }
    return '';
  });

  onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
  });
</script>

<style scoped>
  .preview-code {
    padding: 0px;
    font: 14px/26px 'courier new';
    border-radius: 3px;
  }
</style>
