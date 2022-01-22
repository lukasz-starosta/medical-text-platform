import { Card, Button } from 'antd'

const SubscriptionInfo = () => {
  return (
    <div>
      <Card title="Dziel się wiedzą" extra={<Button type="link">Więcej...</Button>}>
        <p>Już teraz dodaj wpis, wspomóż świat medyczny swoim doświadczeniem!</p>
      </Card>
    </div>
  )
}

export default SubscriptionInfo
