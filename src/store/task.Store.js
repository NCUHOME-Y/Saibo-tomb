import { Card, Form, Input, Checkbox, Button, Toast, Space, Image } from 'antd-mobile'

import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '王XX的坟墓',
      address: "哈哈哈哈死啦",
      bg:'1'
    },
  ]
  constructor() {
    makeAutoObservable(this)
  }
  delTask = (id) => {
    this.list = this.list.filter(item => item.id !== id)
    Toast.show({
      content: '删除坟墓成功',
    })
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
