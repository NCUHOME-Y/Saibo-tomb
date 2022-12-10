import React, { useState, useEffect } from 'react'
import styles from './zhucejiemian1.module.css'

export default function Zhucejiemian1 () {


  const data = {}

  return (
    <div className={`flex-col ${styles['page']} ${styles['space-y-46']}`}>
      <img
        className={`${styles['image']}`}
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394072a5a7e3f0310afdcd1/639407585281490011ca69b3/16706457298077126409.png"
      />
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
          <span className={`${styles['font_1']} ${styles['text']}`}>请设置用户名</span>
        </div>
        <div className={`flex-col justify-start items-start ${styles['group_2']}`}>
          <span className={`${styles['font_1']} ${styles['text']}`}>请设置密码</span>
          <img
            className={`${styles['image_2']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394072a5a7e3f0310afdcd1/639407585281490011ca69b3/16706457298103036464.png"
          />
        </div>
        <div className={`flex-col ${styles['group_3']} ${styles['space-y-24']}`}>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
            <span className={`${styles['font_1']} ${styles['text']}`}>请再次确认 密码</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['button']}`}>
            <span className={`${styles['text_2']}`}>注册</span>
          </div>
        </div>
        <div className={`flex-row ${styles['group_4']}`}>
          <div className={`${styles['section']}`}></div>
          <span className={`${styles['text_3']}`}>已阅读并同意服务协议和隐私保护指引</span>
        </div>
      </div>
    </div>
  )
}