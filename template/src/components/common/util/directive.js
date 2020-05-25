import Vue from 'vue'
import { copyText } from '@/components/common/util/util.js'

/**
 * 复制到粘贴板指令
 * v-copy
 * 需要指定复制的内容 data-copy-text
 */
export const copyDirective = function() {
  Vue.directive('copy', {
    bind: (el) => {
      el.addEventListener('dblclick', () => {
        const text = el.getAttribute('data-copy-text');
        copyText(text, () => {
          Vue.prototype.$message.success('复制成功');
        });
      })
    }
  });
};

export const initAllDirective = function() {
  copyDirective();
};
