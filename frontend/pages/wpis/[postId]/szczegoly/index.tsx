import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Layout } from '../../../../components/Layout/Layout'
import { API_ENTRY_PATH } from '../../../../constants/api_paths'
import { Entry } from '../../../../shared/types/entry'
import { Card } from 'antd'
const { Meta } = Card

const PostDetails = () => {
  const router = useRouter()
  const postId = router.query.postId
  const [entry, setEntry] = useState<Entry>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!postId) return
    setLoading(true)
    axios
      .get(API_ENTRY_PATH, { params: { postId } })
      .then(response => setEntry(response.data))
      .finally(() => setLoading(false))
  }, [postId])

  return (
    <Layout title="Szczegóły">
      <Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
        <Meta title={entry?.descriptionShort} description={entry?.descriptionLong} />
      </Card>
    </Layout>
  )
}

export default PostDetails
