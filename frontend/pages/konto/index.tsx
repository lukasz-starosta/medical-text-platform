import styles from './account.module.css'
import { Row, Typography } from 'antd'
import { Layout } from '../../components/Layout/Layout'
import ProfileBox from '../../components/ProfileBox/ProfileBox'
import withAuth from '../../components/withAuth/withAuth'
import { LOGIN } from '../../constants/storage'

const Account = () => {
  return (
    <Layout title="Twoje konto">
      <Row className={styles.basicInfoContainer}>
        <Typography.Title level={4}>Dzień dobry, {localStorage.getItem(LOGIN)}</Typography.Title>
      </Row>
      <ProfileBox />
    </Layout>
  )
}

export default withAuth(Account)
