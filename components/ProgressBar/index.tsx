import React from 'react'
import store from '@/store'
import { observer } from 'mobx-react'

const ProgressBar = observer(() => {
  const { questionIndex, questionSize, readyToStart } = store

  if (!readyToStart) return null
  return (
    <div className='bg-gray-500 h-4 w-[40%] rounded-lg'>
      <div
        className='bg-blue-600 h-full rounded-lg'
        style={{
          width: `${(questionIndex / questionSize) * 100}%`,
          transition: 'width 0.3s ease-out',
        }}
      ></div>
    </div>
  )
})

export default ProgressBar
