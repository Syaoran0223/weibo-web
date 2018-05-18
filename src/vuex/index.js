import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 用户设备
        userAgent: 'pc',
        // 0表示未登录， 1表示登录
        loginStatus: 0,
        userInfo: {
            username: '宇直',
        },
    },
    mutations: {
        userAgentSave(state, data) {
            state.userAgent = data
        }
    },
})
