import { Form, Input, Button, Checkbox, Card } from 'antd'
import { useRouter } from 'next/router'
import { DASHBOARD_PATH } from '../../constants/app_paths'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './LoginForm.module.css'
import { API_LOGIN_PATH } from '../../constants/api_paths'

interface ILoginForm {
  username: string
  password: string
}

const LoginForm = () => {
  const router = useRouter()

  const onFinish = async (values: ILoginForm) => {
    // TODO: implement login
    // const response = await (
    //   await fetch(API_LOGIN_PATH, { method: 'POST', body: JSON.stringify(values) })
    // ).json()
    // console.log('Success:', response)
    router.push(DASHBOARD_PATH)
  }

  return (
    <Card title="Zaloguj się">
      <Form<ILoginForm> name="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: 'Wpisz nazwę użytkownika' }]}>
          <Input
            prefix={<UserOutlined className={styles.icon} />}
            placeholder="Nazwa użytkownika"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Wpisz hasło' }]}>
          <Input
            prefix={<LockOutlined className={styles.icon} />}
            type="password"
            placeholder="Hasło"
          />
        </Form.Item>

        <Form.Item>
          <div className={styles.buttons}>
            <Button type="primary" htmlType="submit">
              Zaloguj
            </Button>
            lub <a href="">Zarejestruj</a>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default LoginForm
