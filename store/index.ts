import { makeAutoObservable } from 'mobx'
import { initialWallet } from '@/utils/constants'
import { AnswerInterface, WalletInterface } from '@/types'
import trivia from '@/utils/trivia.json'

// MobX
class Store {
  wallet: WalletInterface = initialWallet
  userAnswers: Array<AnswerInterface> = []
  questionIndex = 0
  questionSize = trivia.questions.length
  constructor() {
    makeAutoObservable(this)
  }
  // The `setWallet` method updates the store's wallet state.
  setWallet = (wallet: WalletInterface) => {
    this.wallet = wallet
  }
  // The `setAnswer` method appends a new answer to the user's list of answers.
  setAnswer = (answer: AnswerInterface) => {
    this.userAnswers = [...this.userAnswers, answer]
  }
  // The `nextQuestion` method increments the question index so that the next question can be displayed.
  nextQuestion = () => {
    if (this.questionIndex <= 3) {
      this.questionIndex = this.questionIndex + 1
    }
  }
}

const store = new Store()
export default store
