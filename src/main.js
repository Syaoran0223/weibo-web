// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/default'
import router from './router'

Vue.config.productionTip = false
// 配置 vuex
// import store from './vuex/'
// Vue.use(store)

// 全局 api
import {log} from '@/components/utils/utils'
Vue.prototype.log = log

// Vue.prototype.api = user
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
