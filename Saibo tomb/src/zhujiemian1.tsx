import { useEffect, useRef, useState } from 'react'
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
  SwiperRef,
  Image,
  Dialog,
  Selector,
  Swiper,
  Toast,
} from 'antd-mobile'
import { useStore } from './store'
import { observer } from 'mobx-react-lite'

import styles from './zhujiemian1.module.css'

const Zhujiemian = () => {
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
  const items = taskStore.list.map((item) => (
    <Swiper.Item key={item.id}>
      <div>
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
  return (
    <div className={`flex-col justify-start ${styles['page']}`}>
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

      <div className={`flex-col ${styles['section']}`}>
        <img
          className={`${styles['image']} ${styles['image_2']}`}
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706656638038424873.png"
        />
        <img
          className={`${styles['image']} ${styles['image_3']}`}
          onClick={() => {
            setVisible1(true)
          }}
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619234248007961.png"
        />
        <div
          className={`flex-col justify-start items-end ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image']}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6394067a5a7e3f0310afcebb/639446fd5281490011ca7514/16706619235389226945.png"
          />
          <Swiper>{items}</Swiper>
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
    </div>
  )
}

export default observer(Zhujiemian)
