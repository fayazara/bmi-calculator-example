import { longClickDirective } from 'vue-long-click';
import Vue from 'vue';
const longClickInstance = longClickDirective({ delay: 400, interval: 50 })
Vue.directive('longclick', longClickInstance)