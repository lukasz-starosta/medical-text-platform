import { Card, Button } from 'antd'

const News = () => {
  return (
    <div>
      <Card title="Co nowego" extra={<Button type="link">Więcej...</Button>}>
        <p>
          Nowa aktualizacja wprowadza możliwość wyszukiwania informacji na temat danych słów
          kluczowych
        </p>
      </Card>
    </div>
  )
}

export default News
