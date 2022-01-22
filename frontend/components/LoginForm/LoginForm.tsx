import { Form, Input, Button, Card } from 'antd'
import { useRouter } from 'next/router'
import { DASHBOARD_PATH, SIGNUP_PATH } from '../../constants/app_paths'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './LoginForm.module.css'
import { API_LOGIN_PATH } from '../../constants/api_paths'
import { LOGIN, TOKEN_KEY } from '../../constants/storage'
import axios from 'axios'
import { toast } from 'react-toastify'
import Link from 'next/link'

interface ILoginForm {
  username: string
  password: string
}

const LoginForm = () => {
  const router = useRouter()

  const onFinish = async (values: ILoginForm) => {
    try {
      const response = await axios.post(API_LOGIN_PATH, { ...values })
      localStorage.setItem(TOKEN_KEY, response.data.accessToken)
      localStorage.setItem(LOGIN, values.username)
      router.push(DASHBOARD_PATH)
    } catch {
      toast('Podano nieprawidłowe dane. Spróbuj ponownie.', { type: 'error' })
    }
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
            lub <Link href={SIGNUP_PATH}>Zarejestruj</Link>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default LoginForm
