import { makeAutoObservable } from 'mobx'
import { initialWallet } from '@/utils/constants'
import { WalletInterface } from '@/types'

// MobX
class Store {
  wallet: WalletInterface = initialWallet
  userAnswers: Array<number> = []
  constructor() {
    makeAutoObservable(this)
  }
  setWallet = (wallet: WalletInterface) => {
    this.wallet = wallet
  }
  setAnswer = (answer?: number) => {
    this.userAnswers = answer ? [...this.userAnswers, answer] : [...this.userAnswers, 999]
  }
}

const store = new Store()
export default store
