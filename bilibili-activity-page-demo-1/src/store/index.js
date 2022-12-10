// 导入模块
import TaskStore from "./task.Store"
import React from "react"
import LoginStore from "./login.Store"
import UserStore from "./user.Store"
class RootStore {
  // 组合模块
  constructor() {
    this.taskStore = new TaskStore()
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}
// 实例化根store注入context
const StoresContext = React.createContext(new RootStore())
// 导出方法 供组件调用方法使用store根实例
export const useStore = () => React.useContext(StoresContext)
