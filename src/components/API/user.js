import { request_post } from '@/components/API/request'
import api from '@/components/API/api'
// 登录
export const login = (data) => {
  let url = api.login
  return request_post(url, data)
}
