import React, { useState, useEffect, useRef } from 'react'
import styles from './denglujiemian1.module.css'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'C:/Users/18767/Desktop/html/22/bilibili-activity-page-demo-1/src/store'
import { Card, Form, Input, Checkbox, Button, Toast, Space, Image } from 'antd-mobile'

export default function Denglujiemian1 () {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const backgroundRef = useRef()
  const checkNotice = useRef()
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState(true)
  const { loginStore } = useStore()
  function visitorLog () {
    navigate('/home', { replace: true })
    // 提示用户
    Toast.show({
      content: '欢迎',
      afterClose: () => {
        console.log('after')
      },
    })
  }
  const onregister = () => {
    navigate('/register', { replace: true })
  }
  const onforget = () => {
    navigate("/forget", { replace: true })
  }
  async function onFinish (values) {
    console.log(values)
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    const { mobile, code } = values
    await loginStore.getToken({ mobile, code })
    // 跳转首页
    navigate('/home', { replace: true })
    // 提示用户
    Toast.show({
      content: '欢迎',
      afterClose: () => {
        console.log('after')
      },
    })
  }

  return (
    <div className={`flex-col ${styles['page']} ${styles['space-y-46']}`}>
      {/* 图片 */}
      <img
        className={`${styles['image']}`}
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394072a5a7e3f0310afdcd1/639407585281490011ca69b3/16706457298077126409.png"
        alt='#'
      />
      <form>
        {/* 用户名 */}
        <div className={`flex-col ${styles['group']}`}>
          {/* <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}> */}
          <input className={`${styles['font_1']} ${styles['text']} ${styles['text_2']} ${styles['text-wrapper']} ${styles['input1']}`} placeholder="用户名"></input>
          {/* </div> */}
          <div className={`flex-col ${styles['group_2']}`}>
            {/* 密码 */}
            <div className={`flex-col justify-start items-start ${styles['group_3']}`}>
              <input className={`${styles['font_1']} ${styles['text']} ${styles['text_3']}${styles['group_3']}`} placeholder="密码"></input>
              <img
                className={`${styles['image_2']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394072a5a7e3f0310afdcd1/639407585281490011ca69b3/16706457298103036464.png"
                alt="#"
              />
            </div>
            {/* 登录 */}
            <div className={`flex-col justify-start items-center ${styles['button']}`}>
              <button className={`${styles['font_2']} ${styles['text_4']}`} type="submit" onSubmit={onFinish}>登录</button>
            </div>
          </div>
          {/* 忘记密码及注册 */}
          <div className={`flex-row justify-between ${styles['group_4']}`}>
            <button className={`${styles['font_3']}`} onClick={onforget}>忘记密码</button>
            <button className={`${styles['font_3']} ${styles['text_5']}`} onClick={onregister}>立即注册</button>
          </div>
          {/* 游客登录 */}
          <div className={`flex-col justify-start items-center ${styles['button_2']}`}>
            <button className={`${styles['font_2']} ${styles['text_4']}`} onClick={visitorLog}>游客登录</button>
          </div>
          {/* 勾选框 */}
          <div className={`flex-row ${styles['group_5']}`}>
            <div className={`${styles['section']}`}></div>
            <span className={`${styles['text_6']}`}>已阅读并同意服务协议和隐私保护指引</span>
          </div>
        </div>
      </form>
    </div>
  )
}