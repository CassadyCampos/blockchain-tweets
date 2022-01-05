import web3 from 'web3'

const provider = () => {
    if (typeof web3 !== 'undefined') {
        console.log("here1", web3.givenProvider);

        return web3.givenProvider
    }
    else {
        console.error("MetaMask does not seem to be installed.");
    }
}

export const eth = new web3(provider()).eth;