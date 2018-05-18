// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/default'
import router from './router'
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 用于在 lg md sm xs ... 等情况下隐藏特定元素的依赖文件
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI, { size: 'small' });

// 配置 vuex
import store from './vuex/'
Vue.use(store)

// 全局 api
import {log} from '@/components/utils/utils'
Vue.prototype.log = log

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
