import styles from './account.module.css'
import layoutStyles from './dashboard.module.css'
import { Layout, Row, Col } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import ProfileBox from '../components/ProfileBox/ProfileBox'

const Account = () => {
  return (
    <div>
      <Layout className={layoutStyles.container}>
        <Sider className={layoutStyles.sidebar}>
          <Navbar />
        </Sider>
        <Content className={layoutStyles.content}>
          <Row className={styles.basicInfoContainer}>
            <Col span={4}>
              <Image
                className={styles.profilePicture}
                src="/../public/blank-profile-picture.png"
                width={150}
                height={150}
              />
            </Col>
            <Col>
              <p className={layoutStyles.title}>Jan Kowalski</p>
              <p>Lekarz pediatra, Łódź</p>
            </Col>
          </Row>
          <ProfileBox />
        </Content>
      </Layout>
    </div>
  )
}

export default Account
