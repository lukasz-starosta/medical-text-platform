import { Row, Col } from 'antd'
import styles from './PostShort.module.css'

const PostShort = (props: { title: string; description: string; date: Date }) => {
  return (
    <div className={styles.container}>
      <Row>
        <Col>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
        </Col>
        <Col>
          <p className={styles.date}>{props.date}</p>
        </Col>
      </Row>
    </div>
  )
}

export default PostShort
