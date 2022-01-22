import { Typography } from 'antd'
import { FC } from 'react'
import { formatDate } from '../../../../shared/utils/formatDate'
import styles from './description.module.css'

interface IProps {
  author: string
  seconds: number
  description: string
  problems: string[]
  tests: string[]
  treatments: string[]
}

const Description: FC<IProps> = ({ author, seconds, description, problems, tests, treatments }) => {
  problems.forEach(problem => {
    description = description.replaceAll(
      problem,
      `<span onclick="window.location.href='/przegladaj?search=${problem}'"  class="${styles.problem}">${problem}</span>`
    )
  })
  tests.forEach(test => {
    description = description.replaceAll(
      test,
      `<span onclick="window.location.href='/przegladaj?search=${test}'"  class="${styles.test}">${test}</span>`
    )
  })
  treatments.forEach(treatment => {
    description = description.replaceAll(
      treatment,
      `<span onclick="window.location.href='/przegladaj?search=${treatment}'" class="${styles.treatment}">${treatment}</span>`
    )
  })

  return (
    <div>
      <Typography.Text style={{ display: 'block', paddingBottom: 8 }}>
        Data dodania: {formatDate(new Date(seconds * 1000))}
      </Typography.Text>
      <Typography.Text style={{ display: 'block', paddingBottom: 8 }}>
        Autor: {author}
      </Typography.Text>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default Description
