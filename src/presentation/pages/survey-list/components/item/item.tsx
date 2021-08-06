import React from 'react'
import { Icon, IconName, Calendar } from '@/presentation/components'
import { LoadSurveyList } from '@/domain/usecases'
import Styles from './item-styles.scss'

type Props = {
  survey: LoadSurveyList.Model
}

const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown

  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon iconName={iconName} className={Styles.iconWrap} />
        <Calendar date={survey.date} className={Styles.calendarWrap} />
        <p data-testid="question">{survey.question}</p>
      </div>
      <footer>Ver Resultado</footer>
    </li>
  )
}

export default SurveyItem
