import { ethers } from 'ethers'

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
