import { Menu, Space } from 'antd'
import { SnippetsOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { EntryTable } from '../EntryTable/EntryTable'
import axios from 'axios'
import { LockOutlined } from '@ant-design/icons'
import { API_USER_ENTRIES_PATH } from '../../constants/api_paths'
import { Form, Input, Button, Card } from 'antd'
import { API_CHANGE_PASSWORD_PATH } from '../../constants/api_paths'
import { toast } from 'react-toastify'

interface IPass {
  oldPassword: string
  newPassword: string
}

const ProfileBox = () => {
  const [option, setOption] = useState(1)
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true)
      const response = await axios.get(API_USER_ENTRIES_PATH)
      setEntries(response.data)
      setLoading(false)
    }
    fetchEntries()
  }, [])

  const onFinish = async (values: IPass) => {
    const response = await axios.post(API_CHANGE_PASSWORD_PATH, { ...values })
    if (!response) {
      toast('Podano nieprawidłowe dane. Spróbuj ponownie.', { type: 'error' })
    } else if (response.status === 200) {
      toast('Hasło zmienione pomyślnie', { type: 'success' })
    }
  }

  return (
    <Space size="large" direction="vertical" style={{ width: '100%' }}>
      <Menu defaultSelectedKeys={['1']} mode="horizontal">
        <Menu.Item icon={<SnippetsOutlined />} key="1" onClick={() => setOption(1)}>
          Wpisy
        </Menu.Item>
        <Menu.Item icon={<InfoCircleOutlined />} key="2" onClick={() => setOption(2)}>
          Dane konta
        </Menu.Item>
      </Menu>
      {option == 1 && <EntryTable loading={loading} title="Twoje wpisy" data={entries} />}
      {option == 2 && (
        <Card title="Zmień hasło">
          <Form<IPass>
            name="change-password"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item name="oldPassword" rules={[{ required: true, message: 'Stare hasło' }]}>
              <Input prefix={<LockOutlined />} type="password" placeholder="Stare hasło" />
            </Form.Item>
            <Form.Item name="newPassword" rules={[{ required: true, message: 'Wpisz nowe hasło' }]}>
              <Input prefix={<LockOutlined />} type="password" placeholder="Hasło" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Zmień hasło
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
    </Space>
  )
}

export default ProfileBox
