
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      address: "今天"
    },
    {
      id: 2,
      name: '搞定mobx',
      address: "昨天"
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
  delTask = (id) => {
    this.list = this.list.filter(item => item.id !== id)
  }
  addTask = (task) => {
    if (this.list.length >= 3) {
      alert("达到上限")
      return
    }
    this.list.push(task)
  }
}
export default TaskStore
