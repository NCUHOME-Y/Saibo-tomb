import React, { useState, useEffect } from 'react'
import styles from './index.css'

export default function Page1 () {

  return (
    <div className={`flex-col justify-start ${styles['page']}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <img
          className={`${styles['image_1']}`}
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619233008931621.png"
        />
        <div className={`flex-col justify-start ${styles['group_2']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234211446097.png"
          />
          <div className={`flex-col justify-start items-end ${styles['group']}`}>
            <div className={`flex-col justify-start ${styles['group_5']} ${styles['section_2']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234077807147.png"
              />
              <div className={`${styles['group_5']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619235389226945.png"
                />
                <img
                  className={`${styles['image']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619235551917035.png"
                />
              </div>
            </div>
            <img
              className={`${styles['image_3']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234248007961.png"
            />
          </div>
        </div>
      </div>
    </div>
  )
}