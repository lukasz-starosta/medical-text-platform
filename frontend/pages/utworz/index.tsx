import { Layout } from '../../components/Layout/Layout'
import { Typography, Form, Input, Button } from 'antd'
import styles from './upload.module.css'
import axios from 'axios'
import { API_ENTRY_PATH } from '../../constants/api_paths'
import { toast } from 'react-toastify'
import { EntryForm } from '../../shared/types/entry'

const Upload = () => {
  const onFinish = async (values: EntryForm) => {
    const response = await axios.post(API_ENTRY_PATH, values)
    if (response) {
      toast('Dodano wpis!', { type: 'success' })
    }
  }

  return (
    <Layout title="Utwórz wpis">
      <Typography.Title level={3}>Szczegóły diagnozy</Typography.Title>
      <Form<EntryForm> className={styles.formContainer} name="upload" onFinish={onFinish}>
        <Form.Item name="descriptionShort" label="Skrócona diagnoza">
          <Input />
        </Form.Item>
        <Form.Item name="descriptionLong" label="Diagnoza">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className={styles.submit} htmlType="submit">
            Zapisz
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Upload
