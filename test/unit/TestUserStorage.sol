pragma solidity ^0.8.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/users/UserStorage.sol";

contract TestUserStorage {
    function testCreateFirstUser() public {
        // get deployed contract
        UserStorage _storage = UserStorage(DeployedAddresses.UserStorage());

        uint _expectedId = 1;

        Assert.equal(_storage.createUser("Cassady"), _expectedId, "Should create user with Id 1");
    }
}