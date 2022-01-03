const ContractManager = artifacts.require('ContractManager');
const UserController = artifacts.require('UserController');
const UserStorage = artifacts.require('UserStorage');

module.exports = function (deployer) {
    deployer.deploy(UserController)
    .then(() => {
        return UserController.deployed()
    })
    .then(userController => {
        userController.setManagerAddr(ContractManager.address);

        return Promise.all([
            ContractManager.deployed(),
            UserStorage.deployed()
        ])
    })
    .then(([manager, storage]) => {
        return Promise.all([
            manager.setAddress("UserController", UserController.address),
            storage.setControllerAddr(UserController.address)
        ])
    })
}