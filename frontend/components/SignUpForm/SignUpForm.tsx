import { Form, Input, Button, Card } from 'antd'
import { useRouter } from 'next/router'
import { DASHBOARD_PATH } from '../../constants/app_paths'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './SignUpForm.module.css'
import { API_REGISTER_PATH } from '../../constants/api_paths'
import { TOKEN_KEY } from '../../constants/token'
import axios from 'axios'
import { toast } from 'react-toastify'

interface ISignUpForm {
  username: string
  password: string
  confirmPassword: string
}

const SignUpForm = () => {
  const router = useRouter()

  const onFinish = async (values: ISignUpForm) => {
    try {
      if (values.password !== values.confirmPassword) throw new Error()

      const response = await axios.post(API_REGISTER_PATH, {
        username: values.username,
        password: values.password,
      })
      localStorage.setItem(TOKEN_KEY, response.data.token)
      router.push(DASHBOARD_PATH)
    } catch {
      toast('Podano nieprawidłowe dane. Spróbuj ponownie.', { type: 'error' })
    }
  }

  return (
    <Card title="Zarejestruj się">
      <Form<ISignUpForm> name="signup-form" initialValues={{ remember: true }} onFinish={onFinish}>
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
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Wpisz poprawne hasło' }]}
        >
          <Input
            prefix={<LockOutlined className={styles.icon} />}
            type="password"
            placeholder="Powtórz hasło"
          />
        </Form.Item>

        <Form.Item>
          <div className={styles.buttons}>
            <Button type="primary" htmlType="submit">
              Zarejestruj się
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default SignUpForm
