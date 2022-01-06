import React from 'react'
import { eth } from '../web3/provider'
import { getUserInfo,  createUser } from '../web3/users';
export default class IndexPage extends React.Component {
    // async componentDidMount() {
    //     try {
    //         await ethereum.enable()
    //         const addresses = await eth.getAccounts()

    //         console.log(addresses)
            
    //         const balance = await eth.getBalance(addresses[0])
    //         console.log(balance)

    //     }
    //     catch (err) {
    //         console.log(err);
    //         console.error("User denied access to ETH addresses!")
    //     }
    // }
    logUser = async () => {
        const profile = await getUserInfo(1);
        console.log("profile is", profile);
    }

    createUser = async () => {
        // const username = eth.utils.toAscii('cherry')
        var result = await createUser("cherry");
        console.log("user created: ", result);
    }

    render() {
        return(
            <div>
                <button onClick={this.logUser}>
                    Grab user with Id 1
                </button>
                <button onClick={this.createUser}>
                    Create user 'Cherry'
                </button>
                <h1>Hello World!</h1>
            
            </div>

        )
    }
}