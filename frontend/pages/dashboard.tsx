import { Layout, Row, Col } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Navbar from '../components/Navbar/Navbar'
import styles from './dashboard.module.css'
import SubscriptionInfo from '../components/SubscriptionInfo/SubscriptionInfo'
import News from '../components/News/News'

const Dashboard = () => {
  return (
    <div>
      <Layout className={styles.container}>
        <Sider className={styles.sidebar}>
          <Navbar />
        </Sider>
        <Content className={styles.content}>
          <p className={styles.title}>Dzień dobry!</p>
          <Row gutter={32} className={styles.headerContainer}>
            <Col span={8}>
              <SubscriptionInfo />
            </Col>
            <Col span={10} offset={4}>
              <News />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default Dashboard
