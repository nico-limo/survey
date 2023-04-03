import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { AnswerInterface, QuestionInterface } from '@/types'
import { observer } from 'mobx-react'
import store from '@/store'
import Image from 'next/image'

const Question = observer(({ questionData }: QuestionInterface) => {
  const { nextQuestion, setAnswer } = store

  const [timeLeft, setTimeLeft] = useState<number>(questionData.lifetimeSeconds) // Start With the time from the question

  useEffect(() => {
    setTimeLeft(questionData.lifetimeSeconds) // restart the timer
  }, [questionData])

  // Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
    }, 1000)

    if (timeLeft === 0) {
      clearTimeout(timer)
      // We set with null the answer
      setAnswer({ answerId: null, value: 'Not Answer' })

      nextQuestion()
    }
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft])

  const onSelectAnswer = (answer: AnswerInterface) => {
    setAnswer(answer)
    nextQuestion()
  }

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-2 '>
          <h2 className='text-2xl font-bold '>{questionData.text}</h2>
          <Image src={questionData.image} alt='image' width={64} height={64} />
        </div>
        <hr />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        {questionData.options.map((option, index) => (
          <p
            key={option.text}
            onClick={() => onSelectAnswer({ value: option.text, answerId: index })}
            className='hover:bg-gray-600 rounded-md p-2 cursor-pointer transition duration-300'
          >
            {option.text}
          </p>
        ))}
      </div>
      <Button>Continue</Button>
    </>
  )
})

export default Question
