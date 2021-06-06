import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Navbar from '../components/Navbar/Navbar'
import styles from './postDetails.module.css'
import layoutStyles from './dashboard.module.css'

const PostDetails = () => {
  return (
    <div>
      <Layout className={layoutStyles.container}>
        <Sider className={layoutStyles.sidebar}>
          <Navbar />
        </Sider>
        <Content>
          <p className={layoutStyles.title}>Detale</p>
        </Content>
      </Layout>
    </div>
  )
}

export default PostDetails
