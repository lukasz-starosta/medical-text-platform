import { Card, Button } from 'antd'

const News = () => {
  return (
    <div>
      <Card title="Co nowego" extra={<Button type="link">Więcej...</Button>}>
        <p>Nowa aktualizacja wprowadza możliwość konwersacji z innymi użytkownikami</p>
        <p>Teraz aplikacja dostępna również w języku angielskim</p>
      </Card>
    </div>
  )
}

export default News
