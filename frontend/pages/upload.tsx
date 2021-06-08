import styles from './upload.module.css'
import layoutStyles from './dashboard.module.css'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Navbar from '../components/Navbar/Navbar'

const Upload = () => {
  return (
    <div>
      <Layout className={layoutStyles.container}>
        <Sider className={layoutStyles.sidebar}>
          <Navbar />
        </Sider>
        <Content className={layoutStyles.content}>
          <p className={layoutStyles.title}>Utwórz wpis</p>
        </Content>
      </Layout>
    </div>
  )
}

export default Upload
