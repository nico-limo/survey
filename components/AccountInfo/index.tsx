import React from 'react'
import { observer } from 'mobx-react'
import store from '@/store'

const AccountInfo = observer(() => {
  const { account, balance, isConnected } = store.wallet

  if (!isConnected) return <></>
  return (
    <div className='flex flex-col gap-2 animate-fadeIn'>
      <div className='flex flex-row gap-2 items-center'>
        <h3 className='font-bold text-gray-400'>Account:</h3>
        <p>{account}</p>
      </div>
      <div className='flex flex-row gap-2'>
        <h3 className='font-bold text-gray-400'>Quiz Balance:</h3>
        <p>{balance}</p>
      </div>
    </div>
  )
})

export default AccountInfo
