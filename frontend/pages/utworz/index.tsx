import { Layout } from '../../components/Layout/Layout'
import { Typography, Form, Input, Button } from 'antd'
import styles from './upload.module.css'
import axios from 'axios'
import { API_ENTRY_PATH } from '../../constants/api_paths'
import { toast } from 'react-toastify'
import { EntryForm } from '../../shared/types/entry'
import withAuth from '../../components/withAuth/withAuth'
import { useState } from 'react'

const Upload = () => {
  const [loading, setLoading] = useState(false)
  const onFinish = async (values: EntryForm) => {
    setLoading(true)
    const response = await axios.post(API_ENTRY_PATH, values)
    setLoading(false)
    if (response) {
      toast('Dodano wpis!', { type: 'success' })
    }
  }

  return (
    <Layout title="Utwórz wpis">
      <Typography.Title level={3}>Szczegóły diagnozy</Typography.Title>
      <Form<EntryForm> className={styles.formContainer} name="upload" onFinish={onFinish}>
        <Form.Item name="descriptionShort" label="Powód zgłoszenia/skrócona diagnoza">
          <Input minLength={10} required disabled={loading} />
        </Form.Item>
        <Form.Item name="descriptionLong" label="Pełny opis">
          <Input.TextArea minLength={10} required disabled={loading} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className={styles.submit} htmlType="submit" loading={loading}>
            Zapisz
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default withAuth(Upload)
