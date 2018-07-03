import { request_post } from '@/components/common/request'
import api from '@/components/common/api'
import { log } from '@/components/common/log'
import {setCookie, getCookie} from '@/components/common/utils'
// 注册
export const register = (data) => {
    let url = api.register
    return request_post(url, data)
}
// 登录
export const login = (data) => {
  let url = api.login
  return $.ajax({
    url,
    data,
    type: 'post',
    success: function (res, status, xhr) {
      var token = xhr.getResponseHeader("Jwt");
      var all = xhr.getAllResponseHeaders()
      log('all， jwt可以在控制台看到但是获取不到', all)
      // let token = res.data
      log('登录获取到的jwt', token)
      if (token) {
        // 约2小时，小于服务端缓存时间
        setCookie('_token', token, 0.08);
      }
      return res
    }
  })

}

export const isLogin = (data) => {
    let url = api.isLogin
    return $.ajax({
      url,
      data,
      type:"post",
      beforeSend: function(XMLHttpRequest){
        var token = getCookie('_token');
        log('token', token)
        if (token) {
          XMLHttpRequest.setRequestHeader("Jwt", token);
          log('发送的jwt', token)
        }
      },
      success: function (res, status, xhr) {
        log('isLogin 用户信息', res)
        return res
      },
    })

}
