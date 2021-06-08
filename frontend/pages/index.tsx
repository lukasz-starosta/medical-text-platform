import Head from 'next/head'
import styles from './Home.module.css'
import { Button, Card, Col, Row } from 'antd'
import LoginForm from '../components/LoginForm/LoginForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MedicalTextPlatform</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>MedicalTextPlatform</h1>
      <main className={styles.main}>
        <Row gutter={128}>
          <Col span={12}>
            <Card title="MedicalTextPlatform">
              <p>Podziel się wiedzą medyczną i korzystaj z wiedzy innych!</p>
            </Card>
          </Col>
          <Col span={12}>
            <LoginForm />
          </Col>
        </Row>
      </main>
    </div>
  )
}
