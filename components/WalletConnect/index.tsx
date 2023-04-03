import Image from 'next/image'
import React from 'react'
import metamaskImage from '@/assets/metamask.png'
import { accountBalance, metamaskConnect } from '@/utils/methods'
import { observer } from 'mobx-react'
import store from '@/store'
import { initialWallet } from '@/utils/constants'
import { WalletInterface } from '@/types'

const WalletConnect = observer(() => {
  const connectWallet = async () => {
    const { account, error } = await metamaskConnect()
    if (error) {
      // Handle Error Logic
    } else {
      const balance = await accountBalance(account)

      const newWallet: WalletInterface = {
        account,
        balance,
        isConnected: true,
      }
      store.setWallet(newWallet)
    }
  }
  const disconnectWallet = async () => {
    store.setWallet(initialWallet)
  }

  return (
    <button
      onClick={() => (store.wallet.isConnected ? disconnectWallet() : connectWallet())}
      className='bg-gray-800 text-white rounded-lg px-4 py-2 min-w-[220px] flex items-center space-x-2 hover:bg-blue-800 transition duration-300'
    >
      <Image src={metamaskImage} alt='Metamask Logo' width={30} height={30} />
      <span>{store.wallet.isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}</span>
    </button>
  )
})

export default WalletConnect
