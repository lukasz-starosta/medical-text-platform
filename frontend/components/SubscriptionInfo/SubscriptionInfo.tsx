import { Card, Button } from 'antd'

const SubscriptionInfo = () => {
  return (
    <div>
      <Card title="Twoja subskrypcja" extra={<Button type="link">Więcej...</Button>}>
        <p>Ważność Twojej subksrypcji upłynie 18 listopada 2021 roku</p>
      </Card>
    </div>
  )
}

export default SubscriptionInfo
