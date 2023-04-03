import React from 'react'
import Button from '../Button'
import trivia from '@/utils/trivia.json'

const Question = () => {
  return (
    <>
      <div className='flex flex-col'>
        <h2 className='text-2xl font-bold mb-4'>{trivia.questions[0].text}</h2>
        <hr />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='hover:bg-gray-600 rounded-md p-2 cursor-pointer transition duration-300'>
          Pregunta 1
        </p>
        <p className='hover:bg-gray-600 rounded-md p-2 cursor-pointer transition duration-300'>
          Pregunta 2
        </p>
        <p className='hover:bg-gray-600 rounded-md p-2 cursor-pointer transition duration-300'>
          Pregunta 3
        </p>
      </div>
      <Button>Continuar</Button>
    </>
  )
}

export default Question
