export interface WalletInterface {
  account: string
  balance: string
  isConnected: boolean
}

export type QuestionType = {
  text: string
  image: string
  lifetimeSeconds: number
  options: {
    text: string
  }[]
}
export interface QuestionInterface {
  questionData: QuestionType
}

export interface AnswerInterface {
  value: string
  answerId: number | null
}
