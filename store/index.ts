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
  readyToStart = false
  constructor() {
    makeAutoObservable(this)
  }
  // The `setWallet` method updates the store's wallet state.
  setWallet = (wallet: WalletInterface) => {
    this.wallet = wallet
  }
  // The `setAnswer` method appends a new answer to the user's list of answers. We send a 999 value if there is not an answer from the user
  setAnswer = (answer: AnswerInterface) => {
    this.userAnswers = [...this.userAnswers, answer]
  }
  // The `resetAnswers` method reset all the values inside the user's list to be empty and the index to 0
  resetAnswers = () => {
    this.userAnswers = []
    this.questionIndex = 0
  }
  // The `nextQuestion` method increments the question index so that the next question can be displayed.
  nextQuestion = () => {
    if (this.questionIndex <= 3) {
      this.questionIndex = this.questionIndex + 1
    }
  }
  // The `setSurveyStatus` method indicate if the user can start or not the Survey Quiz.
  setSurveyStatus = (status: boolean) => {
    this.readyToStart = status
  }
}

const store = new Store()
export default store
