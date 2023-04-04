import { ethers } from 'ethers'
import { QUIZ_CONTRACT } from './constants'
import abi from './erc20.json'
/**
 * Tries to connect to Metamask wallet and returns the connected account.
 * If Metamask is not installed or the user denies the connection, it returns an error.
 * If Metamask is not on Goerli will request to change the network. If the user denies, it returns an error
 *
 * @returns an object containing the connected account or an error boolean.
 * @param none
 */
export const metamaskConnect = async (): Promise<{ account: string; error?: boolean }> => {
  try {
    const { ethereum } = window
    if (ethereum.isMetaMask) {
      const provider = new ethers.BrowserProvider(ethereum)
      const { name } = await provider.getNetwork()

      if (name !== 'goerli') {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }],
        })
      }
      const [account] = await provider.send('eth_requestAccounts', [])
      return { account }
    } else {
      return { account: '', error: true }
    }
  } catch (error) {
    return { account: '', error: true }
  }
}

/**
 * This function retrieves the balance of a given account for the Quiz token.
 * @param account - The Goerli account for which to retrieve the balance.
 * @returns A string representation of the account's balance.
 */

export const accountBalance = async (account: string): Promise<string> => {
  try {
    const { ethereum } = window
    const provider = new ethers.BrowserProvider(ethereum)
    // Instantiate a new instance of the Quiz token contract using the contract address and ABI.
    const contract = new ethers.Contract(QUIZ_CONTRACT, abi, provider)
    // Retrieve the balance of the account using the contract instance and convert it to a string.
    const balance = await contract.balanceOf(account)
    const balanceFormatted = formatBalance(balance)
    return balanceFormatted
  } catch (error) {
    return '0'
  }
}

/**
 * Submits the user's answers for a survey Id to the Quiz token contract
 * @param {number} surveyId - The ID of the survey being answered
 * @param {number[]} answers - An array of numbers representing the user's answers to the survey questions
 */

export const submitAnswers = async (surveyId: number, answers: number[]) => {
  try {
    const { ethereum } = window
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(QUIZ_CONTRACT, abi, signer)
    const tx = await contract.submit(surveyId, answers)
    await tx.wait()
  } catch (error) {
    throw 'Error on Submit Answers'
  }
}

/**
 * Format the user's balance with 18 decimals
 * @param {number} balance - The balance that came from the ERC-20 Smart Contract
 * @returns a formatted balance
 */
function formatBalance(balance: string): string {
  return ethers.formatUnits(balance, 18)
}
