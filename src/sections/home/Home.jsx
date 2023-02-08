import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

import { v4 as uuid } from 'uuid'
import {
  Button,
  Form,
  Input,
  List,
  Popup,
  Space,
  TextArea,
  Image,
  Dialog,
  Selector,
  Swiper,
  Toast,
  Popover,
} from 'antd-mobile'
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'

import styles from './home.module.css'

const Home = () => {
  const bgref = useRef(null)
  const { taskStore } = useStore()
  // const [activeTab, setActiveTab] = useState('搞定mobx')
  // const [isFixed, setIsFixed] = useState(false)
  const [visiblePopup1, setVisiblePopup1] = useState(true)
  const [visiblePopup2, setVisiblePopup2] = useState(true)
  const [visiblePopup3, setVisiblePopup3] = useState(true)
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visibleImg1, setVisibleImg1] = useState(false)
  const [visibleImg2, setVisibleImg2] = useState(false)
  const [visibleImg3, setVisibleImg3] = useState(false)
  const [visibleImg4, setVisibleImg4] = useState(false)
  const [visibleImg5, setVisibleImg5] = useState(false)
  // const [visibleImg6, setVisibleImg6] = useState(false)
  // const [visibleImg7, setVisibleImg7] = useState(false)
  // const [visibleImg8, setVisibleImg8] = useState(false)
  // const secondSectionRef = useRef(null)
  //删除
  function delTask(id) {
    taskStore.delTask(id)
    Toast.show({
      content: '吞噬成功！你成功消灭了一个灵魂！',
    })
  }
  //提交后处理
  const onFinish = (values) => {
    console.log(values)
    console.log(values.address)
    console.log(values.name + '的坟墓')
    console.log(values.styles[0])
    taskStore.addTask({
      id: uuid(),
      name: values.name + '的坟墓',
      address: values.address,
      bg: values.styles[0],
    })
    Toast.show({
      content:
        '我们成功地打造了一个崭新的坟墓，它安葬了一个灵魂。可左右滑动切换新的坟墓！',
    })
    setVisible1(false)
  }
  //删除事件
  function delEvent(item) {
    setVisiblePopup1(false)
    Dialog.confirm({
      content:
        '你准备好向这座坟墓说再见了吗？我们要使用最先进的墓碑吞噬者把它吃掉，让它重新回到大自然的怀抱！',
      onConfirm: () => delTask(item.id),
    })
  }
  //使用bgref更换className
  function changeBg(item) {
    console.log(item.bg)
    if (item.bg === '1') {
      bgref.current.className = `${styles['section']} `
    } else if (item.bg === '2') {
      bgref.current.className = `${styles['section_add_1']} `
    }
  }
  //在页面加载时更换背景
  useEffect(() => {
    changeBg(taskStore.list[0])
  }, [])
  //使用repeat函数重复代码
  // const repeat = (item) => {
  //   return {_html:

  const items = taskStore.list.map((item) => (
    <Swiper.Item key={item.id}>
      <div>
        {/* 背景 */}
        {/* 根据item.bg对背景的样式进行更改,使用三元运算符 */}
        {item.bg === '1' ? (
          <div>
            <div className={`flex-col justify-start ${styles['page']}`}>
              {/* 背景 */}
              <div className={`flex-col ${styles['section']}`} ref={bgref}>
                {/* 删除 */}
                <Popover
                  content="点击这里删除这个默认坟墓吧"
                  placement="bottom-start"
                  mode="dark"
                  trigger="click"
                  visible={visiblePopup1}>
                  <img
                    className={`${styles['image']} ${styles['image_2']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656638038424873.png"
                    onClick={() => delEvent(item)}
                  />
                </Popover>

                {/* 新增 */}
                <img
                  className={`${styles['image']} ${styles['image_3']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234248007961.png"
                  onClick={() => {
                    setVisible1(true)
                  }}
                />
                <div className={`flex-col ${styles['section_2']}`}>
                  {/* 设置祭品 */}
                  <Popover
                    content="点击这里为坟墓新增一些新祭品吧"
                    placement="bottom-start"
                    mode="dark"
                    trigger="click"
                    visible={visiblePopup3}>
                    <img
                      className={`${styles['image']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619235389226945.png"
                      onClick={() => {
                        setVisible2(true)
                        setVisiblePopup3(false)
                      }}
                    />
                  </Popover>
                  <span className={`${styles['text']}`}>⌈{item.name}⌋</span>
                  <div className={`flex-col items-center ${styles['group']}`}>
                    <span className={`${styles['font_1']} ${styles['text_2']}`}>
                      {item.address}
                    </span>
                  </div>
                  <div
                    className={`flex-col justify-start items-center ${styles['group_2']}`}>
                    {/* 香炉 */}
                    <img
                      style={{ display: visibleImg1 ? 'block' : 'none' }}
                      className={`${styles['image_4']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652197028678.png"
                    />
                    <div
                      className={`flex-row justify-between ${styles['equal-division']}`}>
                      <div
                        className={`flex-col justify-start items-center ${styles['group_5']}`}>
                        {/* 苹果 */}
                        <img
                          alt="苹果"
                          style={{ display: visibleImg2 ? 'block' : 'none' }}
                          className={`${styles['image_7']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652258297874.png"
                        />
                        <img
                          alt="苹果"
                          style={{ display: visibleImg2 ? 'block' : 'none' }}
                          className={`${styles['image_5']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652498512050.png"
                        />
                      </div>
                      <div
                        className={`flex-col justify-start items-start ${styles['equal-division-item']}`}>
                        {/* 香梨 */}
                        <img
                          style={{ display: visibleImg3 ? 'block' : 'none' }}
                          className={`${styles['image_1']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656655018042608.png"
                        />
                        <img
                          style={{ display: visibleImg3 ? 'block' : 'none' }}
                          className={`${styles['image_6']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656655056126500.png"
                        />
                      </div>
                    </div>
                    {/* 花 */}
                    <img
                      style={{ display: visibleImg4 ? 'block' : 'none' }}
                      className={`${styles['image_9']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656650589672166.png"
                    />
                    {/* 酒 */}
                    <img
                      style={{ display: visibleImg5 ? 'block' : 'none' }}
                      className={`${styles['image_8']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656650982927338.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={`flex-col justify-start ${styles['page']}`}>
              {/* 背景 */}
              <div
                className={`flex-col ${styles['section_add_1']}`}
                ref={bgref}>
                {/* 删除 */}
                <Popover
                  content="点击这里删除这个默认坟墓吧"
                  placement="bottom-start"
                  mode="dark"
                  trigger="click"
                  visible={visiblePopup1}>
                  <img
                    className={`${styles['image']} ${styles['image_2']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656638038424873.png"
                    onClick={() => delEvent(item)}
                  />
                </Popover>

                {/* 新增 */}
                <img
                  className={`${styles['image']} ${styles['image_3']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234248007961.png"
                  onClick={() => {
                    setVisible1(true)
                  }}
                />
                <div className={`flex-col ${styles['section_2']}`}>
                  {/* 设置祭品 */}
                  <Popover
                    content="点击这里为坟墓新增一些新祭品吧"
                    placement="bottom-start"
                    mode="dark"
                    trigger="click"
                    visible={visiblePopup3}>
                    <img
                      className={`${styles['image']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619235389226945.png"
                      onClick={() => {
                        setVisible2(true)
                        setVisiblePopup3(false)
                      }}
                    />
                  </Popover>
                  <span className={`${styles['text']}`}>⌈{item.name}⌋</span>
                  <div className={`flex-col items-center ${styles['group']}`}>
                    <span className={`${styles['font_1']} ${styles['text_2']}`}>
                      {item.address}
                    </span>
                  </div>
                  <div
                    className={`flex-col justify-start items-center ${styles['group_2']}`}>
                    {/* 香炉 */}
                    <img
                      style={{ display: visibleImg1 ? 'block' : 'none' }}
                      className={`${styles['image_4']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652197028678.png"
                    />
                    <div
                      className={`flex-row justify-between ${styles['equal-division']}`}>
                      <div
                        className={`flex-col justify-start items-center ${styles['group_5']}`}>
                        {/* 苹果 */}
                        <img
                          alt="苹果"
                          style={{ display: visibleImg2 ? 'block' : 'none' }}
                          className={`${styles['image_7']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652258297874.png"
                        />
                        <img
                          alt="苹果"
                          style={{ display: visibleImg2 ? 'block' : 'none' }}
                          className={`${styles['image_5']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652498512050.png"
                        />
                      </div>
                      <div
                        className={`flex-col justify-start items-start ${styles['equal-division-item']}`}>
                        {/* 香梨 */}
                        <img
                          style={{ display: visibleImg3 ? 'block' : 'none' }}
                          className={`${styles['image_1']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656655018042608.png"
                        />
                        <img
                          style={{ display: visibleImg3 ? 'block' : 'none' }}
                          className={`${styles['image_6']}`}
                          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656655056126500.png"
                        />
                      </div>
                    </div>
                    {/* 花 */}
                    <img
                      style={{ display: visibleImg4 ? 'block' : 'none' }}
                      className={`${styles['image_9']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656650589672166.png"
                    />
                    {/* 酒 */}
                    <img
                      style={{ display: visibleImg5 ? 'block' : 'none' }}
                      className={`${styles['image_8']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656650982927338.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`flex-col justify-start ${styles['page']}`}>
          {/* 背景 */}
          <div className={`flex-col ${styles['section']}`} ref={bgref}>
            {/* 删除 */}
            <Popover
              content="点击这里删除这个默认坟墓吧"
              placement="bottom-start"
              mode="dark"
              trigger="click"
              visible={visiblePopup1}>
              <img
                className={`${styles['image']} ${styles['image_2']}`}
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656638038424873.png"
                onClick={() => delEvent(item)}
              />
            </Popover>

            {/* 新增 */}
            <img
              className={`${styles['image']} ${styles['image_3']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234248007961.png"
              onClick={() => {
                setVisible1(true)
              }}
            />
            <div className={`flex-col ${styles['section_2']}`}>
              {/* 设置祭品 */}
              <Popover
                content="点击这里为坟墓新增一些新祭品吧"
                placement="bottom-start"
                mode="dark"
                trigger="click"
                visible={visiblePopup3}>
                <img
                  className={`${styles['image']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619235389226945.png"
                  onClick={() => {
                    setVisible2(true)
                    setVisiblePopup3(false)
                  }}
                />
              </Popover>
              <span className={`${styles['text']}`}>⌈{item.name}⌋</span>
              <div className={`flex-col items-center ${styles['group']}`}>
                <span className={`${styles['font_1']} ${styles['text_2']}`}>
                  {item.address}
                </span>
              </div>
              <div
                className={`flex-col justify-start items-center ${styles['group_2']}`}>
                {/* 香炉 */}
                <img
                  style={{ display: visibleImg1 ? 'block' : 'none' }}
                  className={`${styles['image_4']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652197028678.png"
                />
                <div
                  className={`flex-row justify-between ${styles['equal-division']}`}>
                  <div
                    className={`flex-col justify-start items-center ${styles['group_5']}`}>
                    {/* 苹果 */}
                    <img
                      alt="苹果"
                      style={{ display: visibleImg2 ? 'block' : 'none' }}
                      className={`${styles['image_7']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652258297874.png"
                    />
                    <img
                      alt="苹果"
                      style={{ display: visibleImg2 ? 'block' : 'none' }}
                      className={`${styles['image_5']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656652498512050.png"
                    />
                  </div>
                  <div
                    className={`flex-col justify-start items-start ${styles['equal-division-item']}`}>
                    {/* 香梨 */}
                    <img
                      style={{ display: visibleImg3 ? 'block' : 'none' }}
                      className={`${styles['image_1']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656655018042608.png"
                    />
                    <img
                      style={{ display: visibleImg3 ? 'block' : 'none' }}
                      className={`${styles['image_6']}`}
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656655056126500.png"
                    />
                  </div>
                </div>
                {/* 花 */}
                <img
                  style={{ display: visibleImg4 ? 'block' : 'none' }}
                  className={`${styles['image_9']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656650589672166.png"
                />
                {/* 酒 */}
                <img
                  style={{ display: visibleImg5 ? 'block' : 'none' }}
                  className={`${styles['image_8']}`}
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656650982927338.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Swiper.Item>
  ))
  return (
    <>
      {/* 初始页面，使用三元运算符，根据items.length进行初始选择的调用 */}
      {items.length === 0 ? (
        <div className={`relative ${styles['page11']}`}>
          <span className={`${styles['text1']} ${styles['pos3']}`}>
            创建你的第一个
          </span>
          <img
            className={`${styles['image1']} ${styles['pos1']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619232935987687.png"
          />
          <Popover
            content="点击这里新建一个新坟墓吧"
            placement="bottom-start"
            mode="dark"
            trigger="click"
            visible={visiblePopup2}>
            <img
              className={`${styles['image2']} ${styles['pos2']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619229957245873.png"
              onClick={() => {
                setVisible1(true)
                setVisiblePopup2(false)
              }}
            />
          </Popover>
        </div>
      ) : (
        <Swiper style={{'--height':'100%'}}>{items}</Swiper>
      )}

      {/* 图片弹窗 */}
      <Popup
        visible={visible2}
        onMaskClick={() => {
          setVisible2(false)
        }}
        position="top"
        bodyStyle={{ height: '6rem' }}>
        <div className={`flex-col ${styles['page1']} ${styles['space-y-22']}`}>
          <div
            className={`flex-row ${styles['equal-division_1']} ${styles['space-x-18']}`}>
            {/* 苹果 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image21']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793053613849503.png"
              onClick={() => {
                setVisibleImg2(!visibleImg2)
                if (visibleImg4 === false) {
                  Toast.show({
                    content: '你居然喂它吃苹果？',
                  })
                }
              }}
            />
            {/* 香梨 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_22']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054240869823.png"
              onClick={() => {
                setVisibleImg3(!visibleImg3)
                if (visibleImg3 === false) {
                  Toast.show({
                    content: '你请他吃香梨',
                  })
                }
              }}
            />
            {/* 酒 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_23']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054302489954.png"
              onClick={() => {
                setVisibleImg5(!visibleImg5)
                if (visibleImg5 === false) {
                  Toast.show({
                    content: '你试图给墓主人敬酒',
                  })
                }
              }}
            />
            {/* 香炉 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_24']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054343390747.png"
              onClick={() => {
                setVisibleImg1(!visibleImg1)
                if (visibleImg1 === false) {
                  Toast.show({
                    content: '你给墓主人上香',
                  })
                }
              }}
            />
          </div>
          <div
            className={`flex-row ${styles['equal-division_1']} ${styles['space-x-18']}`}>
            {/* 花粉色 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_25']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054121113130.png"
              onClick={() => {
                setVisibleImg4(!visibleImg4)
                if (visibleImg4 === false) {
                  Toast.show({
                    content: '献花给墓主人',
                  })
                }
              }}
            />
            {/* 花紫色 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_21']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054285307272.png"
              onClick={() => {
                setVisibleImg4(!visibleImg4)
                if (visibleImg4 === false) {
                  Toast.show({
                    content: '献花给墓主人',
                  })
                }
              }}
            />
            {/* 花蓝色 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_21']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054339433649.png"
              onClick={() => {
                setVisibleImg4(!visibleImg4)
                if (visibleImg4 === false) {
                  Toast.show({
                    content: '献花给墓主人',
                  })
                }
              }}
            />
            {/* 蛋糕 */}
            <img
              className={`${styles['equal-division-item_1']} ${styles['image_21']}`}
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706793054361607939.png"
              onClick={() => {
                setVisibleImg4(!visibleImg4)
                if (visibleImg4 === false) {
                  Toast.show({
                    content: '美味的蛋糕送给墓主人',
                  })
                }
              }}
            />
          </div>
        </div>
      </Popup>
      {/* 新增弹窗 */}
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false)
        }}
        bodyStyle={{ height: '60vh' }}>
        <div style={{ padding: '24px' }}>
          <Space direction="vertical">
            <Form
              onFinish={onFinish}
              layout="horizontal"
              footer={
                <Button block type="submit" color="primary" size="large">
                  挖个坟埋葬谁吧
                </Button>
              }>
              <Form.Header>创建你的坟墓</Form.Header>
              <Form.Item
                name="name"
                label="墓主名"
                rules={[{ required: true, message: '姓名不能为空' }]}>
                <Input placeholder="请输入墓主" />
              </Form.Item>
              <Form.Item
                name="address"
                label="墓志铭"
                help="请在这里镌刻我的墓志铭，铭记我伟大的一生！">
                <TextArea
                  className="TextArea_style"
                  placeholder="请输入墓志铭"
                  maxLength={30}
                  showCount
                />
              </Form.Item>
              <Form.Item name="styles" label="样式" required>
                <Selector
                  options={[
                    {
                      label: '选项一',
                      description: '天蓝色',
                      value: '01',
                    },
                    {
                      label: '选项二',
                      description: '火红色',
                      value: '02',
                    },
                  ]}
                />
              </Form.Item>
            </Form>
          </Space>
        </div>
      </Popup>
    </>
  )
}

export default observer(Home)
