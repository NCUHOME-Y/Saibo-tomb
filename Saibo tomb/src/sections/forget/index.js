import React, { useState, useEffect, useRef } from 'react'
import styles from '../register/index.module.css'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'C:/Users/18767/Desktop/html/22/bilibili-activity-page-demo-1/src/store'
import { Card, Form, Input, Checkbox, Button, Toast, Space, Image } from 'antd-mobile'

export default function Forget () {
  const mobileRef = useRef()
  const codeRef1 = useRef()
  const codeRef2 = useRef()
  const check = useRef()
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onregister = () => {
    navigate('/register', { replace: true })
  }
  async function onFinish () {
    const mobile = mobileRef.current.value
    const code1 = codeRef1.current.value
    const code2 = codeRef1.current.value
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    if (!mobile || !code1 || !code2) {
      alert("请填写完整信息")
      return
    }
    if (!check.current.checked) {
      alert("请勾选同意用户协议")
      return
    }
    if (code1 !== code2) {
      alert("两次输入密码不一致")
    }
    else {
      let res = await loginStore.getToken({ mobile, code1 })
      if (res === 0) {
        // 跳转首页
        navigate('/', { replace: true })
        // 提示用户
        Toast.show({
          content: '欢迎',
          afterClose: () => {
            console.log('after')
          },
        })
      }
      else {
        alert('登录失败')
        return
      }
    }
  }

  return (
    <div className={`flex-col justify-start ${styles['page']}`}>
      <img
        className={`${styles['image']}`}
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619221090023631.png"
      />
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col`}>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']} ${styles['view']}`}>
            <input className={`${styles['font_1']} ${styles['text']} ${styles['text_2']}  ${styles['input1']}`} placeholder="输入用户名" name='mobile' ref={mobileRef}></input>
          </div>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']} ${styles['view_2']}`}>
            <input className={`${styles['font_1']} ${styles['text']} ${styles['text_2']}  ${styles['input1']}`} placeholder="输入新密码" name='code' ref={codeRef1}></input>
          </div>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']} ${styles['view_2']}`}>
            <input className={`${styles['font_1']} ${styles['text']} ${styles['text_2']}  ${styles['input1']}`} placeholder="请再次输入密码" name='code' ref={codeRef2}></input>
          </div>
          {/* <div className={`flex-col justify-start items-center ${styles['button']}`}> */}
          <button className={`${styles['font_2']} ${styles['text_4']} ${styles['button']}`} onClick={onFinish}>登录</button>
          {/* </div> */}
          <div className={`flex-row justify-between ${styles['group_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_5']}`} onClick={onregister}>快速注册</span>
          </div>
        </div>
        <div className={`flex-row ${styles['group_3']}`}>
          <input type="checkbox" value="agree" ref={check}></input>
          <span className={`${styles['text_6']}`}>已阅读并同意服务协议和隐私保护指引</span>
        </div>
      </div>
    </div>
  )
}