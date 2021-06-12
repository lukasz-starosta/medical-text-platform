import { Layout } from '../../components/Layout/Layout'
import { Typography, Form, Input, Button } from 'antd'
import styles from './upload.module.css'

const Upload = () => {
  const onFinish = console.log
  return (
    <Layout title="Utwórz wpis">
      <Typography.Title level={3}>Szczegóły diagnozy</Typography.Title>
      <Form className={styles.formContainer} name="upload" onFinish={onFinish}>
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
