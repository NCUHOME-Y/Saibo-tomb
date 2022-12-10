import { Card, Form, Input, Checkbox, Button, Toast, Space, Image } from 'antd-mobile'
// import logo from '@/assets/logo.png'
import { useNavigate } from 'react-router-dom'
// 导入样式文件
import "./index.scss"
import backImg from '../../assets/bg1.png'
import { useStore } from 'C:/Users/18767/Desktop/html/22/bilibili-activity-page-demo-1/src/store'
function Login () {
  const { loginStore } = useStore()
  const navigate = useNavigate()
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
    <div className='login'>
      <Card className=''>
        {/* <img src={}className="login-logo" alt="" /> */}
        {/* 登录表单 */}
        {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}
        <Form
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
            mobile: '13811111111',
            code: '246810'
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              {
                len: 6,
                message: '请输入6位密码',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="unchecked"

          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="regiser"
            color='primary'
          >
          </Form.Item>
          <Form.Item>

            <Button type="primary" color='primary' htmlType="submit" size="large" block>
              登录
            </Button>
            <Space direction='vertical'></Space>
            <Button size='large' block onClick={visitorLog} >以游客模式登录</Button>
          </Form.Item>
        </Form>
        <div className="login-gofuc">
          <Button onClick={onforget}><a src="#" >忘记密码</a></Button>
          <Button onClick={onregister}><a src="#" >快速注册</a></Button>
        </div>
      </Card>
    </div>
  )
}

export default Login