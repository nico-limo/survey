import React from 'react'
import store from '@/store'
import { observer } from 'mobx-react'
import Button from '../Button'

const SubmitCard = observer(() => {
  const { userAnswers } = store

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-2 '>
          <h2 className='text-2xl font-bold '>Your Answers:</h2>
        </div>
        <hr />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        {userAnswers.map((answer) => (
          <p key={answer.value} className=' rounded-md p-2 '>
            {answer.value}
          </p>
        ))}
      </div>
      <Button>Submit</Button>
    </>
  )
})

export default SubmitCard
