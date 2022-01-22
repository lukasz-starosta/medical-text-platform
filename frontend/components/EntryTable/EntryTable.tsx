import { Typography, Table, Space, Button } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { FC, useState } from 'react'
import { POSTDETAILS_PATH } from '../../constants/app_paths'
import { Entry } from '../../shared/types/entry'
import { formatDate } from '../../shared/utils/formatDate'
import Link from 'next/link'
import axios from 'axios'
import { API_ENTRY_PATH } from '../../constants/api_paths'
import { LOGIN } from '../../constants/storage'

interface Props {
  data: Entry[]

  title?: string
  loading?: boolean
  refetch?: any
}

export const EntryTable: FC<Props> = ({ data, title = '', loading = false, refetch }) => {
  const canDelete = localStorage.getItem(LOGIN) === 'admin'
  const [deleting, setDeleting] = useState(false)

  const deleteEntry = async (entryId: string) => {
    setDeleting(true)
    await axios.delete(API_ENTRY_PATH, { params: { entryId } })
    await refetch()
    setDeleting(false)
  }

  const columns: ColumnsType<Entry> = [
    {
      title: 'Skrócona diagnoza',
      dataIndex: 'descriptionShort',
      key: 'descriptionShort',
      sorter: (a, b) => a.descriptionShort.localeCompare(b.descriptionShort),
    },
    {
      title: 'Data dodania',
      dataIndex: 'entryDate',
      key: 'entryDate',
      sorter: (a, b) => a.entryDate.seconds - b.entryDate.seconds,
      render: (date: Entry['entryDate']) => {
        return formatDate(new Date(date.seconds * 1000))
      },
    },
    {
      title: '',
      key: 'action',
      render: (entry: Entry) => (
        <>
          <Space size="middle">
            <Link href={POSTDETAILS_PATH(entry.id)}>Szczegóły</Link>
          </Space>
          {canDelete && (
            <Space size="middle">
              <Button
                type="text"
                style={{ color: 'tomato' }}
                onClick={() => deleteEntry(entry.id)}
                disabled={deleting}
              >
                Usuń
              </Button>
            </Space>
          )}
        </>
      ),
    },
  ]

  return (
    <Table<Entry>
      title={() => title && <Typography.Title level={4}>{title}</Typography.Title>}
      columns={columns}
      loading={loading}
      dataSource={data}
      locale={{ emptyText: 'Brak danych' }}
    />
  )
}
