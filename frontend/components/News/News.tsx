import styles from './News.module.css'
import { Card, Button } from 'antd'

const News = () => {
  return (
    <div>
      <Card title="Co nowego" extra={<Button type="link">Całe te</Button>}>
        <p>Kubuś puchatek pobity w stumilowym lesie</p>
        <p>
          Naukowcy wiedzą czemu wilk tak wyje w księżycową noc. (i czemu ryś tak zęby szczerzy rad)
          [ZOBACZ ZDJĘCIA]
        </p>
        <p>
          Sprzedawcy RTV go nienawidzą. Poznał jeden prosty sposób na przedłużenie kabla do
          telewizora.
        </p>
      </Card>
    </div>
  )
}

export default News
