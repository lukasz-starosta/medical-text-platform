import styles from './SubscriptionInfo.module.css'
import { Card, Button } from 'antd'

const SubscriptionInfo = () => {
  return (
    <div>
      <Card title="Twoja sypukcja" extra={<Button type="link">Całe te</Button>}>
        <p>Informacje ugulne</p>
      </Card>
    </div>
  )
}

export default SubscriptionInfo
