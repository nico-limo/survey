import React, { PropsWithChildren, useEffect } from 'react'
import { observer } from 'mobx-react'
import Navbar from '../Navbar'
import store from '@/store'
import { accountBalance } from '@/utils/methods'
import { WalletInterface } from '@/types'

const Layout = observer(({ children }: PropsWithChildren) => {
  const { setWallet, resetAnswers } = store

  useEffect(() => {
    /**
     * Asynchronous function to detect changes in the connected account through Metamask extension
     */
    const fetchWeb3 = async () => {
      try {
        if (window.ethereum) {
          // Retrieving the JavaScript object from localStorage
          const localWallet = localStorage.getItem('wallet')
          if (localWallet) {
            setWallet(JSON.parse(localWallet))
          }
          // Listener to detect when the connected account changes
          window.ethereum.on('accountsChanged', async (accounts: string[]) => {
            const account = accounts[0]
            const balance = await accountBalance(account)

            const newWallet: WalletInterface = {
              account,
              balance,
              isConnected: true,
            }
            setWallet(newWallet)
            resetAnswers()
          })
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchWeb3()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col'>
      <Navbar />
      {children}
    </div>
  )
})
export default Layout
