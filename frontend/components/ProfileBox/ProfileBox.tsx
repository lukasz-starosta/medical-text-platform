import { Tabs, Menu, Divider, Row, Col } from 'antd'
import styles from './ProfileBox.module.css'
import { useState, useEffect } from 'react'
import PostsContainer from '../PostShort/PostShort'
import ShortPost from '../../shared/types/shortPost'

const ProfileBox = () => {
  const [option, setOption] = useState(1)
  let postsList: Array<ShortPost> = [
    { title: 'Tytuł1', description: 'Opis1', date: new Date(2021, 4, 1) },
    { title: 'Tytuł2', description: 'Opis2', date: new Date(2021, 4, 2) },
  ]
  console.log(typeof { postsList } + ' type of postList in ProfileBox')

  console.log({ postsList })
  return (
    <div className={styles.container}>
      <Menu className={styles.menu} defaultSelectedKeys={['1']} mode="horizontal" theme="dark">
        <Menu.Item className={styles.menuItem} key="1" onClick={() => setOption(1)}>
          Wpisy
        </Menu.Item>
        <Menu.Item className={styles.menuItem} key="2" onClick={() => setOption(2)}>
          Informacje
        </Menu.Item>
        <Menu.Item className={styles.menuItem} key="3" onClick={() => setOption(3)}>
          Kontakty
        </Menu.Item>
      </Menu>
      <div className={styles.tabsContainer}>
        {option == 1 && <PostsContainer postsList={postsList} />}
        {option == 2 && <p>Informacje</p>}
        {option == 3 && <p>Kontakty</p>}
      </div>
    </div>
  )
}

export default ProfileBox
