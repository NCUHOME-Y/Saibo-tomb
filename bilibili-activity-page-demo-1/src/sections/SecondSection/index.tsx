import { FC, useEffect, useRef, useState } from 'react'
// import CartoonImage from '../../assets/cartoon.jpg'
// import MovieImage from '../../assets/movie.png'
// import LifeImage from '../../assets/life.jpg'
// import FoodImage from '../../assets/food.jpg'
// import LogoImage from '../../assets/logo.png'
import './index.css'

import styles from './styles.module.scss'
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
  SwiperRef,
} from 'antd-mobile'
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite'

// 1. 点击 Tab 滚动跳转 x
// 3. Tabs 吸顶 x
// 2. 滚动时，高亮 Tab x
// 4. 按钮吸底

//使用弹窗
window.onload = function () {
  Dialog.alert({
    content: '人在天边月上明',
    onConfirm: () => {
      console.log('Confirmed')
    },
  })
}
const SecondSection: FC = () => {
  const ref = useRef<SwiperRef>(null)
  const { taskStore } = useStore()
  const [activeTab, setActiveTab] = useState<string>('搞定mobx')
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const [visible1, setVisible1] = useState(false)
  const secondSectionRef = useRef<HTMLDivElement>(null)
  //删除
  function delTask(id: number) {
    taskStore.delTask(id)
  }
  //提交后处理
  const onFinish = (values: any) => {
    console.log(values)
    console.log(values.address)
    console.log(values.name + '的nomb')
    taskStore.addTask({
      id: uuid(),
      name: values.name + '的nomb',
      address: values.address,
    })
  }
  //坟墓卡片设计
  const items = taskStore.list.map((item) => (
    <Swiper.Item key={item.id}>
      <div
        onClick={() => {
          Toast.show(`你点击了卡片 ${item.name}`)
        }}>
        {item.name}
        {item.address}
        <Button
          color="primary"
          onClick={() =>
            Dialog.confirm({
              content: '确定要删除吗？',
              onConfirm: () => delTask(item.id),
            })
          }>
          删除
        </Button>
        {/* <Image src={MovieImage}></Image> */}
      </div>
    </Swiper.Item>
  ))
  // const activate = (key: string) => {
  //   setActiveTab(key)

  //   const tabContentEl = document.querySelector(`[data-id=${key}]`)

  //   if (tabContentEl) {
  //     tabContentEl.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  // const onScroll = () => {
  //   if (secondSectionRef.current) {
  //     const { top } = secondSectionRef.current.getBoundingClientRect()
  //     setIsFixed(top <= 0)

  //     const sectionNodes = secondSectionRef.current.querySelectorAll('section')

  //     Array.from(sectionNodes).forEach((sectionEl) => {
  //       const { top } = sectionEl.getBoundingClientRect()
  //       const key = sectionEl.getAttribute('data-id') || ''

  //       if (top <= TAB_HEIGHT) {
  //         setActiveTab(key)
  //       }
  //     })
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll)

  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [])
  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      {/* Tabs */}
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {taskStore.list.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            {/* <span
              className={classNames(styles.line, {
                [styles.visible]: activeTab === item.name,
              })}
            /> */}
          </li>
        ))}
      </ul>
      {/* <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(styles.line, {
                [styles.visible]: activeTab === tab.key,
              })}
            />
          </li>
        ))}
      </ul> */}

      {/* 类名标识 */}
      {/* <List header="墓碑列表">
        {taskStore.list.map((item) => (
          <section data-id={item.id}>
            <Swiper.Item key={item.id}>
              <Button
                color="primary"
                onClick={() =>
                  Dialog.confirm({
                    content: '确定要删除吗？',
                    onConfirm: () => delTask(item.id),
                  })
                }>
                删除
              </Button>
              {item.address}
              {item.name}
              <div
                onClick={() => {
                  Toast.show(`你点击了坟墓${item.id}`)
                }}>
                {item.id}
              </div>
            </Swiper.Item>
          </section>
          // <li className="todo" >
          //   <div className="view">
          //     <label>{item.name}</label>
          //     <label>{item.address}</label>
          //   </div>
          // </li>
        ))}
      </List> */}
      {/* <div>
        {taskStore.list.map((item) => (
          <section data-id={.key}>
            <h2>{tab.title}</h2>
            <img src={tab.image} alt={tab.key} />
          </section>
        ))}
      </div> */}
      <Swiper>{items}</Swiper>
      {/* 吸底按钮 */}
      <div>
        <Button
          onClick={() => {
            setVisible1(true)
          }}>
          展开第一个弹出层
        </Button>
        {/* 弹出层 */}
        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false)
          }}
          bodyStyle={{ height: '60vh' }}>
          <div style={{ padding: '24px' }}>
            <Space direction="vertical">
              <div>这是弹出层1</div>
              <Form
                onFinish={onFinish}
                layout="horizontal"
                footer={
                  <Button block type="submit" color="primary" size="large">
                    提交
                  </Button>
                }>
                <Form.Header>水平布局表单</Form.Header>
                <Form.Item
                  name="name"
                  label="姓名"
                  rules={[{ required: true, message: '姓名不能为空' }]}>
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item name="address" label="地址" help="详情地址">
                  <TextArea
                    placeholder="请输入地址"
                    maxLength={100}
                    rows={2}
                    showCount
                  />
                </Form.Item>
                <Form.Item name="style" label="样式" required>
                  <Selector
                    options={[
                      {
                        label: '选项一',
                        description: '描述信息',
                        value: 'yes',
                      },
                      {
                        label: '选项二',
                        description: '描述信息',
                        value: 'no',
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            </Space>
          </div>
        </Popup>
      </div>
    </div>
  )
}

export default observer(SecondSection)
