const ContractManager = artifacts.require('ContractManager');
const TweetController = artifacts.require('TweetController');
const TweetStorage = artifacts.require('TweetStorage');

module.exports = function (deployer) {
    // deploy controller
    deployer.deploy(TweetController)
    // set manager address in controller
    .then(() => {
        return TweetController.deployed()
    })
    // set controller address in contract manager
    .then(tweetController => {
        tweetController.setManagerAddr(ContractManager.address);

        return Promise.all([
            ContractManager.deployed(),
            TweetStorage.deployed()
        ])
    })
    // set controller address in storage contract
    .then(([manager, storage]) => {
        return Promise.all([
            manager.setAddress("TweetController", TweetController.address),
            storage.setControllerAddr(TweetController.address)
        ])
    })
}
