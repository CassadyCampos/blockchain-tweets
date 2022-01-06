import web3 from 'web3'
import contract from 'truffle-contract'

const provider = () => {
    if (typeof web3 !== 'undefined') {
        return web3.givenProvider
    }
    else {
        console.error("MetaMask does not seem to be installed.")
    }
}

export const getInstance = artifact => {
    const contractObj = contract(artifact)
    contractObj.setProvider(provider())
  
    return contractObj.deployed();
  }

export const eth = new web3(provider()).eth;