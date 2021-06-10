import styles from './browser.module.css'
import { Input } from 'antd'
import { Layout } from '../../components/Layout/Layout'

const Browser = () => {
  const { Search } = Input
  const onSearch = (value: string) => console.log(value)

  return (
    <Layout title="Przeglądaj">
      <Search
        className={styles.searchBar}
        placeholder="Wpisz frazę lub słowa kluczowe"
        allowClear
        enterButton
        onSearch={onSearch}
      />
    </Layout>
  )
}

export default Browser
