import styles from './account.module.css'
import { Row, Col, Typography } from 'antd'
import Image from 'next/image'
import { Layout } from '../../components/Layout/Layout'
import ProfileBox from '../../components/ProfileBox/ProfileBox'

const Account = () => {
  return (
    <Layout title="Twoje konto">
      <Row className={styles.basicInfoContainer}>
        <Col span={6}>
          <Image
            className={styles.profilePicture}
            src="/images/blank-profile-picture.png"
            width={150}
            height={150}
          />
        </Col>
        <Col>
          <Typography.Title level={3}>Jan Kowalski</Typography.Title>
          <Typography.Paragraph>Lekarz pediatra, Łódź</Typography.Paragraph>
        </Col>
      </Row>
      <ProfileBox />
    </Layout>
  )
}

export default Account
