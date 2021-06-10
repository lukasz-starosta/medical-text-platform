import { Row, Col } from 'antd'
import styles from './dashboard.module.css'
import SubscriptionInfo from '../../components/SubscriptionInfo/SubscriptionInfo'
import News from '../../components/News/News'
import { Layout } from '../../components/Layout/Layout'

const Dashboard = () => {
  return (
    <Layout title="Dzień dobry!">
      <Row gutter={32} className={styles.headerContainer}>
        <Col span={8}>
          <SubscriptionInfo />
        </Col>
        <Col span={10} offset={4}>
          <News />
        </Col>
      </Row>
    </Layout>
  )
}

export default Dashboard
