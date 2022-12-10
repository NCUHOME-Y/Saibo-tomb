import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"
import { Card, Form, Input, Checkbox, Button, Toast, Space, Image } from 'antd-mobile'
import { useStore } from 'C:/Users/18767/Desktop/html/22/bilibili-activity-page-demo-1/src/store'

export default function Forget () {
  const navigate = useNavigate()
  const { loginStore } = useStore()
  //向后端提交用户名和密码
  async function onsubmit (values) {
    console.log(values)
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    const { mobile, code1, code2 } = values
    if (!mobile || !code1 || !code2) {
      alert("请填写完整信息")
      return
    }
    if (code1 !== code2) {
      alert("两次密码不一致")
      return
    }
    await loginStore.getToken({ mobile, code1 })
    // 跳转首页
    navigate('/', { replace: true })
    // 提示用户
    Toast.show({
      content: '请登录',
      afterClose: () => {
        console.log('after')
      },
    })
  }
  return (
    <Card>
      <Form
        layout='vertical'
        onFinish={onsubmit}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
        }
      >
        <Form.Header><h1>注册</h1></Form.Header>
        <Form.Item
          label='用户名'
          name='mobile'
          rules={[{ required: true, message: '姓名不能为空!' }]}
        >
          <Input placeholder='请输入用户名' clearable />
        </Form.Item>
        <Form.Item
          label='密码'
          name='code1'
          clearable
        >
          <Input placeholder='请输入密码' clearable type="password" />
        </Form.Item>
        <Form.Item
          label='确认密码'
          name='code2'
          clearable
        >
          <Input placeholder='请再次输入密码' clearable type="password" />
        </Form.Item>
      </Form>
    </Card>
  )
}
