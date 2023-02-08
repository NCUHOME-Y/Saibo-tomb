import { Input, Form } from 'antd-mobile'
import ant from './style.less?'

function Demo() {
  return (
    <div>
      <Input placeholder="Basic usage" value="测试" className={ant.antInput}/>
      <Form layout="vertical">
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" clearable />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input placeholder="请输入密码" clearable type="password"/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Demo
