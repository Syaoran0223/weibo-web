import { request_post } from '@/components/API/request'
import api from '@/components/API/api'
import { log } from '@/components/utils/utils'
// 注册
export const register = (data) => {
    let url = api.register
    return request_post(url, data)
}
// 登录
export const login = (data) => {
  let url = api.login
  return request_post(url, data)
}

export const isLogin = (data) => {
    let url = api.isLogin
    return request_post(url, data).then((res) => {
        log('isLogin', res)
    })
}
