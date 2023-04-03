import React, { useState } from 'react'
import store from '@/store'
import { observer } from 'mobx-react'
import Button from '../Button'
import { accountBalance, submitAnswers } from '@/utils/methods'

const SubmitCard = observer(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { userAnswers, wallet, setWallet, resetAnswers, setSurveyStatus } = store

  const onSubmit = async () => {
    try {
      setIsLoading(true)
      const onlyAnswers: number[] = userAnswers.map((answer) => answer.answerId)
      await submitAnswers(1, onlyAnswers)
      setIsLoading(false)
      const newBalance = await accountBalance(wallet.account)
      setSurveyStatus(false)
      setWallet({ ...wallet, balance: newBalance })
      resetAnswers()
    } catch (error) {
      alert('Error to Send Answers')
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-2 '>
          <h2 className='text-2xl font-bold '>Your Answers:</h2>
        </div>
        <hr />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        {userAnswers.map((answer, i) => (
          <p key={`${answer.value}-${i}`} className=' rounded-md p-2 '>
            {answer.value}
          </p>
        ))}
      </div>
      <Button isLoading={isLoading} onClick={onSubmit}>
        Submit
      </Button>
    </>
  )
})

export default SubmitCard
