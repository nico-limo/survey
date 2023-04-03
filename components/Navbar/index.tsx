import React from 'react'
import WalletConnect from '../WalletConnect'
import AccountInfo from '../AccountInfo'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-950 w-full'>
      <div className='px-5 py-6 flex w-full '>
        <a className='text-3xl font-bold' href='#'>
          Survey RatherLabs
        </a>
      </div>
      <div className='px-5 flex flex-row items-center w-full justify-end gap-[40px]'>
        <AccountInfo />
        <WalletConnect />
      </div>
    </nav>
  )
}
export default Navbar
