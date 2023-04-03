import React from 'react'

type ButtonType = {
  onClick?: () => void
  children: React.ReactNode
  isLoading?: boolean
}

const Button = ({ onClick, children, isLoading }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className='bg-gray-600 max-w-[200px] hover:bg-blue-800 transition duration-300  rounded-md py-2 px-4'
    >
      {isLoading ? 'Loading' : children}
    </button>
  )
}

export default Button
