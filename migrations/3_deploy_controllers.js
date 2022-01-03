const UserController = artifacts.require('UserController');
const TweetController = artifacts.require('TweetController');

const UserStorage = artifacts.require('UserStorage');
const TweetStorage = artifacts.require('TweetStorage');

module.exports = (deployer) => {
    // deploy controller contracts
    deployer.then(async () => {        
        await deployer.deploy(UserController);
        await deployer.deploy(TweetController);
    })
    // get deployed contract instances
    .then(() => {
        return Promise.all([
            UserStorage.deployed(),
            TweetStorage.deployed()
        ]);
    })
    // set controller addreses on storage contracts
    .then(storageContracts => {
        const[userStorage, tweetStorage] = storageContracts;

        return Promise.all([
            userStorage.setControllerAddr(UserController.address),
            tweetStorage.setControllerAddr(TweetController.address)
        ])
    })
}