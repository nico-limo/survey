import React from 'react'
import WalletConnect from '../WalletConnect'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-950 w-full'>
      <div className='px-5 py-6 flex w-full '>
        <a className='text-3xl font-bold' href='#'>
          Survey RatherLabs
        </a>
      </div>
      <div className='px-5 flex w-full items-center justify-end'>
        <WalletConnect />
      </div>
    </nav>
  )
}
export default Navbar
