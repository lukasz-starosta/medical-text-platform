import styles from './browser.module.css'
import { Input } from 'antd'
import { Layout } from '../../components/Layout/Layout'
import { API_SEARCH_KEYWORDS_PATH } from '../../constants/api_paths'
import axios from 'axios'
import { Space } from 'antd'
import { useEffect, useState } from 'react'
import { EntryTable } from '../../components/EntryTable/EntryTable'
import { Entry } from '../../shared/types/entry'
import withAuth from '../../components/withAuth/withAuth'
import { useRouter } from 'next/router'

const { Search } = Input
const Browser = () => {
  const [data, setData] = useState<Entry[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const router = useRouter()
  const onSearch = async (value: string) => {
    setLoading(true)
    const response = await axios.get(API_SEARCH_KEYWORDS_PATH, { params: { keyword: value } })
    setData(response?.data)
    setLoading(false)
  }

  useEffect(() => {
    const searchParam: string = router.query.search as string
    if (searchParam) {
      setValue(searchParam)
      onSearch(searchParam)
    }
  }, [])

  return (
    <Layout title="Przeglądaj">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Search
          className={styles.searchBar}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Wpisz frazę lub słowo kluczowe"
          allowClear
          enterButton
          onSearch={onSearch}
        />
        <EntryTable
          title="Wyniki wyszukiwania"
          data={data}
          loading={loading}
          refetch={() => onSearch(value)}
        />
      </Space>
    </Layout>
  )
}

export default withAuth(Browser)
