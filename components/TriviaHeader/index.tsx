import React from 'react'
import trivia from '@/utils/trivia.json'
import SurveyIcon from '../../assets/survey.png'
import Image from 'next/image'
const TriviaHeader = () => {
  return (
    <div className='flex flex-col items-center gap-2 bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 border-opacity-50 w-[40%]  animate-fadeIn'>
      <h2 className='text-gray text-[32px] font-semibold'>{trivia.title}</h2>
      <Image src={SurveyIcon} width={80} height={80} alt='trivia' />
    </div>
  )
}

export default TriviaHeader
