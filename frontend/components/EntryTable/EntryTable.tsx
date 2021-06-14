import { Typography, Table, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { FC } from 'react'
import { POSTDETAILS_PATH } from '../../constants/app_paths'
import { Entry } from '../../shared/types/entry'
import { formatDate } from '../../shared/utils/formatDate'
import Link from 'next/link'

interface Props {
  data: Entry[]

  title?: string
  loading?: boolean
}

export const EntryTable: FC<Props> = ({ data, title = '', loading = false }) => {
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
      sorter: (a, b) => new Date(a.entryDate).getTime() - new Date(b.entryDate).getTime(),
      render: (date: string) => {
        return formatDate(date)
      },
    },
    {
      title: '',
      key: 'action',
      render: (entry: Entry) => (
        <Space size="middle">
          <Link href={POSTDETAILS_PATH(entry.entryID)}>Szczegóły</Link>
        </Space>
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
