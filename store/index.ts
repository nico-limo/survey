import { makeAutoObservable } from 'mobx'
import { initialWallet } from '@/utils/constants'
import { WalletInterface } from '@/types'

// MobX
class Store {
  wallet: WalletInterface = initialWallet

  constructor() {
    makeAutoObservable(this)
  }
  setWallet = (wallet: WalletInterface) => {
    this.wallet = wallet
  }
}

const store = new Store()
export default store
