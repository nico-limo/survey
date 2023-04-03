import React, { useMemo, useState } from 'react'
import Question from '../Question'
import Button from '../Button'
import SubmitCard from '../SubmitCard'
import { observer } from 'mobx-react'
import store from '@/store'
import trivia from '@/utils/trivia.json'
import { QuestionType } from '@/types'

const TriviaCard = observer(() => {
  const { wallet, questionIndex, userAnswers, questionSize } = store
  const isComplete = userAnswers.length === questionSize
  const [readyToStart, setReadyToStart] = useState(false)
  const selectedQuestion: QuestionType = useMemo(
    () => trivia.questions[questionIndex],
    [questionIndex],
  )
  const onStartSurvey = () => {
    if (wallet.isConnected) {
      setReadyToStart(true)
    } else {
      alert('Connect Your Wallet')
    }
  }

  const renderCard = () => {
    if (isComplete) return <SubmitCard />
    return <Question questionData={selectedQuestion} />
  }

  return (
    <div
      className={`max-w-md min-h-[300px] flex flex-col ${
        readyToStart ? 'justify-between' : 'justify-center items-center'
      } min-w-[40%] bg-gray-800 shadow-md border border-gray-700 border-opacity-50 rounded-lg p-6`}
    >
      {readyToStart ? renderCard() : <Button onClick={onStartSurvey}>Start Survey</Button>}
    </div>
  )
})

export default TriviaCard
