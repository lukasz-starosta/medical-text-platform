import { Menu, Space } from 'antd'
import { SnippetsOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { EntryTable } from '../EntryTable/EntryTable'

const ProfileBox = () => {
  const [option, setOption] = useState(1)

  return (
    <Space size="large" direction="vertical" style={{ width: '100%' }}>
      <Menu defaultSelectedKeys={['1']} mode="horizontal">
        <Menu.Item icon={<SnippetsOutlined />} key="1" onClick={() => setOption(1)}>
          Wpisy
        </Menu.Item>
        <Menu.Item icon={<InfoCircleOutlined />} key="2" onClick={() => setOption(2)}>
          Dane konta
        </Menu.Item>
      </Menu>
      {option == 1 && <EntryTable title="Twoje wpisy" data={[]} />}
      {option == 2 && <p>Dane konta</p>}
    </Space>
  )
}

export default ProfileBox
