import styles from './browser.module.css'
import { Input } from 'antd'
import { Layout } from '../../components/Layout/Layout'
import { API_SEARCH_PATH } from '../../constants/api_paths'
import axios from 'axios'
import { Space } from 'antd'
import { useState } from 'react'
import { EntryTable } from '../../components/EntryTable/EntryTable'

const { Search } = Input
const Browser = () => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const onSearch = async (value: string) => {
    setLoading(true)
    const response = await axios.get(API_SEARCH_PATH, { params: { query: value } })
    setData(response.data)
    setLoading(false)
  }

  return (
    <Layout title="Przeglądaj">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Search
          className={styles.searchBar}
          placeholder="Wpisz frazę lub słowa kluczowe"
          allowClear
          enterButton
          onSearch={onSearch}
        />
        <EntryTable title="Wyniki wyszukiwania" data={data} loading={loading} />
      </Space>
    </Layout>
  )
}

export default Browser
