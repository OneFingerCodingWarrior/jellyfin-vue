import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fullscreen from 'vue-fullscreen';

declare module 'vue/types/vue' {
  interface Vue {
    $fullscreen: any;
  }
}

Vue.use(fullscreen);
