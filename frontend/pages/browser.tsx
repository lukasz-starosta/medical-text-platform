import styles from './browser.module.css'
import layoutStyles from './dashboard.module.css'
import { Layout, Input } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Navbar from '../components/Navbar/Navbar'

const Browser = () => {
  const { Search } = Input
  const onSearch = (value: string) => console.log(value)

  return (
    <div>
      <Layout className={layoutStyles.container}>
        <Sider className={layoutStyles.sidebar}>
          <Navbar />
        </Sider>
        <Content className={layoutStyles.content}>
          <p className={layoutStyles.title}>No poprzeglądaj see</p>
          <Search
            className={styles.searchBar}
            placeholder="Wpisz frazę lub słowa kluczowe"
            allowClear
            enterButton
            onSearch={onSearch}
          />
        </Content>
      </Layout>
    </div>
  )
}

export default Browser
