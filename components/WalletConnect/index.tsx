import Image from 'next/image'
import React, { useState } from 'react'
import metamaskImage from '@/assets/metamask.png'
import { metamaskConnect } from '@/utils/metamask'

const WalletConnect = () => {
  const [account, setAccount] = useState<string>('')
  const connectWallet = async () => {
    const { account, error } = await metamaskConnect()
    if (error) {
      // Handle Error Logic
    } else {
      setAccount(account)
    }
  }
  const disconnectWallet = async () => {
    setAccount('')
  }

  return (
    <button
      onClick={() => (account ? disconnectWallet() : connectWallet())}
      className='bg-gray-800 text-white rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-blue-800 transition duration-300'
    >
      <Image src={metamaskImage} alt='Metamask Logo' width={30} height={30} />
      <span>{account ? account : 'Connect Wallet'}</span>
    </button>
  )
}

export default WalletConnect
