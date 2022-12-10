import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./index.css"
import { Card, Form, Input, Checkbox, Button, Toast, Space, Image } from 'antd-mobile'
import { useStore } from 'C:/Users/18767/Desktop/html/22/bilibili-activity-page-demo-1/src/store'

export default function Register () {
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
    <div className={`flex-col ${styles['page']} ${styles['space-y-46']}`}>
      <img
        className={`${styles['image']}`}
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394072a5a7e3f0310afdcd1/639407585281490011ca69b3/16706457298077126409.png"
      />
      <div className={`flex-col ${styles['group']}`}>
        <Form
          layout='vertical'
          onFinish={onsubmit}
          footer={
            <div className={`flex-col justify-start items-center ${styles['button']}`}>
              <button type='submit' className={`${styles['text_2']}`}>
                注册
              </button>
            </div>

          }
        >
          <Form.Item
            label='用户名'
            name='mobile'
            rules={[{ required: true, message: '姓名不能为空!' }]}
          >
            <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
              <Input placeholder='请设置用户名' clearable className={`flex-col justify-start items-start ${styles['text-wrapper']}`} />
            </div>
          </Form.Item>
          <Form.Item
            label='密码'
            name='code1'
            clearable
          >
            <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
              <Input placeholder='请设置密码' clearable type="password" className={`${styles['font_1']} ${styles['text']}`} />
            </div>
          </Form.Item>
          <Form.Item
            label='确认密码'
            name='code2'
            clearable
          >
            <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
              <Input placeholder='请再次输入密码' clearable type="password" className={`${styles['font_1']} ${styles['text']}`} />
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
