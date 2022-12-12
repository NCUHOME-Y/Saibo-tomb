import React, { useState, useEffect, useRef } from 'react'
import styles from './denglujiemian1.module.css'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'C:/Users/18767/Desktop/html/22/bilibili-activity-page-demo-1/src/store'
import { Card, Form, Input, Checkbox, Button, Toast, Space, Image, Popup, AutoCenter, Divider } from 'antd-mobile'

export default function Login () {
  const mobileRef = useRef()
  const codeRef = useRef()
  const check = useRef()
  const [visible1, setVisible1] = useState(false)
  const navigate = useNavigate()
  const { loginStore } = useStore()
  function visitorLog () {
    navigate('/home', { replace: true })
    // 提示用户
    Toast.show({
      content: '这里是赛博坟墓，那么先建个坟埋了自己吧',
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
  async function onFinish () {
    const mobile = mobileRef.current.value
    const code = codeRef.current.value
    // values：放置的是所有表单项中用户输入的内容
    // todo:登录
    if (!mobile || !code) {
      alert("请填写完整信息")
      return
    }
    if (!check.current.checked) {
      alert("请勾选同意用户协议")
      return
    }
    else {
      let res = await loginStore.getToken({ mobile, code })
      if (res === 0) {
        // 跳转首页
        navigate('/home', { replace: true })
        // 提示用户
        Toast.show({
          content: '这里是赛博坟墓，那么先建个坟埋了自己吧',
          afterClose: () => {
            console.log('after')
          },
        })
      }
      else {
        console.log('登录失败:' + res.msg)

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
            <input className={`${styles['font_1']} ${styles['text']} ${styles['text_2']}  ${styles['input1']}`} placeholder="用户名" name='mobile' ref={mobileRef}></input>
          </div>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']} ${styles['view_2']}`}>
            <input className={`${styles['font_1']} ${styles['text']} ${styles['text_2']}  ${styles['input1']}`} placeholder="密码" name='code' ref={codeRef}></input>
          </div>
          {/* <div className={`flex-col justify-start items-center ${styles['button']}`}> */}
          <button className={`${styles['font_2']} ${styles['text_4']} ${styles['button']}`} onClick={onFinish}>登录</button>
          {/* </div> */}
          <div className={`flex-row justify-between ${styles['group_2']}`}>
            <span className={`${styles['font_3']}`} onClick={onforget}>忘记密码</span>
            <span className={`${styles['font_3']} ${styles['text_5']}`} onClick={onregister}>立即注册</span>
          </div>
        </div>
        {/* <div className={`flex-col justify-start items-center ${styles['button_2']}`}> */}
        <button className={`${styles['font_10']} ${styles['text_4']} ${styles['button_2']}`} onClick={visitorLog}>游客登录</button>
        {/* </div> */}
        <div className={`flex-row ${styles['group_3']}`}>
          <input type="checkbox" value="agree" ref={check}></input>
          <span className={`${styles['text_6']}`}>已阅读并同意服务协议和隐私保护指引</span>
        </div>
        <Divider />
        <AutoCenter><span className={`${styles['text_6']}`} onClick={() => {
          setVisible1(true)
        }}>更新说明</span></AutoCenter>

        <Popup visible={visible1}
          position='bottom'
          bodyStyle={{ height: '30rem' }}
          onMaskClick={() => {
            setVisible1(false)
          }}
        >
          <AutoCenter>12.11 版本0.02</AutoCenter>
          <Divider />
          1.更新部分bug
          <Divider />
          2.更新主体功能的开始页面
          <Divider />
          3.添加页面导引
          <Divider />
          4.更新忘记密码和注册页面
          <Divider />
          可惜登录功能还是没能做好
          <Divider />
          欢迎提出改进意见!
          <Divider />
        </Popup>
      </div>
    </div>
  )
}