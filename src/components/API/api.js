const base = 'http://127.0.0.1:4000'
const api = {
    isLogin: base + '/user/isLogin',
    login: base + '/user/login',
    register: base + '/user/register',
}
module.exports = api
