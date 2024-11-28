// plugins/lodash.ts
import { defineNuxtPlugin } from '#app';
import _ from 'lodash';

export default defineNuxtPlugin(nuxtApp => {
  // 将 lodash 注入到全局应用中
  nuxtApp.provide('lodash', _);  // 使用 'lodash' 作为全局属性
});
