import React, { useState } from 'react'
import Question from '../Question'
import Button from '../Button'
import { observer } from 'mobx-react'
import store from '../../store'

const TriviaCard = observer(() => {
  const [readyToStart, setReadyToStart] = useState(false)
  const { wallet } = store
  const onStartSurvey = () => {
    if (wallet.isConnected) {
      setReadyToStart(true)
    } else {
      alert('Connect Your Wallet')
    }
  }

  return (
    <div
      className={`max-w-md min-h-[300px] flex flex-col ${
        readyToStart ? 'justify-between' : 'justify-center items-center'
      } min-w-[40%] bg-gray-800 shadow-md border border-gray-700 border-opacity-50 rounded-lg p-6`}
    >
      {readyToStart ? <Question /> : <Button onClick={onStartSurvey}>Start Survey</Button>}
    </div>
  )
})

export default TriviaCard
