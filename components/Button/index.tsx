import React from 'react'

type ButtonType = {
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className='bg-gray-600 max-w-[200px] hover:bg-blue-800 transition duration-300  rounded-md py-2 px-4'
    >
      {children}
    </button>
  )
}

export default Button
