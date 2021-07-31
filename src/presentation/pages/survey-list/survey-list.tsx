import { Footer, Header } from '@/presentation/components'
import React from 'react'
import Styles from './survey-list-styles.scss'
import SurveyItemEmpty from '@/presentation/pages/survey-list/components/survey-item-empty/survey-item-empty'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul data-testid="survey-list">
          <SurveyItemEmpty />
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
