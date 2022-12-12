import { makeAutoObservable } from "mobx"
import { http, setToken, getToken, removeToken } from '../utils'
class LoginStore {
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  getToken = async ({ mobile, code }) => {
    // 使用fetch函数发送注册请求
    const response = await fetch('https://65f610x805.zicp.fun/register', {
      method: 'POST',
      body: JSON.stringify({ mobile, code }),
      headers: { 'Content-Type': 'application/json' }
    })

    // 处理服务器返回的响应
    if (response.ok) {
      // 如果响应成功，表示注册成功
      this.token = response.data.token
      console.log(this.token)
      alert(this.token)
      //存入ls(localStorage)
      setToken(this.token)
      return 0
    } else {
      // 否则表示注册失败，显示错误信息
      const data = await response.json()
      console.log('失败' + data)
      return data
    }
  }
  LoginOut = () => {
    this.token = ''
    removeToken()
  }
}
export default LoginStore