import { Layout as AntLayout, Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import Navbar from '../Navbar/Navbar'
import { FC } from 'react'
import styles from './layout.module.css'

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ title, children }) => (
  <AntLayout className={styles.container}>
    <Sider className={styles.sidebar}>
      <Navbar />
    </Sider>
    <Content className={styles.content}>
      {title && <Typography.Title level={2}>{title}</Typography.Title>}
      {children}
    </Content>
  </AntLayout>
)
