import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Layout } from '../../../../components/Layout/Layout'
import { API_ENTRY_PATH } from '../../../../constants/api_paths'
import { Entry } from '../../../../shared/types/entry'
import { Card, Skeleton } from 'antd'
import Description from './Description'
const { Meta } = Card

const PostDetails = () => {
  const router = useRouter()
  const entryId = router.query.entryId
  const [entry, setEntry] = useState<Entry>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!entryId) return
    setLoading(true)
    axios
      .get(API_ENTRY_PATH, { params: { entryId } })
      .then(response => setEntry(response.data))
      .finally(() => setLoading(false))
  }, [entryId])

  return (
    <Layout title="Szczegóły">
      <Card style={{ width: '100%', marginTop: 16 }}>
        <Skeleton loading={loading}>
          {entry && (
            <Meta
              title={entry?.descriptionShort}
              description={
                <Description
                  author={entry.author}
                  seconds={entry.entryDate.seconds}
                  description={entry?.descriptionLong}
                  problems={entry?.problems}
                  tests={entry?.tests}
                  treatments={entry?.treatments}
                />
              }
            />
          )}
        </Skeleton>
      </Card>
    </Layout>
  )
}

export default PostDetails
